async function y(e){let o=await fetch(e);if(!o.ok)throw new Error(`Could not fetch ${e}, status: ${o.status}`);return await o.json()}function g(){const e=document.querySelectorAll("[data-modal]"),o=document.querySelectorAll(".modal");e.forEach(t=>{const a=t.getAttribute("data-modal"),n=document.querySelector(`.modal-${a}`);t.addEventListener("click",c=>{c.target.tagName==="A"||c.target.tagName==="path"||c.target.tagName==="P"||f(n)})}),o.forEach(t=>{t.addEventListener("click",a=>{(a.target===t||a.target.getAttribute("data-close")=="")&&h(t)})})}function f(e){e.style.display="block",document.body.style.overflow="hidden"}function h(e){e.style.display="none",document.body.style.overflow=""}function L(){const e=document.querySelectorAll(".section__item"),o=document.querySelectorAll(".btn");let t=[];o.forEach(c=>{c.addEventListener("click",()=>{if(Array.from(e).forEach(s=>s.classList.remove("hide")),c.classList.contains("is-checked")){c.classList.remove("is-checked");const s=t.indexOf(c.dataset.filter);t.splice(s,1)}else c.classList.add("is-checked"),t.push(c.dataset.filter);Array.from(e).filter(s=>!Array.from(s.classList).some(l=>t.includes(l))).forEach(s=>s.classList.add("hide")),i(e,n,a,t)})});const a=document.querySelector(".search-input"),n=document.querySelector(".range-input");a.addEventListener("keyup",()=>i(e,n,a,t)),n.addEventListener("input",()=>i(e,n,a,t))}function i(e,o,t,a){let n=t.value.toLowerCase();e.forEach(s=>{const l=s.getAttribute("data-modal"),r=+document.querySelector(`[data-modal="${l}"] .section__item-counter`).textContent.match(/\d/g).join(""),d=s.firstElementChild.textContent.toLowerCase();a.length!==0?d.includes(n)&&Array.from(s.classList).some(m=>a.includes(m))&&r>=o.value?s.classList.remove("hide"):s.classList.add("hide"):d.includes(n)&&r>=o.value?s.classList.remove("hide"):s.classList.add("hide")}),Array.from(e).every(s=>s.classList.contains("hide"))&&e.length>0?document.querySelector(".section__blank").classList.remove("hide"):document.querySelector(".section__blank").classList.add("hide")}const v="/dive-into/assets/img/modal-close-e61344bd.svg",p="/dive-into/assets/img/modal-img-579f8d9c.png";function E(){const e=document.querySelector(".range-input"),o=document.querySelector(".range-output");e.addEventListener("input",()=>{u(e,o)}),u(e,o)}function u(e,o){const t=e.value,a=e.min?e.min:0,n=e.max?e.max:100,c=Number((t-a)*100/(n-a));o.innerHTML=t,o.style.left=`calc(${c}% + (${14-c*.25}px))`}export{p as a,E as c,L as f,y as g,v as i,g as m};
