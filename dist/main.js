(()=>{"use strict";const e=()=>{const t=document.querySelector(".popup"),o=document.querySelectorAll(".popup-btn"),n=document.querySelector(".popup-content");t.addEventListener("click",(e=>{let o=e.target;o.classList.contains("popup-close")?t.style.display="none":(o=o.closest(".popup-content"),o||(t.style.display="none"))}));let c,l=0;const r=()=>{c=requestAnimationFrame(r),l++,l<100?n.style.top=l+"px":cancelAnimationFrame(c)};o.forEach((o=>{o.addEventListener("click",(()=>{t.style.display="block",document.documentElement.clientWidth>768&&(c=requestAnimationFrame(r),e())}))}))},t=e;(function(e){let t=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),n=document.getElementById("timer-seconds");function c(){let e=(new Date("14 july 2021").getTime()-(new Date).getTime())/1e3,t=Math.floor(e%60),o=Math.floor(e/60%60),n=Math.floor(e/60/60);function c(...e){return e.forEach(((e,t,o)=>{let n=0,c=e;do{n++,c/=10}while(c>=1);n<2&&o.splice(t,1,"0"+e)})),e[0]}return t=c(t),o=c(o),n=c(n),{timeRemaining:e,hours:n,minuts:o,seconds:t}}!function(){let e=c();e.timeRemaining>0?setInterval((function(){e=c(),t.textContent=e.hours,o.textContent=e.minuts,n.textContent=e.seconds}),1e3):(t.textContent="00",o.textContent="00",n.textContent="00")}()})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),o=document.querySelector(".close-btn"),n=t.querySelectorAll("ul>li"),c=(document.querySelector(".active-menu"),function(){t.classList.toggle("active-menu")});document.addEventListener("click",(l=>{let r=l.target;if(r.closest(".close-btn")&&l.preventDefault(),r)for(;r!==n||r!==e||r!==o;){if(t.classList.contains("active-menu")){if(!r.classList.contains("active-menu"))return void c()}else{if(r.classList.contains("menu"))return void c();if("HTML"===r.tagName)return}if(r.classList.contains("close-btn"))return void c();if("main"===r.tagName&&"LI"===r.tagName)return void c();r=r.parentNode}}))})(),t(),function(e){const t=document.querySelector("main>a"),o=document.querySelector("menu").querySelectorAll("ul>li"),n=document.querySelector("#portfolio"),c=document.querySelector("#service-block"),l=document.querySelector("#calc"),r=document.querySelector("#command"),a=document.querySelector("#connect"),s=document.documentElement;let i,u=0,d=0;const m=function(e){d+=20,i=setTimeout(m,1,e),d<e?s.scrollTop=d:(clearTimeout(i),d=0)};t.addEventListener("click",(e=>{e.preventDefault(),i=setTimeout(m,1,850),u=s.scrollTop,d=u})),o[0].addEventListener("click",(e=>{e.preventDefault(),i=setTimeout(m,1,c.getBoundingClientRect().top),u=s.scrollTop,d=u})),o[1].addEventListener("click",(e=>{e.preventDefault(),i=setTimeout(m,1,n.getBoundingClientRect().top),u=s.scrollTop,d=u})),o[2].addEventListener("click",(e=>{e.preventDefault(),i=setTimeout(m,1,l.getBoundingClientRect().top),u=s.scrollTop,d=u})),o[3].addEventListener("click",(e=>{e.preventDefault(),i=setTimeout(m,1,r.getBoundingClientRect().top),u=s.scrollTop,d=u})),o[4].addEventListener("click",(e=>{e.preventDefault(),i=setTimeout(m,1,a.getBoundingClientRect().top),u=s.scrollTop,d=u}))}(),(()=>{const e=document.querySelector(".service-header"),t=e.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{let n=e.target;n=n.closest(".service-header-tab"),n&&t.forEach(((e,c)=>{var l;e===n&&(l=c,o.forEach(((e,n)=>{l===n?(t[n].classList.add("active"),o[n].classList.remove("d-none")):(t[n].classList.remove("active"),o[n].classList.add("d-none"))})))}))}))})(),(()=>{const e=document.querySelectorAll(".portfolio-item"),t=(document.querySelectorAll(".portfolio-btn"),document.querySelector(".portfolio-content"));let o,n,c=document.querySelector(".portfolio-dots"),l=0;const r=function(){n=document.querySelectorAll(".dot"),n.length<e.length&&(c.insertAdjacentHTML("afterbegin",'<li class="dot"></li>'),r()),c=document.querySelector(".portfolio-dots")};r(),c.children[0].classList.add("dot-active");const a=(e,t,o)=>{e[t].classList.remove(o)},s=(e,t,o)=>{e[t].classList.add(o)};t.addEventListener("click",(t=>{t.preventDefault();let o=t.target;o.matches("#arrow-right , #arrow-left, .dot")&&(a(e,l,"portfolio-item-active"),a(n,l,"dot-active"),o.matches("#arrow-right")?l++:o.matches("#arrow-left")?l--:o.matches(".dot")&&n.forEach(((e,t,n)=>{o===e&&(l=t)})),l>=e.length&&(l=0),l<0&&(l=e.length-1),s(n,l,"dot-active"),s(e,l,"portfolio-item-active"))}));const i=()=>{a(e,l,"portfolio-item-active"),a(n,l,"dot-active"),l++,l>=e.length&&(l=0),s(n,l,"dot-active"),s(e,l,"portfolio-item-active")},u=(e=3e3)=>{o=setInterval(i,e)};t.addEventListener("mouseover",(e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(o)})),t.addEventListener("mouseout",(e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&u()})),u(1500)})(),function(){const e=document.getElementById("command");e.addEventListener("mouseover",(e=>{let t=e.target;t.matches(".command__photo")&&(t.dataset.imgOne=t.src,t.src=t.dataset.img)})),e.addEventListener("mouseout",(e=>{let t=e.target;t.matches(".command__photo")&&(t.src=t.dataset.imgOne)}))}(),function(e=100){const t=document.querySelector(".calc-square"),o=document.querySelector(".calc-block"),n=o.querySelector(".calc-type"),c=o.querySelector(".calc-count"),l=o.querySelector(".calc-day"),r=document.getElementById("total");o.addEventListener("change",(o=>{o.target.matches(".calc-type, .calc-day , .calc-count , .calc-square")&&(()=>{let o=0,a=1,s=1;const i=n.options[n.selectedIndex].value,u=+t.value;c.value>1&&(a+=(c.value-1)/10),l.value&&l.value<5?s*=2:l.value&&l.value<10&&(s*=1.5),i&&u&&(o=e*i*u*a*s),r.textContent=Math.round(o)})()})),o.addEventListener("input",(e=>{let t=e.target;t.matches(".calc-square, .calc-count, .calc-day")&&(t.value=t.value.replace(/\D/,""))}))}(),function(){const e=document.getElementById("connect");document.getElementById("form2-phone");let t=document.getElementById("form2-name"),o=document.getElementById("form2-email"),n=document.getElementById("form2-message");e.addEventListener("input",(e=>{e.target})),o.addEventListener("blur",(e=>{o.value=o.value.replace(/[' ']{2,}/gi," "),o.value=o.value.replace(/^[-]+|^\s|[-]+$|\s$/gi,""),o.value=o.value.replace(/[-]+/gi,"-")})),n.addEventListener("blur",(e=>{n.value=n.value.replace(/[' ']{2,}/gi," "),n.value=n.value.replace(/^[-]+|^\s|[-]+$|\s$/gi,""),n.value=n.value.replace(/[-]+/gi,"-")})),t.addEventListener("blur",(e=>{t.value=t.value.replace(/[' ']{2,}/gi," "),t.value=t.value.replace(/^[-]+|^\s|[-]+$|\s$/gi,""),t.value=t.value.replace(/[-]+/gi,"-"),t.value.match(/\B[а-я]+\s*/gi)}))}(),(()=>{const e=document.getElementById("form1"),t=document.getElementById("form2"),o=document.getElementById("form3");let n=new Set;const c=e=>{const t=document.createElement("div");t.style.cssText="font-size:2rem;";let o=[...e.elements].filter((e=>"input"===e.tagName.toLowerCase()));const c=e=>{let t=e.target;var o;""!==(o=t).value.trim()&&("form2-message"===o.id?/^[а-я\d\' '\,\.\?\!]+$/i.test(o.value):"form1-name"===o.id||"form2-name"===o.id||"form3-name"===o.id?/^[^\w]+$/i.test(o.value):"email"===o.type?/^\w+@\w+\.\w{2,}$/.test(o.value):"tel"===o.type&&/^\+?[87]([-()]*\d){10}$/.test(o.value))?(t.style.border="solid green",n.delete(t)):(e.preventDefault(),t.style.border="solid red",n.add(t))};o.forEach((e=>{e.addEventListener("change",c)})),e.addEventListener("submit",(c=>{c.preventDefault(),e.append(t),e.id&&(t.style.cssText="color:white;");const r=new FormData(e);let a={};for(let e of r.entries())a[e[0]]=e[1];o.forEach((e=>{""===e.value.trim()&&(n.add(e),e.style.border="solid red")})),0===n.size&&(t.textContent="Загрузка...",l(a).then((e=>{if(200!==e.status)throw new Error("status network not 200");t.textContent="Спасибо! Мы скоро с вами свяжемся!"})).catch((e=>{t.textContent="Что то  пошло не так...",console.error(e)}))),(e=>{e.querySelectorAll("input").forEach((e=>{e.value&&(e.value="",e.style.border="none")}))})(e)}))};c(e),c(t),c(o);const l=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"aplication/json"},body:JSON.stringify(e)})})()})();