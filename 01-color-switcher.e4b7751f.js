const t={start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]"),DELAY:1e3};let e="";t.stop.disabled=!0,t.start.addEventListener("click",(function(a){a.target.disabled=!0,t.stop.disabled=!1,e=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),t.DELAY)})),t.stop.addEventListener("click",(function(a){a.target.disabled=!0,t.start.disabled=!1,clearInterval(e)}));
//# sourceMappingURL=01-color-switcher.e4b7751f.js.map
