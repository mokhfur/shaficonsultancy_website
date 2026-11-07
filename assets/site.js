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
var btn=f.querySelector('button.btn'),bl=btn?btn.textContent:'',h3=ok.querySelector('h3'),pp=ok.querySelector('p'),cb=ok.querySelector('button');if(!ok._h){ok._h=[h3.textContent,pp.innerHTML]}function done(sent){if(sent){var dd=document.getElementById('enq');if(dd&&dd.open)dd.close();f.reset();f.hidden=false;ok.hidden=true;window.shafiThanks&&window.shafiThanks();return}f.hidden=true;ok.hidden=false;{h3.textContent=ok._h[0];pp.innerHTML=ok._h[1];t.hidden=false;if(cb)cb.hidden=false;try{window.open('mailto:'+TO+'?subject='+encodeURIComponent('Enquiry from '+v.get('name'))+'&body='+encodeURIComponent(body),'_blank')}catch(x){}}}t.value=body;if(btn){btn.disabled=true;btn.textContent='Sending\u2026'}fetch('https://api.web3forms.com/submit',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify({access_key:'92cd2814-8ef6-45d4-984a-bbd40a9b067b',subject:'Website enquiry from '+v.get('name'),from_name:'Shafi Consultancy website',name:v.get('name'),email:v.get('email'),company:v.get('company')||'-',topic:v.get('topic'),message:v.get('msg'),botcheck:v.get('botcheck')?'true':''})}).then(function(r){return r.json()}).then(function(j){done(!!j.success)}).catch(function(){done(false)}).then(function(){if(btn){btn.disabled=false;btn.textContent=bl}})
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
var btn=f.querySelector('button.btn'),bl=btn?btn.textContent:'',h3=ok.querySelector('h3'),pp=ok.querySelector('p'),cb=ok.querySelector('button');if(!ok._h){ok._h=[h3.textContent,pp.innerHTML]}function done(sent){if(sent){var dd=document.getElementById('enq');if(dd&&dd.open)dd.close();f.reset();f.hidden=false;ok.hidden=true;window.shafiThanks&&window.shafiThanks();return}f.hidden=true;ok.hidden=false;{h3.textContent=ok._h[0];pp.innerHTML=ok._h[1];t.hidden=false;if(cb)cb.hidden=false;try{window.open('mailto:'+TO+'?subject='+encodeURIComponent('Enquiry from '+v.get('name'))+'&body='+encodeURIComponent(body),'_blank')}catch(x){}}}t.value=body;if(btn){btn.disabled=true;btn.textContent='Sending\u2026'}fetch('https://api.web3forms.com/submit',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify({access_key:'92cd2814-8ef6-45d4-984a-bbd40a9b067b',subject:'Website enquiry from '+v.get('name'),from_name:'Shafi Consultancy website',name:v.get('name'),email:v.get('email'),company:v.get('company')||'-',topic:v.get('topic'),message:v.get('msg'),botcheck:v.get('botcheck')?'true':''})}).then(function(r){return r.json()}).then(function(j){done(!!j.success)}).catch(function(){done(false)}).then(function(){if(btn){btn.disabled=false;btn.textContent=bl}})});
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

window.shafiThanks=function(){var d=document.getElementById('thanks');if(!d){d=document.createElement('dialog');d.id='thanks';d.className='thx';d.setAttribute('aria-labelledby','thx-h1');var lg=document.querySelector('header img'),src=lg?lg.src:'';
d.innerHTML='<div class="thx-in">'+(src?'<img class="thx-logo" src="'+src+'" alt="Shafi Consultancy">':'')+'<h1 id="thx-h1">Thank You for Your Enquiry</h1><h2>Your message has been submitted successfully.</h2><p>A member of our management team will review your enquiry and get in touch with you shortly.</p><button type="button" class="btn" data-thx-close>Close</button></div>';
document.body.appendChild(d);d.querySelector('[data-thx-close]').addEventListener('click',function(){d.close()});d.addEventListener('click',function(e){if(e.target===d)d.close()})}
if(!d.open)d.showModal();var b=d.querySelector('[data-thx-close]');if(b)b.focus()};

