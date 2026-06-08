Local Setup
https://www.aem.live/developer/tutorial
clone boilerplate code from  https://github.com/adobe/aem-boilerplate
give cmd npm install -g @adobe/aem-cli
To start eds give cmd as aem up
Starts with 3000 port by default local
Enter da.live and give ur site url as below https://main--aem-boilerplate--adobe.aem.page   (main-branch name, aemboilerplate - repo name, adobe - org name)
https://main--eds--charan7003.aem.page/

Adobe git repository -> use template -> your personal github repo (sign in before) 
Now the repo will be in ur personal github
Register aem code sync app to ur personal github
The only remaining step in GitHub is to install the AEM Code Sync GitHub App on your repository by visiting this link:  https://github.com/apps/aem-code-sync/installations/new

AEM Code Sync registered
Thank you for registering the AEM Code Sync GitHub App. Your site is now ready.
Welcome to Adobe Experience Manager.
We made recent changes to the setup process for Adobe Experience Manager.
If you have any feedback, please let us know, either on Slack, Teams or Discord.
What we did:
• Set up AEM for charan7003 / eds.
• Made charan7003@gmail.com* an admin.
• Started AEM Code Sync for selected GitHub repositories.
*We are using the primary email address set in the GitHub account that just installed AEM Code Sync as the default admin. If this is not the account you want to use as the default admin, feel free to change it in the User Admin Tool.
What's next:
Create your content:
https://da.live/start?org=charan7003&site=eds
Check your site:
Preview:  https://main--eds--charan7003.aem.page/
Live:  https://main--eds--charan7003.aem.live/
Add users:
Use the admin tool: https://labs.aem.live/tools/user-admin/index.html


Introduction to Edge Delivery Services

After completing this module, you will be able to:
    • Understand the core concepts of Edge Delivery Services
    • Explain how Edge Delivery Services decouples content from code as a guiding principle
    • Understand the content authoring methods supported by Edge Delivery Services
    • Describe the key benefits of Edge Delivery Services

Setting Up Edge Delivery Services

After completing this module, you will be able to:
    • Describe the high-level architecture of Edge Delivery Services
    • Explain how the authoring and development flows work
    • Understand the initial setup process for the site

From Document to Page

After completing this module, you will be able to:
    • Create and edit content using AEM Sidekick and the Document Authoring editor
    • Describe the different components and forms of content that make up a page document in Edge Delivery Services
    • Understand how a document’s markup is translated into a site page's DOM
    • Explain some of the key functions provided by the boilerplate code
    • Develop performant blocks which follow Adobe's recommended best practices
    • Configure your Edge Delivery Services site with redirects, metadata, and other site critical behaviors

Optimizing Content Delivery

After completing this module, you will be able to:
    • Understand key web performance tools, including PageSpeed Insights and Lighthouse
    • Explain how performance metrics—First Contentful Paint (FCP), Largest Contentful Paint (LCP), Total Blocking Time (TBT), Cumulative Layout Shift (CLS), and Speed Index (SI)—are actively measured and reported
    • Tackle and eliminate performance issues on your site
    • Format pull requests so that automated testing runs seamlessly
    • Adopt code-management practices that actively optimize performance

Launching Your Website

After completing this module, you will be able to:
    • Use the go-live checklist
    • Validate your site through performance testing and analytics
    • Configure key settings to improve and maintain user experience during site migration
    • Set up your CDN and configure push invalidation

Monitoring and Management

After completing this module, you will be able to:
    • Employ OpTel tools to track, monitor, and visualize website performance, traffic acquisition, and conversion
    • Use the audit log to track various backend operations

Security Fundamentals in Edge Delivery Services

After completing this module, you will be able to:
    • Describe the fundamental security features and best practices for Edge Delivery Services
    • Configure the key security and access-control protocols for an Edge Delivery Services project

Advanced Development Topics

After completing this module, you will be able to:
    • Explain the different methods of updating the site configuration and when to use them
    • Configure a robust localization framework for multilingual and/or multiregional websites that follows best practices
    • Implement Adobe Experience Manager Forms capabilities for projects that use document-based authoring or the Universal Editor
    • Use content importing tools to migrate an existing site to Edge Delivery Services
    • Summarize the use cases of some of the tools provided through Admin Labs




Introduction to Edge Delivery Services

Edge Delivery Services redefines the way we build and deliver web experiences. It eliminates cumbersome staging environments and lengthy build processes by leveraging modern web fundamentals—semantic HTML, vanilla JavaScript, and a modular architecture—to give you fast, responsive, and scalable sites. This approach is built for developers who want to concentrate on code quality and performance rather than wrangling with legacy workflows.
In this lesson, we'll cover some of the key technical benefits of Edge Delivery Services and how you can utilize them in your development process.


Key technical benefits
Instant feedback and agile development

    • Real-time previews: Set up a GitHub repository using a streamlined boilerplate template and see your changes live instantly—no need for traditional staging environments.
    • Efficient iteration: Make modifications quickly with immediate feedback, enabling constant iterative improvement.
Familiar tools, modern practices

    • Use what you know: Continue using GitHub, HTML, CSS, and JavaScript. There’s no steep learning curve—just enhanced, modern practices built on familiar tools.
    • Modular design with blocks: Break your pages into logical, reusable blocks that decorate the server-rendered DOM with dynamic enhancements. This not only simplifies code maintenance but also promotes scalable solutions.
Performance-first approach

    • Optimized loading strategy: Implement a three-phase loading strategy (Eager, Lazy, Delayed) that ensures critical content is prioritized while non-essential elements load later, boosting Core Web Vitals out of the box.
    • Integrated performance audits: Leverage built-in tools like PageSpeed Insights and Lighthouse to continuously fine-tune performance, ensuring an exceptional user experience.
Security and flexibility

    • Robust security: Utilize industry-standard encryption (TLS 1.2+ and AES-256) and granular role-based access control to secure your applications.
    • Centralized configuration: Enjoy flexible deployment options — whether via API-driven configurations or a repo-less approach — that streamline the management of multiple projects.
In short, developing for Edge Delivery Services is about embracing a forward-looking, performance-first mindset that reimagines content delivery. This future is defined by:
    • Speed: Deliver content rapidly without compromising on quality.
    • Simplicity: Leverage familiar tools in a modern, agile development environment.
    • Scalability: Build and maintain robust, high-performance sites that can evolve with your needs.
By embracing Edge Delivery Services, you’ll unlock faster development cycles, achieve superior performance, and maintain a lean, adaptable codebase—all while using the tools you already know.


1. Edge Delivery Services streamlines web development by removing traditional staging environments and enabling real-time previews, accelerating feedback and iteration cycles.
2. 2
Developers can use familiar tools like HTML, CSS, JavaScript, and GitHub while adopting modern practices such as modular block-based architecture for scalable and maintainable code.
3. 3
A performance-first mindset is built in, with a three-phase loading strategy (Eager, Lazy, Delayed) and integrated tools like Lighthouse and PageSpeed Insights to optimize Core Web Vitals.
4. 4
Security and flexibility are prioritized, offering TLS 1.2+ encryption, role-based access control, and centralized configuration options for managing multiple projects efficiently.



What is Edge Delivery Services?
Edge Delivery Services is an innovative publishing and delivery service situated at the edge. By rendering content dynamically at the edge, it enables instant updates without lengthy build processes.
Edge Delivery Services optimizes performance through caching, real-time rendering, and automated checks using Operational Telemetry (OpTel) and Google PageSpeed Insights. It supports both small and large/complex sites, offering easy setup for smaller projects and scalability for high-traffic environments. Authors can create content in their preferred tools, for example in-context editing with Universal Editor or via document authoring, while developers manage site functionality in GitHub.

While most platforms rely on a developer having an in-depth understanding of the underlying architecture, Edge Delivery Services abstracts much of this away and only requires a basic understanding of JavaScript, HTML, and CSS to be used effectively. At its core, Edge Delivery Services is designed to streamline the content creation and development processes by focusing on value over features and on ease of use. This allows for fast website scaling and lower operating costs while still delivering a performant experience that follows industry best practices.

Benefits of Edge Delivery Services
Edge Delivery Services offers companies a variety of benefits to meet their business needs, whether it's continuous content growth, adapting to changing trends, or scaling content production for multiple channels.
Let’s look at some of these key benefits:

Enhanced performance

By delivering content from edge locations closest to end-users, Edge Delivery Services reduces latency and improves page-load speeds. A fast-loading website helps ensure a seamless user experience and keeps them engaged and satisfied.

Speed, scalability and security

The serverless edge architecture allows for easy scalability and updates, supporting both simple and complex content needs. This makes it suitable for a wide range of projects, from blogs to large-scale e-commerce platforms. You can efficiently handle traffic spikes, ensure your content is always up to date, and protect user data through HTTPS and other security protocols.

Flexible authoring

Authors can create content using their preferred tools, including in-context editing with Universal Editor in Adobe Experience Manager or Document Authoring (DA), Microsoft Word, Google Docs, and more. This flexibility allows authors to update and publish content quickly with tools they’re already familiar with, greatly enhancing productivity and efficiency.

Efficient development

The built-in experimentation framework and development tools allow code updates to be quickly created, tested, and deployed, greatly increasing development velocity.

Real-time monitoring

Operational Telemetry (OpTel) continuously tracks site performance through actual user interactions, ensuring optimal performance and user experience.

Performance optimization

Edge Delivery Services focuses on improving key performance metrics like Google Lighthouse scores and Core Web Vitals, ensuring your site meets industry standards for speed, interactivity, and visual stability. High-performing websites are more likely to rank higher in search results, increasing visibility and attracting more traffic to your site.

Cost efficiency

By optimizing content delivery, development velocity, and site performance, Edge Delivery Services helps reduce operational costs and boosts conversion rates.

Streamlined content authoring
As mentioned earlier, Edge Delivery Services addresses the core business need to create and publish new and meaningful content rapidly. It accomplishes this goal in two key ways:
    • By enabling authors to use the content authoring method of their choice.
    • By giving businesses more flexible options for supported authoring methods.
By offering this level of flexibility to content authors, Edge Delivery Services allows for fast and scalable content creation, unlocking the organization’s capacity for new authors without the need for extensive training, and allowing businesses to choose the platform or platforms that best suits their needs.

Selecting an authoring method
In this section, we'll take a quick look at each authoring method and content editing tool supported by Edge Delivery Services.

This authoring method stores the website content in a shared Google Drive folder, making it a popular choice given how familiar many people are with the editing tools and interface provided by Google Workspace. Content authors use the standard editor in Google Docs to construct web pages, while Google Sheets handles spreadsheets.

If your company or content authors prefer to use Microsoft Office over Google Workspace, the Microsoft SharePoint authoring method works similarly.

Microsoft SharePoint 
This authoring method stores the website content in a designated Microsoft SharePoint folder. Content authors use the standard editor in Microsoft Word to construct web pages, while Microsoft Excel handles spreadsheets. 
If your company or content authors prefer to use Google Workspace over Microsoft Office, the Google Drive authoring method works very similarly.

Document Authoring (DA)
Document Authoring (DA) is an alternative method to SharePoint or Google Drive, offering an intuitive authoring interface that focuses on the fundamental components of the Adobe Experience Manager document model (including blocks, templates, and so on). This method is still in early access and was purpose-built by Adobe for authoring Edge Delivery Services content, and provides SDKs, APIs, and built-in Adobe technologies which greatly streamline the content authoring process.

Universal Editor
Similar to the Document Authoring (DA) method, the Universal Editor is an Adobe-created what-you-see-is-what-you-get (WYSIWYG) authoring tool that streamlines content creation using built-in Adobe technologies.
This authoring method is best suited for businesses that plan to use or are already using the Universal Editor to drive content creation in Adobe Experience Manager Sites.

Other content sources
Edge Delivery Services can ingest content from almost any HTML provider as long as the provided HTML is semantically structured and uses supported tags.
Using this functionality, Adobe has helped companies to enable authoring from a variety of additional sources, including:
    • Adobe Experience Manager Sites as a Cloud Service (e.g., Content Fragments)
    • GitHub (Markdown)
    • GitHub (Asciidoc)

Using multiple content sources (omnichannel content)
When planning your Edge Delivery Services implementation, you may be looking at multiple potential sources of content to bring into the system.  It’s important to keep content authors’ interests in mind when considering which content sources to integrate.  
In most cases it’s recommended that your content should come from a single source. Choosing a single, consistent authoring method is the best route for ensuring seamless collaboration and reducing complexity, especially for teams that are new to Adobe Experience Manager.
However, under specific circumstances, some businesses may benefit from supporting more than one content source in a hybrid approach. Consider a business that already uses Adobe Experience Manager Sites with the Universal Editor and has many authors that are familiar with the service, while also having other content teams that lack the same experience.  Since the sections these content teams work on are completely independent workflows and there are no overlaps in content editing, this would count as a rare case where a hybrid approach can be beneficial.
This focus on prioritizing the authors’ needs is at the center of Edge Delivery Services and is what makes this platform so well-suited to quick and scalable content creation.

Additional considerations for choosing an authoring method
Deciding which authoring method to use can be a complicated process, since careful considerations must be made to serve the needs of content authors, the goals of the organization and its business units, and the objectives of the project.
For specific guidance on considering the ideal authoring method to use, complete the questionnaire in the official Authoring Guide(opens in a new tab) for an informed recommendation.  

5. Edge Delivery Services is a composable set of services that streamline content creation and development processes by focusing on value over features and on ease of use.
6. 2
Edge Delivery Services offers enhanced performance with Operational Telemetry (OpTel), scalability, and security protocol support, as well as flexible tools for authoring, experimentation, and development.
7. 3
The Google Drive authoring method lets you create and manage content using Google Docs and Google Sheets in a shared Google Drive folder.
8. 4
The Microsoft SharePoint authoring method lets you create and manage content using Microsoft Word and Microsoft Excel in a shared Microsoft SharePoint folder.
9. 5
The Document Authoring (DA) method is purpose-built to author content with Edge Delivery Services. It provides SDKs, APIs, and other Adobe technologies integrated into the content authoring process.
10. 6
The Universal Editor method adopts the interface of the editor found in Adobe Experience Manager Sites. This method is best suited for companies and authors that are familiar with using Sites and understand its fundamental content components like blocks and templates.
11. 7
When considering which authoring methods to use, prioritize your content authors needs and insights, your project’s objectives, and challenges posed by the current system when authoring content.

From <https://certification.adobe.com/courses/playScorm/1342/1308?restart=1> 

In this module, you've explored how Edge Delivery Services enables faster, smarter content delivery by leveraging performance metrics, structured loading strategies, and flexible authoring methods. You’ve seen how edge rendering, caching, and modular authoring workflows come together to create responsive, scalable web experiences with minimal complexity. Here’s a brief summary:

12. Edge Delivery Services enhances content delivery speed using structured loading strategies (Eager, Lazy, Delayed) for optimal performance.
13. 2
Real-time tools like Operational Telemetry and PageSpeed Insights track user interactions and automate diagnostics to improve site stability.
14. 3
Flexible authoring methods (Google Docs, Microsoft Word, Universal Editor, Markdown) allow content teams to work with tools they already know.
15. 4
Composable architecture supports omnichannel delivery, making it easy to scale and repurpose content across platforms.
16. 5
By optimizing performance and streamlining workflows, Edge Delivery Services reduces operational costs and boosts user satisfaction.



Document-Based Authoring Basics

Introduction
In the previous module, we briefly covered AEM Sidekick, one of the many tools in Edge Delivery Services that streamlines content creation and delivery. Sidekick is a versatile browser extension that provides content authors with context-aware options to edit, preview, and publish their content directly from a document, webpage, or content repository.

After completing this lesson, you will be able to:
    • Describe best practices for using Sidekick for content management
    • Explain how you can preview and publish content using Sidekick
    • Understand the interactions between Sidekick and the Admin API
    • Understand some of the unique authoring behavior exclusive to Document Authoring (DA)

Using AEM Sidekick
Let's explore how you can use Sidekick in more details.

Previewing content
To publish content, it must first be previewed. Recall from the previous module how content is previewed prior to publication:

When you select Preview in the Sidekick UI from a source document, its contents get translated into Markdown using the appropriate adapter and stored.





Afterwards, the page is available at:
https://<branch>--<repo>--<owner>.aem.page/<page-path>

Here, "page-path" represents the relative path of the document within the content source starting from the root folder.



• You can then view your source document’s content on the page as well as forward this preview URL to other stakeholders for review before publication.


Publishing content
Once previewed, content can be published and made available on the live version of the site. Since the Production domain points to this version, it too will serve the newly published page if configured.

When previewing a page, you can select Publish, which copies the Markdown content already stored when previewed, and pastes it in a separate “published” partition.



afterwards, the page is available at:
https://<branch>--<repo>--<owner>.aem.live/<page-path>


If a Production URL has also been configured for your project, this page will also be made available at:
https://<production-URL>/<page-path>



To see the Sidekick extension toolbar display on a web page, you must navigate to a specific type of URL associated with your project

AEM Sidekick supports the following types:

SharePoint or Google Docs / Document editors

Access Sidekick within your content repository folders, or within their respective editors. Note that this feature is limited to desktop usage.
Please note that Sidekick is NOT available for Document Authoring (DA) editor/browser, since that authoring method includes its own built-in UI for content management that we will cover in later sections in this lesson. Regardless of whether DA is in use, however, Sidekick is still required to manage content from the other URLs.

Preview URL

A URL with a domain name ending in aem.page, used to preview your content before it goes live.

Live URL

A URL with a domain name ending in aem.live, representing the live version of your content that is accessible to the public.



This URL is the root domain of your site and any pages under that domain. To have the Sidekick toolbar appear on production URLs, you need to:
    1. Add your domain name to the Sidekick configuration. This can be done by setting the “host” value to your registered domain under /tools/sidekick/config.json within your code repository.
    2. Add your project to your Sidekick. This can be done from the Sidekick toolbar’s context menu while either viewing a source document or previewed/live URL.










The Sidekick extension offers a built-in environment selector allowing users to view a page across all these different URLs.

Note that there is no option to view the Live environment in the example above. Since Production and Live share the same content, this is only available when there is no production domain configured and the content you are looking at has already been published.



Unpublishing content




Unpublishing content removes the page from your Live and Production URLs by deleting the stored Markdown from the live partition of the content storage. However, the page remains in the preview partition of the content storage

This means that once a page is deleted, it will no longer be available at:

    • •
https://<branch>--<repo>--<owner>.aem.live/<page-path>
    • •
https://<production-URL>/<page-path>


Deleting content




Deleting content permanently removes it from all environments, implicitly unpublishing it. Behind the scenes, the source document’s translated Markdown is removed from all content storage. You can only delete content when it’s viewed from the preview environment.

Upon selecting Delete, you are prompted to confirm your choice by manually entering “DELETE” in the provided dialog.



Once you confirm the delete action, your page will no longer be available at any of the following URLs:
• https://<branch>--<repo>--<owner>.aem.page/<page-path>
• •
https://<branch>--<repo>--<owner>.aem.live/<page-path>
• •
https://<production-URL>/<page-path>


Bulk actions
Of course, it may be necessary to perform some of these actions on multiple documents at once. As mentioned at the start of this lesson, Sidekick options appear not only within the content editor, but also within your content repository’s file browser. This enables you to select multiple files at once from within a folder and displays the Sidekick with a few different contextual options.


Sidekick options include:
    • Previewing multiple documents
    • Publishing multiple documents  
    • Copying either the Preview or Live URLs associated with each document selected

From <https://certification.adobe.com/courses/playScorm/1343/1308?restart=1> 

Document Authoring
Document Authoring (DA) is an alternative to SharePoint or Google Drive that provides a document-based authoring interface focused on the AEM Document model, which includes Blocks, Sections, and more. It provides an SDK, APIs, and built-in Adobe technologies.

If you’re using DA as your authoring method, it’s important to point out that the Sidekick extension will not appear within your content repository or when editing a document. Since this content source is specifically tailored for use with Edge Delivery Services, these tools and functions come baked into the editor.



To use the equivalent functions offered by the DA editor, simply select the publishing icon.


This opens the expanded menu, giving you the options to Preview and Publish directly from within the editor.




Admin API
In the previous module, we talked about the authoring flow and how Sidekick acts as a user interface for issuing requests to the Admin API.


While the Sidekick is often the preferable method for managing content, developers may find it convenient to instead formulate and make requests to the Admin API directly. This can be especially useful when performing bulk actions targeting content across multiple folders.

 For a comprehensive list of available requests review: the AEM Admin API documentation

