"use client";

import { useEffect, useState } from "react";
import { useParams, notFound } from "next/navigation";
import { Page, PageComponent } from "@/types";
import {
	pageStorage,
	pageComponentStorage,
	componentTemplateStorage,
} from "@/lib/localStorage";
import { ComponentRenderer } from "@/components/editor/ComponentRenderer";

export default function PreviewPage() {
	const params = useParams();
	const slug = params.slug as string;

	const [page, setPage] = useState<Page | null>(null);
	const [components, setComponents] = useState<PageComponent[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (!slug) return;

		// Load page by slug
		const foundPage = pageStorage.getBySlug(slug);

		if (!foundPage || !foundPage.published) {
			setLoading(false);
			return;
		}

		setPage(foundPage);

		// Load page components
		const pageComponents = pageComponentStorage.getByPageId(foundPage.id);

		// Attach template data to components
		const componentsWithTemplates = pageComponents
			.map((component) => {
				const template = componentTemplateStorage.getById(component.templateId);
				return { ...component, template: template || undefined };
			})
			.filter((component) => component.template && component.isVisible);

		setComponents(componentsWithTemplates);
		setLoading(false);
	}, [slug]);

	if (loading) {
		return (
			<div className="flex items-center justify-center min-h-screen">
				<div className="text-center">
					<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
					<p className="mt-4 text-gray-600">Loading page...</p>
				</div>
			</div>
		);
	}

	if (!page) {
		notFound();
	}

	return (
		<>
			{/* SEO Meta Tags */}
			<head>
				<title>{page.metaTitle || page.title}</title>
				{page.metaDescription && (
					<meta name="description" content={page.metaDescription} />
				)}
				{page.favicon && <link rel="icon" href={page.favicon} />}
			</head>

			{/* Custom CSS */}
			{page.customCss && (
				<style dangerouslySetInnerHTML={{ __html: page.customCss }} />
			)}

			{/* Page Content */}
			<div className="min-h-screen bg-white">
				{components.length === 0 ? (
					<div className="flex items-center justify-center min-h-screen">
						<div className="text-center text-gray-500">
							<h1 className="text-2xl font-bold mb-2">{page.title}</h1>
							<p>This page has no visible components.</p>
						</div>
					</div>
				) : (
					components.map((component) => (
						<ComponentRenderer
							key={component.id}
							component={component}
							isEditable={false}
						/>
					))
				)}
			</div>

			{/* Custom JavaScript */}
			{page.customJs && (
				<script dangerouslySetInnerHTML={{ __html: page.customJs }} />
			)}
		</>
	);
}