(function(){if(!document.getElementById('hv'))return;
var NS='http://www.w3.org/2000/svg',RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
function el(n,a,p,t){var e=document.createElementNS(NS,n);for(var k in a)e.setAttribute(k,a[k]);if(t!=null)e.textContent=t;if(p)p.appendChild(e);return e}
var $=function(i){return document.getElementById('hv-'+i)};
var sleep=function(ms){return new Promise(function(r){setTimeout(r,ms)})};

/* ---------- Kaplan-Meier chart ---------- */
var X0=58,X1=606,Y0=22,Y1=252;
function sx(t){return X0+(X1-X0)*t/24}
function sy(s){return Y1-(Y1-Y0)*s}
var grid=$('grid'),axes=$('axes');
[0,.25,.5,.75,1].forEach(function(v){
  el('line',{x1:X0,x2:X1,y1:sy(v),y2:sy(v),stroke:'#2c2828','stroke-width':1},grid);
  el('text',{x:X0-8,y:sy(v)+4,'text-anchor':'end'},axes,Math.round(v*100)+'%')});
[0,6,12,18,24].forEach(function(t){
  el('line',{x1:sx(t),x2:sx(t),y1:Y1,y2:Y1+5,stroke:'#5b5453'},axes);
  el('text',{x:sx(t),y:Y1+18,'text-anchor':'middle'},axes,t)});
el('text',{x:(X0+X1)/2,y:Y1+34,'text-anchor':'middle'},axes,'Months since randomisation');
el('text',{transform:'rotate(-90)',x:-(Y0+Y1)/2,y:14,'text-anchor':'middle'},axes,'Overall survival');
el('line',{x1:X0,x2:X1,y1:Y1,y2:Y1,stroke:'#5b5453'},axes);
function surv(l,ph,t){var s=Math.exp(-l*t)*(1+.018*Math.sin(t*2.7+ph));return Math.min(1,s)}
function steps(l,ph){var d='',prev=1,t=0;d='M'+sx(0)+' '+sy(1);
  for(t=.5;t<=24.001;t+=.5){var s=Math.min(prev,surv(l,ph,t));d+=' H'+sx(t)+' V'+sy(s);prev=s}return d}
var LT=Math.LN2/18,LC=Math.LN2/11.2;
$('trt').setAttribute('d',steps(LT,0.4));$('ctl').setAttribute('d',steps(LC,1.7));
(function(){var top=[],bot=[],i,t;
  for(t=0;t<=24.001;t+=.5){var s=Math.exp(-LT*t),w=Math.min(.02+.0042*t,.2);top.push([sx(t),sy(Math.min(1,s+w))]);bot.push([sx(t),sy(Math.max(0,s-w))])}
  var p=top.concat(bot.reverse()).map(function(a){return a[0].toFixed(1)+','+a[1].toFixed(1)}).join(' ');
  el('polygon',{points:p,fill:'#e2433d','fill-opacity':.14},$('band'));
  var ts=[];t=0;for(t=0;t<=24.001;t+=.5){}
  [[3.2,'t'],[5.1,'t'],[7.4,'c'],[9.6,'t'],[11.3,'t'],[13.8,'t'],[15.5,'c'],[17.2,'t'],[19.6,'t'],[21.4,'t'],[22.8,'c'],[8.4,'c'],[4.3,'c']].forEach(function(c){
    var l=c[1]=='t'?LT:LC,ph=c[1]=='t'?.4:1.7,tt=Math.round(c[0]*2)/2,s=Math.exp(-l*tt)*(1+.018*Math.sin(tt*2.7+ph));
    el('line',{x1:sx(c[0]),x2:sx(c[0]),y1:sy(s)-4,y2:sy(s)+4,stroke:c[1]=='t'?'#ff6b63':'#cfd6dc','stroke-width':1.4},$('band'))})
})();
var med=$('med');
[[18,'#e2433d'],[11.2,'#cfd6dc']].forEach(function(m){el('line',{x1:sx(m[0]),x2:sx(m[0]),y1:sy(.5),y2:Y1,stroke:m[1],'stroke-dasharray':'3 3'},med);
  el('text',{x:sx(m[0]),y:Y1-6,'text-anchor':'middle',fill:m[1],style:'fill:'+m[1]+';font-weight:600'},med,m[0]+' mo')});
el('line',{x1:X0,x2:sx(18),y1:sy(.5),y2:sy(.5),stroke:'#5b5453','stroke-dasharray':'3 3'},med);
var risk=$('risk');
el('text',{x:X0-8,y:292,'text-anchor':'end',style:'font-weight:600;fill:#a59e9b'},risk,'No. at risk');
var RT=[120,104,82,61,44],RC=[120,92,61,38,21],rtx=[];
[[RT,'#ff6b63',308],[RC,'#cfd6dc',326]].forEach(function(r){
  el('text',{x:X0-8,y:r[2]+4,'text-anchor':'end',style:'fill:'+r[1]},risk,r[2]==308?'Trt':'Ctl');
  r[0].forEach(function(n,i){rtx.push([el('text',{x:sx(i*6),y:r[2]+4,'text-anchor':'middle',class:'mono fade',style:'fill:'+r[1]+';font-family:var(--mono)'},risk,'0'),n,i])})});

/* ---------- Forest plot ---------- */
var FR=[['Overall',.62,.48,.80,1],['Age < 65',.58,.40,.84],['Age >= 65',.67,.47,.96],['Male',.64,.45,.91],['Female',.60,.40,.90],['ECOG 0',.55,.37,.82],['ECOG 1',.71,.49,1.03]];
var fp=$('fp'),F0=150,F1=440;
function fx(h){return F0+(F1-F0)*(Math.log(h)-Math.log(.25))/(Math.log(1.5)-Math.log(.25))}
el('line',{x1:fx(1),x2:fx(1),y1:6,y2:172,stroke:'#5b5453','stroke-dasharray':'3 3'},fp);
[.25,.5,1,1.5].forEach(function(h){el('text',{x:fx(h),y:190,'text-anchor':'middle'},fp,h);el('line',{x1:fx(h),x2:fx(h),y1:172,y2:176,stroke:'#5b5453'},fp)});
el('text',{x:fx(.5),y:207,'text-anchor':'middle',style:'font-size:10px'},fp,'favours treatment');
el('text',{x:fx(1.17),y:207,'text-anchor':'middle',style:'font-size:10px'},fp,'favours control');
var frows=[];
FR.forEach(function(r,i){var y=22+i*24,g=el('g',{class:'frow'},fp);
  if(i==1)el('line',{x1:10,x2:460,y1:y-14,y2:y-14,stroke:'#2c2828'},g);
  el('text',{x:12,y:y+4,class:'t',style:i==0?'font-weight:600;fill:#f4f0ee':''},g,r[0]);
  el('line',{class:'ci',x1:fx(r[2]),x2:fx(Math.min(r[3],1.5)),y1:y,y2:y,stroke:'#cfd6dc','stroke-width':1.8},g);
  var s=i==0?10:7;
  el('rect',{class:'pt',x:fx(r[1])-s/2,y:y-s/2,width:s,height:s,fill:i==0?'#e2433d':'#ff6b63'},g);
  frows.push(g)});

/* ---------- Code typing ---------- */
var L=[
 [['/* Overall survival, ADaM ADTTE */','c']],
 [['ods rtf ','k'],['file=','f'],['"f_14_2_1.rtf"','s'],[' style=journal;','f']],
 [['proc ','k'],['lifetest ','f'],['data=adam.adtte','f']],
 [['    plots=survival(atrisk cl) alpha=','f'],['0.05','n'],[';','f']],
 [['  where ','k'],['paramcd = ','f'],['"OS"','s'],[' and saffl = ','f'],['"Y"','s'],[';','f']],
 [['  time ','k'],['aval * cnsr(','f'],['1','n'],[');','f']],
 [['  strata ','k'],['trtp / ','f'],['test=logrank','f'],[';','f']],
 [['run;','k']],
 [['ods rtf close;','k']]
];
var pre=$('pre'),caret=document.createElement('span');caret.className='caret';
var gen=0;
function pipe(n){['p1','p2','p3'].forEach(function(id,i){$(id).classList.toggle('on',i<n)})}
async function type(g){
  pre.textContent='';
  for(var i=0;i<L.length;i++){
    var line=document.createElement('div');line.style.minHeight='1.62em';pre.appendChild(line);
    var spans=L[i].map(function(tk){var s=document.createElement('span');s.className=tk[1];line.appendChild(s);return s});
    line.appendChild(caret);
    if(i==2)pipe(2);
    for(var j=0;j<L[i].length;j++){var txt=L[i][j][0];
      for(var c=1;c<=txt.length;c++){if(g!=gen)return false;spans[j].textContent=txt.slice(0,c);await sleep(L[i][j][1]=='c'?11:17)}}
    await sleep(i==7?240:130)}
  return true}
function showAll(){
  pre.textContent='';L.forEach(function(l){var d=document.createElement('div');d.style.minHeight='1.62em';l.forEach(function(t){var s=document.createElement('span');s.className=t[1];s.textContent=t[0];d.appendChild(s)});pre.appendChild(d)});
  pipe(3);['trt','ctl'].forEach(function(i){$(i).classList.add('go')});
  ['band','med','kpi'].forEach(function(i){$(i).classList.add(i=='kpi'?'on':'go')});
  rtx.forEach(function(r){r[0].textContent=r[1];r[0].classList.add('go')});frows.forEach(function(r){r.classList.add('go')})}
function reset(){
  pipe(1);['trt','ctl'].forEach(function(i){$(i).style.transition='none';$(i).classList.remove('go');void $(i).getBBox()});
  ['trt','ctl'].forEach(function(i){$(i).style.transition=''});
  $('band').classList.remove('go');$('med').classList.remove('go');$('kpi').classList.remove('on');
  rtx.forEach(function(r){r[0].classList.remove('go');r[0].textContent='0'});frows.forEach(function(r){r.classList.remove('go')})}
function count(t,n,ms){var s=performance.now();(function f(now){var p=Math.min(1,(now-s)/ms);t.textContent=Math.round(n*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)})(s)}
async function cycle(){
  var g=++gen;reset();
  if(RM){showAll();return}
  var ok=await type(g);if(!ok||g!=gen)return;
  pipe(3);$('trt').classList.add('go');$('ctl').classList.add('go');
  await sleep(1500);if(g!=gen)return;
  $('band').classList.add('go');$('med').classList.add('go');
  await sleep(700);if(g!=gen)return;
  rtx.forEach(function(r){r[0].classList.add('go');count(r[0],r[1],900)});
  await sleep(600);
  for(var i=0;i<frows.length;i++){if(g!=gen)return;frows[i].classList.add('go');await sleep(110)}
  await sleep(500);if(g!=gen)return;$('kpi').classList.add('on');
  await sleep(6500);if(g!=gen)return;
  cycle()}


/* ---------- 3D tilt and fit ---------- */
var stage=document.getElementById('hv'),fit=$('fit'),scene=$('scene'),ptr={x:0,y:0},cur={x:0,y:0},sc=1;
function size(){var w=stage.clientWidth-36;sc=Math.min(1,w/640);var off=Math.max(0,(w-640*sc)/2)+18;
  fit.style.transform='translate('+off+'px,38px) scale('+sc+')';stage.style.height=(548*sc+56)+'px'}
size();addEventListener('resize',size);
if(matchMedia('(hover:hover) and (pointer:fine)').matches)stage.addEventListener('pointermove',function(e){var r=stage.getBoundingClientRect();ptr.x=(e.clientX-r.left)/r.width-.5;ptr.y=(e.clientY-r.top)/r.height-.5});
stage.addEventListener('pointerleave',function(){ptr.x=0;ptr.y=0});
function frame(t){
  cur.x+=(ptr.x-cur.x)*.06;cur.y+=(ptr.y-cur.y)*.06;
  var sway=RM?0:Math.sin(t/3600)*4;
  scene.style.transform='rotateX('+(9-cur.y*9)+'deg) rotateY('+(-12+sway+cur.x*14)+'deg)';
  if(!RM)requestAnimationFrame(frame)}
frame(0);if(!RM)requestAnimationFrame(frame);
(document.fonts&&document.fonts.ready?document.fonts.ready:Promise.resolve()).then(cycle);
})();
