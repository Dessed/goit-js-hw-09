!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var r=o[e];delete o[e];var t={id:e,exports:{}};return n[e]=t,r.call(t.exports,t,t.exports),t.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},e.parcelRequired7c6=r),r("iU1Pc"),r("h6c0i");var t=document.querySelector(".form"),i={};function a(e,n){var o=Number(i.step),r=i.amount;n=Number(i.delay),e=0;var t=0;return new Promise((function(i,a){var c=setInterval((function(){var l=Math.random()>.3;e++,t++,l?i(e,n):a(e,n),t==r&&clearInterval(c),n+=o}),n)}))}t.addEventListener("submit",(function(e){e.preventDefault(),Array.from(t).forEach((function(e){"BUTTON"!==e.tagName&&(i[e.name]=e.value)})),a()})),a(position,delay).then((function(e){var n=e.position,o=e.delay;n+=1,console.log("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}))}();
//# sourceMappingURL=03-promises.72bb5e60.js.map
