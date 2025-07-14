import { ComponentTemplate, Page, PageComponent, User } from "@/types";

const STORAGE_KEYS = {
	COMPONENT_TEMPLATES: "pageBuilder_componentTemplates",
	PAGES: "pageBuilder_pages",
	USERS: "pageBuilder_users",
	CURRENT_USER: "pageBuilder_currentUser",
	PAGE_COMPONENTS: "pageBuilder_pageComponents",
} as const;

// Generic localStorage helper functions
export const storage = {
	get<T>(key: string): T | null {
		if (typeof window === "undefined") return null;

		try {
			const item = localStorage.getItem(key);
			return item ? JSON.parse(item) : null;
		} catch (error) {
			console.error(`Error reading from localStorage (${key}):`, error);
			return null;
		}
	},

	set<T>(key: string, value: T): void {
		if (typeof window === "undefined") return;

		try {
			localStorage.setItem(key, JSON.stringify(value));
		} catch (error) {
			console.error(`Error writing to localStorage (${key}):`, error);
		}
	},

	remove(key: string): void {
		if (typeof window === "undefined") return;

		try {
			localStorage.removeItem(key);
		} catch (error) {
			console.error(`Error removing from localStorage (${key}):`, error);
		}
	},

	clear(): void {
		if (typeof window === "undefined") return;

		try {
			const keys = [
				STORAGE_KEYS.COMPONENT_TEMPLATES,
				STORAGE_KEYS.PAGES,
				STORAGE_KEYS.USERS,
				STORAGE_KEYS.CURRENT_USER,
				STORAGE_KEYS.PAGE_COMPONENTS,
			];
			keys.forEach((key: string) => {
				localStorage.removeItem(key);
			});
		} catch (error) {
			console.error("Error clearing localStorage:", error);
		}
	},
};

// Component Templates
export const componentTemplateStorage = {
	getAll(): ComponentTemplate[] {
		return (
			storage.get<ComponentTemplate[]>(STORAGE_KEYS.COMPONENT_TEMPLATES) || []
		);
	},

	getById(id: string): ComponentTemplate | null {
		const templates = this.getAll();
		return templates.find((template) => template.id === id) || null;
	},

	getByCategory(category: string): ComponentTemplate[] {
		const templates = this.getAll();
		return templates.filter((template) => template.category === category);
	},

	save(template: ComponentTemplate): void {
		const templates = this.getAll();
		const existingIndex = templates.findIndex((t) => t.id === template.id);

		if (existingIndex >= 0) {
			templates[existingIndex] = {
				...template,
				updatedAt: new Date().toISOString(),
			};
		} else {
			templates.push(template);
		}

		storage.set(STORAGE_KEYS.COMPONENT_TEMPLATES, templates);
	},

	saveMany(templates: ComponentTemplate[]): void {
		storage.set(STORAGE_KEYS.COMPONENT_TEMPLATES, templates);
	},

	delete(id: string): void {
		const templates = this.getAll();
		const filtered = templates.filter((template) => template.id !== id);
		storage.set(STORAGE_KEYS.COMPONENT_TEMPLATES, filtered);
	},
};

// Pages
export const pageStorage = {
	getAll(): Page[] {
		return storage.get<Page[]>(STORAGE_KEYS.PAGES) || [];
	},

	getById(id: string): Page | null {
		const pages = this.getAll();
		return pages.find((page) => page.id === id) || null;
	},

	getBySlug(slug: string): Page | null {
		const pages = this.getAll();
		return pages.find((page) => page.slug === slug) || null;
	},

	getByUserId(userId: string): Page[] {
		const pages = this.getAll();
		return pages.filter((page) => page.userId === userId);
	},

	save(page: Page): void {
		const pages = this.getAll();
		const existingIndex = pages.findIndex((p) => p.id === page.id);

		if (existingIndex >= 0) {
			pages[existingIndex] = { ...page, updatedAt: new Date().toISOString() };
		} else {
			pages.push(page);
		}

		storage.set(STORAGE_KEYS.PAGES, pages);
	},

	delete(id: string): void {
		const pages = this.getAll();
		const filtered = pages.filter((page) => page.id !== id);
		storage.set(STORAGE_KEYS.PAGES, filtered);

		// Also delete associated components
		pageComponentStorage.deleteByPageId(id);
	},
};

