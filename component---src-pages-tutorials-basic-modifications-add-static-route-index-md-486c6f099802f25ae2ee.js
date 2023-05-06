"use strict";(self.webpackChunkcommerce_pwa_studio=self.webpackChunkcommerce_pwa_studio||[]).push([[9423],{37095:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return p},default:function(){return u}});var o=n(87462),r=n(45987),a=(n(15007),n(64983)),i=n(91515);const s=["components"],p={},d=(l="InlineAlert",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.mdx)("div",e)});var l;const m={_frontmatter:p},c=i.Z;function u(e){let{components:t}=e,n=(0,r.Z)(e,s);return(0,a.mdx)(c,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"add-a-static-route"},"Add a static route"),(0,a.mdx)("p",null,"Adobe Commerce and Magento Open Source's built in CMS system and ",(0,a.mdx)("a",{parentName:"p",href:"/commerce-pwa-studio/integrations/pagebuilder/"},"PageBuilder")," feature lets you create highly customized content pages for your storefront, but\nsometimes you need a page that fulfills a specific function, such as a checkout or login page."),(0,a.mdx)("h2",{id:"overview"},"Overview"),(0,a.mdx)("p",null,"This tutorial provides steps for creating a custom, static route for these types of functional pages."),(0,a.mdx)("p",null,"By the end of this tutorial, you will know how to:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Define a custom React component to render route content"),(0,a.mdx)("li",{parentName:"ul"},"Use the extensibility framework to tap into Venia UI's routes target"),(0,a.mdx)("li",{parentName:"ul"},"Add a new static route to the routes list which renders the custom React component")),(0,a.mdx)("p",null,"For more information on routing, see ",(0,a.mdx)("a",{parentName:"p",href:"/commerce-pwa-studio/guides/general-concepts/routing/"},"Routing"),"."),(0,a.mdx)(d,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,a.mdx)("p",null,"This tutorial requires you to have a project set up using the steps provided in the ",(0,a.mdx)("a",{parentName:"p",href:"/commerce-pwa-studio/tutorials/setup-storefront/"},"Project Setup")," tutorial."),(0,a.mdx)("h2",{id:"create-a-components-directory"},"Create a components directory"),(0,a.mdx)("p",null,"If your project does not already have one, create a ",(0,a.mdx)("inlineCode",{parentName:"p"},"components")," directory under your ",(0,a.mdx)("inlineCode",{parentName:"p"},"src")," directory.\nThis directory will hold your project's custom components."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-sh"},"mkdir -p src/components\n")),(0,a.mdx)("h2",{id:"define-a-custom-react-component"},"Define a custom React component"),(0,a.mdx)("p",null,"Every route needs a component to render the content.\nFor this tutorial, you will define a component that renders a simple greeting on the page.\nThis component will be assigned a route in a later step."),(0,a.mdx)("h3",{id:"create-component-directory"},"Create component directory"),(0,a.mdx)("p",null,"Create the directory to hold the code for a custom GreetingPage component."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-sh"},"mkdir -p src/components/GreetingPage\n")),(0,a.mdx)("h3",{id:"create-greetingpagejs-module"},"Create ",(0,a.mdx)("inlineCode",{parentName:"h3"},"greetingPage.js")," module"),(0,a.mdx)("p",null,"Inside the GreetingPage component directory, create a ",(0,a.mdx)("inlineCode",{parentName:"p"},"greetingPage.js")," file with the following content:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},'/* src/components/GreetingPage/greetingPage.js */\n\nimport React from "react";\nimport { useParams } from "react-router-dom";\n\nconst hi = {\n  textAlign: "center",\n  margin: "1rem",\n};\nconst wave = {\n  ...hi,\n  fontSize: "5rem",\n};\n\nconst GreetingPage = () => {\n  const { who = "nobody" } = useParams();\n  return (\n    <div>\n      <h1 style={hi}>Hello, {who}!</h1>\n      <h1 style={wave}>{"\\uD83D\\uDC4B"}</h1>\n    </div>\n  );\n};\n\nexport default GreetingPage;\n')),(0,a.mdx)("p",null,"This component uses a URL parameter to render a personal greeting on a page."),(0,a.mdx)("h3",{id:"create-indexjs-file"},"Create ",(0,a.mdx)("inlineCode",{parentName:"h3"},"index.js")," file"),(0,a.mdx)("p",null,"Inside the GreetingPage component directory, create an ",(0,a.mdx)("inlineCode",{parentName:"p"},"index.js")," file that exports the GreetingPage component.\nThis pattern of exposing the module through the ",(0,a.mdx)("inlineCode",{parentName:"p"},"index.js")," file is the same pattern used in the Venia UI package."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},'/* src/components/GreetingPage/index.js */\n\nexport { default } from "./greetingPage";\n')),(0,a.mdx)("h2",{id:"tap-into-the-extensibility-framework"},"Tap into the extensibility framework"),(0,a.mdx)("p",null,"In version 7.0.0, PWA Studio introduced its framework for extending storefront functionality.\nOne such extension point, gives you the ability to edit the list of routes without copying over the Routes component and its parents in the render tree."),(0,a.mdx)("h3",{id:"create-an-intercept-file"},"Create an intercept file"),(0,a.mdx)("p",null,"An intercept file is where your storefront or plugin interacts with the extensibility framework.\nThere is no strict rule on where to create this file or what to name it."),(0,a.mdx)("p",null,"For this tutorial, create the file under a ",(0,a.mdx)("inlineCode",{parentName:"p"},"src/targets")," directory."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-sh"},"mkdir -p src/targets\ntouch -p src/targets/local-intercept.js\n")),(0,a.mdx)("p",null,"Inside the ",(0,a.mdx)("inlineCode",{parentName:"p"},"src/targets/local-intercept.js")," file, write the following content:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},'module.exports = (targets) => {\n  targets.of("@magento/venia-ui").routes.tap((routes) => {\n    routes.push({\n      name: "MyGreetingRoute",\n      pattern: "/greeting/:who?",\n      path: require.resolve("../components/GreetingPage/greetingPage.js"),\n    });\n    return routes;\n  });\n};\n')),(0,a.mdx)("p",null,"The code in this file accesses the ",(0,a.mdx)("a",{parentName:"p",href:"/commerce-pwa-studio/api/peregrine/extension-points/targets/"},"routes target")," of ",(0,a.mdx)("inlineCode",{parentName:"p"},"@magento/venia-ui")," and adds a new entry to the list.\nIt adds a new route definition object that specifies the pattern for a new route and which page component renders that route."),(0,a.mdx)("h3",{id:"register-the-intercept-file"},"Register the intercept file"),(0,a.mdx)("p",null,"Add the path to your intercept file in the ",(0,a.mdx)("inlineCode",{parentName:"p"},"pwa-studio.targets.intercept")," section of your project's ",(0,a.mdx)("inlineCode",{parentName:"p"},"package.json")," file.\nThis registers ",(0,a.mdx)("inlineCode",{parentName:"p"},"src/targets/local-intercept.js")," as an intercept file during the build process."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-diff"},'  "engines": {\n    "node": ">=10.x",\n    "yarn": ">=1.12.0"\n  },\n  "keywords": [],\n+ "pwa-studio": {\n+   "targets": {\n+     "intercept": "src/targets/local-intercept"\n+   }\n+ }\n')),(0,a.mdx)("h2",{id:"view-route-content"},"View route content"),(0,a.mdx)("p",null,"Start your dev server using ",(0,a.mdx)("inlineCode",{parentName:"p"},"yarn start")," or ",(0,a.mdx)("inlineCode",{parentName:"p"},"yarn develop")," and navigate to the ",(0,a.mdx)("inlineCode",{parentName:"p"},"/greeting/world")," route."),(0,a.mdx)("p",null,"You should see the following content on the page:"),(0,a.mdx)("p",null,(0,a.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"843px"}},"\n      ",(0,a.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"29.375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,a.mdx)("picture",{parentName:"span"},"\n          ",(0,a.mdx)("source",{parentName:"picture",srcSet:["/commerce-pwa-studio/static/987e904e9ce0ee7f320e2b5f26aa9a33/5530d/hello-world-jsx.webp 320w","/commerce-pwa-studio/static/987e904e9ce0ee7f320e2b5f26aa9a33/0c8fb/hello-world-jsx.webp 640w","/commerce-pwa-studio/static/987e904e9ce0ee7f320e2b5f26aa9a33/e4748/hello-world-jsx.webp 843w"],sizes:"(max-width: 843px) 100vw, 843px",type:"image/webp"}),"\n          ",(0,a.mdx)("source",{parentName:"picture",srcSet:["/commerce-pwa-studio/static/987e904e9ce0ee7f320e2b5f26aa9a33/dd4a7/hello-world-jsx.png 320w","/commerce-pwa-studio/static/987e904e9ce0ee7f320e2b5f26aa9a33/0f09e/hello-world-jsx.png 640w","/commerce-pwa-studio/static/987e904e9ce0ee7f320e2b5f26aa9a33/c96b6/hello-world-jsx.png 843w"],sizes:"(max-width: 843px) 100vw, 843px",type:"image/png"}),"\n          ",(0,a.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-pwa-studio/static/987e904e9ce0ee7f320e2b5f26aa9a33/c96b6/hello-world-jsx.png",alt:"hello world jsx",title:"hello world jsx",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,a.mdx)("h2",{id:"congratulations"},"Congratulations"),(0,a.mdx)("p",null,"You just created a static route in your storefront project!"))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-tutorials-basic-modifications-add-static-route-index-md-486c6f099802f25ae2ee.js.map