17. Content must be previewed before it can be published.
18. 2
When you preview a source document, its contents get translated to Markdown and are made available within the Preview environment for the site.
19. 3
When you publish a previewed document, it becomes available on the live version of the site, including the production domain if configured.
20. 4
Unpublishing content removes it from your Live and Production environments, while deleting content permanently removes it from all environments.
21. 5
In your content repository's file browser, you can use Sidekick controls to preview and publish content in bulk, as well as copy the respective URLs for the selected content files.
22. 6
Sidekick is not available in the Document Authoring editor, which uses its own controls for previewing and publishing.
23. 7
As an alternative to using Sidekick, developers can use the Admin API to make bulk actions on content across multiple folders.


Structure of an Edge Delivery Services Page

Introduction
When developing a document-based Edge Delivery Services site, it's important to understand how authors will create content. In previous modules, you saw how authors can preview and publish source documents using the AEM Sidekick extension to create new pages and site content.
After completing this lesson, you will be able to:
    • Explore how the original source document is structured
    • Understand the different types of content elements that can be added within the document structure to create a page

Keep in mind that the goal of Edge Delivery Services with document-based authoring is to simplify the content creation process as much as possible. This means that site pages should closely match their source documents, only leveraging more complex content elements as required.

 For additional information on the structure of a page document, refer to: the Markup — Sections guide

Sections
Sections are an important part of the authoring document structure that help authors organize and manage their content. All content and blocks are always wrapped in a section.

Section authoring
Sections allow authors to divide a page into distinct areas that group together related content. By effectively utilizing sections, authors can create well-organized, visually appealing, and meaningful content that improves user experience and content management efficiency.


While section breaks are typically included based on visual differences like varying background colors across parts of a page, they may also be used to group together related content in general to ensure logical organization.

• Sections are delineated within a document by horizontal rules or "---".

• A section introduces a <div> element into the markup and resulting DOM, which wraps all content contained within. This can be useful to developers who can then work from this initial HTML structure.


Here, you can see how an author within Google Docs could incorporate three different sections into a page, using horizontal rules and "---".

Even if section breaks are not explicitly introduced, page content is always encompassed within at least one default section.


Section metadata
Authors can also use sections to style the content they contain or add additional data attributes to the surrounding <div> elements they create. This is accomplished using section metadata.

Section metadata is a table containing name-value pairs where the name is in the first column of the table and the value is in the second column.

To indicate that this table is defining section metadata, an author must enter "Section Metadata" within the first row which only contains a single column.
As a developer, it's important to get a sense of how authoring decisions and structures within a source document manipulate a page's resulting DOM when it's previewed or published.
Let’s look at the section's metadata more closely:

• By defining sections with breakpoints, authors can group content together, wrapping it with a <div> element.

• Authors can optionally define a section metadata table to add classes or data attributes to the <div> element they've created.

Consider the following example:



Google Docs document
In this Google Docs document, a metadata table is added to the section.

Note:
    • First row only contains the text "Section Metadata"
    • The row combines both columns in a single cell
Resulting HTML
This image contains the resulting HTML.
While the "style" property is translated into the <div> element's "class" attribute, every other name is transformed into a "data-*" attribute.
Pay particular attention to the attributes in the authored section's <div> element (indicated by red boxes). Notice how these attributes correspond to the name-value pairs added within the section metadata table.



 For additional information, please see the Sections guide(opens in a new tab) and Sections metadata guide(opens in a new tab).

Default content
With an understanding of sections and the role they play in shaping the translated DOM, let's now take a closer look at the forms of content that authors place within them.

Default content can be any content added to the document that is not contained within a block.

Word documents, Google Docs, Document Authoring, Markdown, and HTML all share a wide range of semantics. These include:

• Different levels of headings (i.e. <h1> to <h6>)
• Images
• Links
• Unordered and ordered lists (i.e. <ul>, <ol>)
• Forms of emphasis (i.e. <em>, <strong>)

Edge Delivery Services capitalizes on these shared semantics by mapping these to Markdown and rendering them in the final HTML in a way that is intuitive to developers and authors alike. Because of this natural approach to content creation, authors should be encouraged to leverage default content as much as possible, only making use of blocks to create more complex site content as required.

Each inserted image within a document will render as a full <picture> tag containing the different resolutions needed to support desktop and mobile devices as well as the different formats for modern browsers that support .webp and older browsers which do not.

While the default content itself is straightforward, it benefits from a combination of clear organization, consistency, and attention to detail. Here are some best practices to follow:

24. Clearly begin sections using appropriate heading levels (for example, H1, H2, H3). This helps organize content and improves readability.
25. 2
Apply consistent formatting for text, lists, tables, images, and other elements to maintain a cohesive look.
26. 3
Ensure that images and tables are clear, appropriately sized, and relevant to the content.

Let’s continue to build on the example introduced in the previous section:


Google Docs document
The source document created within Google Docs now includes an unordered list (<ul>).

Resulting HTML
This image displays the HTML constructed from previewing the Google Docs document and inspecting the resulting page.
Regardless of which document-based authoring method you use, the semantic mappings are the same.
In this HTML, you can observe:
    • How the unordered list created within Google Docs naturally translates into a <ul> element.
    • How each individual list item maps to an <li> element within the resulting HTML.
    • How the default content itself is wrapped by a <div> element, with class "default-content-wrapper", adding structure to the page's DOM.




Although developers will typically need to work to style the resulting HTML elements appropriately, the point of default content is to be straightforward. Developers should therefore work to ensure that the content authored in the document closely resembles its appearance on the resulting page and does not introduce additional HTML elements which do not map directly to the source document's markup.

>> For additional information on default content, refer to: the Default content guide

Blocks
You should now understand sections and how authors enter default content. While authors are encouraged to use default content as much as possible because of its simplicity, there are times where an author may need to create more complex site features that rely on related JavaScript or otherwise cannot be easily represented using standard markup

This is where blocks come in.

Blocks are modular site components designed to facilitate custom structures and decorations for the markup they contain. They serve as foundational components that authors can easily configure, arrange, and reuse.

Blocks can be authored and added by authors or automatically included on a page based on its default content or metadata using a technique called auto blocking. We will cover auto blocking later in this module.

Most project-specific CSS and JavaScript live in blocks, and so the availability of blocks on a site is determined by the development team's own implementations.

Although blocks may vary between sites, the syntax needed to create them is the same.

• Blocks are constructed by creating a table with a single-columned first row containing the block name.

• By setting the block name, authors indicate which block they'd like to create, and in turn, how the markup within the rest of the table should be handled by developers when decorating the DOM.

Let's continue the same example from earlier and add the Cards block, which is included with the default boilerplate code.


The Google Docs document now includes a table that begins with a single-columned row containing "Cards".

This indicates which block the author is looking to create. Any content outside of this first row is specific to the usage of the block itself and represents the authored content contained within.
Developers will need to structure and style this content appropriately to construct the desired block's HTML.



Now, observe the resulting page structure.
Pay particular attention to how this Card block table is transformed into a more complex site component that incorporates the content contained within.
While each block is developed with its own appearance, functionality, and purpose, their collective role in content creation is simple:
    • To add form and function to the page content that would otherwise not be authorable using default content.




Let’s inspect the resulting HTML structure on the previewed page.
Unlike default content, which is intuitively mapped and converted to HTML elements, most of a block's HTML structure is created by the developer within its JavaScript. However, there are common elements shared across all blocks within the converted DOM:
    • A block wrapper: <div class="{block-name}-wrapper">
<div class="cards-wrapper">
    • A block container, <div class="{block-name} block">
<div class="cards block">

There are a few important aspects to keep in mind when working with blocks:

While blocks are often developed under the assumption that an author will populate the table beyond the header row (block name), this is not necessarily a requirement. If a block's inner HTML is not configured by an author at all, they may instead need to create a single-rowed table with the block name to include it on a page.

For additional information on blocks, refer to: the Blocks developer guide(opens in a new tab) and Exploring blocks documentation

Block options
Block options allow authors to give a block a different look or feel by adding additional classes to the block container. Developers can then introduce class-dependent behaviors and styles within the block's JavaScript and CSS.

Continuing the Cards block example, let's see the markup that would be generated for various block options:

Entering "Cards (wide)" into a table header would generate the following markup:
    • <div class="cards wide block">



Block options can also contain multiple words.
"Cards (super wide)" will be concatenated using hyphens:
    • <div class="cards super-wide block">



Block options can also be comma-separated, such as "Cards (dark, wide)".
Both values will be added as separate classes:
    • <div class="cards dark wide block">





>> For additional information on block options, refer to: the Block options guide

Document structure
You should now understand that content within an Edge Delivery Services document is either contained within blocks or otherwise created as default content. Each form of content is wrapped within a containing <div> to structure the resulting DOM and allow for additional decoration and function to be introduced by a developer. Meanwhile, every page's content is entirely contained within one or more sections that are delineated by breakpoints.
Let's take a closer look at how the document structure works with Edge Delivery Services.






The final HTML of a page will vary depending on the authored blocks, default content, and surrounding sections created within its source document. However, as developers, it's important to understand each component at a conceptual level, as well as the standard structure (<div> elements) it introduces.

Additional content authoring tools
Now, let's cover some of the additional built-in syntax that assists authors in making additional configurations to a page's content.

Page metadata
Early on in this lesson, you were introduced to the concept of section metadata that allows authors to add data and class attributes to the <div> containing the section. Edge Delivery Services allows authors to set page metadata as well in much the same way.

The page metadata table adds <meta> tags to the <head> of the resulting HTML document.

Here are some of the key aspects of page metadata:

• There should only be one metadata table per page, typically placed at the bottom of the document.
• •
The page metadata table follows the name-value pair structure with the name in the first column and the value in the second.
• •
Well-known metadata properties such as Title, Description, Image, Tags, and Feed, conform to HTML specifications and map to popular metadata schemes like og: and twitter:.
• •
Theme and Template properties also have special semantics and are added as classes to the <body> tag, often being used for styling and auto blocking.

Projects may add an unlimited number of name-value pairs as <meta> tags in the markup, which can then be used with project-specific semantics.
Let’s take a closer look at the page metadata.





This is the resulting markup from the document.
Pay attention to how different name-value pairs map to the tags.
Regardless of the project, allowing authors to configure a page's metadata is often essential. Accordingly, the page metadata table is processed as part of the HTML rendering service, meaning there is no project code related to this processing.

>> For additional information on page metadata, refer to: the Metadata guide

Icons
While Edge Delivery Services does support the inclusion of images directly within a document, as well as the use of Adobe Experience Manager Assets, authors may wish to insert common site-wide icons into their content instead.

Edge Delivery Services offers a non-intrusive way to support this behavior:
• The boilerplate code includes an automatic mechanism to insert SVGs into the icon <span> tags.
• •
Authors add icons to a document using the :<iconname>: notation.
• •
Developers may add icons to a project themselves by setting up an /icons/ folder at the root of the code base. However, it's recommended to keep this folder within the content source instead, thereby enabling marketers to add and update icons as needed without any dependency on a code change.

Look at the example below to get a sense of how icons can be referenced within a document and ultimately rendered on a page:

From <https://certification.adobe.com/courses/playScorm/1343/1308?restart=1> 





Unlike page metadata, there is project code related to icon processing within the boilerplate template that developers can adjust as needed.

>> For additional information on icons, refer to: the Icons guide


27. Sections help authors group related content together to create well-organized, visually appealing, and meaningful digital experiences.
28. 2
Sections are separated by horizontal rules or "---" within the source document and introduce a <div> element into the translated markup and resulting DOM, which wraps all content contained within.
29. 3
A section metadata table adds style or additional data attributes to the <div> element surrounding the section’s content.
30. 4
Default content is any content added to the document that is not contained within a block and includes different level headings, images, links, unordered and ordered lists, and forms of emphasis.
31. 5
Blocks are modular site components designed to facilitate custom structures and/or decorations for the markup they contain.
32. 6
Some of the additional content authoring tools include page metadata that adds tags to the HTML markup and the ability to non-intrusively insert SVG icons into content.

Decorating the DOM

Introduction
In the previous lesson, you learned about the different conceptual components that can be added to a page document and the respective syntax for each. More importantly, you observed how sections, default content, and blocks are translated into markup and ultimately structure the page's final rendered DOM. In this lesson, we'll briefly cover how this process works at a high-level.

After completing this lesson, you will be able to:
    • Explain the pipeline service's role in translating source documents to markup
    • Understand how the boilerplate code constructs the DOM from a page's stored information

Document to markup
Adobe Experience Manager produces a clean and easily readable semantic markup from the document content. This is the first step within a two-step process aimed at creating a DOM that's easy for developers to work with within their custom project code.

To view this markup representation of a page, you can prepend "view-source:" to the page's URL in any browser.
Your URL will have the following pattern:

view-source:https://<branch>--<repo>--<owner>.aem.page/

Markup to DOM
After the initial markup conversion, the JavaScript within your code repository takes the markup and enhances it into a DOM that is then used for most development tasks, including the building of blocks.
Let's continue the same example and compare the markup from the previous step to the step 2 markup:





The markup is now augmented into this example DOM, which then can be used for styling and adding functionality.
Note how the boilerplate code and the project's custom code help create this organized and easily comprehensible HTML structure.


In the previous lesson, we already covered how sections, blocks, and default content are authored and their effects on the resulting DOM, so we'll avoid rehashing that here. However, it is worth reiterating that each section introduces <div> elements and that the authors have direct control over the class attributes of these <div> elements.

How the HTML structure is created
Let's now examine some of the critical functions within the boilerplate code that result in this standardized HTML structure.



Within the boilerplate code repository, you can find the scripts folder containing three separate files:
    • aem.js
    • delayed.js
    • scripts.js

The aem.js and scripts.js files together perform the second content processing step, which was covered in the previous section. Both files play an important role in creating a well-structured DOM from a page's markup representation. Both scripts.js and aem.js are included already in the head.html file at the root of the code repository.

aem.js
You can find the most recent version of this JavaScript file in the copy file within your code repository, or in the corresponding file within the boilerplate code:

>> aem.js

The aem.js file largely contains utility functions meant to help with creating a well-structured DOM from a page's markup representation, but it does not necessarily orchestrate this process itself.

Here are some of the important aspects of working with aem.js:

    • •
Refrain from making direct edits to this file. Instead, use project-specific extensions outside of it.
    • •
All functions contained within this file (and the boilerplate code itself) are preceded by boxed comments indicating their purpose, parameters, and return values.

This section will not cover each function and its role in constructing the initial DOM. However, you're encouraged to look through the file yourself, paying particular attention to the load and decorate functions which directly manipulate a page's HTML to create a more developer-friendly layout


decorateSections function


As an example, let's examine the decorateSections function.
    • Note the portion of the function indicated in red which sets up a section's metadata.
    • As covered in the previous lesson, section metadata is represented by a table containing key/value pairs which modify class or data attributes on a section's container element or <div>. Here you can see how this processing step is performed to generate the section element and populate it with the correct attributes set by the author.
The decorateSections function is one of the many functions within aem.js that help construct and augment a page's HTML from its original markup.




scripts.js
Now, let's look at the scripts.js file that imports and invokes the functions defined in the aem.js file.
You can find the most recent version of this JavaScript file in the copy file within your code repository, or in the corresponding file within the boilerplate code:

>> scripts.js
The scripts.js file imports multiple functions from aem.js and orchestrates all DOM decoration outside of what is contained within blocks. Essentially, this is the file that performs all the necessary steps involved in setting up a page.

Here are some of the key aspects of scripts.js:

    • •
While block code itself alters the HTML within block containers, scripts.js handles the creation of those containers and imports a block's JavaScript and styling sheet if it occurs on the page.
    • •
The scripts.js file not only works to perform the steps needed to construct a page but also executes these steps in a carefully considered order to increase performance, visual stability, and user satisfaction.

The scripts.js file loads in pages by:

• Dissecting the process into three distinct phases (Eager, Lazy, Delayed)
• Processing sections, blocks, and default-content within <main> in top-down order

This course will expand on the performance-related motivations behind both approaches in Module "Optimizing Content Delivery". All you need to understand for now is that these rules dictate the order in which a page is loaded.


With this order in mind, it's best to examine the file yourself on your own time to get a sense of the overall flow and processes involved in setting up a page.

loadPage function


A good place to start is with the loadPage function, which kicks off the entire process:
The scripts.js file immediately separates the process into three phases, with each being represented by its own function. Take some time to familiarize yourself with each function and its role in decorating the page's DOM.
This course will not exhaustively cover each action performed within each phase. However, you should pay particular attention to the following two functions:
    • decorateMain (called from loadEager)
    • loadSections (called from loadLazy)
Together the two functions work in sequential order:
    • decorateMain sets up the container elements and classes used to indicate sections, blocks, and default content which were covered in the previous lesson.
    • loadSections afterwards performs any additional operations needed to fully render the content within those container elements, such as importing a block's JavaScript and CSS resources.



33. Experience Manager itself automatically produces a clean and easily readable semantic markup from the source document.
34. 2
The JavaScript library used in scripts.js takes the markup and enhances it into a DOM that is used for most development tasks.

Now that you have a better understanding of how content is translated from document to page, you should be equipped with the knowledge needed to begin diving into more advanced development concepts.

35. Use the following URL pattern to view the markup representation of your site page: view-source:https://----.aem.page/
36. 2
The aem.js file largely contains utility functions meant to help with this process creating a well-structured DOM from a page's markup representation.
37. 3
The scripts.js file imports multiple functions from aem.js and orchestrates all DOM decoration outside of what is contained within blocks.



Block Development

Introduction
If you've followed along with this module so far then you should already be aware of blocks and their role in content creation. To recap, blocks allow authors to group pieces of content together to add a bit more structure or introduce complex functionality. Most of the project-specific CSS and JavaScript lives in blocks. In previous sections you’ve seen how authors create blocks within documents, how blocks are set up within containers, and even how blocks are loaded alongside other page content by the boilerplate code.
As a developer, however, you still need to know how to write code which transforms the markup of a block into the structure, styling, and functionality you require.
After completing this lesson, you will be able to:
    • Identify key resources where you can pull existing blocks from
    • Understand the structure of block code
    • Describe how to create complex blocks which follow Adobe's own best practices
    • Explain auto blocking and its utility for authors
    • Create a block library to catalogue blocks available to your authors

Boilerplate blocks
As their name implies, boilerplate blocks are curated in the Adobe Experience Manager boilerplate code and are therefore a part of every Experience Manager project.



For a block to be included within the boilerplate it must be used by the vast majority of all Experience Manager projects. These blocks typically offer general functionality and can be customized to meet your specific needs, they are widely tested and reliable, serving as templates for common site elements.
Recall the Cards block used when introducing the concept of blocks within the first lesson. Since it was included within the boilerplate code, the Cards block would be considered a boilerplate block.


The code base for all the blocks in Experience Manager Boilerplate is open-source and can be found on:

>> GitHub adobe/aem-boilerplate

>> For additional information on the boilerplate blocks, refer to: Boilerplate Blocks


Block collection
Due to their modular nature, it's very easy to incorporate prebuilt blocks from external sources into your project. As a result, most blocks are not included within the boilerplate.



The block collection, on the other hand, contains blocks that aren't common enough to be boilerplate but are still common enough to be readily reused and repurposed. A block within this collection is typically used on more than half of all Experience Manager projects.
The block collection is constantly evolving, with new additions often being added to this collection first before being admitted into the boilerplate later on. Similarly, if a block in the boilerplate sees less use, it may be moved to this collection as a result.

The code base for all the blocks in Experience Manager Block Collection is open-source and can be found on:

>> GitHub adobe/aem-block-collection

>> For additional information on the block collection, refer to: Block Collection


Every block must adhere to several key technical principles to be included in either the boilerplate or the broader collection:

Intuitive

The content structure is intuitive to authors.

Usable

Operates without dependencies and is compatible with the boilerplate code.

Responsive

Functions across all breakpoints.

Context aware

Properly inherits CSS context, such as text and background colors.

Localizable

Contains no hard-coded content, allowing for easy adaptation.

Fast
Has no negative impact on performance or user experience

SEO and a11y

Is optimized for search engine visibility and accessibility.


Block Party
The Block Party is a space that allows developers to showcase their individual contributions to Adobe Experience Manager websites.




This platform not only promotes the sharing of valuable blocks, code snippets, and integrations, but also encourages developers to adapt these resources to meet their own project's needs. It can often be more efficient to work from an existing block that approximately matches the intended design and functionality you're looking for and adjusting from there, rather than creating a new block from scratch.


