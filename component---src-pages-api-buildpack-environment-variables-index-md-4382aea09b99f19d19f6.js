"use strict";(self.webpackChunkcommerce_pwa_studio=self.webpackChunkcommerce_pwa_studio||[]).push([[3623],{73772:function(e,n,i){i.r(n),i.d(n,{_frontmatter:function(){return m},default:function(){return u}});var t=i(87462),a=i(63366),o=(i(15007),i(64983)),r=i(99536),s=i(93471),d=["components"],m={},l={_frontmatter:m},c=r.Z;function u(e){var n=e.components,i=(0,a.Z)(e,d);return(0,o.mdx)(c,(0,t.Z)({},l,i,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"environment-variables"},"Environment variables"),(0,o.mdx)("p",null,"Environment variable definitions are used for validation and documentation of the ",(0,o.mdx)("a",{parentName:"p",href:"/commerce-pwa-studio/guides/general-concepts/configuration/"},"configuration management system")," in PWA Studio.\nBuild scripts normally use the ",(0,o.mdx)("a",{parentName:"p",href:"/commerce-pwa-studio/api/buildpack/cli/load-environment-file/"},"values set in the current environment"),", but it is sometimes necessary to use the definitions themselves, such as when an extension defines its own global config variables."),(0,o.mdx)("h2",{id:"access-environment-variable-definition-object"},"Access environment variable definition object"),(0,o.mdx)("p",null,"There are two ways to access the environment variable definitions object:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Third-party code should use the builtin target ",(0,o.mdx)("a",{parentName:"li",href:"/commerce-pwa-studio/api/buildpack/environment/definition-object/"},(0,o.mdx)("inlineCode",{parentName:"a"},"envVarDefinitions"))," when adding definitions."),(0,o.mdx)("li",{parentName:"ul"},"Core Buildpack code uses ",(0,o.mdx)("a",{parentName:"li",href:"https://github.com/magento/pwa-studio/blob/develop/packages/pwa-buildpack/lib/Utilities/getEnvVarDefinitions.js"},(0,o.mdx)("inlineCode",{parentName:"a"},"getEnvVarDefinitions()")),", which builds environment variable definitions for the project.\nIt starts with core variables listed below and then calls the ",(0,o.mdx)("inlineCode",{parentName:"li"},"envVarDefinitions")," target so installed extensions can add their own variables.")),(0,o.mdx)(s.Z,{mdxType:"Docs"}))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-api-buildpack-environment-variables-index-md-4382aea09b99f19d19f6.js.map