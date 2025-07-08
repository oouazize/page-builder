import { ComponentTemplate } from "@/types";
import { generateId } from "./localStorage";

export const seedComponentTemplates: ComponentTemplate[] = [
	// Hero Sections
	{
		id: generateId(),
		name: "Hero - Centered with CTA",
		category: "hero",
		variant: "centered",
		description:
			"A centered hero section with headline, subtitle, and call-to-action button",
		htmlContent: `
      <section class="relative bg-gradient-to-r from-purple-600 to-blue-600 overflow-hidden">
        <div class="absolute inset-0 bg-black opacity-50"></div>
        <div class="relative max-w-7xl mx-auto">
          <div class="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div class="sm:text-center lg:text-left">
                <h1 class="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span class="block xl:inline">{{title}}</span>
                </h1>
                <p class="mt-3 text-base text-gray-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  {{subtitle}}
                </p>
                <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div class="rounded-md shadow">
                    <a href="{{primaryButtonLink}}" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                      {{primaryButtonText}}
                    </a>
                  </div>
                  <div class="mt-3 sm:mt-0 sm:ml-3">
                    <a href="{{secondaryButtonLink}}" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                      {{secondaryButtonText}}
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    `,
		cssStyles: "",
		defaultData: {
			title: "Build your next project faster",
			subtitle:
				"Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
			primaryButtonText: "Get started",
			primaryButtonLink: "#",
			secondaryButtonText: "Live demo",
			secondaryButtonLink: "#",
		},
		schema: {
			fields: [
				{ name: "title", type: "text", label: "Main Title", required: true },
				{ name: "subtitle", type: "textarea", label: "Subtitle" },
				{
					name: "primaryButtonText",
					type: "text",
					label: "Primary Button Text",
				},
				{
					name: "primaryButtonLink",
					type: "url",
					label: "Primary Button Link",
				},
				{
					name: "secondaryButtonText",
					type: "text",
					label: "Secondary Button Text",
				},
				{
					name: "secondaryButtonLink",
					type: "url",
					label: "Secondary Button Link",
				},
			],
		},
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString(),
	},

	// Header/Navigation
	{
		id: generateId(),
		name: "Header - Modern Navigation",
		category: "header",
		variant: "modern",
		description: "Modern navigation header with logo and menu items",
		htmlContent: `
      <header class="bg-white shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div class="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <span class="sr-only">{{companyName}}</span>
                <img class="h-8 w-auto sm:h-10" src="{{logoUrl}}" alt="{{companyName}}">
              </a>
            </div>
            <div class="-mr-2 -my-2 md:hidden">
              <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                <span class="sr-only">Open menu</span>
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            <nav class="hidden md:flex space-x-10">
              <a href="{{link1Url}}" class="text-base font-medium text-gray-500 hover:text-gray-900">{{link1Text}}</a>
              <a href="{{link2Url}}" class="text-base font-medium text-gray-500 hover:text-gray-900">{{link2Text}}</a>
              <a href="{{link3Url}}" class="text-base font-medium text-gray-500 hover:text-gray-900">{{link3Text}}</a>
              <a href="{{link4Url}}" class="text-base font-medium text-gray-500 hover:text-gray-900">{{link4Text}}</a>
            </nav>
            <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <a href="{{ctaUrl}}" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                {{ctaText}}
              </a>
            </div>
          </div>
        </div>
      </header>
    `,
		cssStyles: "",
		defaultData: {
			companyName: "Your Company",
			logoUrl: "https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg",
			link1Text: "Solutions",
			link1Url: "#",
			link2Text: "Pricing",
			link2Url: "#",
			link3Text: "Docs",
			link3Url: "#",
			link4Text: "Company",
			link4Url: "#",
			ctaText: "Sign up",
			ctaUrl: "#",
		},
		schema: {
			fields: [
				{
					name: "companyName",
					type: "text",
					label: "Company Name",
					required: true,
				},
				{ name: "logoUrl", type: "image", label: "Logo URL" },
				{ name: "link1Text", type: "text", label: "Link 1 Text" },
				{ name: "link1Url", type: "url", label: "Link 1 URL" },
				{ name: "link2Text", type: "text", label: "Link 2 Text" },
				{ name: "link2Url", type: "url", label: "Link 2 URL" },
				{ name: "link3Text", type: "text", label: "Link 3 Text" },
				{ name: "link3Url", type: "url", label: "Link 3 URL" },
				{ name: "link4Text", type: "text", label: "Link 4 Text" },
				{ name: "link4Url", type: "url", label: "Link 4 URL" },
				{ name: "ctaText", type: "text", label: "CTA Button Text" },
				{ name: "ctaUrl", type: "url", label: "CTA Button URL" },
			],
		},
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString(),
	},

	// Feature Section
	{
		id: generateId(),
		name: "Features - Three Column Grid",
		category: "feature",
		variant: "three-column",
		description: "Three column feature grid with icons and descriptions",
		htmlContent: `
      <section class="py-12 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="lg:text-center">
            <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">{{sectionTag}}</h2>
            <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {{sectionTitle}}
            </p>
            <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              {{sectionDescription}}
            </p>
          </div>

          <div class="mt-10">
            <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div class="relative">
                <dt>
                  <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p class="ml-16 text-lg leading-6 font-medium text-gray-900">{{feature1Title}}</p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500">{{feature1Description}}</dd>
              </div>

              <div class="relative">
                <dt>
                  <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                  </div>
                  <p class="ml-16 text-lg leading-6 font-medium text-gray-900">{{feature2Title}}</p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500">{{feature2Description}}</dd>
              </div>

              <div class="relative">
                <dt>
                  <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                  <p class="ml-16 text-lg leading-6 font-medium text-gray-900">{{feature3Title}}</p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500">{{feature3Description}}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    `,
		cssStyles: "",
		defaultData: {
			sectionTag: "Features",
			sectionTitle: "A better way to ship web apps",
			sectionDescription:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			feature1Title: "Competitive exchange rates",
			feature1Description:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque.",
			feature2Title: "No hidden fees",
			feature2Description:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque.",
			feature3Title: "Transfers are instant",
			feature3Description:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque.",
		},
		schema: {
			fields: [
				{ name: "sectionTag", type: "text", label: "Section Tag" },
				{
					name: "sectionTitle",
					type: "text",
					label: "Section Title",
					required: true,
				},
				{
					name: "sectionDescription",
					type: "textarea",
					label: "Section Description",
				},
				{ name: "feature1Title", type: "text", label: "Feature 1 Title" },
				{
					name: "feature1Description",
					type: "textarea",
					label: "Feature 1 Description",
				},
				{ name: "feature2Title", type: "text", label: "Feature 2 Title" },
				{
					name: "feature2Description",
					type: "textarea",
					label: "Feature 2 Description",
				},
				{ name: "feature3Title", type: "text", label: "Feature 3 Title" },
				{
					name: "feature3Description",
					type: "textarea",
					label: "Feature 3 Description",
				},
			],
		},
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString(),
	},

	// Footer
	{
		id: generateId(),
		name: "Footer - Simple with Links",
		category: "footer",
		variant: "simple",
		description: "Simple footer with company info and navigation links",
		htmlContent: `
      <footer class="bg-gray-800">
        <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div class="xl:grid xl:grid-cols-3 xl:gap-8">
            <div class="space-y-8 xl:col-span-1">
              <img class="h-10" src="{{logoUrl}}" alt="{{companyName}}">
              <p class="text-gray-300 text-base">
                {{companyDescription}}
              </p>
              <div class="flex space-x-6">
                <a href="{{facebookUrl}}" class="text-gray-400 hover:text-gray-300">
                  <span class="sr-only">Facebook</span>
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                  </svg>
                </a>
                <a href="{{twitterUrl}}" class="text-gray-400 hover:text-gray-300">
                  <span class="sr-only">Twitter</span>
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            <div class="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div class="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Solutions</h3>
                  <ul class="mt-4 space-y-4">
                    <li><a href="#" class="text-base text-gray-300 hover:text-white">Marketing</a></li>
                    <li><a href="#" class="text-base text-gray-300 hover:text-white">Analytics</a></li>
                    <li><a href="#" class="text-base text-gray-300 hover:text-white">Commerce</a></li>
                    <li><a href="#" class="text-base text-gray-300 hover:text-white">Insights</a></li>
                  </ul>
                </div>
                <div class="mt-12 md:mt-0">
                  <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
                  <ul class="mt-4 space-y-4">
                    <li><a href="#" class="text-base text-gray-300 hover:text-white">Pricing</a></li>
                    <li><a href="#" class="text-base text-gray-300 hover:text-white">Documentation</a></li>
                    <li><a href="#" class="text-base text-gray-300 hover:text-white">Guides</a></li>
                    <li><a href="#" class="text-base text-gray-300 hover:text-white">API Status</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-12 border-t border-gray-700 pt-8">
            <p class="text-base text-gray-400 xl:text-center">
              {{copyrightText}}
            </p>
          </div>
        </div>
      </footer>
    `,
		cssStyles: "",
		defaultData: {
			companyName: "Your Company",
			logoUrl: "https://tailwindui.com/img/logos/workflow-mark-gray-300.svg",
			companyDescription:
				"Making the world a better place through constructing elegant hierarchies.",
			facebookUrl: "#",
			twitterUrl: "#",
			copyrightText: "© 2024 Your Company, Inc. All rights reserved.",
		},
		schema: {
			fields: [
				{
					name: "companyName",
					type: "text",
					label: "Company Name",
					required: true,
				},
				{ name: "logoUrl", type: "image", label: "Logo URL" },
				{
					name: "companyDescription",
					type: "textarea",
					label: "Company Description",
				},
				{ name: "facebookUrl", type: "url", label: "Facebook URL" },
				{ name: "twitterUrl", type: "url", label: "Twitter URL" },
				{ name: "copyrightText", type: "text", label: "Copyright Text" },
			],
		},
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString(),
	},

	// CTA Section
	{
		id: generateId(),
		name: "CTA - Simple with Background",
		category: "cta",
		variant: "background",
		description:
			"Call-to-action section with background color and centered content",
		htmlContent: `
      <section class="bg-indigo-700">
        <div class="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
            <span class="block">{{title}}</span>
            <span class="block">{{subtitle}}</span>
          </h2>
          <p class="mt-4 text-lg leading-6 text-indigo-200">
            {{description}}
          </p>
          <a href="{{buttonLink}}" class="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto">
            {{buttonText}}
          </a>
        </div>
      </section>
    `,
		cssStyles: "",
		defaultData: {
			title: "Boost your productivity.",
			subtitle: "Start using our app today.",
			description:
				"Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.",
			buttonText: "Sign up for free",
			buttonLink: "#",
		},
		schema: {
			fields: [
				{ name: "title", type: "text", label: "Main Title", required: true },
				{ name: "subtitle", type: "text", label: "Subtitle" },
				{ name: "description", type: "textarea", label: "Description" },
				{ name: "buttonText", type: "text", label: "Button Text" },
				{ name: "buttonLink", type: "url", label: "Button Link" },
			],
		},
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString(),
	},

	// NEW COMPONENTS START HERE

	// Hero Section - Image Left Variant
	{
		id: generateId(),
		name: "Hero - Image Left",
		category: "hero",
		variant: "image-left",
		description: "Hero section with image on the left and content on the right",
		htmlContent: `
      <section class="bg-white overflow-hidden">
        <div class="relative max-w-7xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20">
          <div class="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-16">
            <div class="relative z-10 md:text-center lg:text-left lg:col-span-7">
              <div class="relative">
                <p class="inline-block text-sm font-semibold uppercase tracking-wide text-indigo-600 mb-4">
                  {{tagline}}
                </p>
                <h1 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
                  {{title}}
                </h1>
                <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  {{subtitle}}
                </p>
              </div>
              <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div class="rounded-md shadow">
                  <a href="{{primaryButtonLink}}" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                    {{primaryButtonText}}
                  </a>
                </div>
                <div class="mt-3 sm:mt-0 sm:ml-3">
                  <a href="{{secondaryButtonLink}}" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                    {{secondaryButtonText}}
                  </a>
                </div>
              </div>
            </div>
            <div class="relative sm:max-w-lg sm:mx-auto lg:max-w-none lg:mx-0 lg:col-span-5">
              <img class="w-full rounded-lg shadow-xl" src="{{imageUrl}}" alt="{{imageAlt}}">
            </div>
          </div>
        </div>
      </section>
    `,
		cssStyles: "",
		defaultData: {
			tagline: "Introducing",
			title: "Revolutionary Solution",
			subtitle:
				"Transform your workflow with our cutting-edge platform designed for modern teams.",
			primaryButtonText: "Get Started",
			primaryButtonLink: "#",
			secondaryButtonText: "Learn More",
			secondaryButtonLink: "#",
			imageUrl:
				"https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
			imageAlt: "Hero image",
		},
		schema: {
			fields: [
				{ name: "tagline", type: "text", label: "Tagline" },
				{ name: "title", type: "text", label: "Main Title", required: true },
				{ name: "subtitle", type: "textarea", label: "Subtitle" },
				{
					name: "primaryButtonText",
					type: "text",
					label: "Primary Button Text",
				},
				{
					name: "primaryButtonLink",
					type: "url",
					label: "Primary Button Link",
				},
				{
					name: "secondaryButtonText",
					type: "text",
					label: "Secondary Button Text",
				},
				{
					name: "secondaryButtonLink",
					type: "url",
					label: "Secondary Button Link",
				},
				{ name: "imageUrl", type: "image", label: "Hero Image" },
				{ name: "imageAlt", type: "text", label: "Image Alt Text" },
			],
		},
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString(),
	},

	// Testimonial Section
	{
		id: generateId(),
		name: "Testimonial - Single Card",
		category: "testimonial",
		variant: "single-card",
		description: "Single testimonial with profile picture and company info",
		htmlContent: `
      <section class="bg-gray-50 py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-3xl mx-auto text-center">
            <div class="flex justify-center">
              <svg class="h-12 w-12 text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>
            <blockquote class="mt-8">
              <div class="text-2xl leading-9 font-medium text-gray-900">
                <p>"{{testimonialText}}"</p>
              </div>
              <footer class="mt-8">
                <div class="md:flex md:items-center md:justify-center">
                  <div class="md:flex-shrink-0">
                    <img class="mx-auto h-10 w-10 rounded-full" src="{{authorImage}}" alt="{{authorName}}">
                  </div>
                  <div class="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                    <div class="text-base font-medium text-gray-900">{{authorName}}</div>
                    <svg class="hidden md:block mx-1 h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 0h3L9 20H6l5-20z"/>
                    </svg>
                    <div class="text-base font-medium text-gray-500">{{authorTitle}}, {{company}}</div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
    `,
		cssStyles: "",
		defaultData: {
			testimonialText:
				"This platform has completely transformed how we manage our projects. The intuitive interface and powerful features have saved us countless hours every week.",
			authorName: "Sarah Johnson",
			authorTitle: "Product Manager",
			company: "TechCorp Inc.",
			authorImage:
				"https://images.unsplash.com/photo-1494790108755-2616b612c1d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
		},
		schema: {
			fields: [
				{
					name: "testimonialText",
					type: "textarea",
					label: "Testimonial Text",
					required: true,
				},
				{
					name: "authorName",
					type: "text",
					label: "Author Name",
					required: true,
				},
				{ name: "authorTitle", type: "text", label: "Author Title" },
				{ name: "company", type: "text", label: "Company" },
				{ name: "authorImage", type: "image", label: "Author Photo" },
			],
		},
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString(),
	},

	// Pricing Section
	{
		id: generateId(),
		name: "Pricing - Three Tier",
		category: "pricing",
		variant: "three-tier",
		description: "Three-tier pricing table with feature comparison",
		htmlContent: `
      <section class="bg-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="sm:text-center">
            <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {{sectionTitle}}
            </h2>
            <p class="mt-4 text-xl text-gray-600">
              {{sectionSubtitle}}
            </p>
          </div>
          <div class="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
            <!-- Basic Plan -->
            <div class="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
              <div class="p-6">
                <h3 class="text-lg leading-6 font-medium text-gray-900">{{basicPlanName}}</h3>
                <p class="mt-4 text-sm text-gray-500">{{basicPlanDescription}}</p>
                <p class="mt-8">
                  <span class="text-4xl font-extrabold text-gray-900">{{basicPlanCurrency}}{{basicPlanPrice}}</span>
                  <span class="text-base font-medium text-gray-500">{{basicPlanPeriod}}</span>
                </p>
                <a href="{{basicPlanLink}}" class="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">
                  {{basicPlanButtonText}}
                </a>
              </div>
            </div>
            <!-- Pro Plan -->
            <div class="border border-indigo-200 rounded-lg shadow-sm divide-y divide-gray-200 relative">
              <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span class="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-600 text-white">
                  Most Popular
                </span>
              </div>
              <div class="p-6">
                <h3 class="text-lg leading-6 font-medium text-gray-900">{{proPlanName}}</h3>
                <p class="mt-4 text-sm text-gray-500">{{proPlanDescription}}</p>
                <p class="mt-8">
                  <span class="text-4xl font-extrabold text-gray-900">{{proPlanCurrency}}{{proPlanPrice}}</span>
                  <span class="text-base font-medium text-gray-500">{{proPlanPeriod}}</span>
                </p>
                <a href="{{proPlanLink}}" class="mt-8 block w-full bg-indigo-600 border border-indigo-600 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-indigo-700">
                  {{proPlanButtonText}}
                </a>
              </div>
            </div>
            <!-- Enterprise Plan -->
            <div class="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
              <div class="p-6">
                <h3 class="text-lg leading-6 font-medium text-gray-900">{{enterprisePlanName}}</h3>
                <p class="mt-4 text-sm text-gray-500">{{enterprisePlanDescription}}</p>
                <p class="mt-8">
                  <span class="text-4xl font-extrabold text-gray-900">{{enterprisePlanCurrency}}{{enterprisePlanPrice}}</span>
                  <span class="text-base font-medium text-gray-500">{{enterprisePlanPeriod}}</span>
                </p>
                <a href="{{enterprisePlanLink}}" class="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">
                  {{enterprisePlanButtonText}}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    `,
		cssStyles: "",
		defaultData: {
			sectionTitle: "Choose your plan",
			sectionSubtitle: "Pick the perfect plan for your business needs",
			basicPlanName: "Basic",
			basicPlanDescription: "Perfect for small teams getting started",
			basicPlanCurrency: "$",
			basicPlanPrice: "29",
			basicPlanPeriod: "/month",
			basicPlanButtonText: "Get Started",
			basicPlanLink: "#",
			proPlanName: "Pro",
			proPlanDescription: "Best for growing businesses",
			proPlanCurrency: "$",
			proPlanPrice: "99",
			proPlanPeriod: "/month",
			proPlanButtonText: "Start Free Trial",
			proPlanLink: "#",
			enterprisePlanName: "Enterprise",
			enterprisePlanDescription: "For large-scale operations",
			enterprisePlanCurrency: "$",
			enterprisePlanPrice: "299",
			enterprisePlanPeriod: "/month",
			enterprisePlanButtonText: "Contact Sales",
			enterprisePlanLink: "#",
		},
		schema: {
			fields: [
				{
					name: "sectionTitle",
					type: "text",
					label: "Section Title",
					required: true,
				},
				{ name: "sectionSubtitle", type: "text", label: "Section Subtitle" },
				// Basic Plan
				{ name: "basicPlanName", type: "text", label: "Basic Plan Name" },
				{
					name: "basicPlanDescription",
					type: "textarea",
					label: "Basic Plan Description",
				},
				{
					name: "basicPlanCurrency",
					type: "text",
					label: "Basic Plan Currency",
				},
				{ name: "basicPlanPrice", type: "text", label: "Basic Plan Price" },
				{ name: "basicPlanPeriod", type: "text", label: "Basic Plan Period" },
				{
					name: "basicPlanButtonText",
					type: "text",
					label: "Basic Plan Button Text",
				},
				{ name: "basicPlanLink", type: "url", label: "Basic Plan Link" },
				// Pro Plan
				{ name: "proPlanName", type: "text", label: "Pro Plan Name" },
				{
					name: "proPlanDescription",
					type: "textarea",
					label: "Pro Plan Description",
				},
				{ name: "proPlanCurrency", type: "text", label: "Pro Plan Currency" },
				{ name: "proPlanPrice", type: "text", label: "Pro Plan Price" },
				{ name: "proPlanPeriod", type: "text", label: "Pro Plan Period" },
				{
					name: "proPlanButtonText",
					type: "text",
					label: "Pro Plan Button Text",
				},
				{ name: "proPlanLink", type: "url", label: "Pro Plan Link" },
				// Enterprise Plan
				{
					name: "enterprisePlanName",
					type: "text",
					label: "Enterprise Plan Name",
				},
				{
					name: "enterprisePlanDescription",
					type: "textarea",
					label: "Enterprise Plan Description",
				},
				{
					name: "enterprisePlanCurrency",
					type: "text",
					label: "Enterprise Plan Currency",
				},
				{
					name: "enterprisePlanPrice",
					type: "text",
					label: "Enterprise Plan Price",
				},
				{
					name: "enterprisePlanPeriod",
					type: "text",
					label: "Enterprise Plan Period",
				},
				{
					name: "enterprisePlanButtonText",
					type: "text",
					label: "Enterprise Plan Button Text",
				},
				{
					name: "enterprisePlanLink",
					type: "url",
					label: "Enterprise Plan Link",
				},
			],
		},
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString(),
	},

	// Stats Section
	{
		id: generateId(),
		name: "Stats - Four Column",
		category: "stats",
		variant: "four-column",
		description: "Statistics section with four key metrics",
		htmlContent: `
      <section class="bg-indigo-800">
        <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
          <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
              {{sectionTitle}}
            </h2>
            <p class="mt-3 text-xl text-indigo-200 sm:mt-4">
              {{sectionSubtitle}}
            </p>
          </div>
          <dl class="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-4 sm:gap-8">
            <div class="flex flex-col">
              <dt class="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">{{stat1Label}}</dt>
              <dd class="order-1 text-5xl font-extrabold text-white">{{stat1Value}}</dd>
            </div>
            <div class="flex flex-col mt-10 sm:mt-0">
              <dt class="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">{{stat2Label}}</dt>
              <dd class="order-1 text-5xl font-extrabold text-white">{{stat2Value}}</dd>
            </div>
            <div class="flex flex-col mt-10 sm:mt-0">
              <dt class="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">{{stat3Label}}</dt>
              <dd class="order-1 text-5xl font-extrabold text-white">{{stat3Value}}</dd>
            </div>
            <div class="flex flex-col mt-10 sm:mt-0">
              <dt class="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">{{stat4Label}}</dt>
              <dd class="order-1 text-5xl font-extrabold text-white">{{stat4Value}}</dd>
            </div>
          </dl>
        </div>
      </section>
    `,
		cssStyles: "",
		defaultData: {
			sectionTitle: "Trusted by thousands worldwide",
			sectionSubtitle:
				"Our platform delivers results that matter to your business",
			stat1Value: "99%",
			stat1Label: "Uptime",
			stat2Value: "10K+",
			stat2Label: "Happy Customers",
			stat3Value: "50M+",
			stat3Label: "API Calls",
			stat4Value: "24/7",
			stat4Label: "Support",
		},
		schema: {
			fields: [
				{
					name: "sectionTitle",
					type: "text",
					label: "Section Title",
					required: true,
				},
				{
					name: "sectionSubtitle",
					type: "textarea",
					label: "Section Subtitle",
				},
				{ name: "stat1Value", type: "text", label: "Stat 1 Value" },
				{ name: "stat1Label", type: "text", label: "Stat 1 Label" },
				{ name: "stat2Value", type: "text", label: "Stat 2 Value" },
				{ name: "stat2Label", type: "text", label: "Stat 2 Label" },
				{ name: "stat3Value", type: "text", label: "Stat 3 Value" },
				{ name: "stat3Label", type: "text", label: "Stat 3 Label" },
				{ name: "stat4Value", type: "text", label: "Stat 4 Value" },
				{ name: "stat4Label", type: "text", label: "Stat 4 Label" },
			],
		},
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString(),
	},

	// Team Section
	{
		id: generateId(),
		name: "Team - Grid Layout",
		category: "team",
		variant: "grid-layout",
		description: "Team members showcase in a grid layout",
		htmlContent: `
      <section class="bg-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="space-y-12">
            <div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 class="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">{{sectionTitle}}</h2>
              <p class="text-xl text-gray-500">{{sectionSubtitle}}</p>
            </div>
            <ul class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
              <li>
                <div class="space-y-4">
                  <div class="aspect-w-3 aspect-h-3">
                    <img class="object-cover shadow-lg rounded-lg h-40 w-full" src="{{member1Image}}" alt="{{member1Name}}">
                  </div>
                  <div class="space-y-2">
                    <div class="text-lg leading-6 font-medium space-y-1">
                      <h3>{{member1Name}}</h3>
                      <p class="text-indigo-600">{{member1Title}}</p>
                    </div>
                    <div class="text-lg">
                      <p class="text-gray-500">{{member1Bio}}</p>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="space-y-4">
                  <div class="aspect-w-3 aspect-h-3">
                    <img class="object-cover shadow-lg rounded-lg h-40 w-full" src="{{member2Image}}" alt="{{member2Name}}">
                  </div>
                  <div class="space-y-2">
                    <div class="text-lg leading-6 font-medium space-y-1">
                      <h3>{{member2Name}}</h3>
                      <p class="text-indigo-600">{{member2Title}}</p>
                    </div>
                    <div class="text-lg">
                      <p class="text-gray-500">{{member2Bio}}</p>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="space-y-4">
                  <div class="aspect-w-3 aspect-h-3">
                    <img class="object-cover shadow-lg rounded-lg h-40 w-full" src="{{member3Image}}" alt="{{member3Name}}">
                  </div>
                  <div class="space-y-2">
                    <div class="text-lg leading-6 font-medium space-y-1">
                      <h3>{{member3Name}}</h3>
                      <p class="text-indigo-600">{{member3Title}}</p>
                    </div>
                    <div class="text-lg">
                      <p class="text-gray-500">{{member3Bio}}</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    `,
		cssStyles: "",
		defaultData: {
			sectionTitle: "Meet our team",
			sectionSubtitle: "The passionate people behind our success",
			member1Name: "Emily Davis",
			member1Title: "Co-Founder / CEO",
			member1Bio:
				"Emily brings 15 years of experience in product development and team leadership.",
			member1Image:
				"https://images.unsplash.com/photo-1494790108755-2616b612c1d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
			member2Name: "Michael Chen",
			member2Title: "Co-Founder / CTO",
			member2Bio:
				"Michael is a full-stack developer with expertise in scaling applications.",
			member2Image:
				"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
			member3Name: "Sarah Wilson",
			member3Title: "Head of Design",
			member3Bio:
				"Sarah creates beautiful and intuitive user experiences that delight our customers.",
			member3Image:
				"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
		},
		schema: {
			fields: [
				{
					name: "sectionTitle",
					type: "text",
					label: "Section Title",
					required: true,
				},
				{
					name: "sectionSubtitle",
					type: "textarea",
					label: "Section Subtitle",
				},
				// Member 1
				{ name: "member1Name", type: "text", label: "Member 1 Name" },
				{ name: "member1Title", type: "text", label: "Member 1 Title" },
				{ name: "member1Bio", type: "textarea", label: "Member 1 Bio" },
				{ name: "member1Image", type: "image", label: "Member 1 Photo" },
				// Member 2
				{ name: "member2Name", type: "text", label: "Member 2 Name" },
				{ name: "member2Title", type: "text", label: "Member 2 Title" },
				{ name: "member2Bio", type: "textarea", label: "Member 2 Bio" },
				{ name: "member2Image", type: "image", label: "Member 2 Photo" },
				// Member 3
				{ name: "member3Name", type: "text", label: "Member 3 Name" },
				{ name: "member3Title", type: "text", label: "Member 3 Title" },
				{ name: "member3Bio", type: "textarea", label: "Member 3 Bio" },
				{ name: "member3Image", type: "image", label: "Member 3 Photo" },
			],
		},
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString(),
	},
];

export const initializeSeedData = () => {
	// This function will be called to populate localStorage with initial component templates
	return seedComponentTemplates;
};
