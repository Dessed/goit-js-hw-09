function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},i=o.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){t[e]=o},o.parcelRequired7c6=i);var r=i("eWCmQ");i("iQIUW");const l=document.querySelector(".form");function a(e,o){return new Promise(((n,t)=>{setTimeout((()=>{Math.random()>.3?n({position:e,delay:o}):t({position:e,delay:o})}),o)}))}console.log(l),l.addEventListener("submit",(function(o){o.preventDefault();let n={};Array.from(l.elements).forEach((e=>{n[e.name]=e.value}));let t=+n.delay,i=+n.step;for(let o=0;o<+n.amount;o++)a(o+1,t+i*o).then((({position:o,delay:n})=>{e(r).Notify.success(`✅ Fulfilled promise ${o} in ${n}ms`)})).catch((({position:o,delay:n})=>{e(r).Notify.failure(`❌ Rejected promise ${o} in ${n}ms`)}))}));
//# sourceMappingURL=03-promises.993b9811.js.map
