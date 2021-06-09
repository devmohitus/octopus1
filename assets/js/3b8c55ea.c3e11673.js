(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[217],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},872:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var a=n(2122),o=n(9756),r=(n(7294),n(3905)),l=["components"],i={id:"installation",title:"Installation"},s={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Installation",description:"Octopus can be built and installed on most Unix based systems (e.g. Linux and MacOS). Windows has not been tested.",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/docs/installation",editUrl:"https://github.com/${organizationName}/${projectName}/edit/${branch}/website/docs/installation.md",version:"current",frontMatter:{id:"installation",title:"Installation"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/introduction"},next:{title:"Introduction",permalink:"/docs/guides/introduction"}},c=[{value:"Requirements",id:"requirements",children:[]},{value:"Python",id:"python",children:[]},{value:"CMake",id:"cmake",children:[]},{value:"Docker",id:"docker",children:[]},{value:"Conda",id:"conda",children:[]}],p={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Octopus can be built and installed on most Unix based systems (e.g. Linux and MacOS). Windows has not been tested."),(0,r.kt)("p",null,"The recommend way to install Octopus for most users is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ git clone -b master https://github.com/luntergroup/octopus.git\n$ octopus/scripts/install.py --dependencies --forests\n")),(0,r.kt)("p",null,"You can then optionally add ",(0,r.kt)("inlineCode",{parentName:"p"},"octopus")," to your ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ echo 'export PATH='$(pwd)'/octopus/bin:$PATH' >> ~/.bash_profile\n$ source ~/.bash_profile\n")),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("h2",{id:"python"},"Python"),(0,r.kt)("p",null,"First clone the git repository in your preferred directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ git clone -b master https://github.com/luntergroup/octopus.git && cd octopus\n")),(0,r.kt)("p",null,"The easiest way to install octopus from source is with the Python3 install script. If your default compiler satisfies the minimum requirements just execute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ ./scripts/install.py\n")),(0,r.kt)("p",null,"otherwise explicitly specify the compiler to use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ ./scripts/install.py --cxx_compiler /path/to/cpp/compiler # or just the compiler name if on your PATH\n")),(0,r.kt)("p",null,"For example, if the requirement instructions above were used:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ ./scripts/install.py --cxx_compiler clang++-4.0\n")),(0,r.kt)("p",null,"On some systems, you may also need to specify a C compiler which is the same version as your C++ compiler, otherwise you'll get link errors. This can be done with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--c_compiler")," option:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ ./scripts/install.py -cxx g++-7 -c gcc-7 \n")),(0,r.kt)("p",null,"By default this installs to ",(0,r.kt)("inlineCode",{parentName:"p"},"/bin")," relative to where you installed octopus. To install to a different location (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local/bin"),") use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ ./scripts/install.py --prefix /user/local/bin\n")),(0,r.kt)("p",null,"If anything goes wrong with the build process and you need to start again, be sure to add the command ",(0,r.kt)("inlineCode",{parentName:"p"},"--clean"),"."),(0,r.kt)("p",null,"You can also request all dependencies to be installed locally:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ ./scripts/install.py --dependencies\n")),(0,r.kt)("h2",{id:"cmake"},"CMake"),(0,r.kt)("p",null,"If Python3 isn't available, the binaries can be installed manually with ",(0,r.kt)("a",{parentName:"p",href:"https://cmake.org"},"CMake"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ git clone -b master https://github.com/luntergroup/octopus.git\n$ cd octopus/build\n$ cmake .. && make install\n")),(0,r.kt)("p",null,"To install to root (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local/bin"),") use the ",(0,r.kt)("inlineCode",{parentName:"p"},"-D")," option:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ cmake -DINSTALL_ROOT=ON ..\n")),(0,r.kt)("p",null,"CMake will try to find a suitable compiler on your system, if you'd like you use a specific compiler use the ",(0,r.kt)("inlineCode",{parentName:"p"},"-D")," option, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ cmake -D CMAKE_C_COMPILER=clang-4.0 -D CMAKE_CXX_COMPILER=clang++-4.0 ..\n")),(0,r.kt)("p",null,"You can check installation was successful by executing the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ octopus -h\n")),(0,r.kt)("h2",{id:"docker"},"Docker"),(0,r.kt)("h2",{id:"conda"},"Conda"),(0,r.kt)("p",null,"Octopus is available ",(0,r.kt)("a",{parentName:"p",href:"https://anaconda.org/bioconda/octopus"},"pre-built for Linux")," as part of ",(0,r.kt)("a",{parentName:"p",href:"https://bioconda.github.io/"},"Bioconda"),". To ",(0,r.kt)("a",{parentName:"p",href:"https://bioconda.github.io/#using-bioconda"},"install in an isolated environment"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"wget https://repo.continuum.io/miniconda/Miniconda3-latest-Linux-x86_64.sh\nbash Miniconda3-latest-Linux-x86_64.sh -b -p venv\nvenv/bin/conda install -c conda-forge -c bioconda octopus\nvenv/bin/octopus -h\n")),(0,r.kt)("p",null,"A package will also be available for OSX once conda-forge and bioconda move to newer versions of gcc and boost."))}u.isMDXComponent=!0}}]);