For a block to be included within the Block Party, developers must submit a form which undergoes internal review. Note, however, that Adobe is not responsible for maintaining or updating the code that is showcased in the Block Party, so resources should be used at the developer's own discretion.

>> For additional information on the Block Party and to view the current catalogue, refer to: the Block Party guide

Block code
The code structure of a block is simple. All blocks are contained within the "blocks" folder at the root of the project structure, and within that folder each block's name is used as both the folder name as well as the filename for the CSS and JavaScript files within it.



In this image, notice how the Cards block and its related code exist within the boilerplate. The proceeding sections will examine these files and best practices for working with them.

JavaScript
All blocks have their JavaScript file loaded in as a Module (ESM) and export a default function that gets executed when the block is loaded in.
Continuing with the Cards block as an example, let's now examine the JavaScript behind it.


decorate function


The Cards block is relatively simple since it only contains a single function: the default decorate function that is invoked when the block is loaded in. Every block regardless of its purpose must include this default function at a minimum.





Recall from the previous lesson how scripts.js and aem.js together work to load in a page as well as the blocks within it.
Let's now examine the function within aem.js that is responsible for loading in blocks.

loadBlock function


To keep page loads performant, only blocks which appear on a page have their JavaScript and CSS loaded in.
In the JavaScript on this image, notice how the loadBlock function first loads these resources (boxed in red 🔴) before it checks for and executes the default exported function within the block's JavaScript file (boxed in green 🟢).





By knowing how a block's JavaScript is structured and executed, you should have a greater appreciation for the benefits of this approach. The scripts.js and aem.js files take on the responsibility of setting up a block's container, loading in its resources, and executing its default function, which intentionally limits the role of the block code itself.
In other words, blocks should be modular and self-contained, and they should contain code that manipulates the DOM or introduces functionality only within the container created for them. As a developer, it's important to ensure that each block's JavaScript is self-contained, and to avoid importing functions from other sources as much as possible.


In summary, blocks may be very simple or incredibly complex such as full application components or widgets. Regardless, they provide developers with a way to componentize their codebase into small and self-contained chunks of code.


CSS
A block's stylesheet should also adhere to most of the same design principles just discussed.

All block level CSS should be scoped to the block to ensure that there is no effect on other parts of a page. This means that all selectors in a block should be prefixed with the corresponding block class. In certain cases, it may make sense to use a block's wrapper or containing section for the selector as well.


The Cards block CSS


As you can see, each selector is prefixed with the block class "cards", which follows best practices.
Since the existing code already ensures that each block has a structured container element with a class matching its name, we only want the CSS to have an effect within this container, keeping blocks self-contained.





Developers should also avoid using complex or brittle CSS selectors where possible. Although using JavaScript to add classes can help avoid this, it may over-complicate your code and come with its own drawbacks. Finding the right balance between the two approaches will come with experience.

Development stack
Beyond the basic stack, Edge Delivery Services can support integrations with other front-end frameworks such as React, Angular, Vue, and Svelte. If you’re working with one of these frameworks, however, we recommended that you instead use technologies such as React Portals or Web Components within application-centric blocks, while keeping simpler blocks in plain CSS and JavaScript for optimal web performance.

Block authoring design
In the previous lesson, we covered how markup gets translated into a fully decorated DOM. The boilerplate code (scripts.js and aem.js) handle this translation process for the page, sections, default content, and block containers/wrappers. However, it's the block code itself that manipulates the DOM within its container.




A block's content is rendered into the markup as nested <div> tags for the rows and columns that the author entered. This example image shows the markup of a block that has only a single cell.


As repeated throughout this course, one of the most important tenets of an Edge Delivery Services project is to keep things simple and intuitive for authors. Complicated blocks make it difficult to author content, so it is important that the complexities of translating an authoring experience into a usable DOM are absorbed by the development team.

It's important to put the author first and follow a clear methodology when determining your block's table structure. While it may make a developer’s life easier if authors can handle making block tables themselves, shifting this complexity onto the author can make for a more brittle block.
As a developer, you should:

• Visualize how the block will look and function on a page
• 
Consider what sort of table structure would be most comprehensible to an author
• 
Determine how far off the resulting table markup is from the block's final HTML

There is still a balance that can be achieved between these last two priorities. The intention of a block is to decorate and structure the markup within it. Developers should therefore avoid parameterizing their blocks by treating different table cells as arguments. While this may make sense in special cases where most of the HTML comes from the JavaScript, this is not good practice in most scenarios where the code should instead be adapting the initial markup that the author has already provided.

Auto blocking

Most content is ideally generated outside of blocks, since the inclusion of tables within a document can complicate readability and editing. On the other hand, blocks serve as an effective tool for developers to maintain organized, customizable code.
A commonly employed strategy to achieve a balance between these two concerns is known as auto blocking.

The auto blocking process automatically converts default content into blocks or creates blocks based on a page's metadata without requiring the author’s direct involvement.


Auto blocking takes place early in the page decoration process, before blocks are loaded, and programmatically creates the structure of a block just as it would appear in markup from the server.
Let's take a look at the function responsible for auto blocking within scripts.js:


buildAutoBlocks function


This function is called in the first phase of the page loading process (Eager phase).
The code calls upon this function early so that it can be added to the existing page’s markup before it's fully processed. This makes a block created using auto blocking indistinguishable from an authored one and allows the next few phases to handle the block like any other, simplifying the code.




Next, let's now look at the buildHeroBlock function to get a sense of how default content can be converted to a block:


buildHeroBlock function


Here you can see how this function examines the markup, looking for <h1> and <picture> elements near each other on a page (boxed in red 🔴).
Once it finds this structure within the default content, the function creates a section, adds in the Hero block's markup using the buildBlock function, and finally prepends this section to the page (boxed in green 🟢).
This process results in a Hero block now being added to the top of the page's markup, as if the author had created it themselves.




Auto blocking is also often utilized in combination with metadata.
You can imagine how the "if" statement within the buildHeroBlock function in the earlier example could just as easily check for some value within a page's metadata and conditionally add a hero block in response. Most often the "template" property is used for this purpose. When multiple pages utilize a shared template, characterized by a consistent design or functionality, it presents a scenario for implementing auto blocking.
Consider the following example:


• Consider the header of a blog article. These typically include details such as:
    ○ The author's name
    ○ The title of the post
    ○ A hero image
    ○ The date of publication

• Rather than requiring the author to manually create a block encompassing all this information, an auto block can be automatically generated on the page by utilizing:
    ○ The <h1> tag
    ○ The first image
    ○ The author's details
    ○ The publication date metadata


• This approach enables the content author to maintain the information in its original context, preserving the document structure outside of a block.
At the same time, the developer is able to consolidate all layout and styling details within that block.


>> For additional information on auto blocking, refer to: the Auto Blocking guide


Cataloging and organizing blocks
Given that blocks and their block options are specific to a project, it is often necessary to catalog each so that authors can be made aware of what is available. There are three different methods of doing so, and the decision depends on your choice of authoring method.


Sidekick Library

This method is used with document-based authoring

DA library
This method is used with Document Authoring (DA)


Block modeling

This method is used with the Universal Editor

In the following three sections we will provide a brief overview of each and cover the basic steps involved in setting them up.


Sidekick Library – Document-based authoring
The Sidekick Library functions as an extension of AEM Sidekick, allowing developers to construct UI-oriented tools specifically designed for content authors.
This library includes a built-in blocks plugin that showcases the complete inventory of blocks available to authors, eliminating the need to recall or seek out examples of every block and block variation.





The Sidekick Library functions as an extension of AEM Sidekick, allowing developers to construct UI-oriented tools specifically designed for content authors.
This library includes a built-in blocks plugin that showcases the complete inventory of blocks available to authors, eliminating the need to recall or seek out examples of every block and block variation.

The Sidekick Library also enables authors to make direct edits to a block's placeholder content, allowing them to see their block as if it were on a page and test it.

When an author is satisfied with their created block, the plugin includes a built-in button that allows the author to copy and paste the block's table into the document of their choice.


Although Edge Delivery Services sites leveraging Microsoft Word or Google Docs do not allow for true what-you-see-is-what-you-get (WYSIWYG) authoring, this tool does give authors the ability to visualize their blocks before they're put on a page.
Take a look at the following video to get a sense of how an author would interact with and construct a block, using the Sidekick Library:










Click on copy block and paste in doc like below





Sidekick Library 1

Library sheet setup
    1. Start by creating a directory in the SharePoint or Google Drive where you want to store the content for the library. You can call it /tools/sidekick in the root of the mountpoint.
    2. In the /tools/sidekick directory, create a workbook called "library". Each sheet in this workbook represents a plugin that will be loaded by the Sidekick Library. The name of the sheet determines the name of the plugin that will be loaded and must be prepended with "helix-".
    3. Within the library.xlsx workbook, create a sheet called "helix-blocks".

Sidekick Library 2

Blocks plugin setup
    1. Inside the /tools/sidekick directory, create another directory that will store all the block variations and example usage: /tools/sidekick/blocks
    2. To generate content for the blocks plugin, you need to prepare a separate Microsoft Word document for each block you want to include. So, under this new directory, create a new Microsoft Word document.
        1. For example:
If you are adding the Cards block to the library, create a document called "cards", providing examples of each variant separated by section delimiters.
    3. Preview and publish the cards.doc document.


Sidekick Library 3

Completing and publishing the library workbook


    1. Open the library.xlsx workbook you've created in the first step of this process.
    2. Inside the helix-blocks sheet, create two columns called "name" and "path".
    3. Create a new row, adding the block's name and the path to the block document that you've created and published in the previous step of this process.
        1. For example:
If you're adding the Cards block to the library, create a new row in the helix-blocks sheet, entering "cards" into the name field and your recently published block document into the path.
    4. Preview and publish the library.xlsx workbook.


>> For further instructions on how to configure the Sidekick Library and additional plugins, refer to: the up-to-date Sidekick Library Setup guide


DA library – Document Authoring
The Document Authoring (DA) library is configured in much the same way as the Sidekick Library, with a few smaller differences in how the block documents are authored. Since Document Authoring is specifically designed with Edge Delivery Services in mind, this library is accessible from within the editor and allows for direct insertion of a block into the document without the need to copy and paste the table in manually.




You can also set up libraries for templates, icons, placeholders, and media to further simplify the content creation process for authors.
In this image, you can see how a content author would open the library from within the editor.

As with other libraries, the DA library also allows administrators to catalogue all block options.
Continuing with the example above, let's use the block library to add the Cards block with images onto the page.





DA library 1

From <https://certification.adobe.com/courses/playScorm/1343/1308?restart=1> 

Library sheet setup
    1. Start by creating a sheet called "blocks" under the docs/library directory of your project.
    2. Within the blocks sheet, add two columns called "name" and "path".

DA library 2

Block documents setup




38. Inside the /docs/library directory, create a new directory called "blocks": docs/library/blocks. This directory will store all the block variations and example usage.
39. To generate block content, you need to prepare a separate document for each block you want to include. So, under docs/library/blocks, create a new document.
    1. For example:
If you are adding the Cards block to the library, create a document called "cards", providing examples of each variant.
    2. All the visual variants of a block will be displayed as individual items as seen in the image above.
    3. Content variants can be specified by adding headings just before each.
40. Preview and publish the block document.


DA library 3

Completing and publishing the blocks sheet




41. Open the blocks sheet you've created in the first step of this process.
42. Inside the blocks sheet, create a new row, adding the block's name and the path to the block document that you've created and published in the previous step of this process.
    1. For example:
If you're adding the Cards block to the library, create a new row in the blocks sheet, entering "cards" into the name field and your recently published block document into the path.
43. Preview and publish the blocks sheet.



>> For additional instructions on how to configure the DA library, as well as catalogue things beyond blocks, refer to: the up-to-date Library Setup guide

Universal Editor – Block modeling
Unlike other authoring methods, the Universal Editor requires that the content of blocks be modeled to provide the author with the necessary interface to create it. In other words, blocks not properly modeled will be inaccessible to authors leveraging the Universal Editor.
Because of this requirement, Adobe recommends that you develop blocks for this particular authoring method in a three-phased approach:

    1. 1
Create the definition and model and update the filter rules for the block. Afterwards, review it and bring it to production.
    2. 2
Create content with the new block.
    3. 3
Implement the decoration and styles for the new block within the block code

Block modeling
The Universal Editor boilerplate code functions largely the same as the standard boilerplate code used by the other authoring methods. However, this repository includes three additional files utilized for instrumenting blocks for use with the Universal Editor:

 component-definition.json(opens in a new tab)
 component-models.json(opens in a new tab)
 component-filters.json

You're encouraged to look at these files within the boilerplate repository to get a sense of how the boilerplate blocks are defined, modeled, and thereby ready for use with the Universal Editor out of the box.
Throughout the remainder of this lesson, we'll show you how to add a new Quote block to this setup in the same way using these three files.

component-definition.json
Blocks are first defined in the component-definition.json file which registers the block as an editable component in the Universal Editor. The definition allows Adobe Experience Manager to link it to a block model and optionally a filter.
As an example, let's define a new quote block:

QUOTE BLOCK DEFINITION

This is the real-world example of how a new Quote block is defined.
In this example, you can also observe how the template object was given "author" and "quote" values corresponding to fields we will create in the next section. These fields are optionally included and allow you to define a block with preconfigured content. In this example, the author field will always be prepopulated with "Biff Tannen" when the block is inserted.



JSON PROPERTY BREAKDOWN


Now consult the table below for a breakdown of each JSON property allowed in a block's definition. Afterwards, refer back to the real-world example to get a sense of how your new Quote block is defined.

JSON property	Description
definition.title	Title of the block as it is displayed in the Universal Editor.
definition.id	A unique ID for the block, used to optionally control its use in filters.
definition.plugins.xwalk.page.resourceType	Defines the Sling resource type for rendering the component in the Universal Editor.
    
    Always use: core/franklin/components/block/v#/block
definition.plugins.xwalk.page.template.name	The name of the block. It should be lower-cased and hyphenated to match the block's folder name. This value is also used to label the instance of the block in the Universal Editor.
definition.plugins.xwalk.page.template.model	Links this definition to its model definition, which controls the authoring fields displayed for the block in the Universal Editor. The value here must match a model.id value.
definition.plugins.xwalk.page.template.classes	Optional property, whose value is added to the block HTML element's class attribute. This allows for variants of the same block. The classes value can be made editable by adding a classes field to the block's model.


component-model.json
With the definition in place, it's now time to model the block, specifying the fields and field types that will make up its authoring interface within the Universal Editor:

QUOTE BLOCK MODEL

Here, you can observe how the Quote block is modeled and how its fields are configured.
We first relate this model to that previous definition using the “id” value which matches the template.model property in the quote block's definition. The block in this case consists of two fields: quote and author.



JSON PROPERTY BREAKDOWN

Required properties for each field include:

JSON property	Description
component	The field type, such as text, reference, or aem-content that the author will edit the fields' value with.
name	The name of the field, mapping to the JCR property where the value is stored in Adobe Experience Manager.
label	The label displayed to authors in the Universal Editor.
Additional properties featured in this example include:

JSON property	Description
value	The default value given to the field.
valueType	The name of the field, mapping to the JCR property where the value is stored in Adobe Experience Manager.

component-filters.json
Now that the block is defined and modeled, we need to add it into the filter definition to instruct the Universal Editor on where the block may be added:


Adding the Quote block to a section


Here we added the Quote block to the list of components available within a section.
This is the final step in configuring blocks for use with the Universal Editor, with the block now defined, modeled, and added to the filter definition it should be accessible to authors within Adobe Experience Manager.




Adding the block
You can see how after selecting a section within the editor and selecting "Add" the Quote block is now shown and available to authors.





Completing the fields
After inserting the block and opening the editor you can now see the fields that were defined in the component-models.json file: quote and author. You can also observe the default content already included thanks to the template property set in component-definitions.json.





This concludes steps in block development unique to the Universal Editor. With your block now instrumented for use and authored on a page, all that remains is to develop the actual block code as you would when using any of the other authoring methods.

>> For additional instructions on how to instrument blocks for use with the Universal Editor, refer to: Creating Blocks Instrumented for use with the Universal Editor


Block model to markup
It's important to note that the data is still rendered in table-like block structures in the same way as if it had been created manually using document-based authoring. Properties in the block model are rendered as cells in the block's table-like structure. In the simplest form, a block renders each property in a single row/column in the order of the properties defined in the model.
Consider the following example:

When creating blocks for use with the Universal Editor it is important to understand how your block models influence the markup and final resulting DOM you'll be working with.

>> For guidance on how content should be modeled, and additional information on how these models are translated into markup, refer to: Content modeling for AEM authoring projects

44. Boilerplate blocks are included in the Adobe Experience Manager boilerplate code and are a part of most Experience Manager projects.
45. 2
The block collection contains blocks that aren't common enough to be boilerplate but are still common enough to be readily reused and repurposed.
46. 3
The Block Party is a space that allows developers to share their individual contributions to Experience Manager sites, such as blocks, code snippets, and integrations.
47. 4
All blocks have their JavaScript file loaded in as a Module (ESM) and export a default function that gets executed when the block is loaded in.
48. 5
All block level CSS should be scoped to the block, which means all selectors in a block should be prefixed with the corresponding block class.
49. 6
A block's content is rendered into the markup as nested tags, determined by the table rows and columns that the author created.
50. 7
Auto blocking takes place early in the page decoration process, before blocks are loaded, and programmatically creates the structure of a block just as it would appear in markup from the server.
51. 8
The Sidekick Library includes a built-in blocks plugin that showcases the complete inventory of blocks available to authors. It also allows authors to make direct edits to a block's placeholder content.
52. 9
The Document Authoring library is accessible from within the editor and allows for direct insertion of a block into the document without the need to copy and paste the table in manually.
53. 10
The Universal Editor boilerplate code includes three additional files to instrument blocks for use with the Universal Editor: component-definition.json, component-models.json, and component-filters.json.


Additional Site Configurations


Introduction
In Edge Delivery Services, there are several additional site configurations you can make to optimize and manage your site effectively.

In this lesson, we will cover the following topics:
    • Spreadsheets
    • Placeholders
    • Metadata
    • Redirects
    • Custom HTTP response headers
    • Query Index
    • Sitemaps
    • 404 Page
    • Favicon


Spreadsheets


Since many of the various site configurations are controlled using spreadsheets, it's important to first understand how these spreadsheets work within Edge Delivery Services before continuing with the remainder of this lesson.
Adobe Experience Manager not only facilitates the translation of documents into Markdown and HTML formats, but also converts spreadsheets into JSON files.


Spreadsheets > JSON 1




A spreadsheet may be set up using the first row to identify column names, while the rows that follow contain the associated data.

Spreadsheets > JSON 2

Resulting JSON




Upon previewing and/or publishing a spreadsheet, it is translated into JSON and stored. This JSON is then accessible for requests that target the corresponding JSON resource.
As an example, the inputs in the previously shown spreadsheet result in the this JSON.


Adobe Experience Manager also allows you to manage workbooks with multiple sheets.

• If there is only one sheet, Experience Manager uses that sheet as the source of the information by default.
• •
If there are multiple sheets, Experience Manager only delivers sheets that are prefixed with "shared-", which lets you keep additional information and possibly formulas in the same spreadsheet that are not delivered to the web.
• •
If there is a sheet called "shared-default", it alone is delivered if there are no additional query parameters supplied.

 To learn more about the spreadsheet configurations, refer to: Spreadsheets and JSON guidelines(opens in a new tab)

Let's now look at some of the query parameters that Edge Delivery Services supports when working with spreadsheets.

OFFSET AND LIMIT

To address large spreadsheets and JSON files, Adobe Experience Manager allows you to implement limit and offset query parameters to select specific rows of a spreadsheet.
Experience Manager defaults to returning a maximum of 1000 rows unless a different limit is specified. Experience Manager compresses JSON data, and network payloads tend to be relatively small as a result.

SHEET

The sheet query parameter allows you to select one or several sheets in a spreadsheet or workbook.
For example:
    • The query ?sheet=jobs will retrieve data from the sheet designated as "shared-jobs".
    • The query ?sheet=jobs&sheet=articles will retrieve data from both the "shared-jobs" and "shared-articles" sheets


Placeholders

Most websites utilize strings or variables consistently across their content, particularly those requiring multilingual support. Edge Delivery Services allows developers and authors to set these variables from a centrally managed location (or locations) within their content source. These placeholders are compiled in a spreadsheet and can be stored either in the root directory of the project or the locales root directory for multilingual sites.




