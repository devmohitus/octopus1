(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[514,75],{3616:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return ie}});var n=a(7294),i=a(3905),l=a(2263),o=a(6291),r=a(2611),s=a(2122),c=a(9756),u=a(6010),d=a(6700),m=a(944),b=a(1839),p=a(3783),f=a(7898),h=a(6742),v=a(3919),E=a(5537),k=function(e){return n.createElement("svg",(0,s.Z)({width:"20",height:"20",role:"img"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},g=a(4478),_=a(4973),C="sidebar_15mo",N="sidebarWithHideableNavbar_267A",Z="sidebarHidden_2kNb",I="sidebarLogo_3h0W",S="menu_Bmed",y="menuLinkText_2aKo",w="menuWithAnnouncementBar_2WvA",A="collapseSidebarButton_1CGd",T="collapseSidebarButtonIcon_3E-R",R="sidebarMenuIcon_fgN0",x="sidebarMenuCloseIcon_1lpH",M="menuLinkExternal_1OhN",L=["items"],B=["item","onItemClick","collapsible","activePath"],P=["item","onItemClick","activePath","collapsible"];var H=function e(t,a){return"link"===t.type?(0,d.Mg)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))},F=(0,n.memo)((function(e){var t=e.items,a=(0,c.Z)(e,L);return t.map((function(e,t){return n.createElement(W,(0,s.Z)({key:t,item:e},a))}))}));function W(e){switch(e.item.type){case"category":return n.createElement(D,e);case"link":default:return n.createElement(O,e)}}function D(e){var t,a,i,l=e.item,o=e.onItemClick,r=e.collapsible,d=e.activePath,m=(0,c.Z)(e,B),b=l.items,p=l.label,f=H(l,d),h=(a=f,i=(0,n.useRef)(a),(0,n.useEffect)((function(){i.current=a}),[a]),i.current),v=(0,n.useState)((function(){return!!r&&(!f&&l.collapsed)})),E=v[0],k=v[1],g=(0,n.useRef)(null),_=(0,n.useState)(void 0),C=_[0],N=_[1],Z=function(e){var t;void 0===e&&(e=!0),N(e?(null==(t=g.current)?void 0:t.scrollHeight)+"px":void 0)};(0,n.useEffect)((function(){f&&!h&&E&&k(!1)}),[f,h,E]);var I=(0,n.useCallback)((function(e){e.preventDefault(),C||Z(),setTimeout((function(){return k((function(e){return!e}))}),100)}),[C]);return 0===b.length?null:n.createElement("li",{className:(0,u.Z)("menu__list-item",{"menu__list-item--collapsed":E})},n.createElement("a",(0,s.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--sublist":r,"menu__link--active":r&&f},t[y]=!r,t)),onClick:r?I:void 0,href:r?"#!":void 0},m),p),n.createElement("ul",{className:"menu__list",ref:g,style:{height:C},onTransitionEnd:function(){E||Z(!1)}},n.createElement(F,{items:b,tabIndex:E?"-1":"0",onItemClick:o,collapsible:r,activePath:d})))}function O(e){var t,a=e.item,i=e.onItemClick,l=e.activePath,o=(e.collapsible,(0,c.Z)(e,P)),r=a.href,d=a.label,m=H(a,l);return n.createElement("li",{className:"menu__list-item",key:d},n.createElement(h.Z,(0,s.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--active":m},t[M]=!(0,v.Z)(r),t)),to:r},(0,v.Z)(r)&&{isNavLink:!0,exact:!0,onClick:i},o),d))}function K(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,_.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,_.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,u.Z)("button button--secondary button--outline",A),onClick:t},n.createElement(k,{className:T}))}function z(e){var t=e.responsiveSidebarOpened,a=e.onClick;return n.createElement("button",{"aria-label":t?(0,_.I)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,_.I)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:a},t?n.createElement("span",{className:(0,u.Z)(R,x)},"\xd7"):n.createElement(g.Z,{className:R,height:24,width:24}))}var J=function(e){var t,a,i=e.path,l=e.sidebar,o=e.sidebarCollapsible,r=void 0===o||o,s=e.onCollapse,c=e.isHidden,h=function(){var e=(0,m.Z)().isAnnouncementBarClosed,t=(0,n.useState)(!e),a=t[0],i=t[1];return(0,f.Z)((function(t){var a=t.scrollY;e||i(0===a)})),a}(),v=(0,d.LU)(),k=v.navbar.hideOnScroll,g=v.hideableSidebar,_=(0,m.Z)().isAnnouncementBarClosed,y=function(){var e=(0,n.useState)(!1),t=e[0],a=e[1];(0,b.Z)(t);var i=(0,p.Z)();return(0,n.useEffect)((function(){i===p.D.desktop&&a(!1)}),[i]),{showResponsiveSidebar:t,closeResponsiveSidebar:(0,n.useCallback)((function(e){e.target.blur(),a(!1)}),[a]),toggleResponsiveSidebar:(0,n.useCallback)((function(){a((function(e){return!e}))}),[a])}}(),A=y.showResponsiveSidebar,T=y.closeResponsiveSidebar,R=y.toggleResponsiveSidebar;return n.createElement("div",{className:(0,u.Z)(C,(t={},t[N]=k,t[Z]=c,t))},k&&n.createElement(E.Z,{tabIndex:-1,className:I}),n.createElement("div",{className:(0,u.Z)("menu","menu--responsive","thin-scrollbar",S,(a={"menu--show":A},a[w]=!_&&h,a))},n.createElement(z,{responsiveSidebarOpened:A,onClick:R}),n.createElement("ul",{className:"menu__list"},n.createElement(F,{items:l,onItemClick:T,collapsible:r,activePath:i}))),g&&n.createElement(K,{onClick:s}))},U=a(3541),Y=a(4608),G=a(5977),Q="docPage_31aa",X="docMainContainer_3ufF",j="docMainContainerEnhanced_3NYZ",q="docSidebarContainer_3Kbt",V="docSidebarContainerHidden_3pA8",$="collapsedDocSidebar_2JMH",ee="expandSidebarButtonIcon_1naQ",te="docItemWrapperEnhanced_2vyJ",ae="docItemWrapper_3FMP";function ne(e){var t,a,o,s,c,m=e.currentDocRoute,b=e.versionMetadata,p=e.children,f=(0,l.default)(),h=f.siteConfig,v=f.isClient,E=b.pluginId,g=b.permalinkToSidebar,C=b.docsSidebars,N=b.version,Z=g[m.path],I=C[Z],S=(0,n.useState)(!1),y=S[0],w=S[1],A=(0,n.useState)(!1),T=A[0],R=A[1],x=(0,n.useCallback)((function(){T&&R(!1),w(!y)}),[T]);return n.createElement(r.Z,{key:v,wrapperClassName:d.kM.wrapper.docPages,pageClassName:d.kM.page.docPage,searchMetadatas:{version:N,tag:(0,d.os)(E,N)}},n.createElement("div",{className:Q},I&&n.createElement("div",{className:(0,u.Z)(q,(t={},t[V]=y,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(q)&&y&&R(!0)},role:"complementary"},n.createElement(J,{key:Z,sidebar:I,path:m.path,sidebarCollapsible:null==(a=null==(o=h.themeConfig)?void 0:o.sidebarCollapsible)||a,onCollapse:x,isHidden:T}),T&&n.createElement("div",{className:$,title:(0,_.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,_.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:x,onClick:x},n.createElement(k,{className:ee}))),n.createElement("main",{className:(0,u.Z)(X,(s={},s[j]=y||!I,s))},n.createElement("div",{className:(0,u.Z)("container padding-vert--lg",ae,(c={},c[te]=y,c))},n.createElement(i.Zo,{components:U.Z},p)))))}var ie=function(e){var t=e.route.routes,a=e.versionMetadata,i=e.location,l=t.find((function(e){return(0,G.LX)(i.pathname,e)}));return l?n.createElement(ne,{currentDocRoute:l,versionMetadata:a},(0,o.Z)(t)):n.createElement(Y.default,e)}},4608:function(e,t,a){"use strict";a.r(t);var n=a(7294),i=a(2611),l=a(4973);t.default=function(){return n.createElement(i.Z,{title:"Page Not Found"},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);