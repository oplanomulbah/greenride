Project Brief: Rebrand the Donar Energy Platform to GreenRide
1. Project Objective

Conduct a comprehensive review of the existing Donar Energy codebase, from top to bottom, and transform the platform into GreenRide while preserving the existing template, layout, architecture, and overall user experience.

The goal is to adapt the current Donar Energy platform to reflect GreenRide’s identity, mission, services, and branding. The result should feel like a complete, professionally branded GreenRide platform rather than a website that has simply had its name changed.

2. Review the Existing Codebase

Before making any changes, thoroughly inspect the entire repository to understand its structure, framework, components, pages, routing, styling, assets, configuration, and existing functionality.

Read the GREENRIDE.md file carefully and use it as the primary source of truth for all GreenRide-related content, business information, branding requirements, and services.

Identify all instances of Donar Energy branding, content, references, and configurations throughout the project, including those embedded in components, shared layouts, navigation, footers, metadata, forms, and other parts of the application.

Develop a clear understanding of the existing implementation before beginning the rebranding process.

3. Branding and Visual Identity

Replace the existing Donar Energy branding with GreenRide branding throughout the entire platform.

Logo: Replace the Donar Energy logo with the official GreenRide logo, using the appropriate assets available in the repository or referenced in GREENRIDE.md.
Primary color: Replace the existing blue color scheme with GreenRide’s primary green color palette.
Color consistency: Update buttons, links, navigation elements, headings, icons, backgrounds, borders, hover states, active states, and other relevant UI elements to align with GreenRide’s visual identity.
Typography and styling: Preserve the existing design quality and visual hierarchy while making any necessary adjustments to complement the GreenRide brand.
Brand consistency: Ensure that no outdated Donar Energy logos, blue branding elements, or unrelated brand references remain in the finished platform.

Use a consistent, maintainable approach to theming. Where appropriate, update shared design tokens, CSS variables, or theme configuration rather than applying isolated styling changes across individual components.

4. Content and Business Information

Replace all Donar Energy-specific content with accurate GreenRide information based on GREENRIDE.md.

About Page

Rewrite the About page to communicate GreenRide’s identity, background, mission, vision, values, objectives, and services. Ensure the content accurately reflects the information provided in GREENRIDE.md.

Contact Page

Rewrite the Contact page to reflect GreenRide’s business identity and communication channels. Update all available contact details, including addresses, phone numbers, email addresses, and other relevant information, using the information provided in GREENRIDE.md.

Address and Contact Information

Replace Donar Energy’s address, contact information, and other business details wherever they appear throughout the platform.

General Website Content

Review all pages and components for outdated company descriptions, service information, calls to action, labels, footer content, page titles, metadata, and other references to Donar Energy. Replace them with appropriate GreenRide content.

Do not invent business details or retain Donar Energy information where GreenRide-specific information is required. If any essential information is missing from GREENRIDE.md, identify the gap rather than fabricating details.

5. Language and Internationalization

Configure the platform to support the following languages:

English: Default language.
Kiswahili (Swahili): Additional language option.
Mandarin Chinese: Additional language option.

Implement or update the language-switching functionality so users can select their preferred language through the existing interface.

Ensure that all relevant user-facing content is translated appropriately, including navigation, page headings, descriptions, buttons, forms, validation messages, notifications, and footer content.

Preserve the existing internationalization architecture if one is already implemented. Otherwise, introduce a suitable, maintainable solution that integrates cleanly with the current project.

Ensure English loads by default and that changing languages updates the relevant content consistently across the platform.

6. Images, Videos, and Animations

Preserve and reuse the existing images, videos, animations, and other visual assets from the Donar Energy platform where appropriate.

Maintain the existing visual structure and presentation while ensuring the overall experience aligns with GreenRide’s brand and services.

Do not unnecessarily remove, replace, or recreate existing assets if they remain suitable. However, update image descriptions, captions, alternative text, and other contextual content where necessary to reflect GreenRide.

Verify that all reused assets load correctly and that existing animations and media functionality continue to work.

7. Preserve the Existing Template and Functionality

Maintain the Donar Energy platform’s existing structure, layout, component hierarchy, navigation patterns, and responsive design wherever possible.

The objective is to rebrand and adapt the platform, not rebuild it from scratch.

Preserve reusable components and existing architectural patterns.
Maintain existing routes and page relationships unless changes are necessary for GreenRide.
Preserve working functionality, forms, interactions, animations, and responsive behavior.
Update components consistently so shared elements reflect GreenRide across all pages.
Avoid unnecessary dependencies, duplicated code, or unrelated architectural changes.
Ensure the platform works correctly on desktop, tablet, and mobile devices.

If any existing functionality conflicts with GreenRide’s requirements, adapt it appropriately while maintaining the overall integrity of the application.

8. Implementation and Quality Assurance

After completing the changes, perform a comprehensive review of the repository and validate the implementation.

Verify that:

All relevant Donar Energy references have been replaced with GreenRide branding and content.
The GreenRide logo and green color scheme are applied consistently throughout the platform.
English is the default language, with working Kiswahili and Mandarin Chinese language options.
The About and Contact pages accurately reflect GreenRide.
Contact details and business information are consistent with GREENRIDE.md.
Existing images, videos, animations, navigation, forms, and interactions continue to function.
All pages render correctly across supported screen sizes.
No broken links, missing assets, console errors, or avoidable layout issues remain.
The project builds and runs successfully using its existing development workflow.
No unrelated functionality has been removed or unintentionally broken.

Use the repository’s existing linting, testing, and build commands where available. Fix any issues introduced by the rebranding process.

9. Execution Guidelines
Read GREENRIDE.md thoroughly before implementing changes.
Inspect the complete repository rather than modifying only the homepage or a few visible components.
Reuse existing components, assets, and architecture wherever practical.
Apply changes consistently across all pages and shared UI elements.
Do not stop after providing an analysis or implementation plan; proceed with the actual code changes.
Do not leave placeholder content, incomplete translations, or outdated Donar Energy references in the finished implementation.
Avoid unrelated refactoring or changes that do not contribute to the requested transformation.
If a requirement cannot be completed because necessary information or assets are missing, document the limitation clearly.
10. Expected Deliverable

Deliver a fully rebranded, functional GreenRide platform based on the existing Donar Energy template.

The final implementation should preserve the original platform’s structure and quality while consistently reflecting GreenRide’s brand identity, green color palette, business information, mission, vision, services, and multilingual requirements.

Success criterion: The entire application should present itself as GreenRide, not Donar Energy, while retaining the useful structure, design patterns, media assets, and functionality of the original platform.

Begin by inspecting the repository and reading GREENRIDE.md, then implement the changes across the entire codebase and verify the results.