Regardless of where it is stored in the project directory, the spreadsheet should simply be titled "placeholders" and should include at least two columns labeled "Key" and "Text” as shown in this example.

• The Key column acts as an identifier that is automatically modified and straightforwardly accessed via code.
• •
The Text column contains the string that is associated with a particular key.

>> To learn more about how to configure placeholders, refer to: Placeholders configuration guide

Using placeholders
Once included in the corresponding spreadsheet, placeholders can then be used within your code and block-code by importing the fetchPlaceholders function from script.js.

fetchPlaceholders function


In this example, notice how the string en is passed into the function as an argument. This means it will fetch the placeholders sheet in the en folder. If no argument is passed into the function, it will fetch the placeholders sheet at the root folder instead.
You can imagine how this functionality could be used to add multilingual support to blocks with hard coded text. A developer only needs to dynamically pass a page's language value into the fetchPlaceholders function, thereby retrieving the correct sheet and translated text.



>> To learn more about how to code with placeholders, refer to: Using Placeholders

Metadata
You've already encountered section metadata as well as page metadata. Edge Delivery Services also allows authors to set metadata in bulk in a few different ways.

Bulk metadata
To generate metadata for multiple pages simultaneously, you can create a spreadsheet within the root directory of your website. A single sheet is required for this and must have a minimum of two columns, as shown in the following example:

Metadata spreadsheet


