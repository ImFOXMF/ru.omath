(()=>{var i=class{preview;asideToggler;static get(){return window.OMath}};function c(){window.location.hash&&s(window.location.hash.slice(1)),window.addEventListener("hashchange",()=>{let e=window.location.hash;s(e.slice(1))})}function s(e){if(document.documentElement.getAttribute("data-layout")!=="topic")return;let o=document.getElementById(e);if(setTimeout(()=>{console.log(document.getElementById(e))},1e3),!o)return;let t=o;for(;(t=t.parentElement)!==null;){if(t.classList.contains("accentBlock")){let r=t.querySelector(":scope > .base > .expand");r&&r.contains(o)&&t.setAttribute("data-expand-open","")}t.classList.contains("task")&&t.querySelectorAll(":scope > section").forEach(l=>{l.contains(o)&&t.setAttribute(`data-${l.getAttribute("data-name")}-open`,"")})}let n=document.createElement("a");n.href="#"+e,n.click()}window.addEventListener("load",()=>{let e=i.get().asideToggler;e.asides.minor.querySelector(":scope > .mini > a[data-current]").addEventListener("click",()=>{e.toggleAside(e.asides.minor,!0)}),d(),u(),window.location.hash.startsWith("#todo:")&&a(),c()});function d(){let e=i.get().asideToggler.asides.minor,o=e.querySelector(":scope > .full > .contributors"),t=e.querySelector(":scope > .full > .minorView.contribution"),n=t.querySelector(":scope .close");[o,n].forEach(r=>{r.addEventListener("click",()=>t.toggleAttribute("data-visible"))})}function u(){let e=i.get().asideToggler.asides.minor,o=e.querySelector(":scope > .full > .editorSwitch"),t=e.querySelector(":scope > .full > .minorView.todo");if(!t)return;let n=t.querySelector(":scope .close");[o,n].forEach(r=>{r.addEventListener("click",()=>a())})}function a(){document.documentElement.classList.toggle("displayTodo"),i.get().asideToggler.asides.minor.querySelector(":scope > .full > .minorView.todo").toggleAttribute("data-visible")}})();
