"use client";

import { useState } from "react";
import { PageComponent, SchemaField } from "@/types";
import { Settings, Type, Image, Link, Palette } from "lucide-react";

interface PropertiesPanelProps {
	component: PageComponent | null;
	onUpdate: (data: Record<string, any>) => void;
}

export function PropertiesPanel({ component, onUpdate }: PropertiesPanelProps) {
	const [activeTab, setActiveTab] = useState<"content" | "style">("content");

	if (!component || !component.template) {
		return (
			<div className="w-80 bg-white border-l border-gray-200 flex items-center justify-center">
				<div className="text-center text-gray-500">
					<Settings className="w-8 h-8 mx-auto mb-2 text-gray-400" />
					<p className="text-sm">Select a component to edit its properties</p>
				</div>
			</div>
		);
	}

	const handleFieldChange = (fieldName: string, value: any) => {
		onUpdate({ [fieldName]: value });
	};

	// Filter fields based on component type and active tab
	const getEditableFields = () => {
		if (!component?.template) return [];

		// Filter fields by active tab
		const fieldsForTab = component.template.schema.fields.filter(
			(field) => field.tab === activeTab || !field.tab // Include fields without tab for backward compatibility
		);

		// For required program hero in content tab, show all content fields
		if (component.templateId === "required-program-hero" && activeTab === "content") {
			return fieldsForTab;
		}

		// For required program hero in style tab, show style fields
		if (component.templateId === "required-program-hero" && activeTab === "style") {
			return fieldsForTab;
		}

		// For all other components, show fields for the active tab
		return fieldsForTab;
	};

	const renderField = (field: SchemaField) => {
		const value = component.customData[field.name] || "";

		switch (field.type) {
			case "text":
				return (
					<input
						type="text"
						value={value}
						onChange={(e) => handleFieldChange(field.name, e.target.value)}
						placeholder={field.placeholder}
						className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
					/>
				);

			case "textarea":
				return (
					<textarea
						value={value}
						onChange={(e) => handleFieldChange(field.name, e.target.value)}
						placeholder={field.placeholder}
						rows={3}
						className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 resize-none"
					/>
				);

			case "url":
				return (
					<input
						type="url"
						value={value}
						onChange={(e) => handleFieldChange(field.name, e.target.value)}
						placeholder={field.placeholder || "https://..."}
						className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
					/>
				);

			case "image":
				return (
					<div className="space-y-2">
						<input
							type="url"
							value={value}
							onChange={(e) => handleFieldChange(field.name, e.target.value)}
							placeholder="Image URL"
							className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
						/>
						{value && (
							<img
								src={value}
								alt="Preview"
								className="w-full h-20 object-cover rounded border"
								onError={(e) => {
									const target = e.target as HTMLImageElement;
									target.style.display = "none";
								}}
							/>
						)}
					</div>
				);

			case "color":
				return (
					<div className="flex space-x-2">
						<input
							type="color"
							value={value}
							onChange={(e) => handleFieldChange(field.name, e.target.value)}
							className="w-12 h-10 border border-gray-300 rounded cursor-pointer"
						/>
						<input
							type="text"
							value={value}
							onChange={(e) => handleFieldChange(field.name, e.target.value)}
							placeholder="#000000"
							className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
						/>
					</div>
				);

			case "select":
				return (
					<select
						value={value}
						onChange={(e) => handleFieldChange(field.name, e.target.value)}
						className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
					>
						<option value="">Select an option</option>
						{field.options?.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</select>
				);

			case "checkbox":
				return (
					<div className="flex items-center">
						<input
							type="checkbox"
							checked={Boolean(value)}
							onChange={(e) => handleFieldChange(field.name, e.target.checked)}
							className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
						/>
						<span className="ml-2 text-sm text-gray-700">{field.label}</span>
					</div>
				);

			case "number":
				return (
					<input
						type="number"
						value={value}
						onChange={(e) =>
							handleFieldChange(field.name, Number(e.target.value))
						}
						placeholder={field.placeholder}
						min={field.validation?.min}
						max={field.validation?.max}
						className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
					/>
				);

			default:
				return null;
		}
	};

	const getFieldIcon = (type: string) => {
		switch (type) {
			case "text":
			case "textarea":
				return <Type className="w-4 h-4" />;
			case "image":
				return <Image className="w-4 h-4" />;
			case "url":
				return <Link className="w-4 h-4" />;
			case "color":
				return <Palette className="w-4 h-4" />;
			default:
				return <Settings className="w-4 h-4" />;
		}
	};

	return (
		<div className="w-80 bg-white border-l border-gray-200 flex flex-col">
			{/* Header */}
			<div className="p-4 border-b border-gray-200">
				<h3 className="text-lg font-semibold text-gray-900">Properties</h3>
				<p className="text-sm text-gray-600 mt-1">{component.template.name}</p>

				{/* Tabs */}
				<div className="flex mt-3 bg-gray-100 rounded-lg p-1">
					<button
						onClick={() => setActiveTab("content")}
						className={`flex-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
							activeTab === "content"
								? "bg-white text-gray-900 shadow-sm"
								: "text-gray-600 hover:text-gray-900"
						}`}
					>
						Content
					</button>
					<button
						onClick={() => setActiveTab("style")}
						className={`flex-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
							activeTab === "style"
								? "bg-white text-gray-900 shadow-sm"
								: "text-gray-600 hover:text-gray-900"
						}`}
					>
						Style
					</button>
				</div>
			</div>

			{/* Content */}
			<div className="flex-1 overflow-y-auto sidebar-scroll">
				{activeTab === "content" ? (
				<div className="p-4 space-y-4">
					{getEditableFields().map((field) => (
						<div key={field.name} className="space-y-2">
							<label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
								{getFieldIcon(field.type)}
								<span>{field.label}</span>
								{field.required && <span className="text-red-500">*</span>}
							</label>
							{renderField(field)}
						</div>
					))}
					{getEditableFields().length === 0 && (
						<div className="text-center text-gray-500 py-8">
							<Settings className="w-8 h-8 mx-auto mb-2 text-gray-400" />
							<p className="text-sm">No content fields available</p>
						</div>
					)}
				</div>
			) : (
				<div className="p-4 space-y-4">
					{getEditableFields().map((field) => (
						<div key={field.name} className="space-y-2">
							<label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
								{getFieldIcon(field.type)}
								<span>{field.label}</span>
								{field.required && <span className="text-red-500">*</span>}
							</label>
							{renderField(field)}
						</div>
					))}
					{getEditableFields().length === 0 && (
						<div className="text-center text-gray-500 py-8">
							<Palette className="w-8 h-8 mx-auto mb-2 text-gray-400" />
							<p className="text-sm">No style fields available</p>
							<p className="text-xs text-gray-400 mt-1">
								Add style fields to the component schema
							</p>
						</div>
					)}
				</div>
			)}
			</div>

			{/* Footer */}
			<div className="p-4 border-t border-gray-200 bg-gray-50">
				<div className="text-xs text-gray-500">
					<p className="font-medium">
						{component.template.category} • {component.template.variant}
					</p>
					<p className="mt-1">
						Last updated: {new Date(component.updatedAt).toLocaleDateString()}
					</p>
				</div>
			</div>
		</div>
	);
}