The URL column contains the URL pattern for pages that are designated to receive specific metadata entries.
Notice that the values in this column are appended with asterisks (**), which can function as either a prefix or a suffix to enable versatile URL path matching. Common examples of this include: /docs/** or /docs/.



    
The metadata sheet is processed in a top-down fashion. Accordingly, the metadata sheet’s entries should be added from top to bottom with increasing specificity based on the URL pattern.
A separate column is created in the worksheet for each metadata property. Each column is named after the property you wish to assign. In the example above, "Template" is added as a metadata property to the designated pages with value "docs".
You can also remove metadata by setting the value within a property column to an empty string ("").


Additional metadata


Managing metadata across multiple teams makes it impractical to store everything in a single metadata file. In these cases, developers can set up metadata support by listing all required metadata files in the /.helix/config.xlsx file. The order of these entries will determine how the data is applied.

If there is metadata configured in the /.helix/config.xlsx, the page-level metadata block has priority over the metadata sheet(s) in configured order.
If there is no configured order, the page-level metadata block has priority over the bulk metadata sheet (/metadata.xlsx).

Redirects
Every website has a need for redirects. For example, if you move or remove content, you want your users to easily find it or an alternative option.
Redirects are conveniently managed using a spreadsheet called "redirects" located in the root of your content repository. This spreadsheet must include at least two columns labeled "Source" and "Destination" as shown in the following example:

redirects spreadsheet


The Source column is associated with your website's domain and consists solely of the relative path.
The Destination column can either be an absolute URL for redirects to other websites or a relative path for internal redirects




Specified redirects take precedence over existing content. If a page is associated with a particular URL and a redirect is established for that URL, the redirect will override the original page.

>> To learn more about redirects and advanced redirects, refer to: Redirects


Custom HTTP response headers
In certain situations, applying custom HTTP response headers to resources can be beneficial, such as when enabling CORS. To specify these headers, create a workbook called "headers" in the /.helix folder of your website. This should contain only a single sheet and can specify response headers using the url-key-value format shown in the example below:

headers spreadsheet


The url column utilizes a glob pattern to identify which pages should have the header applied.
A wildcard ("*") is used at the beginning or end, to enable flexible matches for the URL path name




If the headers pertain to resources in codebus (originating from a synced GitHub repository rather than content), the changes will not take effect until codebus is synced again, either by updating the relevant code in GitHub or by manually forcing an update through the Admin API.

>> To learn more about custom headers, refer to: Custom HTTP response headers

Query index
Adobe Experience Manager can maintain an index of all published pages within a specific section of your website. This functionality is essential for constructing lists, feeds, and enabling search and filtering features for your pages or content fragments. Experience Manager stores this index in a spreadsheet format and offers access to it via JSON.




As with other configurations, you need only create a workbook titled "query-index" in the root folder of your content source.
Within the workbook, create a single sheet named "raw_index". This sheet will be used to store and manage your query index.
In the columns of the first row, add all other properties you would like to extract and index from each page's <head> properties. Refer to this image for an example of how this might be configured.

Pages are indexed upon publication and removed from the index once unpublished.
The table below summarizes some of the properties available by default and from where they're extracted:
Name	Description
author	Returns the content of the meta tag named author in the head element.
title	Returns the content of the og:title meta property in the head element.
date	Returns the content of the meta tag named publication-date in the head element.
image	Returns the content of the og:image meta property in the head element.
category	Returns the content of the meta tag named category in the head element.
tags	Returns the content of the meta tag named article:tag in the head element as an array.
    See the document Spreadsheets and JSON(opens in a new tab) for more information on array-handling.
description	Returns the content of the meta tag named description in the head element.
robots	Returns the content of the meta tag named robots in the head element.
lastModified	Returns the value of the Last-Modified response header for the document.

The indexer will try to find a <meta> tag with a corresponding name for any header added beyond what is included in the table above.

>> To learn more about query index, refer to: Indexing guide

Sitemaps
Automatic sitemap files can be created for reference in your robots.txt, which boosts SEO and aids in discovering new content. Experience Manager provides three options for generating sitemaps:

    • •
Without any configuration
    • •
Using a query index
    • •
Through manual configuration

Each sitemap is limited to 50,000 URLs and 50MB (uncompressed).
Let's look at the options for generating sitemaps more closely:

WITHOUT CONFIGURATION

If no changes are made, you will see your sitemap in sitemap.xml, along with a sitemap index in sitemap.json that includes all your published documents.
If you want to change from another sitemap type to this one, you need to remove the helix-sitemap.yaml configuration file (whether it was defined manually in GitHub or generated automatically) and then reindex your site.

BASED ON INDEX

You can create a sitemap configuration based on an index. To do this, first ensure you have established an initial query index as covered in the previous section.
This process produces a sitemap located at:
https://<branch>--<repo>--<owner>.aem.page/sitemap.xml
Additionally, it generates a sitemap configuration at:
https://<branch>--<repo>--<owner>.aem.page/helix-sitemap.yaml

MANUAL SETUP

For more customization than the generated sitemap configuration file provides, copy its contents into a file called helix-sitemap.yaml in your project's root folder.

404 page



The boilerplate code already includes a 404.html file in the root directory. You can modify this file to add additional functionality or change its presentation.


Favicon



Adding a favicon to your site adds an icon to your browser tab. This gives your site a more polished and professional appearance.


To add a favicon to your GitHub Pages site:


Design or generate a favicon for your site, saving it as a file with the name favicon.ico.
Place the favicon.ico file in the root folder of your GitHub repository.
Commit your changes and push them to your GitHub repository.

54. Adobe Experience Manager not only facilitates the translation of documents into Markdown and HTML formats but also converts spreadsheets into JSON files.
55. 2
When working with spreadsheets, Adobe Experience Manager allows you to include various query parameters including limit, offset, and sheet, which are used to return specific data from a spreadsheet or workbook.
56. 3
Edge Delivery Services allows developers and authors to set placeholder variables which can be utilized in the code, this is particularly useful for handling hard-coded text content on multilingual sites.
57. 4
Edge Delivery Services allows authors to set metadata in bulk by creating a spreadsheet within the root directory.
58. 5
Developers can incorporate multiple metadata files onto their site by listing all in the /.helix/config.xlsx file.
59. 6
Adobe Experience Manager can maintain an index of all published pages and store it in a spreadsheet format, offering access via JSON.
60. 7
Automatic sitemap files can be generated for SEO purposes.

In this module, you have thoroughly explored how the document is structured and later processed to create a DOM, which you, as a developer, can build from. We have covered many functions and features within the boilerplate code, including redirects, query-indexes, sitemaps, and more. Here is a brief summary:

61. You can preview, publish, unpublish, and delete content for your Edge Delivery Services website, using the AEM Sidekick extension or by making direct requests to the Admin API. The Document Authoring editor uses its own controls for previewing and publishing content.
62. 2
When the source document is previewed, its contents are translated to Markdown and become available within the Preview environment for the site. Publishing the previewed document makes it available within the Live and Production environments.
63. 3
Separating content in the source document into sections introduces <div> elements into the translated markup and resulting DOM. Authors can add styles or additional data attributes to these <div> elements by creating a section metadata table.
64. 4
Blocks are modular site components designed to facilitate custom structures and/or decorations for the markup they contain.
65. 5
Default content is any content added to the document that is not contained within a block and includes different level headings, images, links, unordered and ordered lists, and forms of emphasis.
66. 6
The aem.js and scripts.js files play an important role in creating a well-structured DOM from a page's markup representation.
67. 7
All blocks have their JavaScript file loaded in as a Module (ESM) and export a default function that gets executed when the block is loaded in.
68. 8
All block level CSS should be scoped to the block, which means all selectors in a block should be prefixed with the corresponding block class.
69. 9
There are three methods of cataloging blocks for your project that are based on different authoring methods: the Sidekick Library for document-based authoring, the DA library for Document Authoring (DA), and the block modelling for the Universal Editor.
70. 10
Adobe Experience Manager not only facilitates the translation of documents into Markdown and HTML formats but also converts spreadsheets into JSON files, allowing you to include various query parameters, set placeholder variables, set metadata in bulk, and more.




Authoring and Development Flows


Introduction
In this lesson, we'll explore the development stack required for Edge Delivery Services projects and take a high-level look at the services and tools that are used in the authoring and development workflows in Edge Delivery Services projects.

Development stack
Since Edge Delivery Services is designed for ease of use, a basic web development stack is enough to begin building your own website.
Before continuing with this course, it is recommended that you have some experience with the following technologies:
    • HTML
    • CSS
    • JavaScript

Edge Delivery Services architecture
To help set context for later modules, let's take a high-level look at the services and tools involved in the two following workflows:

Authoring flow
Services and tools that allow authors to manage content

Development flow

Services and tools that allow developers to push code updates

These workflows will be covered within two separate sections, respectively. Before we continue, keep in mind that the information covered in these sections is applicable to all authoring methods.

Since Edge Delivery Services works to decouple code from content to support a variety of content sources, the authoring and development workflows largely function the same between methods.

>> For additional architectural information, please refer to the following documentation: AEM Architecture

Authoring workflow
The authoring workflow can be summarized as a two-step process:

• Content source → Sidekick
In the content source, an author uses AEM Sidekick to preview or publish changes.

• Sidekick → AEM Admin Service
The Sidekick extension makes a request to the AEM Admin Service to complete the authoring action.

Content source → Sidekick
Naturally, the workflow begins with an author making additions and updates to text, images, pages, and other components within the content source. Once they’re ready to preview or publish their changes, the author needs to use the AEM Sidekick extension to initiate the content translation process.


AEM Sidekick is a Chrome-based browser extension that allows authors to edit, preview, publish, and remove content on their Edge Delivery Services site using a simple widget with intuitive, context-aware controls.
Sidekick is intended to be universal for all authoring methods, letting authors easily manage content regardless of what platform they’re using.

We’ll cover the use of the Sidekick extension in greater detail later in the course. For now, all you need to know is that Sidekick is the main publishing interface authors will be working with and is the only tool specific to Edge Delivery Services that they’ll need to understand.

Sidekick → AEM Admin Service
When an author issues a command using Sidekick, it sends a network request to the AEM Admin API, which then passes the command to the AEM Admin Service to perform the necessary procedures in response.

At a high level, the AEM Admin Service coordinates and executes all the other services and steps needed to perform an authoring or development action in Edge Delivery Services, essentially orchestrating both the authoring and development flows.
As an example, let’s look at the steps the AEM Admin Service performs when an author previews and publishes content.

Author selects Preview
Author selects Preview from the Sidekick extension UI.



• Sidekick sends a request to the AEM Admin Service
The Sidekick extension sends the appropriate network request through the AEM Admin API, invoking the AEM Admin Service.



• The AEM Admin Service completes the authoring action
The AEM Admin Service:
    ○ Generates a Markdown document from the original content source - a lightweight file that structures content
    ○ Places this document into the preview partition of the content bus—Edge Delivery Services’ path-addressable storage system for authored content. As part of the Content Hub, it’s optimized for fast delivery using Amazon S3 and Cloudflare R2
    ○ Returns the preview URL
    ○ Clears the cache as required

This process walks you through the authoring workflow when publishing content with AEM Sidekick.

Author selects Publish
An author selects Publish from the Sidekick user interface.





• Sidekick sends a request to the AEM Admin Service
The Sidekick extension sends the appropriate network request through the AEM Admin API, invoking the AEM Admin Service.

• The AEM Admin Service completes the authoring action
The AEM Admin Service:
    ○ Copies the Markdown document—a structured text file—from the preview partition into the live partition of the content bus, Edge Delivery Services’ path-addressable storage system for authored content. As part of the Content Hub, it’s optimized for fast delivery using Amazon S3 and Cloudflare R2
    ○ Returns the publish/production URL
    ○ Clears the cache as required

Development workflow
In the previous section, we saw how Edge Delivery Services simplifies the content-management process using the Sidekick extension in conjunction with the AEM Admin Service. In this section, we’ll show how the development workflow adopts a similar approach, simplifying the development process and increasing development velocity.
As with authoring, the development workflow can be summarized as a two-step process:

• GitHub → AEM Code Sync app
A developer pushes code changes to a GitHub branch. The changes are picked up by the AEM Code Sync app.
AEM Code Sync is a GitHub app that:
    • Listens to changes on your code repositories
    • Publishes code to Adobe Experience Manager’s Code Bus for high availability
    • Intelligently purges caches when changes have been made
Like with authoring, Edge Delivery Services streamlines the development workflow by automating much of the deployment process. GitHub serves as the workspace for storing and collaborating on code, while AEM Code Sync handles publishing, monitoring changes, and purging cache—allowing developers to focus on writing and refining code rather than managing deployment steps manually.



• GitHub → AEM Code Sync app
A developer pushes code changes to a GitHub branch. The changes are picked up by the AEM Code Sync app.


Like Sidekick, actions made in the AEM Code Sync app invoke the AEM Admin API and Service, which perform the various actions needed to trigger a successful code update.



Let's run through what this process looks like using an example:



The AEM Code Sync app configured on the repository sends the appropriate network requests to the AEM Admin API, invoking the AEM Admin Service.




The AEM Admin Service:
    • Copies code from the GitHub repository into the appropriate Code Bus storage partition
    • Intelligently purges CDN caches as needed


Next steps
You should now have some understanding of the authoring and development flows as well as the internal mechanisms and services that drive them.
We’ll cover some of these services in more detail in the next lesson, where we’ll give you an overview of the initial setup process for an Edge Delivery Services site. This includes configuring the AEM Code Sync app and AEM Sidekick for the development and authoring workflows, respectively.

71. To start developing with Edge Delivery Services, you only need to be familiar with a basic web development stack, including HTML, CSS, JavaScript, and GitHub.
72. 2
The AEM Sidekick browser extension lets users edit, preview, publish, and remove content on their Edge Delivery Services website. It is supported by the AEM Admin Service, which performs the authoring action.
73. 3
AEM Code Sync is a GitHub app that listens to the changes you make in your repositories, publishes code to Adobe Experience Manager's Code Bus, and purges caches once the changes have been made. It is supported by the AEM Admin Service, which performs the code updating action.



Initial Setup and Configuration

Introduction
In this lesson, we’ll give you a high-level overview of the general steps involved with setting up a basic Edge Delivery Services site, including the necessary configurations for establishing authoring and development workflows.
Rather than walking you through every step of the procedure in detail, this lesson will just summarize the process to help set context for later modules. That said, if you still want to try the setup process yourself to reinforce your learning, we highly recommend that you follow the official developer tutorial for your chosen authoring method:

• >> Setup for Google Drive(opens in a new tab)
• •
>> Setup for Microsoft Sharepoint(opens in a new tab)
• •
>> Setup for Document Authoring (DA)(opens in a new tab)
• •
>> Setup for Universal Editor


Code repository setup
Regardless of which content source is being used with Edge Delivery Services, creating the code repository is always the first step. This is where you configure the boilerplate code that serves as the foundation for your Edge Delivery Services implementation.


Boilerplate code
Edge Delivery Services provides its own starting boilerplate code as a standard foundation for a given project.
As we’ll explore in future modules, this code:

    • •
Helps create and decorate the initial DOM, resulting in a page with a simple and easy-to-read HTML structure to allow for easier development.
    • •
Ensures that your site starts with perfect core web vitals, comes with tools to assist authors and developers, and follows web development industry's recommended best practices.

The boilerplate code(opens in a new tab) is publicly available as a template that developers can clone as a starting point for their projects. To access the template, refer to the developer tutorial for your authoring method for a link to the appropriate code.

AEM Code Sync GitHub app
Once the repository is populated with boilerplate code, install the AEM Code Sync GitHub app.

As covered in the previous lesson regarding the development workflow, this application automates the code deployment process and immediately provides you with the initial site.

>> For general information on the AEM Code Sync app, refer to: AEM Code Sync
Setting up the GitHub app is the last step in establishing the development workflow for the website. The site is made publicly accessible via a live preview URL, using the following format based on the repo setup:

https://<branch>--<repo>--<owner>.aem.page/


Content source setup
Once the code repository and development workflow are set up, you can connect the content source to the implementation.

Linking code to content
From the boilerplate code alone, a newly set-up Edge Delivery Services site will already have some default content to display for reference. In its default configuration, the boilerplate code points to an already accessible Google Drive folder which is responsible for the sample content you first see.
As discussed, one of the benefits of Edge Delivery Services is its flexibility around content sources. While different sources may require different authentication methods and services for retrieving content, in the code base itself, you only need to update a single configuration file to point to the content source:

fstab.yaml

Preparing your content source
At this point, all that’s left to do is to configure the content repository and authoring workflow. Many of the processes in Edge Delivery Service will vary depending on your authoring method.

Regardless of authoring method you’ve selected, the goal of this step is to grant Edge Delivery Services some level of access to the content repository.
Recall the authoring workflow covered in the previous lesson, when an author previews content using the Sidekick extension. To support this workflow, we need the AEM Admin Service to generate a Markdown file from that original source.
When the repo’s fstab.yaml file is updated to point to the desired content source, we’re telling Edge Delivery Services where it should be pulling content from. Once connected, the authoring workflow for the site is complete, and content can start to be previewed and published using the appropriate tools and workflows.

Previewing and publishing content
Once the development and authoring flows are established, content can start to be previewed and published. Depending on your authoring method, some extra steps may be involved like installing AEM Sidekick if you aren’t using the Universal Editor (UE) method.
If you want to try this yourself, consult the developer tutorial for your authoring method for specific steps.

Selecting content and code with URLs
Once the code repo, development workflow, and authoring workflow are set up, the site is ready to begin building out. As content moves through previewing and publishing, it’s hosted at the following URLs:

Previewed content

https://<branch>--<repo>--<owner>.aem.page/

• Published content
https://<branch>--<repo>--<owner>.aem.live/

This allows you to view both the previewed and published versions of the site content using “.page” and “.live” respectively, and the URLs are namespaced based on the repo, branch, and owner.
This URL pattern makes it super simple for a developer to make, preview, and share updates with stakeholders without worrying about overlap with other changes. As updates to a branch or new branches are pushed to the repository, separate versions of the site will immediately be made available via the branch’s namespaced URL.
Let's look at an example:

Developer actions
A developer is working through a ticket with the name “ft-1283-contact-page”.
They need only:
    • Branch off from "main"
    • Name their branch “ft-1283-contact-page”
    • Commit and push through their code changes

Success
Through no further action on the developer's part, this code can now be run against both previewed and published content for testing by other stakeholders:
    • Previewed content:
https://ft-1283-contact-page--<repo>--<owner>.aem.page/
    • Published content:
https://ft-1283-contact-page--<repo>--<owner>.aem.live/


By having a 1:1 preview environment for each active branch, there is no longer a need to maintain staging environments or run through lengthy build processes and deployment pipelines. Instead, every branch acts as its own testing environment which can be immediately viewed by authors, QA teams, and any other stakeholders involved in your organization's development process.
In addition to greatly increasing development velocity, it also encourages developers to work directly alongside authors, reviewing and iterating on updates which can then be immediately previewed and further refined in real time.

AEM Command Line Interface (CLI)
Of course, before a developer pushes their branch out for review and testing, they need to be able to run and test these code updates within a local development environment first.

This is where the AEM Command Line Interface (CLI) comes into play, letting developer use command-line arguments to push code updates and other common development tasks.


• >> The Developer Tutorial provides specific installation instructions if you are following along: Developer Tutorial(opens in a new tab)
• •
>> For the latest list of available arguments, refer to: AEM CLI reference

AEM Admin API
Throughout this module, we’ve touched on some of the critical functions the AEM Admin Service plays in managing the lifecycle of content and code. In our coverage of the AEM Sidekick browser extension and the AEM Code Sync GitHub app, we mentioned how these tools send requests to the AEM Admin API, thereby invoking the AEM Admin Service.

As a developer, you can opt to interact with this API directly, which may be useful for:
    • Bulk previewing and publishing operations
    • Triggering code updates
    • Clearing cache

Familiarity with the Admin API can also allow you to perform actions beyond what is available to authors via the Sidekick extension. This includes the ability to:
    • Manage your site’s index
    • Generate a sitemap
    • View logs
    • View jobs and job status
    • Manage different configurations
>> For a complete list of available actions please refer to: Admin API documentation


74. Edge Delivery Services provides developers with a starting boilerplate code template that you can clone to begin your project.
75. 2
The content source is connected to the site by adding its URL to a specific .yaml file in the codebase.
76. 3
Previewed content can be viewed on “.page” URLs, and published content is available on “.live” URLs.
77. 4
The AEM Command Line Interface (CLI) allows developers to test and debug code updates within a local development environment before pushing to a remote branch.
78. 5
The AEM Admin API lets developers perform actions beyond what is available to authors via the Sidekick extension.

In this module, you have explored the high-level architecture of Edge Delivery Services, including its authoring and development workflows, as well as learned about the initial setup process for a typical Edge Delivery Services site. Here is a brief summary:
79. Edge Delivery Services architecture includes tools and services that allow authors to manage content (authoring workflow) and developers to push out code updates (development workflow).
80. 2
The AEM Sidekick extension in the main publishing interface that authors use to edit, preview, publish, and remove content on the Edge Delivery Services site.
81. 3
The AEM Code Sync app is a GitHub application that listens to changes in the code repositories, publishes code to Adobe Experience Manager’s Code Bus, and purges caches when changes have been made.
82. 4
After cloning the starting boilerplate code template and installing the AEM Code Sync GitHub app, update the fstab.yaml file to point to your content source.
83. 5
You can view the previewed version of your Edge Delivery Services site, using the https://<branch>--<repo>--<owner>.aem.page/ URL, and the published version, using the https://<branch>--<repo>--<owner>.aem.live/ URL.


Optimizing Content Delivery

PageSpeed Insights


Introduction


PageSpeed Insights, an open-source tool from Google, delivers both real-world data and simulated lab results from Lighthouse to measure your page's load and render performance—then it generates a clear, actionable report.
This process is referred to as "auditing".




After completing this lesson, you will be able to:
    • Identify key web performance tools like PageSpeed Insights and Lighthouse
    • Explain how performance metrics (FCP, LCP, TBT, CLS, SI) are measured and reported
    • Use optimization techniques to improve site speed and responsiveness
    • Evaluate performance reports to diagnose bottlenecks and prioritize fixes
    • Assess the impact of optimizations on mobile and desktop experiences
    • Implement structured testing workflows to maintain long-term performance


PageSpeed Insights overview
PageSpeed Insights evaluates websites across the four key categories:
    • Performance
    • Accessibility
    • SEO
    • Best practices
You can run Lighthouse in several ways:
Chrome DevTools

Launch Lighthouse from the browser to instantly view a user-friendly report.
Tip: Log in to authenticate and run the audit right away.
>> Google Documentation

Command line

Automate your Lighthouse audits with shell scripts.
>> Google Documentation

Node module

Integrate Lighthouse into your continuous integration system.
>> Google Documentation


Online

Simply enter a webpage URL at PageSpeed Insights(opens in a new tab) and get your report immediately.
>> Google Documentation

From <https://certification.adobe.com/courses/playScorm/1345/1308?restart=1> 


In the context of Edge Delivery Services, auditing is an important step in the code deployment process.
Consider the following examples:

As part of auditing performance, Lighthouse measures page load speed and time to render.



As part of accessibility testing, Lighthouse examines alt text and keyboard navigation support.




For best practices, Lighthouse considers whether secure HTTPS connections are being used.



Once Lighthouse has completed its audits, it produces a report that includes associated scores, identifies problem areas, and makes recommendations for improvement



In this way, Lighthouse can assist developers in addressing deficiencies in performance, accessibility, best practices, and SEO.

The color indicators that Lighthouse provides for its metrics scores help developers quickly identify areas that need improvement.
    • Red (0-49) 🔴: Metrics scores in red are critical issues needing immediate attention.
    • Orange (60-89) 🟠: Metrics scores in orange are moderate issues that could use improvement.
    • Green (90-100) 🟢: Metrics scores in green indicate good results and a good user experience.
Consider the following use case:


A quick glance at this Lighthouse report shows you that Performance and Best Practices are green, indicating good scores, while Accessibility and SEO metrics, are orange, indicating areas for improvement.


Over the next few sections, we'll break down each Lighthouse metric and how the scores are calculated.

Performance
To evaluate performance, Lighthouse measures and reports on five separate performance-related metrics (scores). These metrics are weighted and averaged to produce an overall Performance score. Broadly speaking, the Performance score reflects a website's loading speed and responsiveness. After conducting all relevant audits, scores are reported, areas needing improvement are identified, and specific remedies are suggested.
These are the performance-related metrics and their respective weights:

Audits	Weight
(FCP) First Contentful Paint	10%
(SI) Speed Index	10%
(LCP) Largest Contentful Paint	25%
(TBT) Total Blocking Time	30%
(CLS) Cumulative Layout Shift	25%

>> More details at Google’s Lighthouse Performance docs

First Contentful Paint (FCP)
First Contentful Paint (FCP) measures the time it takes for the first visible elements on your page to appear when loading in.

A good score at the time of writing is 1.8 seconds or less for at least 75% of page loads.

Note that the first visible elements can include even the barest visual indication that a page is loading. This indication could be:
    • A piece of text
    • Background image
    • A single pixel

Speed Index (SI)
Speed Index (SI) measures how fast page content within the viewport is loaded over time, and on average. The more content loaded quickly, the better.
SI is calculated by capturing a video of the page and computing the progression of rendering between frames. The more content that is rendered between frames, the faster the page loads from the point of view of the user.

SI scores are compared against the speed indexes of real websites. This is based on data from the HTTP Archive.

A good SI score is currently considered to be: 3.4 seconds or less for mobile and 1.3 seconds or less for desktop.
Largest Contentful Paint (LCP)
Largest Contentful Paint (LCP) measures how long it takes for the largest piece of visible content to be rendered within the user’s viewport. Measures for mobile and desktop are tracked separately.
LCP can apply to any type of web element if that element is the largest piece of content on the page. For example, it could be:
    • An image
    • A block of text
    • A video

A good score for this measure is 2.5 seconds or less for at least 75% of page loads.

Total Blocking Time (TBT)

Total Blocking Time (TBT) measures the total time after the First Contentful Paint (FCP), during which the main thread is "blocked" long enough to prevent user input.

Technically, the main thread is "blocked" every time a task needed to set up a page is executed.

However, the time that counts towards TBT only starts after 50 ms have passed since the task began executing. 50 ms is the limit set by Google to assess the score. Any task that executes for more than 50 ms is considered a long task. The amount of time after 50 ms is the blocking portion.

For example, if a JavaScript resource takes 120 ms to execute, this task contributes 70 ms to the TBT score (120 – 50 = 70).


Cumulative Layout Shift (CLS)

Cumulative Layout Shift (CLS) measures the stability of your visual page layout as the user interacts with it. Measures for mobile and desktop are tracked separately.

A layout shift occurs when a visual element changes position or size in a way that can be jarring for an end user.

More specifically, CLS measures the largest combined magnitude of layout shifts at a given moment in the page's lifecycle.

Like TBT, this metric is of particular importance to developers since it indicates the user's ability to see and interact with a page in a non-disruptive manner.


Accessibility

In addition to the performance-based audits, Lighthouse also runs audits that evaluate a page for accessibility.

The purpose of these audits is to determine whether a page is inclusive and able to accommodate visitors with special needs, such as visual or physical impairments.



Best practices

Lighthouse even evaluates whether a page follows pre-defined best practices by performing individual checks that consider:

Efficiency

Security

Overall user experience

For example, Lighthouse examines:

Whether the recommended HTTP/2 protocol is used rather than HTTP/1.1

Whether a Content Security Policy is sufficiently strict

Whether an image is served with correct dimensions

>> For information on individual best practices, see Google’s best practices documentation


Next steps

You should now have some understanding of the Performance, SEO, Accessibility, and Best Practices audits that make up a Lighthouse score. In the next lesson, we focus on tools, boilerplate code, and development techniques meant to avoid and address deficiencies identified in the performance audit.

Use the PageSpeed Insights tool yourself to assess a URL and get a sense of how a report can be generated and reviewed. Pay particular attention to the performance audit and individual performance-related metrics covered in this lesson: FCP, SI, LCP, TBT, and CLS.

>> Start auditing at PageSpeed Insights



Performance Optimization Techniques


Three-Phase Loading (E-L-D)


According to Eager-Lazy-Delayed (E-L-D) methodology, the most valuable page content (from the user perspective) is assigned the highest priority. This content is separated from other page content and loaded first in the Eager phase. All other pieces of content deemed less valuable are given lower priority and loaded during either the Lazy or Delayed phase

Eager phase

During the Eager phase, the browser loads in site elements needed to achieve LCP. These elements are the bare minimum required to render the most important piece of content within the user's initial viewport. In the context of Edge Delivery Services, this typically maps to the first, above-the-fold, section on a page.



During this phase, the boilerplate code:

Constructs any necessary auto-blocks

Adds CSS classes to icons, buttons, blocks, and sections

Loads in the first full section and any required dependencies


Lazy phase

The Lazy phase begins when the Eager phase has completed, and the first section is revealed. During this phase, the browser displays subsequent sections and blocks within them from top to bottom. These include all site resources that don't block the main thread and thus don’t affect Total Blocking Time (TBT). Recall that it’s important to minimize TBT, as user interaction is prevented when the main thread is blocked.




Resources that load during the Lazy phase include:

All sections not loaded during the Eager phase (i.e. all sections after the first one)

The JavaScript and CSS for all blocks contained in these sections

All remaining images according to their loading="lazy" attribute

Non-blocking JavaScript libraries


Delayed phase

The Delayed phase loads in libraries that have no immediate impact on user experience and are therefore handled last.

These can include:

• Marketing scripts

• Analytics scripts

• Chatbots

• Tag managers



Since these libraries typically originate from third-party sources and thereby come from different origins, they can disproportionately tax network resources. This can increase TBT and prevent user input, causing frustration. To prioritize an immediate user experience, it is recommended to have a three-second delay between the end of the Lazy phase and the beginning of the Delayed phase that allows for user interaction.


Top-down load order

In the previous section, you saw how a three-phased approach can help improve a site's Lighthouse score and observed how priority is given to the first section of a page during the Eager phase to improve the LCP score specifically.

It's also important to understand the order in which the rest of a page is loaded during the Lazy phase and which performance metrics are affected by this ordering. Remember that any content outside the first section of a page is handled within the Lazy phase, as this content is expected to be outside the user’s initial viewport and not a part of the LCP.

Let's first examine the loadLazy function provided as a part of the boilerplate code:





Block optimization

Most development work typically involves creating new blocks of varying complexity. While Edge Delivery Services provides you with a starting website and perfect Lighthouse score, performance often begins to degrade once a developer starts introducing unoptimized project-specific blocks.

In previous modules, you explored how a block's CSS and JavaScript are loaded and how they shape and style authored content. In this section, we will look at how this can be done performantly while avoiding common pitfalls that negatively affect the Lighthouse score.


Revealing blocks

For more complex blocks, it's important to consider whether the block should be hidden and later revealed to avoid CLS or a flash of un-styled content (FOUC).

Because blocks further decorate and structure the authored content, they modify their initial HTML and often adjust the block's height. Developers must evaluate how significantly JavaScript changes a block's content and hide these DOM manipulations from users until the block is fully ready for display.


Placeholder content

While best avoided, it may be the case that a block's content is derived from some external source or may take a while to load.

For example, consider a block which displays a table of users, featuring their name alongside a profile image or headshot.


Font fallback

Most sites introduce a custom font to add additional branding and improve overall presentation. However, since the custom font must be loaded in and swapped with the default font, text may suddenly occupy a different amount of space and impact CLS.

While you could hide the full body until the font is loaded, this would greatly impact a site's FCP and LCP scores. Font fallback helps mitigate these problems.



Automated PR testing

The AEM Code Sync GitHub app and the standard boilerplate code automatically lint your CSS/JS and run PageSpeed Insights for Web Performance, Accessibility, SEO, and Best Practices.

These checks are performed on each newly created pull request and re-run on every pushed update to a branch with an opened pull request. By incorporating these checks into the development workflow, you can ensure that your website's performance consistently remains at a perfect score with each code update.


Formatting a pull request
For example, if a developer creates a new block, this block should exist on the provided page.

To get a more accurate PageSpeed Insights performance score, link to the cached .live environment whenever possible.

The boilerplate code includes a pull-request template that, when filled in, allows the AEM Code Sync app to properly test your opened pull request. You are free to edit this template as needed, although a test link to run against PageSpeed Insights is always a requirement.







Additional Best Practices



Limits

Edge Delivery Services applies limits on preview operations for content that is ingested from your content source. If exceeded, an error will appear in AEM Sidekick informing the authors of the limit. This limit varies depending on the file type.

There are also limits imposed on other forms of site content, including:

• Indexing Limits

• Sitemap Limits

• Redirect Limits

• Number of Pages Per Site

• Rate Limits

• AEM Code Sync Limits

• Admin API Limits

>> See the Limits guide(opens in a new tab) for details.


GitHub management

Here are some best practices to help you manage the GitHub side of your Edge Delivery Services projec

Protect your main branch

Don't push directly to the main branch. Create pull requests instead to encourage review and leverage the automated testing provided by the AEM Code Sync app. It may be worthwhile to protect your main branch, so changes are not accidentally pushed to production.


Link PRs to test pages

Every PR should link to at least one page where the related code change can be observed in action. This helps to review and test the PR, and ensures any resulting degradation to performance is considered in the PageSpeed Insights result.


Meet linting and Lighthouse standards

Don't submit a PR that has linting errors or a low Lighthouse score. AEM Code Sync performs these checks automatically, so these are minimum criteria that should be met. It is much easier to maintain a high Lighthouse score rather than try to improve performance later. To see a realistic PageSpeed Insights performance score, link to the cached .live environment.

Keep branches private
A branch should be considered private for its creator, unless there is an explicit agreement to share that branch. This helps to protect branches against unwanted changes.

Keep PRs small and manageable
Keep PRs relatively small and short-lived (given that Adobe Experience Manager works well with scaled trunk-based development). This reduces the effort and complexity to review PRs without shifting burden to QA.


Maintain linting configuration
Don't change the linting configuration (i.e. eslint, airbnb-base, stylelint), unless there's a very good reason for doing so. This makes transitioning to different projects as a developer easier. It is good practice to also keep out of the box dependencies (such as linting) up to date.


Launching Your Website

Introduction

This lesson offers an in-depth walkthrough of recommended steps to effectively launch a website.

The go-live checklist combines a list of general best practices and action items specific to Experience Manager that developers need to consider when launching a website on Edge Delivery Services

After completing this lesson, you will be able to:

Ensure content and design quality before go-live

Validate website performance before go-live

Implement pre-launch configs for branding, security, and content delivery

Pre-launch checklist





Content and design quality assurance (QA)

The primary goal of this action item is to ensure that all content and design elements not only meet but exceed your project's defined specification and brand guidelines. It's about making sure the site delivers the intended user experience by featuring personalized high-quality content as well as a properly implemented design.

When completing this step, do the following:

Meticulously review each page on the .aem.live domain for quality content. Ensure published content is accurate, complete, and ready for public consumption.

Verify accessibility to confirm it adheres to the project's accessibility standards.

Confirm that the design renders correctly across various browsers and devices.

Double-check for SEO compliance, including meta descriptions, appropriate alt text for images, and proper use of header tags.


Your site should aim to achieve a Lighthouse score of 100 on Google PageSpeed Insights for both the mobile and desktop versions of the site. In the previous module, we explored how Lighthouse collects and analyzes diagnostic information and provides a score. This action item helps you check that you website achieves the 100 Lighthouse score.


Operational Telemetry (OpTel) instrumentation

This action item involves instrumenting Operational Telemetry (OpTel) to capture and analyze user experiences and performance data in real-time.


Operational Telemetry (OpTel)  is a performance monitoring technique that tracks how actual users interact with your website or application in real time. Unlike synthetic monitoring (which simulates user behavior), OpTel collects data from real users' browsers or devices to give you a true picture of performance and user experience.

This should be set up prior to launch to ensure real-world issues can be quickly identified and addressed.

When completing this step,  do the following:


OpTel is enabled by default for projects that start with Edge Delivery Services. If your project did not originate with Edge, you’ll need to manually instrument OpTel before launch.

Use the OpTel data to identify and address any performance regressions or user experience issues as they surface.


Legacy redirects

If your site has been migrated, consider what redirects should be put in place to ensure returning users can access the information they need.



Sitemap and robots configuration

This action item verifies that your sitemap and robots.txt file are configured to enhance search engine crawling and visibility.

When completing this step, do the following:


Generate an up-to-date sitemap for your website, making sure to include all relevant pages for the best results. Experience Manager automatically generates a sitemap from the query index.

For multilingual sites, incorporate hreflang tags in the sitemap. This is essential for targeting the correct language and geographic audience and prevents SEO cannibalization.

Ensure that the robots.txt file allows search engine crawlers to access the sitemap




Indexing

If your site relies on a configured index to enable lists, feeds, and searches, you should verify and/or set this up before launch.

When completing this step, do the following:

Start by activating the index. Preview using the Sidekick extension and the activated index will create an index configuration.



Use the following endpoint to verify the representation of the index:

https://<branch>--<repo>--<owner>.aem.live/query-index.json

The response returns your query index in JSON format.

Debug your index configuration and test site features that rely on it.

Canonical URLs

Canonicalization is Google's process of selecting the most representative URL for duplicated content. This action item aims to ensure that you correctly implement canonical URLs on your site to prevent duplicate content issues.

First, consider what sources of duplicated content may exist for your site:

Region variants
Same content, same language (for example, USA and UK).

Device variants
Same content, but different pages for mobile and desktop.

Protocol variants
HTTP and HTTPS.

Site functions
Any generalized functions like the results of sorting and filtering on a category page.


Accidental variants
Site versions left unintentionally accessible to crawlers, like old demos.

Some duplicate content may occur and be accessible from different URLs but should be limited or reduced to prevent a bad user experience and more accurately track how content performs via search results.

Google will try to automatically determine what duplicate page is most useful for search users and mark it as canonical. You can indicate preference, but Google uses this as a suggestion and not a rule. Only canonically indexed pages are crawled regularly.

Accordingly, when completing this step, do the following:


Specify the preferred version of a page using the <link rel=”canonical”> tag in the HTML <head> section.

Ensure all canonical URLs return a 2xx HTTP status code in the response.

Verify canonical URLs are consistently and correctly implemented across the entirety of your site.

Authentication for authors

Control who has access to preview and publish content by setting up authentication for authors. This adds an additional layer of security to the Sidekick extension.

When completing this step, do the following:

Set up authentication for the AEM Sidekick. This restricts access to authorized users only.



Define specific user roles and permissions. This helps manage content editing and publishing workflows effectively.




SharePoint access (if applicable)

Ensure secure and controlled access to content stored in SharePoint.

When completing this step, do the following:

CDN configuration

Often, the last step before go-live is to update your CDN to point to your Edge Delivery Services site’s published endpoint.

When completing this step, do the following:


Update your CDN configuration to point directly to the aem.live endpoint.

If you are using a self-managed CDN (like Cloudflare, Fastly, Akamai, or CloudFront), configure it according to the provider's specific documentation:

>> Cloudflare Worker Setup Guide(opens in a new tab)

>> Akamai Setup Guide(opens in a new tab)

>> CloudFront Setup Guide(opens in a new tab)

>> Fastly Setup Guide


Test the CDN configuration thoroughly in a staging environment if possible. Verify correct operation and ensure redirects function as expected from www to APEX and vice-versa.


Push invalidation setup

Guarantee that content updates go live immediately by correctly setting up push invalidation.

When completing this step, do the following:


Update production host for the Sidekick Extension

This action item allows authors to access the Sidekick extension from the production domain and select the production environment from within the extension.

When completing this step, do the following:


Add the host property to the sidekick configuration. You'll find this in /tools/sidekick/config.json within your GitHub repo.




Verify that authors can now access the sidekick from the production domain.


Completed pre-launch checklist

Finally, let's look at the completed pre-launch checklist to recap the main steps we've covered.

Content and design reviewed


Performance testing complete (Lighthouse score above 90)


Analytics properly tracking key metrics


Operational Telemetry (OpTel) instrumented


Legacy redirects in place


Sitemap is configured and accessible


Canonical URLs implemented


Favicon added


Authentication for author configured as required


CDN configurations finalized


Push invalidation tested


Production host set up for Sidekick extension


Post go-live validation

After go-live, follow these steps to properly identify and address any issues that surface:

Performance validation
Confirm that the production environment continues to achieve a perfect Lighthouse score using PageSpeed Insights.





Google Search console
Keep a close eye on the indexing status of new and updated pages, watch for any crawl errors or changes to backlinks.


404 report
Monitor for HTTP 404 (Not Found) errors. Implement redirects as needed to improve user experience.


The pre-launch checklist helps you ensure that your site is ready for the public.

2
The pre-launch checklist includes quality assurance for content and design, performance validation, analytics validation, Operational Telemetry (OpTel) instrumentation, legacy redirects, sitemap and robots configuration, indexing, canonical URLs, favicon, authentication for authors, SharePoint access, CDN configuration, push invalidation setup, and production-domain setup for the Sidekick extension.

3
Post go-live validation helps you ensure you properly identify and address any issues that occur after launch, including performance validation, the Google Search Console check, and the 404 report.


BYO CDN Setup

Introduction

With Edge Delivery Services, you can use the CDN of your choice to deliver Adobe Experience Manager content under your own domain. This capability is referred to as Bring Your Own CDN, or BYO CDN.

This lesson will help you decide which CDN setup works best for you and provide steps on how to configure it. While you are free to configure your CDN according to your own needs, there are some settings that are recommended by the Adobe Experience Manager team, if not outright required. Let's get started.


After completing this lesson, you will be able to:

Select a CDN

Complete the BYO CDN configuration


Selecting a CDN

If you have yet to decide what CDN to use, start by considering the different options that Adobe Experience Manager officially supports:

Cloudflare

CloudFront

Fastly

Akamai

Adobe-managed CDN


Configuring your CDN

Regardless of the CDN selected, certain settings are recommended or required by Experience Manager and must be configured correctly:


Set the origin URL to point towards your publishing instance:

Origin URL: https://main--<yoursite>--<yourorg>.aem.live


Send these required headers to origin:

X-Forwarded-Host: <production domain>

X-Push-Invalidation: enabled


Enable origin cache control.

Origin cache control response headers must control Cache TTL on the production CDN.

Enable compression (gzip).

Query parameters:

Must be forwarded to origin

Must be included in cache key


Age response header:

The Age response header must be either suppressed or overridden (Age: 0).


Adobe offers up-to-date vendor specific setup documentation allowing you to follow along and perform the setup process yourself.
Please review the appropriate documentation from the following list:
    • >> Cloudflare: Cloudflare Setup guide(opens in a new tab)
    • >> CloudFront: Amazon Web Services (AWS) CloudFront Setup guide(opens in a new tab)
    • >> Fastly: Fastly Setup guide(opens in a new tab)
    • >> Akamai: Akamai Setup guide(opens in a new tab)
    • >> Adobe-managed CDN: Guide to Adobe Managed CDN


Edge Delivery Services relies on long-lived shared caches with precise invalidation. Whenever content gets published, the helix-admin service will precisely invalidate the cache for the affected pages and resources. This ensures that content and code is immediately available to users. We need the same process to occur in the production domain and BYO CDN as well.

To enable push invalidation, you'll need to add a specific set of properties to your project's configuration, which vary depending on your chosen CDN. These properties are usually represented as a config spreadsheet within your content source under the .helix folder.

While most of the vendor specific setup guides referenced previously cover push invalidation, please refer to the documentation for your CDN for specific instructions:

• Cloudflare: Cloudflare configuration properties(opens in a new tab)
• CloudFront: CloudFront configuration properties(opens in a new tab)
• Fastly: Fastly configuration properties(opens in a new tab)
• Akamai: Akamai configuration properties(opens in a new tab)
• Adobe-managed CDN: Adobe-managed CDN configuration properties


Adobe Experience Manager officially supports the following CDNs: Cloudflare, CloudFront, Fastly, Akamai, and Adobe-managed CDN.

2
When configuring your own CDN, set the origin URL to point towards your publish instance, send required headers to origin, enable origin cache control and compression, check that query parameters are forwarded to origin and included in cache key, and make sure the Age response header is either suppressed or overridden.

3
To enable push invalidation, you need to add CDN-specific properties to your project's config spreadsheet within the .helix folder in the content source.



In this module, you have learned how to launch your first Edge Delivery Services website, including the go-live checklist and steps required to set up your own CDN with providers like Cloudflare, Akamai, CloudFront, and Fastly. Here is a brief summary:

1.
Adobe Experience Manager officially supports the following CDNs: Cloudflare, CloudFront, Fastly, Akamai, and Adobe-managed CDN.

2
When configuring your own CDN, set the origin URL to your publish instance, send required headers, enable origin cache control and compression, forward query parameters, and suppress or override the Age response header.

3
The pre-launch checklist helps ensure your site is ready for public access by covering content and design QA, performance testing, analytics validation, and SEO readiness.

4
Operational Telemetry (OpTel) should be instrumented before launch to monitor real-time user experience and performance from actual user devices.

5
Legacy redirects, sitemap and robots.txt configuration, and canonical URLs help preserve SEO value and ensure proper indexing by search engines.

6
Authentication for authors and SharePoint access (if applicable) should be configured to secure content workflows and manage permissions.

7
The Sidekick extension should be updated with the production host to allow authors to manage content directly from the live domain.

8
Post go-live validation includes monitoring performance, checking indexing status in Google Search Console, and resolving 404 errors to maintain a seamless user experience.




Monitoring and Management

Operational Telemetry (OpTel)



Introduction

Operational Telemetry (OpTel), formerly called RUM, is a service that gathers anonymous operations data to discover and fix functional and performance issues. Unlike laboratory-based tools like Lighthouse, OpTel delivers real-world data by collecting page-view information on a subset of interactions.

After completing this lesson, you will be able to:

Describe what Operational Telemetry (OpTel) is

Explain how to visualize page-view data using the OpTel Explorer

Understand how you can add additional OpTel tracking to your site



Privacy guardrails

Since OpTel tracks the activities of real-world use, compliance with individual privacy rights is a critical design principle when it comes to how OpTel tracks, structures, and processes usage data. To enforce your understanding of how OpTel data is structured and used, which is covered later in this lesson, we’ll start by looking at the overarching privacy guardrails that guide the service’s implementation.


OpTel is designed to protect visitor privacy and minimize data collection.

This means that a website that leverages OpTel will not collect or share any personally identifiable information (PII), which refers to any information that could be traced back to an individual.

To maintain privacy, OpTel does not track visitors, users, or even browser sessions, and instead only tracks a limited subset of activities associated with page views.

Accordingly:

Tracking interactions across multiple pages is not possible by design and data is only collected on a page-view-by-page-view basis.

Not every page view is recorded.

The sampling rate is set to one out of every one hundred page views by default. Site administrators can adjust the sampling rate if required.


OpTel data

Broadly speaking, OpTel only collects data necessary for assessing the performance and functionality of a single page view. Some attributes include:

•
A unique, randomly generated ID for the page view

•
Core Web Vitals performance metrics that describe the visitor’s quality of experience

•
The referrer URL (the URL of the page that linked the user to the current page)

For an up-to-date, exhaustive list of all information currently collected by OpTel in Adobe Experience Manager, refer to the following documentation:

>> What data is being collected(opens in a new tab)

>> Data Overview


OpTel with Edge Delivery Services

Now, with an understanding of OpTel and the data it collects, you’re encouraged to take another look at the boilerplate code and see how the aem.js file uses the sampleRUM function to automatically enable OpTel and handle its functionalities:

>> Refer to the aem.js file: sampleRUM


The sampleRUM function is already implemented and executed out of the box. However, it’s worth noting that you can leverage OpTel in standalone mode on websites that do not use Edge Delivery Services.
>> For more details, see: How to add RUM Instrumentation to your Site

OpTel Explorer
OpTel Explorer provides a simple user interface to analyze the collected data for a given domain. It serves as a data visualization tool for authors, site owners, developers, and operations teams to understand their site's performance, traffic acquisition, and conversion patterns. OpTel Explorer can be easily shared using a publicly accessible URL, allowing team members to review the data collaboratively.

The OpTel Explorer for your Edge Delivery Services site is available at the following URL:

>> https://www.aem.live/tools/oversight/explorer.html?domain=<domain>&view=month&domainkey=<domain-key || open>


User interface overview

The OpTel Explorer’s user interface is divided into three distinct areas:

Key metrics

Data visualization

Facets for detailed data analysis





Key metrics are located in the upper-left corner and categorized into two distinct groups:

Business metrics	Performance metrics
Page views	Largest Contentful Paint
Visits	Cumulative Layout Shift
Engagement	Interaction to Next Paint
Note that the performance metrics are colored while the business metrics are gray.

The color of a performance metric indicates the quality of the metric:
    • Green 🟢 – for ideal
    • Yellow 🟡 – for unoptimized
    • Red 🔴 – for poor
Business metrics are grey since there is no quality flag associated with them.



A chart located in the bottom-left corner offers a concise visual representation of your data.

By default, this visualization displays page views alongside performance metrics tracked over time (timeline view).



The right side displays a set of facets that provide a detailed analysis of the data. Each facet comes with checkboxes that allow you to filter the entire dataset, ensuring that only the page views that match your selected criteria are included.

You can also select between three different categories of metrics to display alongside each facet value:

Performance

Traffic acquisition

Engagement

Date ranges

OpTel Explorer tracks data over time, effectively recognizing both short-term and long-term trends.

For the key metrics at the top of the page, a small green or red line next to a given value lets you know at a glance whether the trend is positive or negative for the corresponding metric.


The drill-down view for the Device Type and Operating System facet displays a two-layered pie chart; the inner layer represents the distribution of page views among device type categories (desktop, mobile, and bot) while the outer layer further categorizes this information by operating system.




The drill-down view for the URL facet is a horizontal bar chart that shows the distribution of performance metrics for each URL. URLs that demonstrate favorable performance are highlighted in green, while those that perform poorly are denoted in red. Pages with insufficient data are displayed in gray.




The drill-down view for the Checkpoints facet is a flow diagram (commonly referred to as a Sankey diagram) that illustrates the different paths or journeys visitors take as they enter a webpage (on the left), engage with and consume the content (in the center), and finally exit the page or stop their engagement (on the right).


focus modes
The significance of any metric will vary depending on your role. Something that is important for a developer might not be relevant for an author, marketer, or a designer.



To address this, the facet sidebar provides a selector that lets you select one of three focus modes that change the metrics shown within the facets:
    • Performance
    • Traffic acquisition
    • Conversion or engagement

Regardless of the focus mode selected, green 🟢 indicators mean that this metric is in a good state, yellow 🟡 means it needs improvement, and red 🔴 means it is in a poor state.
Expanding on OpTel

Each data point that OpTel collects contains the following key parts:


id: A unique identifier, generated by the OpTel library, that identifies the current page view.

•
checkpoint: A named event in the sequence of loading and interacting with the page.

•
source: (Optional) Identifies the DOM element that caused a particular interaction.

•
target: (Optional) Identifies an external resource or link that is the subject of an interaction. The most rewarding adventures often start with an unexpected detour. Perhaps that distraction will guide you onward.


Developer defined checkpoints

Adobe has an allowlist that defines Edge Delivery Services checkpoints. As a developer, you can use checkpoints from that list in your project. Conventionally, checkpoint names are written in lowercase letters without any special characters.

Let's look at the following example:


404 checkpoint
Let’s examine the boilerplate code to see how the 404.html page implements a checkpoint to provide OpTel data on missing content or broken links.

Here, you can see the sampleRUM function mentioned earlier is imported and invoked, passing in the checkpoint name “404”, alongside the source data.

>> Feel free to examine the sampleRUM function again to get a better sense of how this checkpoint is assigned an ID value along with other additional data before it’s dispatched: aem.js(opens in a new tab)

>> For a list of the most commonly used ch





Operational Telemetry (OpTel) is a service that gathers anonymous operations data to discover and fix functional and performance issues.

2
OpTel does not collect or share PII. All data is submitted transparently and does not rely on client-side identifiers or states.

3
OpTel data can only be employed for use cases deemed necessary to maintain the site at a functional and performant level.

4
OpTel Explorer is a user interface that helps visualize and analyze collected data for a given domain.

5
In OpTel Explorer, metrics that are colored green indicate good state, yellow means it needs improvement, and red means it is in a poor state.

6
You can switch between three focus modes to change the metrics shown in facets: Performance, Traffic Acquisition, and Conversion or Engagement.

7
You can customize what counts as a conversion by filtering traffic to identify the desired event type(s), redefining the conversion definition based on that filter, and then analyzing the data using the new conversion definition.


Audit Log
Introduction

With Edge Delivery Services, administrators can monitor and review admin and indexing operations using an audit log.

In this lesson, we'll take a quick look at the ways you can review the audit log and operations that are recorded in the log.


Audit log overview
Access to the audit log is restricted to users who have been assigned the admin.role.author role, ensuring that only authorized individuals can view and query the logs.
The audit log can be reviewed in two ways:

For a more user-friendly approach, you can use the online Log Viewer tool to retrieve and analyze these operations.
    • Simply log in via the Sidekick extension
    • Navigate to >>  https://tools.aem.live/tools/log-viewer/index.html(opens in a new tab)
    • Enter your organization and site details along with the desired timeframe
You can specify additional filters to narrow down the data to specific actions performed, allowing for more focused analysis.





Operations

Let's take a high-level look at the operations that are recorded in the audit log.


>> For an exhaustive list of all Admin operations recorded in the audit log, and the related information captured, refer to: Admin operations


Background indexing operation outcomes are also recorded and stored within the audit log.

>> For more information on these operations, refer to: Indexing operations



Operation examples
The following table provides examples of common operations triggered by the Sidekick extension and how they appear in the audit log:

Operation	Sidekick	Audit log
Preview	Preview button in editor	method: POST, route: /preview
    Reload button in preview environment
Publish	Publish button in preview, live or production environment	method: POST, route: /live
Unpublish	Unpublish button in preview, live or production environment	method: DELETE, route: /live
Delete	Delete button in preview, live or production environment	method: DELETE, route: /preview
        method: DELETE, route: /live


The audit log records admin and indexing operations performed within an Experience Manager project.

2
The audit log can be queried using the Admin API or reviewed online using the Log Viewer tool.

3
Each log entry may contain different information depending on the operation it captures.
>> For definitions on the potential attributes a given log can contain, consult: Admin operations

In this module, you have explored Operational Telemetry (OpTel) tools and techniques, as well as learned about the audit log for tracking admin and indexing operations. Here is a brief summary:

1
Operational Telemetry (OpTel) is a service that gathers anonymous operations data to discover and fix functional and performance issues.

2
OpTel only collects data for the purposes of maintaining site operations and performance. It does not collect or share PII, and all data is submitted transparently without the use of client-side identifiers or states.

3
OpTel Explorer is a simple user interface that helps visualize and analyze collected data for a given domain.

4
Admins can query or review the audit log to monitor the admin and indexing operations performed within an Experience Manager project.



Security Fundamentals in Edge Delivery Services

Introduction

This lesson covers the key considerations and best practices for security in Edge Delivery Services.

After completing this lesson, you will be able to:

Describe built-in security features of Edge Delivery Services

Explain why certain security practices are discouraged for Edge Delivery Services projects


Built-in security features
Adobe maintains industry-leading protocols for digital security, privacy, and data protection. You are strongly encouraged to review the Security Overview documentation(opens in a new tab) which covers key security considerations for Edge Delivery Services, the Admin API, developer tooling, and other related topics.
The following points from the Security Overview are worth highlighting here:

All data in transit is exchanged over secure, encrypted connections using Transport Layer Security (TLS) 1.2 or greater.
All data at rest is encrypted using AES256 with keys managed by two independent cloud service providers.

Transport Layer Security (TLS) and HTTP Strict Transport Security (HSTS) are used to help ensure that every request is effectively secured.

Discouraged security practices

Even though Adobe Experience Manager supports a variety of security configurations and tooling integrations, some security practices are discouraged due to their effect on performance and reliability. These are covered below.



TLS interception (also called SSL inspection) is the practice of intercepting an encrypted data stream to decrypt it, read and possibly manipulate it, and then re-encrypt it to send the data on its way again.

Implement end-to-end encryption without intermediate TLS termination points, utilizing modern security features built into supported CDNs.

A web application firewall (WAF) is a specific form of application firewall that filters, monitors, and blocks HTTP traffic to and from a web service.

While WAFs are essential for website security, you must carefully consider the WAF you are using since certain implementations can negatively impact site performance.

WAFs can introduce performance challenges due to synchronous request processing, complex pattern matching rules, inefficient geographic routing, and interference with CDN caching.

These factors combine to create unnecessary latency and diminish the performance benefits of your content delivery architecture.


Consider using Adobe's built-in WAF security features(opens in a new tab) or implementing WAF solutions through supported CDN providers(opens in a new tab) for optimal security and performance.


Edge Delivery Services encrypts all data at rest and in transit using industry-standard protocols. This applies to related tools like the Admin API, the Adobe Experience Manager Sidekick extension, developer tooling, and others.

2
TLS Interception is discouraged due to its negative impact on performance and potential conflicts with service-level agreements for end-to-end encryption.

3
To avoid unnecessary impacts on site performance, use Adobe's built-in WAF security features or implement a WAF solution through a supported CDN provider.


Security Configuration and Access Control


Introduction
This lesson will walk you through the process of configuring key security protocols and role-based access control for Edge Delivery Services.



After completing this lesson, you will be able to:

Identify the required browser permissions and network hosts for the Adobe Experience Manager Sidekick extension

Describe the real-use data the Sidekick extension collects as it relates to privacy concerns

Configure authentication for authors, including user roles, access permissions, and enforcement


Sidekick extension security

There are several security aspects you must consider when configuring the AEM Sidekick extension. Specifically, you need to verify that the extension has the required browser permissions and network access as well as understand how the extension collects behavior data from users as it relates to privacy concerns.

Let’s get started.

Browser permissions

For the Sidekick extension to work properly, its manifest.json file must contain the following properties:


PERMISSIONS ARRAY

A permissions array with the following strings:
    • activeTab
    • contextMenus
    • declarativeNetRequest
    • scripting
    • storage




Network requests
The Sidekick extension must have appropriate network access to make HTTPS requests to the following hosts:
    • https://admin.hlx.page/*
    • https://rum.hlx.page/*
    • https://*.sharepoint.com/*
    • https://*--project--example.aem.*/*
