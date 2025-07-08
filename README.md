# Page Builder CRM

A powerful drag-and-drop page builder CRM built with Next.js, TypeScript, and Tailwind CSS. Create beautiful landing pages with pre-built components inspired by Float UI.

## Features

- 🎨 **Drag-and-Drop Editor** - Intuitive visual page builder
- 📱 **Responsive Design** - Mobile, tablet, and desktop preview modes
- 🧩 **Pre-built Components** - Hero sections, headers, footers, features, and more
- ⚡ **Real-time Editing** - Live preview with instant updates
- 💾 **Local Storage** - No database required for development
- 🎯 **Component Library** - Categorized components with search functionality
- 📝 **Content Management** - Easy text and image editing
- 🔍 **SEO Ready** - Meta tags and structured data support
- 🚀 **Publishing System** - Draft and publish workflow

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd page-builder-crm
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
page-builder-crm/
├── app/                          # Next.js 13+ app directory
│   ├── editor/[pageId]/         # Page editor routes
│   ├── preview/[slug]/          # Public page preview
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Dashboard page
├── components/                   # React components
│   └── editor/                  # Editor-specific components
│       ├── Canvas.tsx           # Drag-drop canvas
│       ├── ComponentLibrary.tsx # Component sidebar
│       ├── ComponentRenderer.tsx# Component renderer
│       ├── EditorHeader.tsx     # Editor navigation
│       ├── PropertiesPanel.tsx  # Component properties
│       └── SortableComponent.tsx# Draggable wrapper
├── lib/                         # Utility libraries
│   ├── localStorage.ts          # Local storage utilities
│   └── seedData.ts             # Sample components
├── prisma/                      # Database schema (future use)
│   └── schema.prisma           # Prisma schema
├── types/                       # TypeScript definitions
│   └── index.ts                # Type definitions
└── README.md                   # This file
```

## Component Architecture

### Component Templates

Components are stored as templates with the following structure:

```typescript
interface ComponentTemplate {
	id: string;
	name: string;
	category: string; // hero, header, footer, etc.
	variant: string; // different versions
	htmlContent: string; // HTML template with placeholders
	defaultData: object; // Default content
	schema: {
		// Editable fields configuration
		fields: SchemaField[];
	};
}
```

### Page Components

When added to a page, components become:

```typescript
interface PageComponent {
	id: string;
	pageId: string;
	templateId: string;
	position: number;
	customData: object; // User's custom content
	isVisible: boolean;
}
```

## Using the Page Builder

### 1. Creating a New Page

1. Click "New Page" on the dashboard
2. Enter a page title
3. Click "Create Page" to open the editor

### 2. Adding Components

1. Browse the component library on the left
2. Drag any component to the canvas
3. The component will be added to your page

### 3. Editing Components

1. Click on any component in the canvas
2. Use the properties panel on the right to edit content
3. Changes are applied in real-time

### 4. Reordering Components

1. Select a component
2. Use the drag handle in the toolbar to reorder
3. Components can be moved up or down

### 5. Preview and Publish

1. Click "Preview" to see how your page looks
2. Use responsive breakpoint controls to test different screen sizes
3. Click "Publish" to make your page live

## Available Component Categories

- **Hero Sections** - Landing page headers with CTAs
- **Headers** - Navigation bars and site headers
- **Features** - Feature showcases and benefit lists
- **Footers** - Site footers with links and info
- **CTA Sections** - Call-to-action blocks
- **Testimonials** - Customer testimonials (coming soon)
- **Pricing** - Pricing tables and plans (coming soon)
- **FAQs** - Frequently asked questions (coming soon)

## Local Storage Structure

The application uses localStorage with the following keys:

- `pageBuilder_componentTemplates` - Available component templates
- `pageBuilder_pages` - User's pages
- `pageBuilder_pageComponents` - Components added to pages
- `pageBuilder_users` - User information
- `pageBuilder_currentUser` - Current logged-in user

## Customization

### Adding New Components

1. Create a new component template in `lib/seedData.ts`:

```typescript
{
  id: generateId(),
  name: 'My Custom Component',
  category: 'custom',
  variant: 'default',
  htmlContent: `<div class="my-component">{{title}}</div>`,
  defaultData: { title: 'Default Title' },
  schema: {
    fields: [
      { name: 'title', type: 'text', label: 'Title' }
    ]
  },
  // ... other properties
}
```

2. The component will automatically appear in the component library.

### Styling Components

Components use Tailwind CSS classes. You can:

1. Modify the `htmlContent` in component templates
2. Add custom CSS in the `cssStyles` field
3. Use the global CSS file for site-wide styles

## Database Integration (Future)

The project includes a complete Prisma schema for database integration:

1. Set up your database (PostgreSQL recommended)
2. Configure the `DATABASE_URL` environment variable
3. Run `npx prisma migrate dev`
4. Replace localStorage utilities with Prisma client calls

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better DX
- **Tailwind CSS** - Utility-first CSS framework
- **@dnd-kit** - Modern drag-and-drop library
- **Lucide React** - Beautiful icon library
- **Prisma** - Database ORM (for future use)

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Roadmap

- [ ] Add more component templates
- [ ] Implement undo/redo functionality
- [ ] Add responsive design controls
- [ ] Implement team collaboration features
- [ ] Add form builder components
- [ ] Create template marketplace
- [ ] Add A/B testing capabilities
- [ ] Implement analytics integration

## Support

For support, please open an issue on GitHub or contact the development team.

---

Built with ❤️ using Float UI components and modern web technologies.
