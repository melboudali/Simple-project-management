(()=>{"use strict";var e={278:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(645),i=r.n(n)()((function(e){return e[1]}));i.push([e.id,"*{box-sizing:border-box}html{font-family:sans-serif}body{margin:0}label,input,textarea{display:block;margin:0.5rem 0}label{font-weight:bold}input,textarea{font:inherit;padding:0.2rem 0.4rem;width:100%;max-width:30rem;border:1px solid #ccc}input:focus,textarea:focus{outline:none;background:#fff5f9}button{font:inherit;background:#ff0062;border:1px solid #ff0062;cursor:pointer;color:white;padding:0.75rem 1rem}button:focus{outline:none}button:hover,button:active{background:#a80041;border-color:#a80041}.projects{margin:1rem;border:1px solid #ff0062}.projects header{background:#ff0062;height:3.5rem;display:flex;justify-content:center;align-items:center}#finished-projects{border-color:#0044ff}#finished-projects header{background:#0044ff}.projects h2{margin:0;color:white}.projects ul{list-style:none;margin:0;padding:1rem}.projects li{box-shadow:1px 1px 8px rgba(0,0,0,0.26);padding:1rem;margin:1rem;background-color:white}.projects li:hover{cursor:grab}.projects li h2{color:#ff0062;margin:0.5rem 0}#finished-projects li h2{color:#0044ff}.projects li h3{color:#575757;font-size:1rem}.project li p{margin:0}.droppable{background:#ffe3ee}#finished-projects .droppable{background:#d6e1ff}#user-input{margin:1rem;padding:1rem;border:1px solid #ff0062;background:#f7f7f7}\n",""]);const o=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(n)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(i[s]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);n&&i[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),t.push(c))}},t}},379:(e,t,r)=>{var n,i=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),o=[];function s(e){for(var t=-1,r=0;r<o.length;r++)if(o[r].identifier===e){t=r;break}return t}function a(e,t){for(var r={},n=[],i=0;i<e.length;i++){var a=e[i],c=t.base?a[0]+t.base:a[0],l=r[c]||0,d="".concat(c," ").concat(l);r[c]=l+1;var u=s(d),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(o[u].references++,o[u].updater(p)):o.push({identifier:d,updater:m(p,t),references:1}),n.push(d)}return n}function c(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var o=r.nc;o&&(n.nonce=o)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var s=i(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function u(e,t,r,n){var i=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=d(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function p(e,t,r){var n=r.css,i=r.media,o=r.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var f=null,h=0;function m(e,t){var r,n,i;if(t.singleton){var o=h++;r=f||(f=c(t)),n=u.bind(null,r,o,!1),i=u.bind(null,r,o,!0)}else r=c(t),n=p.bind(null,r,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var r=a(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<r.length;n++){var i=s(r[n]);o[i].references--}for(var c=a(e,t),l=0;l<r.length;l++){var d=s(r[l]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}r=c}}}}},t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={id:n,exports:{}};return e[n](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{class e{constructor(e,t,r,n){this.templateElement=document.getElementById(e),this.hostElement=document.getElementById(t);const i=document.importNode(this.templateElement.content,!0);this.element=i.firstElementChild,n&&(this.element.id=n),this.attach(r)}attach(e){this.hostElement.insertAdjacentElement(e?"afterbegin":"beforeend",this.element)}}function t(e,t,r){const n=r.value;return{configurable:!0,get(){return n.bind(this)}}}var n,i=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};class o extends e{constructor(e,t){super("single-project",e,!1,t.id),this.project=t,this.configure(),this.renderContent()}get persons(){return 1===this.project.people?"1 person":this.project.people+" persons"}dragStartHandler(e){e.dataTransfer.setData("text/plain",this.project.id),e.dataTransfer.effectAllowed="move"}dragEndHandler(e){}configure(){this.element.addEventListener("dragstart",this.dragStartHandler),this.element.addEventListener("dragend",this.dragEndHandler)}renderContent(){this.element.querySelector("h2").textContent=this.project.title,this.element.querySelector("h3").textContent=this.persons+" assigned.",this.element.querySelector("p").textContent=this.project.description}}i([t],o.prototype,"dragStartHandler",null),i([t],o.prototype,"dragEndHandler",null),function(e){e[e.Active=0]="Active",e[e.Finished=1]="Finished"}(n||(n={}));class s{constructor(e,t,r,n,i){this.id=e,this.title=t,this.description=r,this.people=n,this.status=i}}class a extends class{constructor(){this.listeners=[]}addListeners(e){this.listeners.push(e)}}{constructor(){super(),this.projects=[]}static getIstance(){return this.instance||(this.instance=new a),this.instance}addProject(e,t,r){const i=new s(Math.random().toString(),e,t,r,n.Active);this.projects.push(i),this.updateListeners()}moveProject(e,t){const r=this.projects.find((t=>t.id===e));r&&r.status!==t&&(r.status=t,this.updateListeners())}updateListeners(){for(const e of this.listeners)e(this.projects.slice())}}const c=a.getIstance();var l=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};class d extends e{constructor(e){super("project-list","app",!1,e+"-projects"),this.type=e,this.assignedProjects=[],this.configure(),this.renderContent()}dragOverHandler(e){e.dataTransfer&&"text/plain"==e.dataTransfer.types[0]&&(e.preventDefault(),this.element.querySelector("ul").classList.add("droppable"))}dropHandler(e){const t=e.dataTransfer.getData("text/plain");c.moveProject(t,"active"===this.type?n.Active:n.Finished)}dragLeaveHandler(e){this.element.querySelector("ul").classList.remove("droppable")}configure(){this.element.addEventListener("dragover",this.dragOverHandler),this.element.addEventListener("drop",this.dropHandler),this.element.addEventListener("dragleave",this.dragLeaveHandler),c.addListeners((e=>{const t=e.filter((e=>"active"===this.type?e.status===n.Active:e.status===n.Finished));this.assignedProjects=t,this.renderProjects()}))}renderContent(){const e=this.type+"-project-list";this.element.querySelector("ul").id=e,this.element.querySelector("h2").textContent=this.type.toUpperCase()+" PROJECTS"}renderProjects(){document.getElementById(this.type+"-project-list").innerHTML="";for(const e of this.assignedProjects)new o(this.element.querySelector("ul").id,e)}}function u(e){const{value:t,required:r,minLength:n,maxLength:i,min:o,max:s}=e;let a=!0;return r&&(a=a&&0!==t.toString().trim().length),null!=n&&"string"==typeof t&&(a=a&&t.trim().length>n),null!=i&&"string"==typeof t&&(a=a&&t.trim().length<i),null!=o&&"number"==typeof t&&(a=a&&t>o),null!=s&&"number"==typeof t&&(a=a&&t<s),a}l([t],d.prototype,"dragOverHandler",null),l([t],d.prototype,"dropHandler",null),l([t],d.prototype,"dragLeaveHandler",null);class p extends e{constructor(){super("project-input","app",!0,"user-input"),this.titleInput=this.element.querySelector("#title"),this.descriptionInput=this.element.querySelector("#description"),this.peopleInput=this.element.querySelector("#people"),this.configure()}gatherUserInput(){const e=this.titleInput.value,t=this.descriptionInput.value,r=this.peopleInput.value,n={value:t,minLength:20,maxLength:300},i={value:+r,required:!0,min:1,max:10};if(u({value:e,required:!0,minLength:3,maxLength:12})&&u(n)&&u(i))throw new Error("Please make sure all fields are filled in correctly.");return[e,t,+r]}clearInputs(){this.titleInput.value="",this.descriptionInput.value="",this.peopleInput.value=""}submitHundler(e){e.preventDefault();const t=this.gatherUserInput();if(Array.isArray(t)){const[e,r,n]=t;c.addProject(e,r,n),this.clearInputs()}}configure(){this.element.addEventListener("submit",this.submitHundler)}renderContent(){}}!function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);o>3&&s&&Object.defineProperty(t,r,s)}([t],p.prototype,"submitHundler",null);var f=r(379),h=r.n(f),m=r(278);h()(m.Z,{insert:"head",singleton:!1}),m.Z.locals,new p,new d("active"),new d("finished")})()})();