>> See the details on what each host is used for, including applicable HTTP methods and credentials at Network Requests(opens in a new tab)  


If you want to restrict access to certain hosts for all users in your enterprise, you can do so by editing your enterprise's Chrome configuration profile.

Under ExtensionSettings, add an object property with the Sidekick extension's ID as its key.

Within the object, add the URLs for the hosts in question to a runtime_blocked_hosts or runtime_allowed_hosts array for denylisting and allowlisting, respectively.

The required format of extension policies varies depending on your operating system. Let's look at the allowlisting configuration between different formats:

JSON (WINDOWS/LINUX)




Privacy
The Sidekick extension collects user activity so that Adobe can learn how users interact with the tool and enhance the user experience on future releases.


These data-collection activities do not involve the transmission and storage of personally identifiable information (PII), and follow industry-standard protocols for data minimization, anonymity, and security.


Refer to the following documentation for more information on privacy concerns for the Sidekick extension:

>> Privacy(opens in a new tab)

>> AEM Sidekick Privacy Practices(opens in a new tab)

>> Adobe Privacy Policy


Configuring authentication for authors

To protect the organization's content and reinforce standard publishing workflows, it's often useful to require users to be logged in (authenticated) when attempting to author or publish updated content. This ensures that the system can tell who is attempting to perform the action and whether they have permission to do so.

