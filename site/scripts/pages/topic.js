(()=>{var r=class{static get(){return window.OMath}};window.addEventListener("load",()=>{let e=r.get().asideToggler;e.asides.minor.querySelector(":scope > .mini > a[data-current]").addEventListener("click",()=>{e.toggleAside(e.asides.minor,!0)}),e.asides.minor.querySelector(":scope > .full > .contributors").addEventListener("click",()=>{e.asides.minor.querySelector(":scope > .full").toggleAttribute("data-contributors-view")})});})();
