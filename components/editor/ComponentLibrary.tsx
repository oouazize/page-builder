"use client";

import { useState, useEffect } from "react";
import { useDraggable } from "@dnd-kit/core";
import { ComponentTemplate, COMPONENT_CATEGORIES } from "@/types";
import { componentTemplateStorage } from "@/lib/localStorage";
import { GripVertical, Search, ArrowLeft, Folder, Plus } from "lucide-react";

interface DraggableComponentProps {
	template: ComponentTemplate;
	onAdd?: (template: ComponentTemplate) => void;
}

function DraggableComponent({ template, onAdd }: DraggableComponentProps) {
	const { attributes, listeners, setNodeRef, transform, isDragging } =
		useDraggable({
			id: template.id,
		});

	const style = transform
		? {
				transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
				opacity: isDragging ? 0.5 : 1,
		  }
		: undefined;

	const handleClick = (e: React.MouseEvent) => {
		// Only handle click if we're not currently dragging
		if (!isDragging && onAdd) {
			e.preventDefault();
			e.stopPropagation();
			onAdd(template);
		}
	};

	const handleAddClick = (e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
		if (onAdd) {
			onAdd(template);
		}
	};

	return (
		<div
			ref={setNodeRef}
			style={style}
			className="group relative bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow overflow-hidden"
		>
			{/* Drag handle area */}
			<div
				{...listeners}
				{...attributes}
				className="absolute left-0 top-0 bottom-0 w-8 flex items-center justify-center cursor-grab hover:bg-gray-50 transition-colors z-10"
			>
				<GripVertical className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
			</div>

			{/* Clickable content area */}
			<div className="p-3 pl-10 cursor-pointer" onClick={handleClick}>
				<div className="flex items-start space-x-3">
					<div className="flex-1 min-w-0">
						<p className="text-sm font-medium text-gray-900 truncate">
							{template.name}
						</p>
						<p className="text-xs text-gray-500 mt-1 line-clamp-2">
							{template.description}
						</p>
						<div className="flex items-center justify-between mt-2">
							<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
								{template.category}
							</span>
							<span className="text-xs text-gray-400">{template.variant}</span>
						</div>
					</div>
				</div>
			</div>

			{/* Add button that appears on hover */}
			<button
				onClick={handleAddClick}
				className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 bg-blue-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-blue-700 z-10"
				title="Click to add to page"
			>
				<Plus className="w-3 h-3" />
			</button>
		</div>
	);
}

interface ComponentLibraryProps {
	onAddComponent?: (template: ComponentTemplate) => void;
}

export function ComponentLibrary({ onAddComponent }: ComponentLibraryProps) {
	const [templates, setTemplates] = useState<ComponentTemplate[]>([]);
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
	const [searchTerm, setSearchTerm] = useState("");
	const [view, setView] = useState<"categories" | "components">("categories");

	useEffect(() => {
		const allTemplates = componentTemplateStorage.getAll();
		setTemplates(allTemplates);
	}, []);

	const filteredTemplates = templates.filter((template) => {
		// Hide hero components from the component library
		const isNotHero = template.category !== "hero";
		
		const matchesCategory =
			!selectedCategory || template.category === selectedCategory;
		const matchesSearch =
			searchTerm === "" ||
			template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			template.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
			template.category.toLowerCase().includes(searchTerm.toLowerCase());

		return isNotHero && matchesCategory && matchesSearch;
	});

	const categoryCounts = COMPONENT_CATEGORIES.reduce((acc, category) => {
		// Exclude hero components from category counts
		if (category === "hero") {
			acc[category] = 0;
		} else {
			acc[category] = templates.filter((t) => t.category === category).length;
		}
		return acc;
	}, {} as Record<string, number>);

	const handleCategoryClick = (category: string) => {
		setSelectedCategory(category);
		setView("components");
		setSearchTerm("");
	};

	const handleBackToCategories = () => {
		setSelectedCategory(null);
		setView("categories");
		setSearchTerm("");
	};

	const getCategoryDisplayName = (category: string) => {
		if (category === "cta") return "Call to Action";
		if (category === "faq") return "FAQ";
		return category
			.split("-")
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(" ");
	};

	return (
		<div className="w-80 bg-white border-r border-gray-200 flex flex-col">
			{/* Header */}
			<div className="p-4 border-b border-gray-200">
				<div className="flex items-center space-x-2">
					{view === "components" && (
						<button
							onClick={handleBackToCategories}
							className="p-1 hover:bg-gray-100 rounded transition-colors"
							title="Back to categories"
						>
							<ArrowLeft className="w-4 h-4 text-gray-600" />
						</button>
					)}
					<div className="flex-1">
						<h2 className="text-lg font-semibold text-gray-900">
							{view === "categories"
								? "Component Library"
								: getCategoryDisplayName(selectedCategory!)}
						</h2>
						<p className="text-sm text-gray-600 mt-1">
							{view === "categories"
								? "Choose a category to browse components"
								: "Drag components or click the + button to add them"}
						</p>
					</div>
				</div>

				{/* Search - only show in components view */}
				{view === "components" && (
					<div className="relative mt-3">
						<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
						<input
							type="text"
							placeholder="Search components..."
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
						/>
					</div>
				)}
			</div>

			{/* Content */}
			<div className="flex-1 overflow-y-auto sidebar-scroll">
				{view === "categories" ? (
					/* Categories List */
					<div className="p-4 space-y-2">
						{COMPONENT_CATEGORIES.map((category) => {
							const count = categoryCounts[category] || 0;
							if (count === 0) return null;

							return (
								<button
									key={category}
									onClick={() => handleCategoryClick(category)}
									className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors group"
								>
									<div className="flex items-center space-x-3">
										<div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
											<Folder className="w-5 h-5 text-blue-600" />
										</div>
										<div className="flex-1">
											<h3 className="text-sm font-medium text-gray-900">
												{getCategoryDisplayName(category)}
											</h3>
											<p className="text-xs text-gray-500 mt-1">
												{count} component{count !== 1 ? "s" : ""} available
											</p>
										</div>
										<div className="text-xs text-gray-400">{count}</div>
									</div>
								</button>
							);
						})}
					</div>
				) : (
					/* Components List */
					<div className="p-4 space-y-3">
						{filteredTemplates.length === 0 ? (
							<div className="text-center py-8">
								<div className="text-gray-400 mb-2">
									<svg
										className="w-8 h-8 mx-auto"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-2M4 13h2m0 0V9a2 2 0 012-2h2m-4 4v4m0-4h.01"
										/>
									</svg>
								</div>
								<p className="text-sm text-gray-500">No components found</p>
								{searchTerm && (
									<p className="text-xs text-gray-400 mt-1">
										Try adjusting your search term
									</p>
								)}
							</div>
						) : (
							filteredTemplates.map((template) => (
								<DraggableComponent
									key={template.id}
									template={template}
									onAdd={onAddComponent}
								/>
							))
						)}
					</div>
				)}
			</div>

			{/* Footer */}
			<div className="p-4 border-t border-gray-200 bg-gray-50">
				<p className="text-xs text-gray-500 text-center">
					{view === "categories"
						? `${templates.length} components across ${
								COMPONENT_CATEGORIES.filter((cat) => categoryCounts[cat] > 0)
									.length
						  } categories`
						: "Drag any component to the canvas or click + to add it to your page"}
				</p>
			</div>
		</div>
	);
}