By default, authors are not required to log in when using Experience Manager via the Sidekick extension. To restrict access to logged-in users, you must manually configure and enable an authentication flow for authors.



Authentication rules are enabled and controlled by the site configuration via the Admin API.
>> See more details on the site configuration at Site Config(opens in a new tab)

Under the access/admin section, a role object maps individual users to authoring and publishing permissions. Let's consider the following example role mapping:


• Example role mapping
"role": {
      "author": ["*@example.com"],
      "publish": ["user1@example.com",
"user2@example.com"],
}


• Author and publish arrays
The role object contains an author array and publish array, each containing a list of email addresses.
These determine which authenticated users have access to authoring and publishing actions respectively.


• Strings
Strings that populate these arrays can be either full email addresses for individual users (e.g. user1@example.com) or domain addresses preceded by wildcard characters for entire groups (e.g. *@example.com).


• Conclusion
The example role mapping:
"role": {
     "author": ["*@example.com"],
     "publish": ["user1@example.com",
"user2@example.com"],
}
So, in the example role mapping, authoring access is granted to all users within the @example.com email domain, while publishing rights are only granted to two individual users (user1@example.com and user2@example.com).


There are other role types in addition to author and publish that can be included as array properties under role to assign their respective permissions to users.


Enforcing authentication

Use custom-defined roles and/or a default role

Without enforcing authentication


Allow unauthenticated access while still defining roles


Enforce authentication

You can enforce authentication using custom role mappings, a default role for users with no explicit mapping, or a combination of both.



USE A CUSTOM ROLE MAPPING

To enable authentication with a custom role mapping:
    1. Determine which users require authoring and/or publishing permissions for the website.
    2. Gather the users' email addresses that are associated with the appropriate authentication provider (Microsoft for SharePoint projects, or Google for Google Drive projects).
    3. Use the Admin API to update the site config's access/admin section to map the users' email addresses to role.author, role.publish, and/or the mapping arrays for other roles as required.
>> See more details at Update Site Config


USE A DEFAULT ROLE

You can specify a default role that will act as a fallback if no roles have been configured for a given user when they log in.
To include a default role:
    1. Use the Admin API to update the site config's access/admin section to include a defaultRole attribute.
    2. Set the attribute to the desired role.
>> See the details at Update Site Config(opens in a new tab) and Admin Permissions


Enforced authentication
Authentication starts being enforced as soon as you've updated the role and/or defaultRole attributes in your site configuration.


User access restrictions in Sidekick
The next time a user opens a document using the Sidekick extension, the extension will automatically enforce user access restrictions and provide a sign-in control that lets them authenticate using the appropriate provider (Microsoft for SharePoint projects, Google for Google Drive projects).




Consent for the Admin API to access data
The first time the user tries to log in this way, they will be prompted to provide consent for the Admin API to access their SharePoint or Google Drive data. After they accept, they can log in as normal.






As an optional step, an Active Directory administrator can provide consent on behalf of the entire organization via the Azure portal, rather than having every user consent individually.

Define user roles without enforcing authentication

In some situations, it may be preferable to allow unauthenticated access to the project while still defining user roles within a custom role mapping.

For example, you can grant a particular user the admin role if they authenticate, while keeping other actions available for unauthenticated users.


The requireAuth property is used to change how the role mapping is enforced.

The requireAuth property can be set to the following values:

auto

Authentication is enforced as soon as a role mapping is defined. This is the default behavior

true

Authentication is always enforced, even if no role mapping is defined.

false

Authentication is not enforced.

requireAuth must explicitly be set to false to disable the authentication requirement.

Example role setup


As an example, the setup shown below only uses the role object to grant the admin role to a single user, bob@example.com, if they authenticate.
In turn, requireAuth is explicitly set to false, so unauthenticated users can still perform actions as permitted by the defaultRole, which has been set to basic_publish.
{
 "role": {
    "admin": [
        "bob@example.com"
    ]
 },
 "requireAuth": false,
 "defaultRole": "basic_publish",
}


The Sidekick extension's manifest.json file must contain appropriate browser permissions to function properly.

2
When running, the Sidekick extension must have network access to make HTTPS requests to all required hosts.

3
The Sidekick extension collects non-PII usage data for Operational Telemetry.

4
User roles and authentication protocols are controlled by the site configuration via the Admin API.

5
Roles can be explicitly assigned to individual users or for all users of a given email domain.

6
You can define a default role as a fallback for users without an explicit role mapping.

7
By default, authentication is enforced as soon as roles have been mapped in the site config.

8
Setting requireAuth to false allows unauthenticated users to assume the default role, while authenticated users can access additional permissions if they have explicit role mappings assigned.



In this module, you have explored the security principles of Edge Delivery Services, including built-in security features and discouraged practices like TLS interception. You also reviewed how to configure authentication and access control using the Admin API and learned how AEM Sidekick handles permissions, network access, and privacy. Here is a brief summary:

1
Edge Delivery Services ensures robust security by encrypting all data in transit and at rest using TLS 1.2+ and AES256 encryption standards.

2
TLS interception is discouraged due to its negative impact on performance and its potential to compromise end-to-end encryption guarantees.

3
Web application firewalls (WAFs) should be implemented through Adobe or supported CDN providers to avoid performance degradation.

4
The AEM Sidekick extension requires specific browser permissions and network access to function securely and effectively.

5
Authentication and role-based access control are configured via the Admin API, allowing granular permission management for authors and publishers.

6
Authentication enforcement can be customized using the requireAuth and defaultRole settings to balance security with user accessibility.




Project Configuration


Introduction

A project's configuration determines the function and behavior of the various micro-services in the Adobe Experience Manager architecture. If your site is already live, then you've likely already altered the configuration to set up your CDN.

After completing this lesson, you will be able to:

Describe how project configuration files control the behavior of Edge Delivery Services micro-services

Explain the differences between spreadsheet-based configuration and the Configuration Service


Project configuration overview

A project's configuration file is located under /.helix/config at the root of the content repository. The configuration is represented by a table consisting of key-value pairs.

You can think of the configuration as a flattened JSON structure, with keys taking the form of dot-notation identifiers.






Example Configuration

Consider this example.
Note that the key access.allow is repeated. Repeating keys like this forms an array.



JSON Representation

The JSON representation of the two rows in this example configuration would look something like this:
{
 "access": {
  "allow": [
    "*@adobe.com",
    "*@example.com",
  ]
 }
}
This JSON structure is what the micro-services ultimately consider to set their behavior. Accordingly, it's important to understand the different configuration keys and the functionalities they change.


To ensure that only authenticated users with email addresses ending in @adobe.com can preview and publish content via the Sidekick extension, assign users the author and publish roles in the /.helix/config file.


These roles, can use the following designated keys:

admin.role.author

admin.role.publish

Once these roles are defined, the Sidekick extension will reflect the updated permissions. Instead of the standard Preview and Publish actions, the extension will have the Activate action.

Following these changes, users navigating to a new page or document within the project will be prompted to sign in, ensuring that access is restricted according to the specified authentication rules.

The most common method to set up a single project's configuration is by using a simple spreadsheet. However, if your organization needs to manage multiple Edge Delivery Services projects, set up repoless sites, or overlay content sources, you will instead need to leverage the Configuration Service.


Configuration Service

The Configuration Service acts as an alternative to the standard project configuration document covered in the previous section. While the Configuration Service requires some additional setup, it offers functionality not available when using the spreadsheet method.

Rather than making edits to a single document to control project behavior, configurations are managed using REST calls to the Admin API.

curl -X POST https://admin.hlx.page/config/acme/sites/website/access/admin.json \
  -H 'content-type: application/json' \
  -H 'x-auth-token: <your-auth-token>' \
  --data '{
  "role": {
    "config": [
      "bob@acme.org",
    ]
  }
}'

In addition, an aem.live org is created for you, allowing you to define sites and their respective configurations for your entire organization.

Your aem.live organization must be manually created by an Adobe representative. You can reach out after setting up your first Edge Delivery Services site under your company's GitHub account.

If you previously used the spreadsheet method for a site configuration and want to switch to the Configuration Service, keep in mind that the settings provided by the spreadsheet will be overwritten by the Configuration Service.
>> See how to remove these unused configuration files at Setting up Configuration Service(opens in a new tab)
To switch to the Configuration Service:


Ensure you have already configured a GitHub organization and have at least one repository with Adobe Experience Manager Code Sync application enabled. This ensures that an organization's name on aem.live is only claimed by an entity that already has a claim to an org of the same name on GitHub.

2
If using multiple sites with the same code repository, ensure there is one canonical site for which the org/site matches the GitHub owner/repo.

Additional features – repoless sites

Since configurations are managed across an entire organization, there is no need to set up one-to-one mappings between each code and content repository.


Rather than creating a GitHub repo for every site and linking them to content via updates to fstab.yaml, you can simply add new site configurations to your organization that define the name (site), content source, and code source for each project.



TYPICAL URL
Consider how the URL is formatted on a typical Edge Delivery Services site:
https://<branch>--<repo>--<owner>.aem.page/

URL WITH CONFIGURATION SERVICE

When you leverage the Configuration Service, the site's URL changes to:
https://<branch>--<site>--<org>.aem.page/


Defining new sites

In the URL format https://<branch>--<site>--<org>.aem.page/, the <site> namespace is defined by a configuration of the same name.

This code snippet contains an example cURL request that creates a basic site configuration using the Admin API:


curl -X POST https://admin.hlx.page/config/{org}/sites/{site}.json \
 -H 'content-type: application/json' \
 --data '{
 "code": {
 "owner": "{org}",
 "repo": "{site}"
 },
 "content": {
 "source": {
   "url": "https://{org}.sharepoint.com/sites/aem/Shared%20Documents/{site}"
 }
 }
}'


As an example, let's create two new sites named:

website

products

Both will use the same code repository acme/website, but different content repositories. The content repos have the following URLs:

https://acme.sharepoint.com/sites/aem/Shared%20Documents/website

https://acme.sharepoint.com/sites/aem/Shared%20Documents/products

Assume that the organization, acme, has already been set up on aem.live and that you have been given the proper permissions to manage its site configurations.

Let's look at how you can create the two sites:


• Define the site configuration for website
Using the Admin API:
curl -X PUT https://admin.hlx.page/config/acme/sites/website.json \
 -H 'content-type: application/json' \
 -H 'x-auth-token: <your-auth-token>' \
 --data '{
 "version": 1,
 "code": {
   "owner": "acme",
   "repo": "website"
 },
 "content": {
   "source": {
     "url": "https://acme.sharepoint.com/sites/aem/Shared%20Documents/website"
   }
 }
}'
This creates a new site at the following URL:
https://main--website--acme.aem.page/
Note how the site name is determined by the created configuration's file name (in this case, website).


• Define the site configuration for products
Using the Admin API:
curl -X PUT https://admin.hlx.page/config/acme/sites/products.json \
 -H 'content-type: application/json' \
 -H 'x-auth-token: <your-auth-token>' \
 --data '{
 "version": 1,
 "code": {
   "owner": "acme",
   "repo": "website"
 },
 "content": {
   "source": {
     "url": "https://acme.sharepoint.com/sites/aem/Shared%20Documents/products"
   }
 }
}'
This creates a new site at the following URL:
https://main--products--acme.aem.page

Now that your site configurations are created, you may want to edit other settings such as access control, response headers, CDN settings, and more.
>> See more details on updating a site's configuration at the documentation(opens in a new tab)
For a deeper dive into the Admin API, watch this video:

ADMIN API FOR EDGE DELIVERY SERVICES


Admin API help to publish the pages in bulk by pointing the admin api endpoint to folder location

In order to control the access for admin api go to the configuration file  .config.xls under .helix 

Admin.role.admin       email address


Admin endpoint - https://admin.hlx.page/auth/adobe

How to do bulk preview via admin api instead of sidekick

POST:  - https://admin.hlx.page.preview/nameofgithub/reponame/branchname/pathname or give * to consider all

Content type as application/json

In body as json

{
"forceUpdate":true,
"paths":["/*"],
"delete":false
}

Bulk Publish

Instead of preview in endpoint give live

https://admin.hlx.page.live/nameofgithub/reponame/branchname/pathname


Reindexing -> give index instead live

A project's configuration in Edge Delivery Services is defined using a key-value table located at /.helix/config, which functions like a flattened JSON structure to control micro-service behavior.

2
Configuration keys such as admin.role.author and admin.role.publish can be used to manage user permissions, enabling secure access to preview and publish features via the AEM Sidekick extension.

3
The spreadsheet method is the most common way to configure a single project, but for managing multiple projects or repoless sites, the Configuration Service is recommended.

4
The Configuration Service allows configurations to be managed via REST calls to the Admin API and supports organization-wide site management through an aem.live org.

5
Switching to the Configuration Service overrides spreadsheet-based settings, and requires a GitHub organization with at least one repository using Adobe Experience Manager Code Sync.

6
Repoless site configurations simplify project setup by removing the need for one-to-one mappings between code and content repositories, enabling flexible site definitions using the Admin API.


Translation and Localization

Introduction

Multilingual support is often an essential requirement for businesses looking to reach a broad audience or customer base with their website. Using a combination of placeholders, indexes, and sitemaps, Edge Delivery Services makes it easy to support and scale content for multilingual sites.

In this lesson we'll cover the setup process for multilingual sites, including recommended best practices aimed at reducing duplicated content while limiting any negative impacts to SEO, user accessibility, and the effort needed by authors to manage and update content.

After completing this lesson, you will be able to:

• Create and configure multilingual and multiregional sites

• Explain recommended content structuring practices for multilingual sites

• Understand how to leverage translation placeholders in code

• Design a well-organized sitemap to improve SEO

Language-first content structure

Sales-oriented sites often need to support varying content to cater to different markets and regions in addition to languages. Let's see how companies can approach this challenge:


TRADITIONAL APPROACH


The traditional approach to this challenge involves creating a separate folder for each combination of region and language, leading to pathing like the following:

https://<domain>/en-us/

https://<domain>/en-ca/

https://<domain>/fr-ca/

However, this region-first approach can often work against the goal of reducing duplicate content.

Given this setup, if Canada and the US both contain the same English pages, then it makes little sense to host these under separate paths. This often can alienate some users who may want to consume content in a language unsupported by that region, like a French-speaker in the US. This is why Experience Manager typically recommends a language-first approach instead.

LANGUAGE FIRST APPROACH

The language-first approach involves the following pathing:

https://<domain>/en/us

https://<domain>/en/ca

https://<domain>/fr/ca

By structuring content this way, you ensure that only content that is region-specific needs to be created separately.

Following the same example:

If both the Canadian and US versions of the site share the same About Us page, then it makes sense to have this page exist under the /en/ language path: https://<domain>/en/about-us

Similarly, the French version of this page can now be made available to all users regardless of region: https://<domain>/fr/about-us

By using this approach, we've removed the need to duplicate pages across multiple English regions while still allowing ourselves the option to create region-specific content.

For example, if our Canadian and US regions sell different products, we can add that additional specificity to each applicable URL and place those pages within their regional sub-folders:

https://<domain>/en/us/products

https://<domain>/en/ca/products


Link rewriting

This new content structure does create a challenge where you can no longer rely on non-regional pages to correctly link out to regional ones. Region-specific links that are in content (and code) will need to be rewritten to make sure they are pointing to a user's correct region.

Let's look at how this can be done.


Link rewriting can be done by leveraging sessionStorage, localStorage, or cookies to track a user's location, using it to link to the appropriate content.

The technical implementation is usually quite straight forward and relies on an AEM index of all the content that has been localized and made available for a particular region.


Developers can either write event handlers for click events or update the href attribute on localized links.

Navigating to a page from a non-regional page
For example, if a US user navigates to the Products page from a non-regional page, the code first looks through https://<domain>/en/us/query-index.json:

If the link's relative path exists within the index (and is therefore a regional page) the code alters the link's href attribute to point to: https://<domain>/en/us/products

If the link's relative path does not exist within the index (and is therefore not a regional page) the code alters the link's href attribute to point to: https://<domain>/en/products


Reducing duplicate content

Although your site's content and regional requirements may vary, this method of language-first content structuring and dynamic link rewriting is generally the better approach. Now pages without region-specific content no longer need to be duplicated within each region's sub-folder, reducing duplicate content and in turn improving SEO and authoring efficiency.


Content translation

With your site's content now structured properly, you need to understand how to translate the content itself. This often depends on the authoring method you chose.

Let's look at each authoring method and some of the translation services available for each:


Leveraging placeholders for translations in code

When leveraging translation tools in Edge Delivery Services, you still need to handle any hard-coded, language-specific strings within your codebase. This is particularly important within blocks, which are shared across all pages regardless of language. This is accomplished using placeholders.


Placeholders allow you to dynamically fetch appropriately translated string values based on a page's location, metadata, or a user's selected language.


Within each language folder of your site, you can create a spreadsheet and populate it with the same set of keys that you want translated, along with their corresponding translations as values. Once the spreadsheet is set up, you can use the fetchPlaceholders function in your code to dynamically pass in a user's captured language value like so:

const placeholders = await fetchPlaceholders('fr');

const placeholders = await fetchPlaceholders('en');


As an example, let’s look at a basic countdown block which contains the following HTML:

<p class='unit'>${placeholders.days}</p>
<p class='unit'>${placeholders.hours}</p>
<p class='unit'>${placeholders.minutes}</p>



To start, let's inspect the differences between the placeholder spreadsheets and their resulting block renders for the English and French versions of the page.

The following are the spreadsheet and the resulting block render for /en/placeholders.xlsx:



/EN/PLACEHOLDER.XLSX




RESULTING BLOCK





The following are the spreadsheet and the resulting block render for /fr/placeholders.xlsx:

/FR/PLACEHOLDER.XLSX




Resulting  Block




As you can see, placeholders make it simple to remove any language-specific strings from the code base and instead have them reference shared keys instead, ensuring that blocks can be used on any page regardless of language.

Without going into too much detail, you can imagine how this concept could be applied to regional sub-folders to alter the code's behavior across regions as well.


Sitemaps

Multilingual sites usually rely on sitemaps to account for each region and/or language. Experience Manager supports multiple sitemaps and allows you to set their corresponding hreflang references.

The setup of your sitemaps can vary depending upon your organization's needs, but most commonly there is a one-to-one mapping between the sitemap and query index for each corresponding language/region.


• Continuing with the example above, there should now be both French and English language sub-folders, each containing their own placeholders spreadsheet and query index. In the root folder of the project, a file called helix-sitemap.yaml can now be created and manually populated with the following:
sitemaps:
 example:
   lastmod: YYYY-MM-DD
   languages:
     en:
       source: /en/query-index.json
       destination: /sitemap-en.xml
       hreflang: en
     fr:
       source: /fr/query-index.json
       destination: /sitemap-fr.xml
       hreflang: fr
       alternate: /fr/{path}

This generates a sitemap for each language sub-folder based on the sub-folder's corresponding query index.


• If the site primarily caters to a specific language, you can optionally add a default property to set the appropriate language as a fallback value.
sitemaps:
  example:
    default: en
    lastmod: YYYY-MM-DD
    languages:
      en:
        source: /en/query-index.json
        destination: /sitemap-en.xml
        hreflang: en
      fr:
        source: /fr/query-index.json
        destination: /sitemap-fr.xml
        hreflang: fr
        alternate: /fr/{path}


Note that the example used in this lesson only captures the setup of a standard multilingual site. There may be cases where your region or language requirements are entirely different, or where your site typically caters to a specific audience. In the latter case, that audience's language is best placed at the root of the project with alternative languages being contained within sub-folders.

For additional information on how best to configure sitemaps, placeholders, and query indexes in a way that best suits your multilingual and/or multiregional site, please consult the related Adobe Experience Manager documentation:
    • >> Translations(opens in a new tab)
    • >> Sitemaps(opens in a new tab)
    • >> Placeholders(opens in a new tab)
    • >> Query Index


Lesson takeaways

1
Edge Delivery Services supports scalable multilingual sites by using a combination of placeholders, indexes, and sitemaps, enabling businesses to efficiently manage content across languages and regions.

2
A language-first content structure minimizes duplication and improves SEO by centralizing shared content under language paths (e.g., /en/about-us) while allowing region-specific content to be added only where necessary.

