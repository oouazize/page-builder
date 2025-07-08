"use client";

import { useMemo } from "react";
import { PageComponent } from "@/types";

interface ComponentRendererProps {
	component: PageComponent;
	isEditable?: boolean;
	onEdit?: (component: PageComponent) => void;
}

export function ComponentRenderer({
	component,
	isEditable = false,
	onEdit,
}: ComponentRendererProps) {
	const processedHTML = useMemo(() => {
		if (!component.template) return "";

		let html = component.template.htmlContent;

		// Replace template variables with actual data
		const entries = Object.keys(component.customData).map((key) => [
			key,
			component.customData[key],
		]);
		entries.forEach(([key, value]) => {
			const regex = new RegExp(`{{${key}}}`, "g");
			html = html.replace(regex, String(value));
		});

		return html;
	}, [component.template?.htmlContent, component.customData]);

	// Apply custom styles if any
	const customStyles = useMemo(() => {
		const styles: React.CSSProperties = {};

		// Add custom styles from component.styles if any
		if (component.styles) {
			Object.assign(styles, component.styles);
		}

		return styles;
	}, [component.styles]);

	// Custom CSS that needs to be injected as a style tag
	const customCSS = useMemo(() => {
		return component.template?.cssStyles || "";
	}, [component.template?.cssStyles]);

	if (!component.template || !processedHTML) {
		return (
			<div className="p-8 text-center text-gray-500 border-2 border-dashed border-gray-300 rounded-lg">
				<p>Component template not found</p>
			</div>
		);
	}

	return (
		<div
			className={`relative ${
				isEditable ? "component-hover cursor-pointer" : ""
			}`}
			onClick={(e) => {
				if (isEditable && onEdit) {
					e.stopPropagation();
					onEdit(component);
				}
			}}
			style={customStyles}
		>
			{/* Inject custom CSS if needed */}
			{customCSS && <style dangerouslySetInnerHTML={{ __html: customCSS }} />}

			<div
				dangerouslySetInnerHTML={{ __html: processedHTML }}
				className="w-full"
			/>

			{/* Development mode indicator */}
			{process.env.NODE_ENV === "development" && isEditable && (
				<div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
					{component.template.name}
				</div>
			)}
		</div>
	);
}
