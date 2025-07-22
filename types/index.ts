export interface ComponentTemplate {
	id: string;
	name: string;
	category: string;
	variant: string;
	description?: string;
	previewUrl?: string;
	htmlContent: string;
	cssStyles: string;
	jsCode?: string;
	defaultData: Record<string, any>;
	schema: {
		fields: SchemaField[];
	};
	tags?: string[];
	isActive?: boolean;
	createdAt: string;
	updatedAt: string;
}

export interface SchemaField {
	name: string;
	type:
		| "text"
		| "textarea"
		| "image"
		| "url"
		| "color"
		| "select"
		| "checkbox"
		| "number";
	label: string;
	placeholder?: string;
	required?: boolean;
	tab?: "content" | "style";
	options?: { label: string; value: string }[];
	validation?: {
		min?: number;
		max?: number;
		pattern?: string;
	};
}

export interface Page {
	id: string;
	title: string;
	slug: string;
	description?: string;
	metaTitle?: string;
	metaDescription?: string;
	favicon?: string;
	customCss?: string;
	customJs?: string;
	published: boolean;
	publishedAt?: string;
	userId: string;
	createdAt: string;
	updatedAt: string;
	components: PageComponent[];
}

export interface PageComponent {
	id: string;
	pageId: string;
	templateId: string;
	position: number;
	customData: Record<string, any>;
	styles?: Record<string, any>;
	responsiveStyles?: Record<string, any>;
	isVisible: boolean;
	createdAt: string;
	updatedAt: string;
	template?: ComponentTemplate;
}

export interface User {
	id: string;
	email: string;
	name?: string;
	avatar?: string;
	createdAt: string;
	updatedAt: string;
}

export interface DraggedComponent {
	id: string;
	type: "template" | "existing";
	data: ComponentTemplate | PageComponent;
}

export interface EditorState {
	selectedComponentId: string | null;
	draggedComponent: DraggedComponent | null;
	isPreviewMode: boolean;
	currentBreakpoint: "mobile" | "tablet" | "desktop";
}

export const COMPONENT_CATEGORIES = [
	"hero",
	"header",
	"footer",
	"feature",
	"testimonial",
	"faq",
	"pricing",
	"cta",
	"team",
	"contact",
	"stats",
	"newsletter",
	"logo-grid",
	"banner",
	"registration",
	"about",
	"mission",
	"vision",
] as const;

export type ComponentCategory = (typeof COMPONENT_CATEGORIES)[number];
