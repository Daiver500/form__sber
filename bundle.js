!function(){const e=document.querySelector(".modal__phone");IMask(e,{mask:"+{7}(000)000-00-00"});e&&e.addEventListener("input",(()=>{e.value.length<16?e.setCustomValidity("Номер должен быть из 10 цифр"):e.setCustomValidity(""),e.reportValidity()}));const t=document.querySelector(".main__button"),o=document.querySelector(".modal__close"),n=document.querySelector(".modal-success__close"),d=document.querySelector(".modal__name"),c=document.querySelector(".modal__phone"),s=document.querySelector(".modal"),i=document.querySelector(".modal__form"),l=document.querySelector(".modal__inner"),a=document.querySelector(".modal-success"),r=document.querySelector(".modal-success__inner");s.classList.add("hidden"),s.style.position="fixed",a.style.position="fixed",l.style.position="fixed",r.style.position="fixed";const m=e=>{"Escape"===e.key&&(v(),e.preventDefault())},u=e=>{e.target===s&&v()},v=()=>{s.classList.add("hidden"),document.body.style.overflow="",o.removeEventListener("click",t),s.removeEventListener("click",u),document.removeEventListener("keydown",m)};t&&t.addEventListener("click",(()=>{s.classList.remove("hidden"),document.body.style.overflow="hidden",f(),o.addEventListener("click",o),s.addEventListener("click",u),document.addEventListener("keydown",m)})),o&&o.addEventListener("click",v);const y=e=>{"Escape"===e.key&&(_(),e.preventDefault())},L=e=>{e.target===a&&_()},_=()=>{a.classList.add("hidden"),r.classList.remove("modal__animation"),n.removeEventListener("click",_),document.removeEventListener("click",L),document.removeEventListener("keydown",y)};i.addEventListener("submit",(function(e){e.preventDefault(),p(),c.value="",d.value="",s.classList.add("hidden"),a.classList.remove("hidden"),r.classList.add("modal__animation"),n.addEventListener("click",_),document.addEventListener("click",L),document.addEventListener("keydown",y)})),n&&n.addEventListener("click",_);let k=!0,E="";try{E=localStorage.getItem("login")}catch(e){k=!1}const p=e=>{d&&c?k&&localStorage.setItem("login",d.value):(e.preventDefault(),d.setCustomValidity("Нужно ввести имя кириллицей"),c.setCustomValidity("Нужно ввести телефон")),d.reportValidity(),c.reportValidity()},f=()=>{E?(d.value=E,c.focus()):d.focus()}}();