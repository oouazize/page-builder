"use client";

import { useMemo } from "react";
import { useDroppable } from "@dnd-kit/core";
import {
	SortableContext,
	verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { PageComponent } from "@/types";
import { SortableComponent } from "./SortableComponent";
import { ComponentRenderer } from "./ComponentRenderer";

interface CanvasProps {
	components: PageComponent[];
	selectedComponentId: string | null;
	isPreviewMode: boolean;
	currentBreakpoint: "mobile" | "tablet" | "desktop";
	onSelectComponent: (componentId: string | null) => void;
	onDeleteComponent: (componentId: string) => void;
}

export function Canvas({
	components,
	selectedComponentId,
	isPreviewMode,
	currentBreakpoint,
	onSelectComponent,
	onDeleteComponent,
}: CanvasProps) {
	const { setNodeRef } = useDroppable({
		id: "canvas",
	});

	const canvasWidth = useMemo(() => {
		switch (currentBreakpoint) {
			case "mobile":
				return "max-w-sm";
			case "tablet":
				return "max-w-2xl";
			case "desktop":
			default:
				return "max-w-none";
		}
	}, [currentBreakpoint]);

	const EmptyCanvas = () => (
		<div className="flex items-center justify-center h-96 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50">
			<div className="text-center">
				<svg
					className="mx-auto h-12 w-12 text-gray-400"
					stroke="currentColor"
					fill="none"
					viewBox="0 0 48 48"
				>
					<path
						d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
						strokeWidth={2}
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
				<h3 className="mt-2 text-sm font-medium text-gray-900">
					No components
				</h3>
				<p className="mt-1 text-sm text-gray-500">
					Drag components from the sidebar to build your page
				</p>
			</div>
		</div>
	);

	return (
		<div className="flex-1 bg-gray-100 overflow-auto">
			<div className="min-h-full">
				<div
					className={`mx-auto bg-white shadow-lg min-h-screen ${canvasWidth}`}
				>
					<div
						ref={setNodeRef}
						className="page-builder-canvas relative"
						onClick={() => !isPreviewMode && onSelectComponent(null)}
					>
						{components.length === 0 ? (
							!isPreviewMode && <EmptyCanvas />
						) : (
							<SortableContext
								items={components.map((c) => c.id)}
								strategy={verticalListSortingStrategy}
							>
								{components.map((component) =>
									isPreviewMode ? (
										<ComponentRenderer
											key={component.id}
											component={component}
											isEditable={false}
										/>
									) : (
										<SortableComponent
											key={component.id}
											component={component}
											isSelected={selectedComponentId === component.id}
											onSelect={onSelectComponent}
											onDelete={onDeleteComponent}
										/>
									)
								)}
							</SortableContext>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
