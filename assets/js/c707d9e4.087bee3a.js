(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[417],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?i.createElement(f,o(o({ref:t},u),{},{components:n})):i.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4491:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var i=n(2122),a=n(9756),r=(n(7294),n(3905)),o=["components"],l={id:"individual",title:"individual"},s={unversionedId:"guides/models/individual",id:"guides/models/individual",isDocsHomePage:!1,title:"individual",description:"The individual calling model is used to call germline variants in a single sample of known ploidy. It is the simplest model.",source:"@site/docs/guides/models/individual.md",sourceDirName:"guides/models",slug:"/guides/models/individual",permalink:"/octopus/docs/guides/models/individual",editUrl:"https://github.com/${organizationName}/${projectName}/edit/${branch}/website/docs/guides/models/individual.md",version:"current",frontMatter:{id:"individual",title:"individual"},sidebar:"docs",previous:{title:"Haplotype Proposal",permalink:"/octopus/docs/guides/haplotypes"},next:{title:"trio",permalink:"/octopus/docs/guides/models/trio"}},p=[{value:"Usage",id:"usage",children:[]},{value:"Setting ploidy",id:"setting-ploidy",children:[]}],u={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"individual")," calling model is used to call germline variants in a single sample of known ploidy. It is the simplest model."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"If the file ",(0,r.kt)("inlineCode",{parentName:"p"},"NA12878.bam")," contains a single sample, to call germline variants in all regions use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ octopus --reference hs37d5.fa --reads NA12878.bam\n")),(0,r.kt)("p",null,"or less verbosely:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ octopus -R hs37d5.fa -I NA12878.bam\n")),(0,r.kt)("p",null,"By default, octopus automatically detects and calls all samples contained in the input read files. If your BAM file contains multiple samples, and you want to call just one of these, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--samples")," (",(0,r.kt)("inlineCode",{parentName:"p"},"-S"),") option:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ octopus -R hs37d5.fa -I multi-sample.bam -S NA12878\n")),(0,r.kt)("h2",{id:"setting-ploidy"},"Setting ploidy"),(0,r.kt)("p",null,"Octopus is setup to call diploid samples by default. If your sample is not diploid you can set the ploidy with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--organism-ploidy")," (",(0,r.kt)("inlineCode",{parentName:"p"},"-P"),") option:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ octopus -R hs37d5.fa -I haploid.bam -P 1\n")),(0,r.kt)("p",null,"You can also set contig specific policies with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--contig-ploidies")," (",(0,r.kt)("inlineCode",{parentName:"p"},"-p"),") option:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ octopus -R hs37d5.fa -I NA12878.bam -p Y=1\n")),(0,r.kt)("p",null,"Octopus automatically sets contigs ",(0,r.kt)("inlineCode",{parentName:"p"},"Y")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"chrY")," to ploidy 1."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Performance note"),": Larger ploidies require greater computational resources. In general, ploidies above 4 are currently intractable. If you wish to call tetraploid sample, you may find that you need to tweak other performance related parameters to get reasonable run times."))}c.isMDXComponent=!0}}]);