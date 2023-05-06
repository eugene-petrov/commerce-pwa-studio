"use strict";(self.webpackChunkcommerce_pwa_studio=self.webpackChunkcommerce_pwa_studio||[]).push([[1799],{78891:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return m},default:function(){return p}});var t=a(87462),i=a(45987),o=(a(15007),a(64983)),r=a(91515);const l=["components"],m={},d={_frontmatter:m},s=r.Z;function p(e){let{components:n}=e,a=(0,i.Z)(e,l);return(0,o.mdx)(s,(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"configuration-management"},"Configuration management"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("a",{parentName:"p",href:"/commerce-pwa-studio/guides/packages/buildpack/"},"Buildpack")," library provides the tools you need to configure your environment and larger, overall workflows that a developer has to configure and control.\nThese configurations differ across projects and different environments within those projects.\nFor example, environments for development, testing, staging, and production are configured to support different behaviors."),(0,o.mdx)("h2",{id:"the-env-file"},"The ",(0,o.mdx)("inlineCode",{parentName:"h2"},".env")," file"),(0,o.mdx)("p",null,"Like the rest of PWA Studio, buildpack uses environment variables as its central source of configuration settings.\nA PWA Studio project using buildpack requires a ",(0,o.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/package/dotenv"},(0,o.mdx)("inlineCode",{parentName:"a"},".env")," file")," in its root directory.\nEach line in the file contains a configuration using the following form:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-text"},"NAME=value\n")),(0,o.mdx)("p",null,"In any script in any programming language, you can access these environment variables directly by sourcing the file as a legal POSIX shell script."),(0,o.mdx)("h2",{id:"command-line-interface-cli"},"Command Line Interface (CLI)"),(0,o.mdx)("p",null,"Buildpack provides a ",(0,o.mdx)("a",{parentName:"p",href:"/commerce-pwa-studio/api/buildpack/cli/"},"Buildpack CLI")," for creating ",(0,o.mdx)("inlineCode",{parentName:"p"},".env")," files and validating environments.\nIt also provides library methods for connecting environment management workflows with other tools."),(0,o.mdx)("p",null,"Using these provided tools, you can keep global configuration values in a central location and propagate them throughout your project.\nThis lets you pass common settings down to different library functions without tightly coupling those settings together."),(0,o.mdx)("h2",{id:"configuration-management-rationale"},"Configuration management rationale"),(0,o.mdx)("p",null,"PWA Studio follows the principle that ",(0,o.mdx)("em",{parentName:"p"},"all configuration that ",(0,o.mdx)("strong",{parentName:"em"},"can")," be environment variables, ",(0,o.mdx)("strong",{parentName:"em"},"should")," be environment variables"),"."),(0,o.mdx)("p",null,"Environment variables are portable, cross-platform, and reasonably secure.\nThey can be individually overridden to give the user a great deal of control over a complex system.\nThe ",(0,o.mdx)("a",{parentName:"p",href:"https://12factor.net/config"},"twelve-factor app")," methodology recommends storing config in the environment as its third factor."),(0,o.mdx)("p",null,"Many tools use environment variables strictly as edge-case overrides and store their canonical configuration in other formats because\nunder the strict POSIX definition, environment variables have some limitations:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"An environment variable name is case insensitive."),(0,o.mdx)("li",{parentName:"ul"},"An environment variable's value can only be a string."),(0,o.mdx)("li",{parentName:"ul"},"Environment variables cannot be nested nor schematized, so they have no built-in data structures."),(0,o.mdx)("li",{parentName:"ul"},"Environment variables all belong to a single namespace, and every running process has access to all of them.")),(0,o.mdx)("p",null,"These drawbacks are serious enough that some applications use alternate formats, such as:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"XML")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"JSON")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"YAML")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"INI")," / ",(0,o.mdx)("inlineCode",{parentName:"li"},"TOML")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},".properties")," files in Java"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},".plist")," files in MacOS"),(0,o.mdx)("li",{parentName:"ul"},"PHP associative arrays"),(0,o.mdx)("li",{parentName:"ul"},"Apache directives")),(0,o.mdx)("p",null,"These formats have the following advantages over environment variables:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"They are a standard human-readable file format"),(0,o.mdx)("li",{parentName:"ol"},"They can support nesting and/or namespacing to organize values"),(0,o.mdx)("li",{parentName:"ol"},"They support data types and metadata")),(0,o.mdx)("p",null,"However, none of these formats have ",(0,o.mdx)("em",{parentName:"p"},"won")," and become an undisputed replacement for environment variables.\nEach one has its own set of quirks and undefined behaviors.\nNone of them are deeply integrated with OS, shell, and container environments, and\nthey often do not work consistently across language runtimes."),(0,o.mdx)("p",null,"PWA Studio chooses to use environment variables, while providing simple tools for file format, namespacing, and validation."),(0,o.mdx)("p",null,"A centralized configurator passes on formatted pieces of the environment to specific tools as parameters, so\nthese tools do not need to know the specifics of the configuration scheme.\nEntry point scripts, such as ",(0,o.mdx)("inlineCode",{parentName:"p"},"server.js")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"webpack.config.js"),", can use the ",(0,o.mdx)("a",{parentName:"p",href:"/commerce-pwa-studio/api/buildpack/cli/load-environment-file/"},"loadEnvironment()")," tool to deserialize environment variables into any kind of data structure, while storing persistent values in an ",(0,o.mdx)("inlineCode",{parentName:"p"},".env")," file in the project root directory."),(0,o.mdx)("p",null,"Buildpack combines the features of several tools:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/package/dotenv"},"dotenv")," for managing environment variables with ",(0,o.mdx)("inlineCode",{parentName:"li"},".env")," files"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://npmjs.com/package/envalid"},"envalid")," for describing, validating, and making defaults for settings"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://npmjs.com/package/camelspace"},"camelspace")," for easily translating configuration between flat environment variables and namespaced objects")),(0,o.mdx)("h2",{id:"best-practices"},"Best practices"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("strong",{parentName:"p"},"config rule")," in the ",(0,o.mdx)("a",{parentName:"p",href:"https://12factor.net/config"},"twelve-factor app"),' methodology distinguishes configuration that "does not vary between deploys" from configuration that does.\nIt requires that configuration that does change between deploys be stored in the environment.\nPWA Studio does not make such a distinction.\nFor config that must never vary, the PWA project maintainer can hardcode that configuration in the entrypoint scripts what use ',(0,o.mdx)("inlineCode",{parentName:"p"},"loadEnvironment()"),"."),(0,o.mdx)("p",null,"To have environment-variable-based configuration management and enjoy the benefits of file format, namespacing, and validation at the same time, it's important to use ",(0,o.mdx)("inlineCode",{parentName:"p"},"loadEnvironment()")," in a certain way."),(0,o.mdx)("h3",{id:"configuration-object"},"Configuration object"),(0,o.mdx)("p",null,"The purpose of a function such as ",(0,o.mdx)("a",{parentName:"p",href:"/commerce-pwa-studio/api/buildpack/cli/load-environment-file/"},"loadEnvironment()")," is to keep configuration organized without tightly coupling a system to a manager object.\nTo achieve this, it is important to use ",(0,o.mdx)("inlineCode",{parentName:"p"},"loadEnvironment()")," and the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Configuration"),' object it produces at the "top level" or entry point of a program.'),(0,o.mdx)("p",null,"Avoid passing a ",(0,o.mdx)("inlineCode",{parentName:"p"},"Configuration")," object directly to other tools.\nThese tools should be usable without ",(0,o.mdx)("inlineCode",{parentName:"p"},"loadEnvironment()"),".\nIt is always the responsibility of an outer function to pass plain configuration to an inner dependency."),(0,o.mdx)("p",null,"Use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Configuration")," object only when moving between logic layers:"),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Bad"),": passing the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Configuration")," object to library methods"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"await PWADevServer.configure(\n  {\n    publicPath: config.output.publicPath,\n    graphqlPlayground: true,\n    projectConfig: loadEnvironment(__dirname),\n  },\n  config\n);\n")),(0,o.mdx)("p",null,"The same principle holds when creating your own utilities."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Bad"),": expecting a ",(0,o.mdx)("inlineCode",{parentName:"p"},"Configuration")," object in a library function"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'class MyWebpackPlugin {\n  constructor(config) {\n    this.options = config.section("myWebpackPlugin");\n  }\n}\n')),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Good"),": passing plain objects created by the Configuration object"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'const projectConfig = await loadEnvironment(__dirname);\nawait PWADevServer.configure(\n  {\n    publicPath: config.output.publicPath,\n    graphqlPlayground: true,\n    ...projectConfig.sections("devServer", "imageService", "customOrigin"),\n    ...projectConfig.section("magento"),\n  },\n  config\n);\n')),(0,o.mdx)("h3",{id:"naming-convention"},"Naming convention"),(0,o.mdx)("p",null,"POSIX standard environment variables may not be case sensitive and may not allow very many special characters."),(0,o.mdx)("p",null,"The best policy is to use ",(0,o.mdx)("inlineCode",{parentName:"p"},"ALL_CAPS_UNDERSCORE_DELIMITED_ALPHANUMERIC_VARIABLE_NAMES")," when defining environment variables directly.\n",(0,o.mdx)("strong",{parentName:"p"},"Buildpack will ignore any environment variables which do not follow this convention.")),(0,o.mdx)("p",null,"Buildpack converts between this strict all-caps format (also known as ",(0,o.mdx)("strong",{parentName:"p"},"SCREAMING_SNAKE_CASE"),") and a more convenient JavaScript object which can be nested at any level of delimiter.\nWhen defining new environment variables, make their names long and safely namespace them with prefixes as long as necessary.\n",(0,o.mdx)("inlineCode",{parentName:"p"},"Configuration")," objects have ",(0,o.mdx)("inlineCode",{parentName:"p"},".section()")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},".sections()")," methods to create targeted, small JavaScript objects with shorter names."),(0,o.mdx)("h3",{id:"fallback"},"Fallback"),(0,o.mdx)("p",null,'By default, buildpack respects three levels of "fallback" values:'),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Currently declared environment variables, which can be populated on process startup"),(0,o.mdx)("li",{parentName:"ol"},"Values from the ",(0,o.mdx)("inlineCode",{parentName:"li"},".env")," file in the project root"),(0,o.mdx)("li",{parentName:"ol"},"Defaults from the metadata in the ",(0,o.mdx)("a",{parentName:"li",href:"/commerce-pwa-studio/api/buildpack/environment/variables/"},"Project Environment Definitions"))),(0,o.mdx)("p",null,"Additional layers of configuration and on-disk fallback are discouraged.\nInside scripts, environment variables may be combined and merged, but\ntoo much fall-through of project configuration can result in unpredictable and hard-to-maintain runtime configuration."),(0,o.mdx)("h3",{id:"project-environment-definitions"},"Project environment definitions"),(0,o.mdx)("p",null,"All the environment variables expected and/or used by buildpack are defined in ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/magento/pwa-studio/blob/develop/packages/pwa-buildpack/envVarDefinitions.json"},"packages/pwa-buildpack/envVarDefinitions.json"),"."),(0,o.mdx)("p",null,"This file is used for:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Creating a self-documenting ",(0,o.mdx)("inlineCode",{parentName:"li"},".env")," file"),(0,o.mdx)("li",{parentName:"ul"},"Validating environments"),(0,o.mdx)("li",{parentName:"ul"},"Deprecating and supporting older settings which have changed")),(0,o.mdx)("p",null,"If you are contributing to the PWA Studio project and want to add new functionality that should be configured via the environment or change any environment configuration, follow these best practices:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Define any new variables in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"packages/pwa-buildpack/envVarDefinitions.json")," file.\nThe variable definition object follows the API of ",(0,o.mdx)("a",{parentName:"p",href:"https://npmjs.com/package/envalid"},"envalid"),", with the addition of a ",(0,o.mdx)("inlineCode",{parentName:"p"},"type")," property indicating the ",(0,o.mdx)("inlineCode",{parentName:"p"},"envalid")," method to use.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Organize variables into named sections in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"sections")," list.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Use the namespacing practices encouraged by ",(0,o.mdx)("a",{parentName:"p",href:"https://npmjs.com/package/camelspace"},"camelspace")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"loadEnvironment()"),"."),(0,o.mdx)("p",{parentName:"li"},"For example, a new utility ",(0,o.mdx)("inlineCode",{parentName:"p"},"goodStuff()")," might demand environment variables starting with ",(0,o.mdx)("inlineCode",{parentName:"p"},"GOOD_STUFF_"),",\nand ",(0,o.mdx)("inlineCode",{parentName:"p"},"packages/pwa-buildpack/envVarDefinitions.json")," might include a new section in its ",(0,o.mdx)("inlineCode",{parentName:"p"},"sections")," list.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"After making any changes to ",(0,o.mdx)("inlineCode",{parentName:"p"},"packages/pwa-buildpack/envVarDefinitions.json"),", record them in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"changes")," list in that file."),(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"Change entries are objects which include:"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"type"),": ",(0,o.mdx)("strong",{parentName:"li"},"Required.")," The type of the change, either ",(0,o.mdx)("inlineCode",{parentName:"li"},"removed")," or ",(0,o.mdx)("inlineCode",{parentName:"li"},"renamed"),". No other types of change need change entries."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"name"),": ",(0,o.mdx)("strong",{parentName:"li"},"Required.")," The affected environment variable name."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"dateChanged"),": ",(0,o.mdx)("strong",{parentName:"li"},"Required.")," The date the change entry was added, in a format parseable by the JavaScript ",(0,o.mdx)("inlineCode",{parentName:"li"},"Date")," constructor."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"warnForDays"),": ",(0,o.mdx)("strong",{parentName:"li"},"Optional"),", default ",(0,o.mdx)("inlineCode",{parentName:"li"},"180"),". A number of days that the warning should keep logging on every run, counting from the ",(0,o.mdx)("inlineCode",{parentName:"li"},"dateChanged"),". The default ",(0,o.mdx)("em",{parentName:"li"},"and")," maximum is 180 days, so use this property only if you want the change to log for a ",(0,o.mdx)("em",{parentName:"li"},"shorter")," time than default. This prevents an old, out-of-date warning message from cluttering logs long after the user no longer needs to see it."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"removed")," entries should include a human-readable ",(0,o.mdx)("inlineCode",{parentName:"li"},"reason"),".\n",(0,o.mdx)("strong",{parentName:"li"},"After removing a variable definition, leave the ",(0,o.mdx)("inlineCode",{parentName:"strong"},"removed")," entry permanently")," to log an error if the old variable is found, encouraging out-of-date installations to upgrade."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"renamed")," entries should include the old name as ",(0,o.mdx)("inlineCode",{parentName:"li"},"name"),", and the new name as ",(0,o.mdx)("inlineCode",{parentName:"li"},"updated"),".\nThey must also include a ",(0,o.mdx)("inlineCode",{parentName:"li"},"supportLegacy")," boolean.\nIf this is ",(0,o.mdx)("inlineCode",{parentName:"li"},"true"),", then ",(0,o.mdx)("inlineCode",{parentName:"li"},"loadEnvironment()")," will continue to support the old value while logging a warning, until either the new variable name has a value, or the change entry expires.")))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-general-concepts-configuration-index-md-177c691433119a73007b.js.map