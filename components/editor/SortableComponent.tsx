"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { PageComponent } from "@/types";
import { ComponentRenderer } from "./ComponentRenderer";
import { GripVertical, Trash2, Eye, EyeOff } from "lucide-react";

interface SortableComponentProps {
	component: PageComponent;
	isSelected: boolean;
	onSelect: (componentId: string) => void;
	onDelete: (componentId: string) => void;
}

export function SortableComponent({
	component,
	isSelected,
	onSelect,
	onDelete,
}: SortableComponentProps) {
	const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		transition,
		isDragging,
	} = useSortable({ id: component.id });

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
		opacity: isDragging ? 0.5 : 1,
	};

	const handleSelect = (e: React.MouseEvent) => {
		e.stopPropagation();
		onSelect(component.id);
	};

	const handleDelete = (e: React.MouseEvent) => {
		e.stopPropagation();
		if (confirm("Are you sure you want to delete this component?")) {
			onDelete(component.id);
		}
	};

	return (
		<div
			ref={setNodeRef}
			style={style}
			className={`relative group ${isSelected ? "component-selected" : ""}`}
		>
			{/* Component Toolbar */}
			{isSelected && (
				<div className="absolute -top-10 left-0 z-10 flex items-center space-x-1 bg-blue-600 text-white px-2 py-1 rounded text-xs">
					<span className="font-medium">{component.template?.name}</span>
					<div className="flex items-center space-x-1 ml-2">
						<button
							{...attributes}
							{...listeners}
							className="p-1 hover:bg-blue-500 rounded cursor-grab active:cursor-grabbing"
							title="Drag to reorder"
						>
							<GripVertical className="w-3 h-3" />
						</button>
						<button
							onClick={handleDelete}
							className="p-1 hover:bg-red-500 rounded"
							title="Delete component"
						>
							<Trash2 className="w-3 h-3" />
						</button>
						{component.isVisible ? (
							<button
								className="p-1 hover:bg-blue-500 rounded"
								title="Hide component"
							>
								<Eye className="w-3 h-3" />
							</button>
						) : (
							<button
								className="p-1 hover:bg-blue-500 rounded"
								title="Show component"
							>
								<EyeOff className="w-3 h-3" />
							</button>
						)}
					</div>
				</div>
			)}

			{/* Hover Indicator */}
			<div className="absolute inset-0 bg-blue-500 bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-0" />

			{/* Selection Border */}
			{isSelected && (
				<div className="absolute inset-0 border-2 border-blue-600 pointer-events-none z-0" />
			)}

			{/* Component Content */}
			<div onClick={handleSelect} className="relative z-0">
				<ComponentRenderer
					component={component}
					isEditable={true}
					onEdit={() => onSelect(component.id)}
				/>
			</div>

			{/* Component Label on Hover */}
			<div className="absolute bottom-2 left-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
				{component.template?.name} - {component.template?.variant}
			</div>
		</div>
	);
}
