
const menuBtn=document.querySelector('.menu');const links=document.querySelector('.navlinks');if(menuBtn&&links){menuBtn.addEventListener('click',()=>{links.classList.toggle('open');menuBtn.setAttribute('aria-expanded',links.classList.contains('open'))});}
const mobileCall=document.querySelector('.mobile-call');const toggleCall=()=>{if(!mobileCall)return;mobileCall.classList.toggle('show',window.scrollY>130)};window.addEventListener('scroll',toggleCall,{passive:true});toggleCall();
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const quoteForm=document.querySelector('#quoteForm');if(quoteForm){quoteForm.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(quoteForm);const subject=encodeURIComponent('Towing Solutions website request — '+(d.get('service')||'Service Request'));const body=encodeURIComponent(`Name: ${d.get('name')}\nPhone: ${d.get('phone')}\nEmail: ${d.get('email')}\nService: ${d.get('service')}\nLocation: ${d.get('location')}\n\nDetails:\n${d.get('details')}`);window.location.href=`mailto:fstowing@yahoo.com?subject=${subject}&body=${body}`;});}

// Mobile services dropdown
document.addEventListener('click',function(e){const a=e.target.closest('.nav-dropdown>a');if(a&&window.innerWidth<=980){e.preventDefault();const d=a.parentElement;d.classList.toggle('open');a.setAttribute('aria-expanded',d.classList.contains('open'));}});
