"use strict";(self.webpackChunkcommerce_pwa_studio=self.webpackChunkcommerce_pwa_studio||[]).push([[1551],{4027:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return m},default:function(){return l}});var a=t(87462),o=t(45987),s=(t(15007),t(64983)),r=t(91515),p=t(1427);const i=["components"],m={},d={_frontmatter:m},c=r.Z;function l(e){let{components:n}=e,t=(0,o.Z)(e,i);return(0,s.mdx)(c,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"targetablereactcomponent"},"TargetableReactComponent"),(0,s.mdx)(p.Z,{mdxType:"Docs"}),(0,s.mdx)("h2",{id:"examples"},"Examples"),(0,s.mdx)("p",null,"Code examples for the ",(0,s.mdx)("inlineCode",{parentName:"p"},"TargetableReactComponent")," class."),(0,s.mdx)("h3",{id:"modify-venias-main-component"},"Modify Venia's Main component"),(0,s.mdx)("p",null,"The ",(0,s.mdx)("inlineCode",{parentName:"p"},"TargetableReactComponent")," class provides functions that change the JSX structure a React component returns.\nThe following example uses some of these functions to make changes to Venia's Main component.\nIt uses JSX strings found in the ",(0,s.mdx)("a",{parentName:"p",href:"https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/Main/main.js"},(0,s.mdx)("inlineCode",{parentName:"a"},"main.js"))," file to specify where these changes should happen."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-js"},'const { Targetables } = require("@magento/pwa-buildpack");\n\nmodule.exports = (targets) => {\n  const targetables = Targetables.using(targets);\n\n  // Create a TargetableReactComponent linked to the `main.js` file\n  const MainComponent = targetables.reactComponent(\n    "@magento/venia-ui/lib/components/Main/main.js"\n  );\n\n  // Add an import statement for Venia\'s Button component\n  const Button = MainComponent.addImport(\n    "Button from \'@magento/venia-ui/lib/components/Button\'"\n  );\n\n  // Use method chaining to call chainable functions one after the other\n  MainComponent.appendJSX(\n    "div className={pageClass}",\n    "<span>appendJSX succeeded!</span>"\n  )\n    .addJSXClassName("div className={pageClass}", "newClass")\n    .addJSXClassName("Header", \'"anotherClass"\')\n    .insertAfterJSX(\n      "<Footer/>",\n      `<${Button} type="button" priority="high">insertAfterJSX succeeded!</${Button}>`\n    )\n    .insertBeforeJSX("<Header />", "<span>insertBeforeJSX succeeded!</span>")\n    .replaceJSX("span id={`${dot.path}`}", "<span>replaceJSX worked</span>")\n    .prependJSX("div", "<>prependJSX succeeded!</>")\n    .removeJSX(\'span className="busted"\')\n    .setJSXProps("Footer", {\n      "aria-role": \'"footer"\',\n      "data-set-jsx-props-succeeded": true,\n    })\n    .surroundJSX(\n      "Header",\n      `div style={{ filter: "blur(1px)", outline: "2px dashed red" }}`\n    )\n    .insertBeforeJSX(\n      \'Footer aria-role="footer"\',\n      "<span>Cumulative select worked</span>"\n    );\n};\n')))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-api-buildpack-targetables-targetable-react-component-index-md-c5ac371f740b2845d5c2.js.map