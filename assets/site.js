/* Shafi Consultancy site scripts. Each block runs only where its elements exist. */
(function(){

(function(){
var d=document.getElementById('enq'),f=document.getElementById('enqf'),ok=document.getElementById('enqok'),t=document.getElementById('enqtxt'),TO='info@shaficonsultancy.com';
document.querySelectorAll('[data-open]').forEach(function(a){a.addEventListener('click',function(e){e.preventDefault();ok.hidden=true;f.hidden=false;d.showModal();});});
d.querySelector('[data-close]').addEventListener('click',function(){d.close();});
d.addEventListener('click',function(e){if(e.target===d)d.close();});
f.addEventListener('submit',function(e){
e.preventDefault();var v=new FormData(f);
var body='Name: '+v.get('name')+'\nEmail: '+v.get('email')+'\nCompany: '+(v.get('company')||'-')+'\nInterested in: '+v.get('topic')+'\n\n'+v.get('msg');
t.value=body;f.hidden=true;ok.hidden=false;
try{window.open('mailto:'+TO+'?subject='+encodeURIComponent('Enquiry from '+v.get('name'))+'&body='+encodeURIComponent(body),'_blank');}catch(x){}
});
document.getElementById('enqcopy').addEventListener('click',function(){
t.select();try{navigator.clipboard.writeText(t.value);}catch(x){try{document.execCommand('copy');}catch(y){}}
this.textContent='Copied';
});
})();

})();
if(document.getElementById('cf')){

(function(){
var f=document.getElementById('cf'),ok=document.getElementById('cfok'),t=document.getElementById('cft'),TO='info@shaficonsultancy.com';
f.addEventListener('submit',function(e){e.preventDefault();var v=new FormData(f);
var body='Name: '+v.get('name')+'\nEmail: '+v.get('email')+'\nCompany: '+(v.get('company')||'-')+'\nInterested in: '+v.get('topic')+'\n\n'+v.get('msg');
t.value=body;f.hidden=true;ok.hidden=false;
try{window.open('mailto:'+TO+'?subject='+encodeURIComponent('Enquiry from '+v.get('name'))+'&body='+encodeURIComponent(body),'_blank')}catch(x){}});
document.getElementById('cfc').addEventListener('click',function(){t.select();try{navigator.clipboard.writeText(t.value)}catch(x){try{document.execCommand('copy')}catch(y){}}this.textContent='Copied'});
})();

}
if(document.getElementById('trk')){

(function(){
var trk=document.getElementById('trk'),dots=document.getElementById('dots'),box=document.getElementById('tq'),n=trk.children.length,i=0,t,rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
var cl=trk.children[0].cloneNode(true);cl.setAttribute('aria-hidden','true');trk.appendChild(cl);
function go(k){i=k;trk.style.transform='translateX(-'+i*100+'%)';[].forEach.call(dots.children,function(d,j){d.classList.toggle('on',j===i%n)})}
function auto(){clearInterval(t);if(!rm)t=setInterval(function(){if(!document.hidden&&i<n)go(i+1)},5000)}
for(var k=0;k<n;k++){(function(k){var b=document.createElement('button');b.type='button';b.setAttribute('aria-label','Show testimonial '+(k+1));b.onclick=function(){go(k);auto()};dots.appendChild(b)})(k)}
trk.addEventListener('transitionend',function(){if(i===n){trk.style.transition='none';go(0);void trk.offsetWidth;trk.style.transition=''}});
box.addEventListener('mouseenter',function(){clearInterval(t)});box.addEventListener('mouseleave',auto);box.addEventListener('focusin',function(){clearInterval(t)});box.addEventListener('focusout',auto);
go(0);auto();
})();

}
if(document.getElementById('bps')){

(function(){
var b=document.getElementById('bps');
b.addEventListener('click',function(e){var k=e.target.closest('button');if(!k)return;
var u=encodeURIComponent(location.href),t=encodeURIComponent(document.getElementById('bpt').textContent),w=k.dataset.s,L='';
if(w==='fb')L='https://www.facebook.com/sharer/sharer.php?u='+u;else if(w==='x')L='https://twitter.com/intent/tweet?url='+u+'&text='+t;else if(w==='in')L='https://www.linkedin.com/sharing/share-offsite/?url='+u;
if(L){window.open(L,'_blank','noopener');return}
var s=location.href,m=document.getElementById('bpc');
function ok(){m.textContent='Link copied';setTimeout(function(){m.textContent=''},2200)}
function fb(){var a=document.createElement('textarea');a.value=s;document.body.appendChild(a);a.select();try{document.execCommand('copy');ok()}catch(y){}a.remove()}
try{navigator.clipboard.writeText(s).then(ok,fb)}catch(x){fb()}
});
})();

}
(function(){

(function(){var b=document.querySelector('.mt'),n=document.getElementById('mnav');if(!b||!n)return;
function close(){n.classList.remove('open');b.setAttribute('aria-expanded','false')}
b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false')});
n.addEventListener('click',function(e){if(e.target.closest('a'))close()});
window.addEventListener('hashchange',close);
document.addEventListener('keydown',function(e){if(e.key==='Escape')close()});
matchMedia('(min-width:861px)').addEventListener('change',close)})();

})();
(function(){

(function(){
document.querySelectorAll('.pl').forEach(function(root){
  root.classList.add('pl-js');
  if(matchMedia('(prefers-reduced-motion:reduce)').matches){root.classList.add('pl-play');return}
  var timers=[],vis=false;
  function clear(){timers.forEach(clearTimeout);timers=[]}
  function run(){
    clear();root.classList.remove('pl-play','pl-out');void root.offsetWidth;root.classList.add('pl-play');
    timers.push(setTimeout(function(){root.classList.add('pl-out')},14200));   /* ~8.5s run, then hold the finished picture */
    timers.push(setTimeout(function(){if(vis&&!document.hidden)run();else{root.classList.remove('pl-out')}},14700));
  }
  new IntersectionObserver(function(es){
    es.forEach(function(e){vis=e.isIntersecting;if(vis)run();else{clear();root.classList.remove('pl-out')}});
  },{threshold:.15}).observe(root);
  document.addEventListener('visibilitychange',function(){if(!document.hidden&&vis)run()});
});
})();

})();
(function(){var T=document.getElementById('pbt');if(!T)return;T.addEventListener('click',function(e){var k=e.target.closest('button');if(!k)return;T.querySelectorAll('button').forEach(function(x){x.classList.toggle('on',x===k)});document.querySelectorAll('#pbl .pbs').forEach(function(s){s.hidden=k.dataset.f!=='-1'&&s.dataset.c!==k.dataset.f})})})();
(function(){if(!document.getElementById('nmplot')||matchMedia('(prefers-reduced-motion:reduce)').matches)return;setInterval(function(){if(document.hidden)return;document.querySelectorAll('.draw').forEach(function(e){e.classList.remove('draw');void e.getBoundingClientRect();e.classList.add('draw')})},5000)})();
