(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[7824],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(n),f=i,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6135:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o={id:"for-engineers",title:"Engineers",slug:"/for-engineers"},c=void 0,s={unversionedId:"getting-started/for-engineers",id:"getting-started/for-engineers",isDocsHomePage:!1,title:"Engineers",description:"Engineers are typically tasked with implementing an experiment on a new surface with an experiment that has been designed by their product manager in partnership with a data scientist.",source:"@site/docs/getting-started/for-engineers.md",sourceDirName:"getting-started",slug:"/for-engineers",permalink:"/for-engineers",editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/getting-started/for-engineers.md",tags:[],version:"current",frontMatter:{id:"for-engineers",title:"Engineers",slug:"/for-engineers"},sidebar:"sidebar",previous:{title:"Validating Experiments",permalink:"/validating-experiments"},next:{title:"Desktop Migration Guide (JS)",permalink:"/desktop-migration-guide"}},l=[{value:"To get started with implementation",id:"to-get-started-with-implementation",children:[]}],u={toc:l};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Engineers are typically tasked with implementing an experiment on a new surface with an experiment that has been designed by their product manager in partnership with a data scientist."),(0,a.kt)("h2",{id:"to-get-started-with-implementation"},"To get started with implementation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Review the experiment design document."),(0,a.kt)("li",{parentName:"ul"},"Determine if you need to implement any additional telemetry collection"),(0,a.kt)("li",{parentName:"ul"},"Check if you need to implement a custom audience"),(0,a.kt)("li",{parentName:"ul"},"Confirm the name of the feature and follow the guide to ",(0,a.kt)("a",{parentName:"li",href:"https://experimenter.info/feature-definition#to-define-your-feature-in-the-feature-manifest-file"},"adding a new feature to the manifest"))))}p.isMDXComponent=!0}}]);