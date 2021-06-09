(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[991],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,g=p["".concat(s,".").concat(d)]||p[d]||f[d]||i;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9295:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return f}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=["components"],c={id:"configs",title:"Config files"},s={unversionedId:"guides/advanced/configs",id:"guides/advanced/configs",isDocsHomePage:!1,title:"Config files",description:"The --config command line option is a handy way configure Octopus. The argument is a text file containing settings for any subset of options (other than config itself). Each line of the file contains a parameter setting in the format",source:"@site/docs/guides/advanced/configs.md",sourceDirName:"guides/advanced",slug:"/guides/advanced/configs",permalink:"/octopus/docs/guides/advanced/configs",editUrl:"https://github.com/${organizationName}/${projectName}/edit/${branch}/website/docs/guides/advanced/configs.md",version:"current",frontMatter:{id:"configs",title:"Config files"},sidebar:"docs",previous:{title:"VCF Format",permalink:"/octopus/docs/guides/advanced/vcf"},next:{title:"Germline WGS",permalink:"/octopus/docs/tutorials/germline"}},l=[],u={toc:l};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"--config")," command line option is a handy way configure Octopus. The argument is a text file containing settings for any subset of options (other than ",(0,i.kt)("inlineCode",{parentName:"p"},"config")," itself). Each line of the file contains a parameter setting in the format"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"parameter = argument\n")),(0,i.kt)("p",null,"Comment lines are allowed in the config file are proceeded with ",(0,i.kt)("inlineCode",{parentName:"p"},"#"),"."),(0,i.kt)("p",null,"It is perfectly fine to specify a config file and explicit command line options, e.g.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ octopus --config my-config.config -R reference.fa -I reads.bam -o octopus.vcf\n")),(0,i.kt)("p",null,"Explicit command line options that are in the config file are ignored."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/luntergroup/octopus/tree/develop/configs"},"configs")," directory in the main source tree will be used to store useful config files."))}f.isMDXComponent=!0}}]);