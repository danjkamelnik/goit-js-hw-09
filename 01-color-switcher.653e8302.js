!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");var n=null;t.addEventListener("click",(function(){n=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(){clearInterval(n),e.disabled=!0,t.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.653e8302.js.map
