"use strict";(self.webpackChunkcommerce_pwa_studio=self.webpackChunkcommerce_pwa_studio||[]).push([[6395],{66423:function(e,t,o){o.r(t),o.d(t,{_frontmatter:function(){return d},default:function(){return c}});var n=o(87462),a=o(45987),i=(o(15007),o(64983)),r=o(91515);const s=["components"],d={},m=(p="InlineAlert",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)});var p;const l={_frontmatter:d},u=r.Z;function c(e){let{components:t}=e,o=(0,a.Z)(e,s);return(0,i.mdx)(u,(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,i.mdx)("p",null,"This page lists frequently asked questions about PWA Studio.\nIf you have a question that is not answered on this page, try asking in our ",(0,i.mdx)("a",{parentName:"p",href:"https://magentocommeng.slack.com/archives/C71HNKYS2"},"#pwa Slack channel"),"."),(0,i.mdx)("h2",{id:"how-do-i-get-started-with-pwa-studio"},"How do I get started with PWA Studio"),(0,i.mdx)("p",null,"If you are developing a new storefront, the ",(0,i.mdx)("a",{parentName:"p",href:"/commerce-pwa-studio/tutorials/"},"Tutorials")," sections provides an introduction to the different concepts and features of PWA Studio."),(0,i.mdx)("p",null,"If you want to learn about the technologies and concepts behind PWA Studio, the ",(0,i.mdx)("a",{parentName:"p",href:"/commerce-pwa-studio/guides/"},"Getting Started")," section of this site provides background information about this project."),(0,i.mdx)("p",null,"If you are interested in looking at the project source or contributing to the project, check out the ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/pwa-studio"},"project repository"),"."),(0,i.mdx)("h2",{id:"does-pwa-studio-support-server-side-rendering-ssr"},"Does PWA Studio support server-side rendering (SSR)"),(0,i.mdx)("p",null,"Yes, PWA Studio provides tools that support both server-side and client-side rendering strategies.\nFor more information on content rendering support, see the ",(0,i.mdx)("a",{parentName:"p",href:"/commerce-pwa-studio/guides/general-concepts/content-rendering/"},"Content Rendering")," topic."),(0,i.mdx)("p",null,"Community members have also suggested the following tools and services to address SEO and SSR needs:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://seosnap.io/"},"SeoSnap")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://prerender.io/"},"Prerender.io"))),(0,i.mdx)("h2",{id:"how-do-i-customize-a-new-storefront-project"},"How do I customize a new storefront project"),(0,i.mdx)("p",null,"The Tutorials section of this site contains a number of tutorials which cover customizations such as:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/commerce-pwa-studio/tutorials/basic-modifications/add-static-route/"},"How to add a static route")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/commerce-pwa-studio/tutorials/basic-modifications/modify-footer/"},"How to modify the site footer"))),(0,i.mdx)("h2",{id:"which-payment-methods-does-pwa-studio-support"},"Which payment methods does PWA Studio support"),(0,i.mdx)("p",null,"PWA Studio supports Braintree payments out of the box in its Venia storefront implementation.\nThe project also supports adding other payment methods to a storefront project, but\nit requires additional implementation for the storefront developer."),(0,i.mdx)("h2",{id:"how-do-i-deploy-to-production"},"How do I deploy to production"),(0,i.mdx)("p",null,"A storefront uses an UPWARD server as the backend for the frontend code.\nPWA Studio provides two different UPWARD server implementations, UPWARD-JS and UPWARD-PHP."),(0,i.mdx)("p",null,"UPWARD-JS is a node implementation of an UPWARD server.\nIt is used during storefront development when you use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"yarn watch")," command, but\nyou can use it for production by calling ",(0,i.mdx)("inlineCode",{parentName:"p"},"yarn build")," to generate production assets and ",(0,i.mdx)("inlineCode",{parentName:"p"},"yarn start")," to start a server."),(0,i.mdx)("p",null,"UPWARD-PHP is a PHP implementation of an UPWARD server.\nIt is a dependency of the ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2-upward-connector"},"Magento 2 UPWARD connector module"),", which lets you run an UPWARD server on the same machine as your Adobe Commerce or Magento Open Source instance.\nSee the ",(0,i.mdx)("a",{parentName:"p",href:"/commerce-pwa-studio/tutorials/production-deployment/adobe-commerce/"},"Deploy to Adobe Commerce")," tutorial to learn how to deploy your storefront to an Adobe Commerce service in the Cloud."),(0,i.mdx)("h2",{id:"can-i-use-windows-with-pwa-studio-for-development"},"Can I use Windows with PWA Studio for development"),(0,i.mdx)("p",null,"Developing with PWA Studio in Windows is not supported because of its incompatibility with some of the project's dependencies."),(0,i.mdx)("p",null,"Currently, the PWA Studio core team does not have the bandwidth to develop and maintain a Windows development solution, but\ncommunity members have suggested the following workarounds:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Using Docker to spin up a Linux environment"),(0,i.mdx)("li",{parentName:"ul"},"Using the ",(0,i.mdx)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10"},"Windows Subsystem for Linux"))),(0,i.mdx)("h2",{id:"how-can-i-query-other-stores-via-graphql"},"How can I query other stores via GraphQL"),(0,i.mdx)("p",null,"To let the storefront query a specific store view in the Adobe Commerce or Magento Open Source backend, you need to add the store code to these two files:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/Router/resolveUnknownRoute.js#L97"},"packages/peregrine/lib/Router/resolveUnknownRoute.js")),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Add ",(0,i.mdx)("inlineCode",{parentName:"li"},"Store: YOUR_STORE_CODE")))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/drivers/adapter.js#L120"},"packages/venia-ui/lib/drivers/adapter.js")),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Add ",(0,i.mdx)("inlineCode",{parentName:"li"},"headers:{ Store: YOUR_STORE_CODE }"))))),(0,i.mdx)("h2",{id:"image-component-loads-wrongly-sized-images-from-the-srcset"},"Image component loads wrongly sized images from the srcSet"),(0,i.mdx)("p",null,"When you use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"<Image/>")," component from ",(0,i.mdx)("inlineCode",{parentName:"p"},"venia-ui"),", change the following values:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/util/images.js#L6"},"packages/venia-ui/lib/util/images.js")),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Change ",(0,i.mdx)("inlineCode",{parentName:"li"},"DEFAULT_WIDTH_TO_HEIGHT_RATIO")," to match your image ratio."),(0,i.mdx)("li",{parentName:"ul"},"Change the values in the ",(0,i.mdx)("inlineCode",{parentName:"li"},"imageWidths")," mapping to better fit your dimensions."))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/Gallery/item.js#L18"},"packages/venia-ui/lib/components/gallery/item.js")),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Supply the ",(0,i.mdx)("inlineCode",{parentName:"li"},"<Image />")," component with a ",(0,i.mdx)("inlineCode",{parentName:"li"},"widths")," prop as shown in the GalleryItem component defined in the linked file.")))),(0,i.mdx)(m,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,(0,i.mdx)("em",{parentName:"p"},(0,i.mdx)("strong",{parentName:"em"},"Note:")," For testing, resize the viewport manually instead of using the native device emulator in Chrome, which gives incorrect values.")),(0,i.mdx)("h2",{id:"how-to-bypass-css-loader-for-external-css-files"},"How to bypass ",(0,i.mdx)("inlineCode",{parentName:"h2"},"css-loader")," for external css files"),(0,i.mdx)("p",null,"In your React compotent, bypass the style-loader with:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"// ... Addtional imports\n\nimport '!style-loader!css-loader!@my-external-module/import.css';\n\nconst myExternalDropIn = props => {\n//... your ui logic\n}\n")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-project-faq-index-md-438159c521ad4b0d6358.js.map