// Page Components
export const pageComponentStorage = {
	getAll(): PageComponent[] {
		return storage.get<PageComponent[]>(STORAGE_KEYS.PAGE_COMPONENTS) || [];
	},

	getByPageId(pageId: string): PageComponent[] {
		const components = this.getAll();
		return components
			.filter((component) => component.pageId === pageId)
			.sort((a, b) => a.position - b.position);
	},

	getById(id: string): PageComponent | null {
		const components = this.getAll();
		return components.find((component) => component.id === id) || null;
	},

	save(component: PageComponent): void {
		const components = this.getAll();
		const existingIndex = components.findIndex((c) => c.id === component.id);

		if (existingIndex >= 0) {
			components[existingIndex] = {
				...component,
				updatedAt: new Date().toISOString(),
			};
		} else {
			components.push(component);
		}

		storage.set(STORAGE_KEYS.PAGE_COMPONENTS, components);
	},

	saveMany(components: PageComponent[]): void {
		const allComponents = this.getAll();

		components.forEach((component) => {
			const existingIndex = allComponents.findIndex(
				(c) => c.id === component.id
			);
			if (existingIndex >= 0) {
				allComponents[existingIndex] = {
					...component,
					updatedAt: new Date().toISOString(),
				};
			} else {
				allComponents.push(component);
			}
		});

		storage.set(STORAGE_KEYS.PAGE_COMPONENTS, allComponents);
	},

	delete(id: string): void {
		const components = this.getAll();
		const filtered = components.filter((component) => component.id !== id);
		storage.set(STORAGE_KEYS.PAGE_COMPONENTS, filtered);
	},

	deleteByPageId(pageId: string): void {
		const components = this.getAll();
		const filtered = components.filter(
			(component) => component.pageId !== pageId
		);
		storage.set(STORAGE_KEYS.PAGE_COMPONENTS, filtered);
	},

	updatePositions(pageId: string, componentIds: string[]): void {
		const components = this.getAll();
		const pageComponents = components.filter((c) => c.pageId === pageId);

		// Update positions based on the new order
		componentIds.forEach((id, index) => {
			const component = pageComponents.find((c) => c.id === id);
			if (component) {
				component.position = index;
				component.updatedAt = new Date().toISOString();
			}
		});

		storage.set(STORAGE_KEYS.PAGE_COMPONENTS, components);
	},
};

// Users
export const userStorage = {
	getAll(): User[] {
		return storage.get<User[]>(STORAGE_KEYS.USERS) || [];
	},

	getById(id: string): User | null {
		const users = this.getAll();
		return users.find((user) => user.id === id) || null;
	},

	getCurrentUser(): User | null {
		return storage.get<User>(STORAGE_KEYS.CURRENT_USER);
	},

	setCurrentUser(user: User): void {
		storage.set(STORAGE_KEYS.CURRENT_USER, user);
	},

	save(user: User): void {
		const users = this.getAll();
		const existingIndex = users.findIndex((u) => u.id === user.id);

		if (existingIndex >= 0) {
			users[existingIndex] = { ...user, updatedAt: new Date().toISOString() };
		} else {
			users.push(user);
		}

		storage.set(STORAGE_KEYS.USERS, users);
	},

	logout(): void {
		storage.remove(STORAGE_KEYS.CURRENT_USER);
	},
};

// Utility functions
export const generateId = (): string => {
	return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

export const generateSlug = (title: string): string => {
	return title
		.toLowerCase()
		.replace(/[^a-z0-9\s-]/g, "")
		.replace(/\s+/g, "-")
		.replace(/-+/g, "-")
		.trim();
};

// Reset component templates (useful for development)
export const resetComponentTemplates = (): void => {
	storage.remove(STORAGE_KEYS.COMPONENT_TEMPLATES);
};

export const initializeDefaultData = (): void => {
	// Initialize with a default user if none exists
	if (!userStorage.getCurrentUser()) {
		const defaultUser: User = {
			id: generateId(),
			email: "demo@example.com",
			name: "Demo User",
			createdAt: new Date().toISOString(),
			updatedAt: new Date().toISOString(),
		};

		userStorage.save(defaultUser);
		userStorage.setCurrentUser(defaultUser);
	}
};
