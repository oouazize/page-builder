"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, Edit3, Eye, Trash2, FileText } from "lucide-react";
import { Page, User } from "@/types";
import {
	pageStorage,
	userStorage,
	generateId,
	generateSlug,
	initializeDefaultData,
} from "@/lib/localStorage";
import { componentTemplateStorage } from "@/lib/localStorage";
import { initializeSeedData } from "@/lib/seedData";
import { pageComponentStorage } from "@/lib/localStorage";
import { PageComponent } from "@/types";

export default function Dashboard() {
	const [pages, setPages] = useState<Page[]>([]);
	const [user, setUser] = useState<User | null>(null);
	const [showCreateDialog, setShowCreateDialog] = useState(false);
	const [newPageTitle, setNewPageTitle] = useState("");

	useEffect(() => {
		// Initialize default data on first load
		initializeDefaultData();

		// Initialize seed data if no components exist
		const existingComponents = componentTemplateStorage.getAll();
		if (existingComponents.length === 0) {
			const seedData = initializeSeedData();
			componentTemplateStorage.saveMany(seedData);
		}

		// Load user and pages
		const currentUser = userStorage.getCurrentUser();
		setUser(currentUser);

		if (currentUser) {
			const userPages = pageStorage.getByUserId(currentUser.id);
			setPages(userPages);
		}
	}, []);

	const handleCreatePage = () => {
		if (!newPageTitle.trim() || !user) return;

		const newPage: Page = {
			id: generateId(),
			title: newPageTitle,
			slug: generateSlug(newPageTitle),
			userId: user.id,
			published: false,
			components: [],
			createdAt: new Date().toISOString(),
			updatedAt: new Date().toISOString(),
		};

		pageStorage.save(newPage);

		// Add required default components
		const heroTemplate = componentTemplateStorage.getById(
			"required-program-hero"
		);

		if (heroTemplate) {
			const heroComponent: PageComponent = {
				id: generateId(),
				pageId: newPage.id,
				templateId: heroTemplate.id,
				position: 0,
				customData: {
					...heroTemplate.defaultData,
					programName: newPageTitle, // Use the page title as program name
				},
				isVisible: true,
				createdAt: new Date().toISOString(),
				updatedAt: new Date().toISOString(),
			};
			pageComponentStorage.save(heroComponent);
		}

		setPages([...pages, newPage]);
		setNewPageTitle("");
		setShowCreateDialog(false);

		// Navigate directly to the editor
		window.location.href = `/editor/${newPage.id}`;
	};

	const handleDeletePage = (pageId: string) => {
		if (!confirm("Are you sure you want to delete this page?")) return;

		pageStorage.delete(pageId);
		setPages(pages.filter((page) => page.id !== pageId));
	};

	const handleTogglePublish = (page: Page) => {
		const updatedPage = {
			...page,
			published: !page.published,
			publishedAt: !page.published ? new Date().toISOString() : undefined,
			updatedAt: new Date().toISOString(),
		};

		pageStorage.save(updatedPage);
		setPages(pages.map((p) => (p.id === page.id ? updatedPage : p)));
	};

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Header */}
			<header className="bg-white shadow-sm border-b">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center py-6">
						<div>
							<h1 className="text-2xl font-bold text-gray-900">
								Page Builder CRM
							</h1>
							<p className="text-gray-600">
								Create and manage your landing pages
							</p>
						</div>
						<div className="flex items-center space-x-4">
							<span className="text-sm text-gray-500">
								Welcome, {user?.name || "Demo User"}
							</span>
							<button
								onClick={() => setShowCreateDialog(true)}
								className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
							>
								<Plus className="w-4 h-4 mr-2" />
								New Page
							</button>
						</div>
					</div>
				</div>
			</header>

			{/* Main Content */}
			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				{/* Stats */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
					<div className="bg-white overflow-hidden shadow rounded-lg">
						<div className="p-5">
							<div className="flex items-center">
								<div className="flex-shrink-0">
									<FileText className="h-6 w-6 text-gray-400" />
								</div>
								<div className="ml-5 w-0 flex-1">
									<dl>
										<dt className="text-sm font-medium text-gray-500 truncate">
											Total Pages
										</dt>
										<dd className="text-lg font-medium text-gray-900">
											{pages.length}
										</dd>
									</dl>
								</div>
							</div>
						</div>
					</div>
					<div className="bg-white overflow-hidden shadow rounded-lg">
						<div className="p-5">
							<div className="flex items-center">
								<div className="flex-shrink-0">
									<Eye className="h-6 w-6 text-gray-400" />
								</div>
								<div className="ml-5 w-0 flex-1">
									<dl>
										<dt className="text-sm font-medium text-gray-500 truncate">
											Published
										</dt>
										<dd className="text-lg font-medium text-gray-900">
											{pages.filter((page) => page.published).length}
										</dd>
									</dl>
								</div>
							</div>
						</div>
					</div>
					<div className="bg-white overflow-hidden shadow rounded-lg">
						<div className="p-5">
							<div className="flex items-center">
								<div className="flex-shrink-0">
									<Edit3 className="h-6 w-6 text-gray-400" />
								</div>
								<div className="ml-5 w-0 flex-1">
									<dl>
										<dt className="text-sm font-medium text-gray-500 truncate">
											Drafts
										</dt>
										<dd className="text-lg font-medium text-gray-900">
											{pages.filter((page) => !page.published).length}
										</dd>
									</dl>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Pages List */}
				<div className="bg-white shadow overflow-hidden sm:rounded-md">
					<div className="px-4 py-5 sm:px-6">
						<h3 className="text-lg leading-6 font-medium text-gray-900">
							Your Pages
						</h3>
						<p className="mt-1 max-w-2xl text-sm text-gray-500">
							Manage your landing pages and track their status.
						</p>
					</div>
					<ul className="divide-y divide-gray-200">
						{pages.length === 0 ? (
							<li className="px-4 py-12 text-center">
								<div className="text-gray-500">
									<FileText className="mx-auto h-12 w-12 text-gray-400" />
									<h3 className="mt-2 text-sm font-medium text-gray-900">
										No pages
									</h3>
									<p className="mt-1 text-sm text-gray-500">
										Get started by creating a new page.
									</p>
									<div className="mt-6">
										<button
											onClick={() => setShowCreateDialog(true)}
											className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
										>
											<Plus className="w-4 h-4 mr-2" />
											New Page
										</button>
									</div>
								</div>
							</li>
						) : (
							pages.map((page) => (
								<li key={page.id}>
									<div className="px-4 py-4 flex items-center justify-between">
										<div className="flex items-center">
											<div className="flex-shrink-0">
												<div
													className={`w-8 h-8 rounded-full flex items-center justify-center ${
														page.published ? "bg-green-100" : "bg-gray-100"
													}`}
												>
													{page.published ? (
														<Eye className="w-4 h-4 text-green-600" />
													) : (
														<Edit3 className="w-4 h-4 text-gray-600" />
													)}
												</div>
											</div>
											<div className="ml-4">
												<div className="flex items-center">
													<p className="text-sm font-medium text-gray-900">
														{page.title}
													</p>
													<span
														className={`ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
															page.published
																? "bg-green-100 text-green-800"
																: "bg-gray-100 text-gray-800"
														}`}
													>
														{page.published ? "Published" : "Draft"}
													</span>
												</div>
												<div className="flex items-center text-sm text-gray-500">
													<span>/{page.slug}</span>
													<span className="mx-2">•</span>
													<span>
														Updated{" "}
														{new Date(page.updatedAt).toLocaleDateString()}
													</span>
												</div>
											</div>
										</div>
										<div className="flex items-center space-x-2">
											<Link
												href={`/editor/${page.id}`}
												className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
											>
												<Edit3 className="w-4 h-4 mr-1" />
												Edit
											</Link>
											{page.published && (
												<Link
													href={`/preview/${page.slug}`}
													className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
												>
													<Eye className="w-4 h-4 mr-1" />
													View
												</Link>
											)}
											<button
												onClick={() => handleTogglePublish(page)}
												className={`inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md ${
													page.published
														? "text-yellow-700 bg-yellow-100 hover:bg-yellow-200"
														: "text-green-700 bg-green-100 hover:bg-green-200"
												}`}
											>
												{page.published ? "Unpublish" : "Publish"}
											</button>
											<button
												onClick={() => handleDeletePage(page.id)}
												className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200"
											>
												<Trash2 className="w-4 h-4 mr-1" />
												Delete
											</button>
										</div>
									</div>
								</li>
							))
						)}
					</ul>
				</div>
			</main>

			{/* Create Page Dialog */}
			{showCreateDialog && (
				<div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
					<div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
						<div className="mt-3">
							<div className="flex items-center justify-between mb-4">
								<h3 className="text-lg font-medium text-gray-900">
									Create New Page
								</h3>
								<button
									onClick={() => setShowCreateDialog(false)}
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
								<label
									htmlFor="pageTitle"
									className="block text-sm font-medium text-gray-700 mb-2"
								>
									Page Title
								</label>
								<input
									type="text"
									id="pageTitle"
									value={newPageTitle}
									onChange={(e) => setNewPageTitle(e.target.value)}
									className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
									placeholder="Enter page title..."
								/>
							</div>
							<div className="flex justify-end space-x-3">
								<button
									onClick={() => setShowCreateDialog(false)}
									className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200"
								>
									Cancel
								</button>
								<button
									onClick={handleCreatePage}
									disabled={!newPageTitle.trim()}
									className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
								>
									Create Page
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
