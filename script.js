const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);$('#year').textContent=new Date().getFullYear();
$('#theme').onclick=()=>{document.body.classList.toggle('dark');$('#theme').textContent=document.body.classList.contains('dark')?'🌙':'☀️'};
$('#menu').onclick=()=>$('#links').classList.toggle('open');$$('#links a').forEach(a=>a.onclick=()=>$('#links').classList.remove('open'));
$$('.filters button').forEach(b=>b.onclick=()=>{$$('.filters button').forEach(x=>x.classList.remove('active'));b.classList.add('active');let f=b.dataset.f;$$('.project').forEach(p=>p.style.display=f==='all'||p.dataset.c===f?'block':'none')});
$$('.details').forEach(b=>b.onclick=()=>{$('#mt').textContent=b.dataset.title;$('#md').textContent=b.dataset.text;$('#modal').classList.add('open')});
$('#close').onclick=()=>$('#modal').classList.remove('open');$('#modal').onclick=e=>{if(e.target.id==='modal')$('#modal').classList.remove('open')};
$('#form').onsubmit=e=>{e.preventDefault();let n=encodeURIComponent($('#name').value),em=encodeURIComponent($('#email').value),m=encodeURIComponent($('#msg').value);location.href=`mailto:Tiavinarjnomenjanahary@gmail.com?subject=Projet%20web%20-%20${n}&body=Email:%20${em}%0A%0A${m}`};
addEventListener('scroll',()=>{let h=document.documentElement;$('#progress').style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%'});
