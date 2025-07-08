"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
	DndContext,
	DragEndEvent,
	DragOverlay,
	DragStartEvent,
} from "@dnd-kit/core";
import {
	SortableContext,
	verticalListSortingStrategy,
	arrayMove,
} from "@dnd-kit/sortable";
import { Page, PageComponent, ComponentTemplate, EditorState } from "@/types";
import {
	pageStorage,
	pageComponentStorage,
	componentTemplateStorage,
	generateId,
} from "@/lib/localStorage";
import { ComponentLibrary } from "@/components/editor/ComponentLibrary";
import { Canvas } from "@/components/editor/Canvas";
import { PropertiesPanel } from "@/components/editor/PropertiesPanel";
import { EditorHeader } from "@/components/editor/EditorHeader";

export default function EditorPage() {
	const params = useParams();
	const router = useRouter();
	const pageId = params.pageId as string;

	const [page, setPage] = useState<Page | null>(null);
	const [components, setComponents] = useState<PageComponent[]>([]);
	const [editorState, setEditorState] = useState<EditorState>({
		selectedComponentId: null,
		draggedComponent: null,
		isPreviewMode: false,
		currentBreakpoint: "desktop",
	});

	useEffect(() => {
		if (!pageId) return;

		// Load page data
		const loadedPage = pageStorage.getById(pageId);
		if (!loadedPage) {
			router.push("/");
			return;
		}

		setPage(loadedPage);

		// Load page components
		const pageComponents = pageComponentStorage.getByPageId(pageId);

		// Attach template data to components
		const componentsWithTemplates = pageComponents.map((component) => {
			const template = componentTemplateStorage.getById(component.templateId);
			return { ...component, template: template || undefined };
		});

		setComponents(componentsWithTemplates);
	}, [pageId, router]);

	const handleDragStart = (event: DragStartEvent) => {
		const { active } = event;
		const draggedId = active.id as string;

		// Check if it's a template from the library or an existing component
		const template = componentTemplateStorage.getById(draggedId);
		if (template) {
			setEditorState((prev) => ({
				...prev,
				draggedComponent: {
					id: draggedId,
					type: "template",
					data: template,
				},
			}));
		} else {
			const existingComponent = components.find((c) => c.id === draggedId);
			if (existingComponent) {
				setEditorState((prev) => ({
					...prev,
					draggedComponent: {
						id: draggedId,
						type: "existing",
						data: existingComponent,
					},
				}));
			}
		}
	};

	const handleDragEnd = (event: DragEndEvent) => {
		const { active, over } = event;

		if (!over) {
			setEditorState((prev) => ({ ...prev, draggedComponent: null }));
			return;
		}

		const activeId = active.id as string;
		const overId = over.id as string;

		// Handle dropping template into canvas
		if (
			overId === "canvas" &&
			editorState.draggedComponent?.type === "template"
		) {
			const template = editorState.draggedComponent.data as ComponentTemplate;
			const newComponent: PageComponent = {
				id: generateId(),
				pageId,
				templateId: template.id,
				position: components.length,
				customData: { ...template.defaultData },
				isVisible: true,
				createdAt: new Date().toISOString(),
				updatedAt: new Date().toISOString(),
				template,
			};

			pageComponentStorage.save(newComponent);
			setComponents((prev) => [...prev, newComponent]);
		}

		// Handle reordering existing components
		else if (editorState.draggedComponent?.type === "existing") {
			const oldIndex = components.findIndex((c) => c.id === activeId);
			const newIndex = components.findIndex((c) => c.id === overId);

			if (oldIndex !== -1 && newIndex !== -1 && oldIndex !== newIndex) {
				const reorderedComponents = arrayMove(components, oldIndex, newIndex);

				// Update positions
				const componentIds = reorderedComponents.map((c) => c.id);
				pageComponentStorage.updatePositions(pageId, componentIds);

				setComponents(reorderedComponents);
			}
		}

		setEditorState((prev) => ({ ...prev, draggedComponent: null }));
	};

	const handleSelectComponent = (componentId: string | null) => {
		setEditorState((prev) => ({ ...prev, selectedComponentId: componentId }));
	};

	const handleUpdateComponent = (
		componentId: string,
		newData: Record<string, any>
	) => {
		const component = components.find((c) => c.id === componentId);
		if (!component) return;

		const updatedComponent = {
			...component,
			customData: { ...component.customData, ...newData },
			updatedAt: new Date().toISOString(),
		};

		pageComponentStorage.save(updatedComponent);
		setComponents((prev) =>
			prev.map((c) => (c.id === componentId ? updatedComponent : c))
		);
	};

	const handleDeleteComponent = (componentId: string) => {
		pageComponentStorage.delete(componentId);
		setComponents((prev) => prev.filter((c) => c.id !== componentId));
		setEditorState((prev) => ({
			...prev,
			selectedComponentId:
				prev.selectedComponentId === componentId
					? null
					: prev.selectedComponentId,
		}));
	};

	const handleTogglePreview = () => {
		setEditorState((prev) => ({
			...prev,
			isPreviewMode: !prev.isPreviewMode,
			selectedComponentId: null,
		}));
	};

	const handleAddComponent = (template: ComponentTemplate) => {
		const newComponent: PageComponent = {
			id: generateId(),
			pageId,
			templateId: template.id,
			position: components.length,
			customData: { ...template.defaultData },
			isVisible: true,
			createdAt: new Date().toISOString(),
			updatedAt: new Date().toISOString(),
			template,
		};

		pageComponentStorage.save(newComponent);
		setComponents((prev) => [...prev, newComponent]);

		// Automatically select the newly added component
		setEditorState((prev) => ({
			...prev,
			selectedComponentId: newComponent.id,
		}));
	};

	const selectedComponent =
		components.find((c) => c.id === editorState.selectedComponentId) || null;

	if (!page) {
		return (
			<div className="flex items-center justify-center min-h-screen">
				<div className="text-center">
					<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
					<p className="mt-4 text-gray-600">Loading page...</p>
				</div>
			</div>
		);
	}

	return (
		<div className="h-screen flex flex-col bg-gray-50">
			<EditorHeader
				page={page}
				isPreviewMode={editorState.isPreviewMode}
				onTogglePreview={handleTogglePreview}
				currentBreakpoint={editorState.currentBreakpoint}
				onBreakpointChange={(breakpoint) =>
					setEditorState((prev) => ({ ...prev, currentBreakpoint: breakpoint }))
				}
			/>
			<div className="flex-1 flex overflow-hidden">
				<DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
					{!editorState.isPreviewMode && (
						<ComponentLibrary onAddComponent={handleAddComponent} />
					)}

					<main className="flex-1 flex">
						<SortableContext
							items={components.map((c) => c.id)}
							strategy={verticalListSortingStrategy}
						>
							<Canvas
								components={components}
								selectedComponentId={editorState.selectedComponentId}
								isPreviewMode={editorState.isPreviewMode}
								currentBreakpoint={editorState.currentBreakpoint}
								onSelectComponent={handleSelectComponent}
								onDeleteComponent={handleDeleteComponent}
							/>
						</SortableContext>
					</main>

					{!editorState.isPreviewMode && (
						<PropertiesPanel
							component={selectedComponent}
							onUpdate={(data) =>
								selectedComponent &&
								handleUpdateComponent(selectedComponent.id, data)
							}
						/>
					)}

					<DragOverlay>
						{editorState.draggedComponent && (
							<div className="bg-white border-2 border-dashed border-blue-400 rounded-lg p-4 opacity-80">
								<p className="text-sm font-medium text-gray-900">
									{editorState.draggedComponent.type === "template"
										? (editorState.draggedComponent.data as ComponentTemplate)
												.name
										: "Moving component"}
								</p>
							</div>
						)}
					</DragOverlay>
				</DndContext>
			</div>
		</div>
	);
}
