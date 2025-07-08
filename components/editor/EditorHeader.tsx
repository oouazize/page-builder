"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Page } from "@/types";
import { pageStorage } from "@/lib/localStorage";
import {
	ArrowLeft,
	Eye,
	EyeOff,
	Save,
	Monitor,
	Tablet,
	Smartphone,
	Share,
	Settings,
	Play,
	ExternalLink,
} from "lucide-react";

interface EditorHeaderProps {
	page: Page;
	isPreviewMode: boolean;
	onTogglePreview: () => void;
	currentBreakpoint: "mobile" | "tablet" | "desktop";
	onBreakpointChange: (breakpoint: "mobile" | "tablet" | "desktop") => void;
}

export function EditorHeader({
	page,
	isPreviewMode,
	onTogglePreview,
	currentBreakpoint,
	onBreakpointChange,
}: EditorHeaderProps) {
	const router = useRouter();
	const [isSaving, setIsSaving] = useState(false);
	const [showPublishDialog, setShowPublishDialog] = useState(false);

	const handleSave = async () => {
		setIsSaving(true);
		// Simulate save delay
		await new Promise((resolve) => setTimeout(resolve, 500));

		const updatedPage = {
			...page,
			updatedAt: new Date().toISOString(),
		};

		pageStorage.save(updatedPage);
		setIsSaving(false);
	};

	const handlePublish = () => {
		const updatedPage = {
			...page,
			published: !page.published,
			publishedAt: !page.published ? new Date().toISOString() : undefined,
			updatedAt: new Date().toISOString(),
		};

		pageStorage.save(updatedPage);
		setShowPublishDialog(false);

		// Optionally refresh the page data or show a success message
		router.refresh();
	};

	const getBreakpointIcon = (breakpoint: string) => {
		switch (breakpoint) {
			case "mobile":
				return <Smartphone className="w-4 h-4" />;
			case "tablet":
				return <Tablet className="w-4 h-4" />;
			case "desktop":
			default:
				return <Monitor className="w-4 h-4" />;
		}
	};

	return (
		<>
			<header className="bg-white border-b border-gray-200 px-4 py-3">
				<div className="flex items-center justify-between">
					{/* Left Section */}
					<div className="flex items-center space-x-4">
						<Link
							href="/"
							className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
						>
							<ArrowLeft className="w-5 h-5" />
							<span className="text-sm font-medium">Back to Dashboard</span>
						</Link>

						<div className="h-6 w-px bg-gray-300" />

						<div>
							<h1 className="text-lg font-semibold text-gray-900">
								{page.title}
							</h1>
							<div className="flex items-center space-x-2 text-sm text-gray-500">
								<span>/{page.slug}</span>
								<span
									className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
										page.published
											? "bg-green-100 text-green-800"
											: "bg-gray-100 text-gray-800"
									}`}
								>
									{page.published ? "Published" : "Draft"}
								</span>
							</div>
						</div>
					</div>

					{/* Center Section - Breakpoint Controls */}
					{!isPreviewMode && (
						<div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
							{(["desktop", "tablet", "mobile"] as const).map((breakpoint) => (
								<button
									key={breakpoint}
									onClick={() => onBreakpointChange(breakpoint)}
									className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
										currentBreakpoint === breakpoint
											? "bg-white text-gray-900 shadow-sm"
											: "text-gray-600 hover:text-gray-900"
									}`}
									title={`${
										breakpoint.charAt(0).toUpperCase() + breakpoint.slice(1)
									} view`}
								>
									{getBreakpointIcon(breakpoint)}
									<span className="hidden sm:inline capitalize">
										{breakpoint}
									</span>
								</button>
							))}
						</div>
					)}

					{/* Right Section */}
					<div className="flex items-center space-x-3">
						{/* Preview Toggle */}
						<button
							onClick={onTogglePreview}
							className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
								isPreviewMode
									? "bg-blue-100 text-blue-900 border border-blue-200"
									: "bg-gray-100 text-gray-700 hover:bg-gray-200"
							}`}
						>
							{isPreviewMode ? (
								<EyeOff className="w-4 h-4" />
							) : (
								<Eye className="w-4 h-4" />
							)}
							<span>{isPreviewMode ? "Exit Preview" : "Preview"}</span>
						</button>

						{/* Save Button */}
						<button
							onClick={handleSave}
							disabled={isSaving}
							className="flex items-center space-x-2 px-3 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-md text-sm font-medium transition-colors disabled:opacity-50"
						>
							<Save className={`w-4 h-4 ${isSaving ? "animate-spin" : ""}`} />
							<span>{isSaving ? "Saving..." : "Save"}</span>
						</button>

						{/* Publish Button */}
						<button
							onClick={() => setShowPublishDialog(true)}
							className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
								page.published
									? "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
									: "bg-green-600 text-white hover:bg-green-700"
							}`}
						>
							<Play className="w-4 h-4" />
							<span>{page.published ? "Unpublish" : "Publish"}</span>
						</button>

						{/* Preview Link (if published) */}
						{page.published && (
							<Link
								href={`/preview/${page.slug}`}
								target="_blank"
								className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
								title="View live page"
							>
								<ExternalLink className="w-4 h-4" />
							</Link>
						)}

						{/* Settings */}
						<button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
							<Settings className="w-5 h-5" />
						</button>
					</div>
				</div>
			</header>

			{/* Publish Dialog */}
			{showPublishDialog && (
				<div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
					<div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
						<div className="mt-3">
							<div className="flex items-center justify-between mb-4">
								<h3 className="text-lg font-medium text-gray-900">
									{page.published ? "Unpublish Page" : "Publish Page"}
								</h3>
								<button
									onClick={() => setShowPublishDialog(false)}
									className="text-gray-400 hover:text-gray-600"
								>
									<span className="sr-only">Close</span>
									<svg
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>
							</div>

							<div className="mb-4">
								<p className="text-sm text-gray-600">
									{page.published
										? "This will make your page unavailable to visitors. You can republish it anytime."
										: "This will make your page live and accessible to visitors."}
								</p>
								{!page.published && (
									<div className="mt-3 p-3 bg-blue-50 rounded-md">
										<p className="text-sm text-blue-700">
											<strong>Public URL:</strong> {window.location.origin}
											/preview/{page.slug}
										</p>
									</div>
								)}
							</div>

							<div className="flex justify-end space-x-3">
								<button
									onClick={() => setShowPublishDialog(false)}
									className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200"
								>
									Cancel
								</button>
								<button
									onClick={handlePublish}
									className={`px-4 py-2 text-sm font-medium text-white rounded-md ${
										page.published
											? "bg-yellow-600 hover:bg-yellow-700"
											: "bg-green-600 hover:bg-green-700"
									}`}
								>
									{page.published ? "Unpublish" : "Publish"}
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