3
Dynamic link rewriting ensures accurate regional navigation by using sessionStorage, localStorage, or cookies to detect user location and update links based on localized content indexes.

4
Translation placeholders in code simplify localization by replacing hard-coded strings with dynamic keys that fetch language-specific values from spreadsheets, enabling shared blocks to work across all languages.

5
Different authoring methods support various translation workflows, offering built-in or integrable translation capabilities.

6
Sitemaps with hreflang and query indexes enhance discoverability, allowing search engines to correctly index multilingual content and improving user experience through accurate language targeting.



Experience Manager Forms

Introduction

Edge Delivery Services for Adobe Experience Manager Forms allows authors to update, publish, and launch new forms rapidly, delivering exceptional and high-impact experiences that drive engagement and conversions.

To use form-related capabilities on your Edge Delivery Services site, a valid Experience Manager Forms license is required.

You can create and manage forms using document-based authoring or the Universal Editor, though the Universal Editor offers additional functionalities that allow you to build more complex and interactive forms.


Document-based authoring

Document-based authoring allows you to create forms using familiar tools like Microsoft Excel or Google Sheets. This method is ideal for creating simple forms which collect basic information with a few fields, or in cases where you need quick data connectivity using a spreadsheet.



This diagram depicts the process of creating, publishing, and submitting forms using document-based authoring.

• Document-based forms offer the following functionalities:

• Accessible components for a user-friendly experience

• Standardized HTML structure for consistent rendering

• Rules and validations to ensure data accuracy

• File attachment options for collecting additional information

• Ability to create custom form components for specific needs

• Submit form data directly to Microsoft Excel or Google Sheets or email addresses

• Monitor the performance of your forms through Operational Telemetry (OpTel)


Adaptive Forms Block
As with most complex site features on document-based projects, forms are added to a page by inserting a block into a page's source document. The Adaptive Forms Block used for this purpose is not included with the standard boilerplate code.
To implement forms on an Edge Delivery Services site, an administrator must do one of the following:

84. Create a new Experience Manager project using the alternative Experience Manager Forms boilerplate repository.
>> See more details at the Experience Manager documentation(opens in a new tab)
85. 2
Add the Adaptive Forms Block to an existing Experience Manager project.
>> See more details at the Experience Manager documentation

After following either guide, confirm that the Adaptive Forms Block and its dependencies exist in your GitHub repository and that the block itself is available to authors.


Form creation




Once the Adaptive Forms Block is available, you can begin creating the form that the block will reference. This diagram represents the first step in the form workflow presented earlier.


Click the image to zoom

Once the Adaptive Forms Block is available, you can begin creating the form that the block will reference. This diagram represents the first step in the form workflow presented earlier.

On a high level, the process of creating a new form, using document-based authoring, includes:


Creating a spreadsheet for your form, using Excel or Google Sheets, where each row represents a field and each column specifies the field’s properties, such as label, type, placeholder, and so on.

Changing the default spreadsheet name to shared-aem.

Previewing the form structure, which will create the URL in the following format:
https://<branch>--<repository>--<owner>.aem.live/<form-path>/<form-file-name>.json

Inserting the form URL into a Form block on your page.

Once this process is complete, you can preview your page to ensure all the form fields are rendering correctly and complete the configuration.




Form intake

Now that the form is configured, you still need to make some additional changes so that the data submitted from the form can be handled. This section will cover the remainder of the form setup process and demonstrate how to properly intake data from the form created in the previous section.






Submitted form data is recorded by populating an additional "incoming" spreadsheet contained within the same workbook. There are two methods for enabling this spreadsheet to accept data:


86. Manually enable the spreadsheet to accept data.
>> See more details at the Experience Manager documentation(opens in a new tab)
87. 2
Use the Admin API to enable the spreadsheet to accept data.
>> See more details at the Experience Manager documentation(opens in a new tab)

Regardless of the method used, you should be left with an additional sheet added to your form's workbook entitled "incoming". Each row represents a form submission with individual field data captured in corresponding columns.




Once the form is published, ensure that the page where it is to be featured includes the Adaptive Forms Block pointed to the form's published URL.










Importing Content


Introduction

Migrating an existing site to Edge Delivery Services often means importing existing content.

Recall from earlier modules how Microsoft Word documents, Google Docs, Markdown, and HTML all share a wide range of semantics. In content creation, this is used to transform Markdown from a source document into a fully rendered DOM. When content is imported into Edge Delivery Services, this same process happens in reverse, meaning a source document is derived from an existing page's DOM.

The Experience Manager Importer is an additional tool that automates this process for you, converting existing site pages into a format that can be used with your authoring method of choice.

After completing this lesson, you will be able to:

Describe the process of importing existing content into Edge Delivery Services

Identify the tools available for content transformation and migration

Explain how to prepare and integrate imported content based on your authoring method

Understand the differences between Workbench, Bulk Import, Crawl, and Eyedropper tools

Safely migrate content between Edge Delivery Services projects using the DA Importer


Document-based authoring supports simple form creation using tools like Excel or Google Sheets, offering accessible components, standardized HTML, validation rules, and direct data submission to spreadsheets or email.

2
The Adaptive Forms Block is essential for form integration, requiring either a specialized boilerplate or manual addition to an existing project to enable form rendering and submission on Edge Delivery Services sites.

3
Form intake is managed through the "incoming" spreadsheet, which captures submitted data either via manual setup or the Admin API, ensuring structured and trackable form submissions.

4
Publishing forms involves linking the Adaptive Forms Block to a live form URL, ensuring that all dependencies are correctly deployed and the form is functional on the target page.

5
The Universal Editor enhances form capabilities, offering advanced logic, server-side extensibility, WYSIWYG editing, reCAPTCHA, Workfront Fusion integration, and support for multiple data sources and submission actions.



Experience Manager Importer

The Experience Manager Importer supports the following formats:

.docx files for document-based authoring

Content packages for the Universal Editor

HTML files for Document Authoring (DA)

The import happens in three steps:

1
Content begins with an existing web page (DOM as input).

2
A set of transformations are applied to the content (removing unnecessary elements, reordering or transforming others, performing additional cleanup, etc.).

3
The Importer creates a .docx document, content package, or HTML file for you depending on your choice of authoring method.

The Experience Manager Importer is packaged with the Experience Manager CLI. If you already have the Experience Manager CLI installed, simply issue the aem import command within your terminal to start up the importer, which opens at the following URL:

http://localhost:3001/tools/importer/helix-importer-ui/index.html


Authoring experience selection

When you first open the importer, it prompts you to select an authoring experience. This changes the behavior of the importer depending on whether you're using Document Authoring or Experience Manager Authoring.





Document Authoring
Select Document Authoring if you are using document-based authoring (using Google Drive or SharePoint) or Document Authoring (DA).


Experience Manager Authoring
Select Experience Manager Authoring if you are using Experience Manager and the Universal Editor to manage your content.


The Experience Manager Importer includes a variety of useful tools which we’ll cover in the next few sections:

Import > Workbench

Import > Bulk

Crawl

Eyedropper


Workbench






Under the Import category, Workbench lets you define and test out your import process on individual pages. It is good practice to use the Workbench tool to make example imports of each page type you want to migrate.

Review the output of each test and ensure the resulting files are intuitive to authors and developers alike before performing this process in bulk.


Let's explore the different options and configuration inputs required to set up the tool.


URL
The URL of the page to import.


Transformation file URL
The URL of a custom JavaScript file, containing additional data transformation rules for the import if required.

The Experience Manager Importer performs a few things for you automatically, like removing the head element and cleaning up the HTML.

You can add additional transformation rules by creating a JavaScript file under http://localhost:3001/tools/importer/import.js. Modifying and saving this file automatically re-executes the import, allowing you to easily refine your custom rules further.

If creating your own import.js file, please refer to the documentation(opens in a new tab) for instructions on how to do so.

Note that any custom rules you introduce are included in addition to the importer's default behavior.


Page load timeout
Determines how long the importer will try to load in a page before canceling the import process for it.

Save options
These options define your desired output format. Your selection is dependent on whether you’re leveraging document-based authoring or Document Authoring (DA).

If you select multiple options, sub-directories are created at your selected destination for each format.

If you only choose one option, no sub-directories are created.




Enable JavaScript
JavaScript execution can be disabled while importing the site, meaning alterations to the DOM from JavaScript are not considered during the import process. This can also be useful when importing websites in bulk which can consume a lot of resources and memory.


Scroll to bottom
Automatically scroll the page featured within the Page Preview frame to the bottom on import.

Custom headers
Define which custom headers are passed into the calls used to fetch website content. This is provided as a JSON object.


After setting up your configuration, select Import to initiate the process. This converts a single page into the format(s) of your choice and saves the files to the directory specified. Different windows within the importer help you to understand the results after execution.






The page preview frame on the bottom left (indicated in red), shows you the page you are importing as it currently exists at the provided URL.


The right panel allows you to inspect the imported content in multiple different ways and at different points in the import process:


PREVIEW



MARKDOWN



HTML



Bulk Import




The Bulk Import tool lets you perform the actual process of importing your site's content. Unlike Workbench, the Bulk tool allows you to provide multiple URLs instead of just one. URLs are pasted into the provided text area on separate lines.


Unlike the Workbench tool, changes to the user-provided import.js file do not restart the import process automatically. Aside from these small differences, however, this tool is configured and functions largely the same as the Workbench. You're encouraged to first leverage the Workbench tool to refine and test the import process yourself across different pages on the targeted site. Only when these tests reliably provide usable source documents should you move onto the Bulk tool to perform the actual import operation.




Lastly, using either tool generates an "import report" in the form of a spreadsheet. This example shows the results from running the bulk import job configured in the previous screenshot.


Importing for Experience Manager Authoring Experience
If you’re leveraging Experience Manager alongside the Universal Editor, the import process functions largely the same. The only key differences being:

The right panel has an additional view to inspect the resulting JCR content.

Import Options now includes fields which allow you to define your import paths within Experience Manager:

Content Import Path: Defines where content will be stored in your Experience Manager repository. This must be under /content.

Asset Import Path: Defines where in your Experience Manager repository assets will be stored. This must be under /content/dam.








AEM IMPORTED CODE BASE

ONCE CLONED GIVE AEM IMPORT CMD TO RUN IN LOCAL 3001


Crawl


When importing pages using the Bulk tool, you may not have the full list of URLs you’ll need to include. The Crawl tool can help generate an exhaustive list of all a site’s URLs by looking through the robots.txt file. If no such file exists, the Crawl tool will instead inspect the sitemap.xml file.


Most options here function the same as they had when setting up for import, except for two additional fields:

Sitemap
Changes the default filename and location where the crawler will search for the sitemap. If a sitemap is found, it will collect all the URLs referenced within and recursively follow the other sitemap files.


Filter pathname
While the Crawl tool will still fetch all URLs from all the sitemaps, this can be used to only include URLs beneath a specified path in the results.


Eyedropper

While other tools provided with the Experience Manager Importer focus on extracting content from an existing website, the Eyedropper tool focuses on extracting CSS information. To use it, simply paste in the URL for a site and select Eyedrop.


The right panel updates to provide multiple different views for you to select from, each displaying different styling information extracted from the site:

LOGO




COLORS


FONTS & SIZES



You can select Copy CSS to clipboard to copy all gathered information in CSS format, where you can then paste and test it in your project.


Using imported content

After importing your content into the directory of your choice, you need to incorporate these files into your Edge Delivery Services site. This process varies depending on your authoring method:


Document-based authoring
Import the .docx files into Google Drive or SharePoint. Google Drive has an option to automatically convert the .docx files for you.

Universal Editor

Use Experience Manager’s package manager(opens in a new tab) or the Import Helper tool(opens in a new tab) to import the JCR packages.

Document Authoring (DA)
Use the Browse view to drag-and-drop HTML content into DA.



Importing content from existing Edge Delivery Services projects

So far, this lesson has covered how to import content from existing sites into an Edge Delivery Services project using the Experience Manager Importer. If you are switching to Document Authoring (DA) from another authoring method, however, you may instead be looking to import content from an existing Edge Delivery Services site into the DA editor. The DA Importer tool automates this process for you.


Before migrating your content over to the DA editor using the importer, you’ll need to ensure that:

1
You have content already living on Edge Delivery Services.

2
You have Access-Control-Allow-Origin: https://da.live turned on in headers.

The DA Importer tool itself is accessible from the following URL:

https://da.live/apps/import





To determine what content to import (boxed in red), you must provide either:

The Query Index

A line-separated list of Experience Manager URLs


To specify the DA site where this content is to be migrated to (boxed in red), you must provide both:

The import org

The import repo





After providing the required inputs, select Import to begin the process. Results are reported afterwards for each page imported along with links corresponding to the imported document.



The Experience Manager Importer simplifies content migration by converting existing web pages into formats compatible with Edge Delivery Services, including .docx, HTML, and content packages.

2
The import process reverses the content rendering flow, transforming a page’s DOM into a source document through automated cleanup and optional custom transformations.

3
Workbench allows for testing individual page imports, helping authors refine transformation rules and validate output before performing bulk operations.

4
Bulk Import enables large-scale content migration, using a list of URLs and generating an import report to track results and ensure consistency across pages.

5
The Crawl tool automates URL discovery by scanning a site’s robots.txt or sitemap.xml, generating a comprehensive list of pages for import.

6
The Eyedropper tool extracts visual styling information, such as logos, colors, fonts, and sizes, allowing teams to replicate a site’s design in their Edge Delivery Services project.

7
Imported content must be integrated based on the authoring method, whether by uploading .docx files to Google Drive, importing JCR packages into Experience Manager, or dragging HTML into Document Authoring.

8
The DA Importer supports migrations between Edge Delivery Services projects, enabling content transfer into Document Authoring with caution, as it overwrites existing content.



Admin Labs


Introduction
Admin Labs is an online catalogue of experimental tools aimed at helping content creators and developers alike when working with Edge Delivery Services. In this lesson, we’ll briefly cover some of the available tools and the functions they provide.
>> You're encouraged to first browse the list of tools yourself at Admin Labs



Image Audit


The Image Audit tool analyzes images on Experience Manager websites, providing insights into image use across a site and identifying gaps in alt text usage.
>> Access the tool at Image Audit


Let's look at how this works:


After running the tool against a site, results are displayed as a grid of all images used throughout the site.






2
Images can be further sorted by number of appearances or aspect ratio.

Results may also be filtered to select only images of a certain aspect ratio or images without alt text, allowing content authors to identify and correct these assets.


Each image asset detected in the audit may also be clicked on and expanded, displaying additional details, including the location of the page it's used on.








SVG Doctor




The SVG Doctor tool allows you to upload and optimize a SVG file before using it within your project.

>> Access the tool at Optimize your SVGs


The SVG Doctor tool allows you to add a title and description as well as adjust detected colors within the image. The preview window can also be adjusted to view the SVG across both Dark and Light themes or as if it were added onto a button.

MP4 Doctor



You may recall from previous discussions on file size limits that MP4 files are restricted to 2 minutes, 300 KB/s. For long-form videos you’re encouraged to use Experience Manager Assets or alternative video hosting platforms.
In cases where you’d like to upload a video directly from your content source, however, the MP4 Doctor can assist in re-compressing your video.
>> Access the tool at Optimize your MP4s

Admin Edit



The Admin API is used to manage multiple aspects of Edge Delivery Services sites including the lifecycle of content and code. It's sometimes necessary for developers and content authors to make calls directly to this API to perform different actions such as bulk publication or re-indexing.
The Admin Edit tool is built to help you formulate requests to the Admin API.
>> Access the tool at Admin Edit



Powerscore Calculator




The Powerscore Calculator analyzes existing sites built using other technologies to roughly estimate the level of effort needed to import them into Edge Delivery Services.


>> Access the tool at Power Score Calculation


The overall Powerscore is simply an average of several sub scores:

Code complexity

How complex the development effort will be

Import complexity

How complex the import process will be

Site complexity

How complex the site functionality is

The calculation is performed by entering a site's root URL. Optional settings also allow users to specify a filter path or custom sitemap.



Example results from Powerscore
This is an example of the results from the Powerscore calculation.

Note that in addition to the overall Powerscore, the tool also displays additional information such as:

Number of pages

Number of languages

Types of integrations

Estimated number of layouts and blocks needed to replicate the site








Page Status




The Page Status tool lets you view the current preview/publish status of each page on an entire site, or a specific sub-path of a site.

>> Access the tool at Page Status


This can be incredibly useful to content authors and site administrators as each page entry provides information on:

The page's path

• Redirects configured on a page (if applicable)

• Current preview/publish status

• The last time a source document was modified

• The last time a page was previewed

• The last time a page was published


Site Admin

The Site Admin tool provides a simple UI for organizations using the Configuration Service to make and manage Experience Manager project configurations.

Let's look at how this works:


After logging in via the Sidekick extension, the tool displays all project configurations associated with your organization.





Select Add new site… to create a new Experience Manager project configuration with defined content and code sources.


The tool also allows you to manage existing project configurations by:

• Copying the configuration to set up a new site

• Deleting the configuration or site

• Changing the selected content repo

• Changing the selected code repo


Site Query


The Site Query tool allows you to search through all your site’s pages using either a CSS selector or plain text.


>> Access the tool at Site Query


Since content in Edge Delivery Services is often managed from multiple source documents, this tool can be incredibly useful to authors as well as developers. When making updates to a block, it can be helpful to review where it is currently being used in production, ensuring that it is still functional, and adjusting the block's content as required.

Let's take a look at how this works:


This image shows how you might search for uses of a video block across a site.





When a query has positive matches, the results will display:

• The publish URL of the page

• An edit link to the page’s source document

• The number of occurrences where your query produced a match on the page


User Admin






If your organization is leveraging the Configuration Service, the User Admin tool allows you to manage user roles on a site or across your entire organization.


The Edit tool allows you to delete or alter the roles of existing users.

You may also add additional users, providing an email and roles as required.





robots.txt Editor




The robots.txt Editor allows you to edit your site's robots.txt file easily.


To use the tool, you must first log into the Sidekick extension as an organization administrator. The editor will then fetch the robots.txt file from the site specified, allowing you to make changes and save as required.


HTTP Headers Editor



The HTTP Headers Editor allows you to create, edit, and delete custom HTTP response headers from your Edge Delivery Services Site.

Entries are added as name/value pairs and can be easily altered using the provided UI.


CDN Setup




The CDN Setup tool allows you to fetch your site's existing content-delivery setup or define a new one. The user interface provides a selector for CDN Type, which changes the other fields on the form. This tool can therefore streamline the CDN setup process for site administrators.


Lesson takeaways

Admin Labs provides a suite of experimental tools designed to support content creators and developers working with Edge Delivery Services, streamlining tasks like media optimization, site diagnostics, and configuration management.

2
The Image Audit tool helps improve accessibility by identifying images lacking alt text and provides detailed insights into image usage across a site.

3
Tools like SVG Doctor and MP4 Doctor assist in optimizing media assets for performance and compatibility, ensuring they meet platform requirements before deployment.

4
The Admin Edit and Site Admin tools simplify interactions with the Admin API and project configurations, reducing the need for manual API calls and enabling efficient site management.

5
Diagnostic tools such as the Powerscore Calculator and Page Status provide visibility into site complexity, readiness for migration, and publishing status, supporting informed decision-making during development.


Key Takeaways

The Edge Delivery Services project configurations can be managed using either a spreadsheet or the more scalable Configuration Service, which supports multi-site setups and repoless configurations via the Admin API.

2
A language-first content structure is recommended for multilingual and multiregional sites, reducing content duplication and improving SEO and accessibility.

3
Translation placeholders allow developers to dynamically localize hard-coded strings in shared components, enabling scalable multilingual support across regions and languages.

4
Adobe Experience Manager Forms can be implemented using either document-based authoring or the Universal Editor, with the latter offering advanced features like WYSIWYG editing, reCAPTCHA, and integration with external systems.

5
The Experience Manager Importer tool enables efficient migration of existing websites to Edge Delivery Services by converting live pages into editable formats like .docx, HTML, or content packages.

6
Tools like Workbench, Bulk Import, and Crawl within the Importer allow for flexible and scalable content migration workflows, including custom transformation rules and sitemap-based URL discovery.

7
The Eyedropper tool extracts visual design elements such as fonts, colors, and logos from existing sites, helping developers replicate branding in new Edge Delivery Services projects.

8
Admin Labs provides a suite of experimental tools, including Image Audit, Admin Edit, and Powerscore Calculator, and more, to support diagnostics, optimization, and configuration of Edge Delivery Services environments.

