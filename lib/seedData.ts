import { ComponentTemplate } from "@/types";
import { generateId, componentTemplateStorage } from "./localStorage";

export const seedComponentTemplates: ComponentTemplate[] = [
	// AgriFood Tech Hero Section - Main Hero
	{
		id: "required-program-hero",
		name: "Hero Section",
		category: "hero",
		variant: "agrifood-main",
		description:
			"Modern hero section with cover image, header navigation, and clean program information layout",
		htmlContent: `
      <section class="relative overflow-hidden">
        <!-- Cover Image Background -->
        <div
          class="w-full bg-cover bg-center bg-no-repeat h-[40dvh] hero-cover-bg"
          style="--desktop-bg: url('{{coverImageDesktop}}'); --mobile-bg: url('{{coverImageMobile}}'); background-image: var(--desktop-bg);"
        ></div>
        
        <!-- Content Below Cover -->
        <div class="flex md:flex-row flex-col justify-between items-center space-y-6 py-6 px-4 md:px-20" style="background-color: {{backgroundColor}}; color: {{textColor}};">
          <div class="w-full flex items-center gap-4">
            <img
              src="{{logoUrl}}"
              alt="{{organizationName}} logo"
              class="hidden md:block h-40 w-40"
            />
            <div class="flex flex-col space-y-2">
              <!-- Program Title -->
              <h2 class="text-xl lg:text-3xl font-bold">
                {{programTitle}}
              </h2>
              
              <!-- Program Description -->
              <p class="text-gray-400 max-w-2xl">
                {{programDescription}}
              </p>
            </div>
          </div>
          
          <div class="w-full flex items-center justify-between md:justify-center gap-10">
            <div class="flex flex-col justify-center">
              <div class="flex items-center gap-2">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
                <p class="text-gray-400">{{participantCount}}</p>
              </div>
              <p>{{participantLabel}}</p>
            </div>
            
            <div class="flex flex-col justify-center">
              <div class="flex items-center gap-2">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>{{timeLeft}}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `,
		cssStyles: `
			/* Responsive background images using CSS custom properties */
			@media (max-width: 767px) {
				.hero-cover-bg {
					background-image: var(--mobile-bg, var(--desktop-bg)) !important;
				}
			}
		`,
		defaultData: {
			organizationName: "AgriFoodTech",
			logoUrl: "https://cdn.fs.agorize.com/8PbH4RChRGrltQW5XjqR",
			programTitle: "AgriFoodTech Incubator 4th Edition",
			programDescription:
				"Nurturing the seeds of the Moroccan agricultural transformation",
			coverImageDesktop: "https://cdn.fs.agorize.com/WqF5kkL9RzS8k6UzUgYn",
			coverImageMobile: "https://cdn.fs.agorize.com/bysRTb4HSsaBDsEAuLDL",
			participantCount: "1000",
			participantLabel: "Participants",
			timeLeft: "48 days left",
			backgroundColor: "#ffffff",
			textColor: "#000000",
		},
		schema: {
			fields: [
				{
					name: "coverImageDesktop",
					type: "image",
					label: "Cover Image (Desktop)",
					required: true,
					tab: "content",
				},
				{
					name: "coverImageMobile",
					type: "image",
					label: "Cover Image (Mobile)",
					tab: "content",
				},
				{
					name: "backgroundColor",
					type: "color",
					label: "Background Color",
					tab: "style",
				},
				{
					name: "textColor",
					type: "color",
					label: "Text Color",
					tab: "style",
				},
			],
		},
		isActive: true,
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
            <div class=" -mr-2 -my-2 md:hidden">
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

	// About Section - Simple Layout (REPLACED WITH MODERN VERSION)
	{
		id: generateId(),
		name: "About - Modern Animated",
		category: "about",
		variant: "modern-animated",
		description:
			"Modern about section with animated numbers, smooth transitions, and contemporary design inspired by skiper-ui",
		htmlContent: `
      <section class="bg-gradient-to-br from-slate-50 to-blue-50 py-20 overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <!-- Header with fade-in animation -->
          <div class="text-center mb-16 opacity-0 animate-fade-in">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-blue-500 rounded-2xl mb-6 transform rotate-3 hover:rotate-6 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              {{sectionTitle}}
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {{description}}
            </p>
          </div>
          
          <!-- Animated Stats Grid -->
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div class="text-center group cursor-pointer">
              <div class="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/20">
                <div class="text-4xl font-bold text-blue-600 mb-2 counter" data-target="{{stat1Number}}">0</div>
                <div class="text-sm text-gray-600 font-medium">{{stat1Label}}</div>
              </div>
            </div>
            <div class="text-center group cursor-pointer">
              <div class="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/20">
                <div class="text-4xl font-bold text-emerald-600 mb-2 counter" data-target="{{stat2Number}}">0</div>
                <div class="text-sm text-gray-600 font-medium">{{stat2Label}}</div>
              </div>
            </div>
            <div class="text-center group cursor-pointer">
              <div class="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/20">
                <div class="text-4xl font-bold text-purple-600 mb-2 counter" data-target="{{stat3Number}}">0</div>
                <div class="text-sm text-gray-600 font-medium">{{stat3Label}}</div>
              </div>
            </div>
            <div class="text-center group cursor-pointer">
              <div class="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/20">
                <div class="text-4xl font-bold text-orange-600 mb-2 counter" data-target="{{stat4Number}}">0</div>
                <div class="text-sm text-gray-600 font-medium">{{stat4Label}}</div>
              </div>
            </div>
          </div>

          <!-- Content Card with Floating Elements -->
          <div class="relative">
            <div class="bg-white/80 backdrop-blur-lg rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/20 relative overflow-hidden">
              <!-- Floating decoration -->
              <div class="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
              <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-emerald-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
              
              <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div class="space-y-6">
                  <h3 class="text-2xl font-bold text-gray-900 mb-4">{{contentTitle}}</h3>
                  <p class="text-lg text-gray-700 leading-relaxed">
                    {{content}}
                  </p>
                  
                  <!-- Animated highlights -->
                  <div class="flex flex-wrap gap-3 mt-8">
                    <span class="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors duration-200 cursor-pointer">
                      <span class="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                      {{highlight1}}
                    </span>
                    <span class="inline-flex items-center px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium hover:bg-emerald-100 transition-colors duration-200 cursor-pointer">
                      <span class="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
                      {{highlight2}}
                    </span>
                    <span class="inline-flex items-center px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-100 transition-colors duration-200 cursor-pointer">
                      <span class="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></span>
                      {{highlight3}}
                    </span>
                  </div>
                </div>
                
                <div class="relative">
                  <div class="relative group">
                    <img class="w-full rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105" src="{{imageUrl}}" alt="{{imageAlt}}">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <!-- Floating badge -->
                  <div class="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl transform rotate-6 hover:rotate-12 transition-transform duration-300">
                    <div class="text-2xl">🚀</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `,
		cssStyles: `
			@keyframes fade-in {
				from { opacity: 0; transform: translateY(30px); }
				to { opacity: 1; transform: translateY(0); }
			}
			
			@keyframes counter {
				from { transform: translateY(10px); opacity: 0; }
				to { transform: translateY(0); opacity: 1; }
			}
			
			.animate-fade-in {
				animation: fade-in 0.6s ease-out forwards;
				animation-delay: 0.2s;
			}
			
			.counter {
				animation: counter 0.6s ease-out;
			}
			
			/* Number Counter Animation */
			.counter-animation {
				animation: counter 0.6s ease-out;
			}
		`,
		defaultData: {
			sectionTitle: "Innovation at Scale",
			description:
				"Transforming ideas into breakthrough solutions through cutting-edge technology and collaborative innovation.",
			contentTitle: "Our Story",
			content:
				"We're pioneering the future of agricultural technology by bridging the gap between innovative startups and market success. Our comprehensive ecosystem provides the tools, mentorship, and resources needed to transform bold ideas into scalable solutions that make a real impact.",
			imageUrl:
				"https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80",
			imageAlt: "Innovation workspace",
			stat1Number: "250",
			stat1Label: "Startups",
			stat2Number: "15",
			stat2Label: "Million €",
			stat3Number: "85",
			stat3Label: "Success Rate %",
			stat4Number: "50",
			stat4Label: "Mentors",
			highlight1: "AI-Powered",
			highlight2: "Sustainable",
			highlight3: "Scalable",
		},
		schema: {
			fields: [
				{
					name: "sectionTitle",
					type: "text",
					label: "Section Title",
					required: true,
				},
				{ name: "description", type: "textarea", label: "Description" },
				{ name: "contentTitle", type: "text", label: "Content Title" },
				{ name: "content", type: "textarea", label: "Main Content" },
				{ name: "imageUrl", type: "image", label: "Feature Image" },
				{ name: "imageAlt", type: "text", label: "Image Alt Text" },
				{ name: "stat1Number", type: "text", label: "Statistic 1 Number" },
				{ name: "stat1Label", type: "text", label: "Statistic 1 Label" },
				{ name: "stat2Number", type: "text", label: "Statistic 2 Number" },
				{ name: "stat2Label", type: "text", label: "Statistic 2 Label" },
				{ name: "stat3Number", type: "text", label: "Statistic 3 Number" },
				{ name: "stat3Label", type: "text", label: "Statistic 3 Label" },
				{ name: "stat4Number", type: "text", label: "Statistic 4 Number" },
				{ name: "stat4Label", type: "text", label: "Statistic 4 Label" },
				{ name: "highlight1", type: "text", label: "Highlight 1" },
				{ name: "highlight2", type: "text", label: "Highlight 2" },
				{ name: "highlight3", type: "text", label: "Highlight 3" },
			],
		},
		isActive: true,
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString(),
	},

	// Mission Section - Modern Card with Animations (REPLACED)
	{
		id: generateId(),
		name: "Mission - Interactive Card",
		category: "mission",
		variant: "interactive-card",
		description:
			"Interactive mission card with hover effects, animated icons, and modern glassmorphism design inspired by skiper-ui",
		htmlContent: `
      <section class="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 py-20 relative overflow-hidden">
        <!-- Animated background elements -->
        <div class="absolute inset-0">
          <div class="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div class="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s;"></div>
        </div>
        
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <!-- Header -->
          <div class="text-center mb-16">
            <div class="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-lg rounded-3xl mb-8 group hover:scale-110 transition-transform duration-300">
              <svg class="w-10 h-10 text-white group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="{{iconPath}}"></path>
              </svg>
            </div>
            <h2 class="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              {{sectionTitle}}
            </h2>
          </div>
          
          <!-- Mission Card -->
          <div class="relative group cursor-pointer">
            <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-25 group-hover:opacity-75 transition-opacity duration-500"></div>
            <div class="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/20 hover:border-white/40 transition-all duration-500">
              
              <!-- Mission Content -->
              <div class="text-center space-y-8">
                <h3 class="text-3xl md:text-4xl font-bold text-white mb-6">{{missionTitle}}</h3>
                <p class="text-xl text-white/80 leading-relaxed max-w-4xl mx-auto">
                  {{missionStatement}}
                </p>
                
                <!-- Metrics with Animation -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  <div class="group/metric hover:scale-105 transition-transform duration-300">
                    <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                      <div class="text-4xl font-bold text-blue-300 mb-2 counter" data-target="{{metric1Value}}">0</div>
                      <div class="text-white/70 font-medium">{{metric1Label}}</div>
                      <div class="w-full bg-white/20 rounded-full h-2 mt-4">
                        <div class="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full transition-all duration-1000 group-hover/metric:w-full" style="width: 70%;"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="group/metric hover:scale-105 transition-transform duration-300">
                    <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                      <div class="text-4xl font-bold text-emerald-300 mb-2 counter" data-target="{{metric2Value}}">0</div>
                      <div class="text-white/70 font-medium">{{metric2Label}}</div>
                      <div class="w-full bg-white/20 rounded-full h-2 mt-4">
                        <div class="bg-gradient-to-r from-emerald-400 to-emerald-600 h-2 rounded-full transition-all duration-1000 group-hover/metric:w-full" style="width: 85%;"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="group/metric hover:scale-105 transition-transform duration-300">
                    <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                      <div class="text-4xl font-bold text-purple-300 mb-2 counter" data-target="{{metric3Value}}">0</div>
                      <div class="text-white/70 font-medium">{{metric3Label}}</div>
                      <div class="w-full bg-white/20 rounded-full h-2 mt-4">
                        <div class="bg-gradient-to-r from-purple-400 to-purple-600 h-2 rounded-full transition-all duration-1000 group-hover/metric:w-full" style="width: 90%;"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- CTA Button -->
                <div class="mt-12">
                  <button class="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                    <span>Learn More</span>
                    <svg class="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `,
		cssStyles: `
			@keyframes float {
				0%, 100% { transform: translateY(0px); }
				50% { transform: translateY(-20px); }
			}
			
			.animate-float {
				animation: float 6s ease-in-out infinite;
			}
			
			/* Enhanced counter animation */
			.counter {
				opacity: 0;
				animation: fadeInUp 0.8s ease-out forwards;
			}
			
			@keyframes fadeInUp {
				from {
					opacity: 0;
					transform: translateY(30px);
				}
				to {
					opacity: 1;
					transform: translateY(0);
				}
			}
		`,
		defaultData: {
			sectionTitle: "Our Mission",
			missionTitle: "Accelerating Innovation",
			missionStatement:
				"We empower the next generation of agricultural pioneers by providing cutting-edge resources, expert mentorship, and a collaborative ecosystem where breakthrough ideas transform into solutions that feed the world sustainably.",
			iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
			metric1Value: "100",
			metric1Label: "Startups Accelerated",
			metric2Value: "50",
			metric2Label: "Million € Raised",
			metric3Value: "25",
			metric3Label: "Success Stories",
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
					name: "missionTitle",
					type: "text",
					label: "Mission Title",
					required: true,
				},
				{
					name: "missionStatement",
					type: "textarea",
					label: "Mission Statement",
					required: true,
				},
				{ name: "iconPath", type: "text", label: "Icon SVG Path" },
				{ name: "metric1Value", type: "text", label: "Metric 1 Value" },
				{ name: "metric1Label", type: "text", label: "Metric 1 Label" },
				{ name: "metric2Value", type: "text", label: "Metric 2 Value" },
				{ name: "metric2Label", type: "text", label: "Metric 2 Label" },
				{ name: "metric3Value", type: "text", label: "Metric 3 Value" },
				{ name: "metric3Label", type: "text", label: "Metric 3 Label" },
			],
		},
		isActive: true,
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString(),
	},

	// Vision Section - Modern Interactive (REPLACED)
	{
		id: generateId(),
		name: "Vision - Modern Interactive",
		category: "vision",
		variant: "modern-interactive",
		description:
			"Interactive vision section with timeline animation, hover effects, and modern design inspired by skiper-ui",
		htmlContent: `
      <section class="bg-gradient-to-br from-gray-50 to-blue-50 py-20 relative overflow-hidden">
        <!-- Background Pattern -->
        <div class="absolute inset-0 opacity-40">
          <div class="absolute inset-0" style="background-image: radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px), radial-gradient(circle at 75% 75%, #8b5cf6 2px, transparent 2px); background-size: 60px 60px;"></div>
        </div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <!-- Header -->
          <div class="text-center mb-20">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-8 transform hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
            </div>
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              {{sectionTitle}}
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              {{visionDescription}}
            </p>
          </div>
          
          <!-- Main Content Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <!-- Left: Vision Content -->
            <div class="space-y-8">
              <h3 class="text-3xl font-bold text-gray-900">{{visionTitle}}</h3>
              <p class="text-lg text-gray-700 leading-relaxed">
                {{visionStatement}}
              </p>
              
              <!-- Interactive Goals Timeline -->
              <div class="space-y-6 mt-12">
                <div class="flex items-start group cursor-pointer hover:bg-white/50 p-4 rounded-2xl transition-all duration-300">
                  <div class="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <span class="text-white font-bold">1</span>
                  </div>
                  <div class="ml-4 flex-1">
                    <h4 class="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{{goal1Title}}</h4>
                    <p class="text-gray-600 mt-1">{{goal1}}</p>
                    <div class="w-full bg-gray-200 rounded-full h-2 mt-3">
                      <div class="bg-blue-500 h-2 rounded-full transition-all duration-1000 group-hover:w-full" style="width: 30%;"></div>
                    </div>
                  </div>
                </div>
                
                <div class="flex items-start group cursor-pointer hover:bg-white/50 p-4 rounded-2xl transition-all duration-300">
                  <div class="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center group-hover:bg-emerald-600 transition-colors duration-300">
                    <span class="text-white font-bold">2</span>
                  </div>
                  <div class="ml-4 flex-1">
                    <h4 class="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">{{goal2Title}}</h4>
                    <p class="text-gray-600 mt-1">{{goal2}}</p>
                    <div class="w-full bg-gray-200 rounded-full h-2 mt-3">
                      <div class="bg-emerald-500 h-2 rounded-full transition-all duration-1000 group-hover:w-full" style="width: 60%;"></div>
                    </div>
                  </div>
                </div>
                
                <div class="flex items-start group cursor-pointer hover:bg-white/50 p-4 rounded-2xl transition-all duration-300">
                  <div class="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-300">
                    <span class="text-white font-bold">3</span>
                  </div>
                  <div class="ml-4 flex-1">
                    <h4 class="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">{{goal3Title}}</h4>
                    <p class="text-gray-600 mt-1">{{goal3}}</p>
                    <div class="w-full bg-gray-200 rounded-full h-2 mt-3">
                      <div class="bg-purple-500 h-2 rounded-full transition-all duration-1000 group-hover:w-full" style="width: 45%;"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Right: Interactive Image Card -->
            <div class="relative">
              <div class="relative group">
                <!-- Main Image -->
                <div class="relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-lg p-4 shadow-2xl hover:shadow-3xl transition-all duration-500">
                  <img class="w-full rounded-2xl transition-transform duration-500 group-hover:scale-105" src="{{visionImage}}" alt="{{imageAlt}}">
                  <div class="absolute inset-4 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <!-- Overlay Content -->
                  <div class="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <h4 class="text-xl font-bold mb-2">Future of Innovation</h4>
                    <p class="text-sm">Transforming ideas into reality</p>
                  </div>
                </div>
                
                <!-- Floating Elements -->
                <div class="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center text-white font-bold text-xl transform rotate-12 hover:rotate-6 transition-transform duration-300 shadow-lg">
                  2030
                </div>
                
                <div class="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-2xl flex items-center justify-center transform -rotate-12 hover:rotate-0 transition-transform duration-300 shadow-lg">
                  <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `,
		cssStyles: `
			@keyframes slideInLeft {
				from {
					opacity: 0;
					transform: translateX(-50px);
				}
				to {
					opacity: 1;
					transform: translateX(0);
				}
			}
			
			@keyframes slideInRight {
				from {
					opacity: 0;
					transform: translateX(50px);
				}
				to {
					opacity: 1;
					transform: translateX(0);
				}
			}
			
			.slide-in-left {
				animation: slideInLeft 0.6s ease-out;
			}
			
			.slide-in-right {
				animation: slideInRight 0.6s ease-out;
			}
			
			/* Progress bar animation */
			.progress-bar {
				transition: width 2s ease-in-out;
			}
		`,
		defaultData: {
			sectionTitle: "Our Vision",
			visionDescription:
				"Shaping the future of sustainable agriculture through innovation and technology",
			visionTitle: "The Future We're Building",
			visionStatement:
				"We envision a world where cutting-edge agricultural technology creates sustainable, profitable farming solutions that feed growing populations while preserving our planet for future generations.",
			visionImage:
				"https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
			imageAlt: "Future of agriculture",
			goal1Title: "Innovation Hub",
			goal1:
				"Establish Morocco as the leading AgriTech innovation center in Africa",
			goal2Title: "Startup Ecosystem",
			goal2:
				"Support 1000+ agricultural startups by 2030 with comprehensive resources",
			goal3Title: "Global Impact",
			goal3:
				"Create sustainable farming solutions benefiting millions worldwide",
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
					name: "visionDescription",
					type: "text",
					label: "Vision Description",
				},
				{
					name: "visionTitle",
					type: "text",
					label: "Vision Title",
					required: true,
				},
				{
					name: "visionStatement",
					type: "textarea",
					label: "Vision Statement",
					required: true,
				},
				{ name: "visionImage", type: "image", label: "Vision Image" },
				{ name: "imageAlt", type: "text", label: "Image Alt Text" },
				{ name: "goal1Title", type: "text", label: "Goal 1 Title" },
				{ name: "goal1", type: "text", label: "Goal 1" },
				{ name: "goal2Title", type: "text", label: "Goal 2 Title" },
				{ name: "goal2", type: "text", label: "Goal 2" },
				{ name: "goal3Title", type: "text", label: "Goal 3 Title" },
				{ name: "goal3", type: "text", label: "Goal 3" },
			],
		},
		isActive: true,
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString(),
	},

	// About Section - Stats Layout (ENHANCED VERSION)
	{
		id: generateId(),
		name: "About - Animated Stats Grid",
		category: "about",
		variant: "animated-stats",
		description:
			"Modern stats section with animated counters, progressive disclosure, and interactive elements inspired by skiper-ui",
		htmlContent: `
      <section class="bg-white py-20 relative overflow-hidden">
        <!-- Background decorations -->
        <div class="absolute top-0 left-0 w-full h-full">
          <div class="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
          <div class="absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full animate-ping" style="animation-delay: 1s;"></div>
          <div class="absolute bottom-32 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-ping" style="animation-delay: 2s;"></div>
          <div class="absolute bottom-20 right-20 w-3 h-3 bg-orange-400 rounded-full animate-ping" style="animation-delay: 3s;"></div>
        </div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <!-- Header -->
          <div class="text-center mb-20">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-8 transform hover:rotate-12 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
              </svg>
            </div>
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              {{sectionTitle}}
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              {{subtitle}}
            </p>
          </div>
          
          <!-- Interactive Stats Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div class="group cursor-pointer">
              <div class="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-blue-200/50 hover:border-blue-300 overflow-hidden">
                <div class="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div class="relative z-10">
                  <div class="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <div class="text-4xl font-bold text-blue-600 mb-2 counter" data-target="{{stat1Number}}">0</div>
                  <div class="text-gray-600 font-medium">{{stat1Label}}</div>
                  <div class="mt-4 w-full bg-blue-200 rounded-full h-1">
                    <div class="bg-blue-500 h-1 rounded-full transition-all duration-1000 group-hover:w-full" style="width: 0%;"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="group cursor-pointer">
              <div class="relative bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-emerald-200/50 hover:border-emerald-300 overflow-hidden">
                <div class="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div class="relative z-10">
                  <div class="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                    </svg>
                  </div>
                  <div class="text-4xl font-bold text-emerald-600 mb-2 counter" data-target="{{stat2Number}}">0</div>
                  <div class="text-gray-600 font-medium">{{stat2Label}}</div>
                  <div class="mt-4 w-full bg-emerald-200 rounded-full h-1">
                    <div class="bg-emerald-500 h-1 rounded-full transition-all duration-1000 group-hover:w-full" style="width: 0%;"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="group cursor-pointer">
              <div class="relative bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-purple-200/50 hover:border-purple-300 overflow-hidden">
                <div class="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div class="relative z-10">
                  <div class="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div class="text-4xl font-bold text-purple-600 mb-2 counter" data-target="{{stat3Number}}">0</div>
                  <div class="text-gray-600 font-medium">{{stat3Label}}</div>
                  <div class="mt-4 w-full bg-purple-200 rounded-full h-1">
                    <div class="bg-purple-500 h-1 rounded-full transition-all duration-1000 group-hover:w-full" style="width: 0%;"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="group cursor-pointer">
              <div class="relative bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-orange-200/50 hover:border-orange-300 overflow-hidden">
                <div class="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div class="relative z-10">
                  <div class="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"></path>
                    </svg>
                  </div>
                  <div class="text-4xl font-bold text-orange-600 mb-2 counter" data-target="{{stat4Number}}">0</div>
                  <div class="text-gray-600 font-medium">{{stat4Label}}</div>
                  <div class="mt-4 w-full bg-orange-200 rounded-full h-1">
                    <div class="bg-orange-500 h-1 rounded-full transition-all duration-1000 group-hover:w-full" style="width: 0%;"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Description Card -->
          <div class="max-w-5xl mx-auto">
            <div class="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-200/50 relative overflow-hidden">
              <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"></div>
              <div class="relative z-10 text-center">
                <h3 class="text-2xl font-bold text-gray-900 mb-6">{{contentTitle}}</h3>
                <p class="text-lg text-gray-700 leading-relaxed">
                  {{description}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `,
		cssStyles: `
			@keyframes countUp {
				from {
					transform: translateY(20px);
					opacity: 0;
				}
				to {
					transform: translateY(0);
					opacity: 1;
				}
			}
			
			.counter {
				animation: countUp 0.6s ease-out;
				animation-fill-mode: both;
			}
			
			@keyframes progressFill {
				from { width: 0%; }
				to { width: 100%; }
			}
			
			.progress-animation {
				animation: progressFill 2s ease-out forwards;
			}
		`,
		defaultData: {
			sectionTitle: "Impact in Numbers",
			subtitle:
				"Measurable results driving the future of agricultural innovation",
			contentTitle: "Building Tomorrow's Agriculture",
			stat1Number: "250",
			stat1Label: "Startups Launched",
			stat2Number: "15",
			stat2Label: "Million € Funding",
			stat3Number: "85",
			stat3Label: "Success Rate %",
			stat4Number: "50",
			stat4Label: "Expert Mentors",
			description:
				"Our commitment to excellence has created a thriving ecosystem where agricultural innovation flourishes. Through strategic partnerships, cutting-edge technology, and unwavering support, we've established ourselves as the premier destination for agtech entrepreneurs seeking to transform their vision into reality.",
		},
		schema: {
			fields: [
				{
					name: "sectionTitle",
					type: "text",
					label: "Section Title",
					required: true,
				},
				{ name: "subtitle", type: "text", label: "Subtitle" },
				{ name: "contentTitle", type: "text", label: "Content Title" },
				{ name: "stat1Number", type: "text", label: "Statistic 1 Number" },
				{ name: "stat1Label", type: "text", label: "Statistic 1 Label" },
				{ name: "stat2Number", type: "text", label: "Statistic 2 Number" },
				{ name: "stat2Label", type: "text", label: "Statistic 2 Label" },
				{ name: "stat3Number", type: "text", label: "Statistic 3 Number" },
				{ name: "stat3Label", type: "text", label: "Statistic 3 Label" },
				{ name: "stat4Number", type: "text", label: "Statistic 4 Number" },
				{ name: "stat4Label", type: "text", label: "Statistic 4 Label" },
				{ name: "description", type: "textarea", label: "Description" },
			],
		},
		isActive: true,
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString(),
	},
];

export function initializeSeedData(): ComponentTemplate[] {
	return seedComponentTemplates;
}

// Function to refresh required templates
export function refreshRequiredTemplates(): void {
	const existingTemplates = componentTemplateStorage.getAll();
	const requiredTemplate = seedComponentTemplates.find(
		(template) => template.id === "required-program-hero"
	);

	if (
		requiredTemplate &&
		!existingTemplates.some(
			(t: ComponentTemplate) => t.id === requiredTemplate.id
		)
	) {
		componentTemplateStorage.save(requiredTemplate);
	}
}

// Function to force refresh all component templates with new data
export function forceRefreshComponentTemplates(): void {
	// Clear existing templates
	localStorage.removeItem("pageBuilder_componentTemplates");

	// Reinitialize with fresh seed data
	const freshTemplates = initializeSeedData();
	componentTemplateStorage.saveMany(freshTemplates);
}

// Export seed data initialization function
export { seedComponentTemplates as default };
