import{C as e,E as t,S as n,T as r,_ as i,a,b as o,c as s,d as c,f as l,g as u,h as d,i as f,l as p,m,n as h,o as g,p as _,r as ee,s as v,t as te,u as y,v as ne,w as re,x as b,y as x}from"./three-BPEdSj40.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function S(S){let C=new e;C.background=new y(328450),C.fog=new l(328450,.035);let w=new ne(40,window.innerWidth/window.innerHeight,.1,50);w.position.set(0,.5,14),w.lookAt(0,0,0);let T=new a({antialias:!0,alpha:!1,powerPreference:`high-performance`});T.setSize(window.innerWidth,window.innerHeight),T.setPixelRatio(Math.min(window.devicePixelRatio,2)),T.toneMapping=4,T.toneMappingExposure=.9,T.shadowMap.enabled=!0,T.shadowMap.type=2,S.appendChild(T.domElement);let E=new f(T),D=new ee(C,w);E.addPass(D);let ie=new h(new t(window.innerWidth,window.innerHeight),.25,.15,.05);E.addPass(ie),E.addPass(new te);let ae=new g(1118218,.6);C.add(ae);let O=new x(16729088,8,20);O.position.set(0,-.5,4),O.castShadow=!0,C.add(O);let k=new x(16737792,4,15);k.position.set(2,1,5),C.add(k);let oe=new c(3351057,.3);oe.position.set(-3,4,2),C.add(oe);let se=new c(2232576,.15);se.position.set(2,-1,3),C.add(se);let A=new _,ce=new r(1.4,.45,200,32),le=new u({color:9071152,emissive:4861968,emissiveIntensity:.2,metalness:.9,roughness:.2,clearcoat:.4,clearcoatRoughness:.3,envMapIntensity:.8}),j=new m(ce,le);j.castShadow=!0,A.add(j);let ue=new m(new r(1.42,.47,200,32),new d({color:13938487,wireframe:!0,transparent:!0,opacity:.06}));A.add(ue);let de=new m(new re(.6,32,32),new d({color:16729088,transparent:!0,opacity:.04,blending:2}));A.add(de),A.position.y=.4,C.add(A);let M=new _,fe=new i(.1,0);for(let e=0;e<24;e++){let e=new y().setHSL(.08+Math.random()*.04,.8,.4+Math.random()*.3),t=new m(fe,new u({color:e,emissive:e,emissiveIntensity:.5+Math.random()*.5,metalness:.6,roughness:.2})),n=Math.random()*Math.PI*2,r=Math.acos(2*Math.random()-1),i=2.6+Math.random()*1.5;t.position.set(Math.sin(r)*Math.cos(n)*i,Math.sin(r)*Math.sin(n)*i-.2,Math.cos(r)*Math.sin(n)*i),t.scale.setScalar(.6+Math.random()*.8),t.userData={speed:.2+Math.random()*.6,phase:Math.random()*Math.PI*2,floatSpeed:.3+Math.random()*.4,floatAmp:.01+Math.random()*.02},M.add(t)}C.add(M);let N=1200,P=new Float32Array(N*3),F=new Float32Array(N),I=new Float32Array(N*3),L=new Float32Array(N*3);for(let e=0;e<N;e++){let t=1.5+Math.random()*5,n=Math.random()*Math.PI*2,r=(Math.random()-.5)*7;P[e*3]=Math.cos(n)*t,P[e*3+1]=r-1,P[e*3+2]=Math.sin(n)*t,F[e]=.015+Math.random()*.05,L[e*3]=(Math.random()-.5)*.004,L[e*3+1]=.004+Math.random()*.012,L[e*3+2]=(Math.random()-.5)*.004;let i=Math.random();I[e*3]=1,I[e*3+1]=.25+i*.55,I[e*3+2]=i*.1}let R=new s;R.setAttribute(`position`,new v(P,3)),R.setAttribute(`size`,new v(F,1)),R.setAttribute(`color`,new v(I,3));let z=document.createElement(`canvas`);z.width=64,z.height=64;let B=z.getContext(`2d`),V=B.createRadialGradient(32,32,0,32,32,32);V.addColorStop(0,`rgba(255,255,255,1)`),V.addColorStop(.15,`rgba(255,220,150,0.9)`),V.addColorStop(.5,`rgba(255,150,50,0.4)`),V.addColorStop(1,`rgba(255,50,0,0)`),B.fillStyle=V,B.fillRect(0,0,64,64);let H=new o(R,new b({size:.045,map:new p(z),blending:2,depthWrite:!1,transparent:!0,opacity:.7,vertexColors:!0}));C.add(H);let U=new Float32Array(400*3),W=new Float32Array(400),G=new Float32Array(400*3),K=new Float32Array(400*3),pe=new Float32Array(400);for(let e=0;e<400;e++){let t=.5+Math.random()*8,n=Math.random()*Math.PI*2,r=(Math.random()-.5)*12;U[e*3]=Math.cos(n)*t,U[e*3+1]=r,U[e*3+2]=Math.sin(n)*t,W[e]=.008+Math.random()*.025,pe[e]=r,K[e*3]=(Math.random()-.5)*.002,K[e*3+1]=(Math.random()-.5)*.003,K[e*3+2]=(Math.random()-.5)*.002;let i=.4+Math.random()*.6;G[e*3]=1,G[e*3+1]=.7+i*.3,G[e*3+2]=.2+i*.2}let q=new s;q.setAttribute(`position`,new v(U,3)),q.setAttribute(`size`,new v(W,1)),q.setAttribute(`color`,new v(G,3));let J=document.createElement(`canvas`);J.width=32,J.height=32;let Y=J.getContext(`2d`),X=Y.createRadialGradient(16,16,0,16,16,16);X.addColorStop(0,`rgba(255,255,200,1)`),X.addColorStop(.2,`rgba(255,220,100,0.6)`),X.addColorStop(1,`rgba(255,200,50,0)`),Y.fillStyle=X,Y.fillRect(0,0,32,32);let Z=new o(q,new b({size:.025,map:new p(J),blending:2,depthWrite:!1,transparent:!0,opacity:.5,vertexColors:!0}));C.add(Z);let me=new d({color:16729088,transparent:!0,opacity:.03,side:2,depthWrite:!1,blending:2}),Q=new m(new n(1.8,4,64),me);Q.rotation.x=-Math.PI/2,Q.position.y=-1.8,C.add(Q);let he=new d({color:16737792,transparent:!0,opacity:.02,side:2,depthWrite:!1,blending:2}),$=new m(new n(3,5,64),he);return $.rotation.x=-Math.PI/2,$.position.y=-1.85,C.add($),{scene:C,camera:w,renderer:T,composer:E,artifactGroup:A,knot:j,wireKnot:ue,glowSphere:de,knotMat:le,runeGroup:M,particles:H,particleGeom:R,velocities:L,particleCount:N,dustParticles:Z,dustGeom:q,dustVelocities:K,dustBaseY:pe,dustCount:400,ring:Q,ringOuter:$,fireLight:O,fireLight2:k}}function C(e){let t=performance.now(),n=0,r=e.particles.geometry.attributes.position.array,i=new Float32Array(e.particleCount);for(let t=0;t<e.particleCount;t++)i[t]=r[t*3+1];function a(r){let o=Math.min((r-t)/1e3,.05);t=r,n+=o;let s=e.scroll?e.scroll.progress:0,c=e.scroll?e.scroll.velocity:0,l=c*.005;e.artifactGroup.rotation.x=Math.sin(n*.1)*.15,e.artifactGroup.rotation.y+=o*.2,e.artifactGroup.rotation.z=Math.sin(n*.04)*.08;let u=s*-1.5,d=.4+Math.sin(n*.3)*.15+u;e.artifactGroup.position.y=d;let f=.15+Math.sin(n*.6)*.08+Math.sin(n*1.3)*.03+s*.1;e.knotMat.emissiveIntensity=Math.max(.1,f),e.glowSphere.material.opacity=.03+Math.sin(n*.8)*.025+Math.abs(c)*.001,e.glowSphere.scale.setScalar(1+Math.sin(n*.5)*.1);let p=1+Math.abs(c)*.02,m=(5+Math.sin(n*1.1)*3+Math.sin(n*2.7)*1.5)*p;e.fireLight.intensity=m,e.fireLight.position.x=Math.sin(n*.4)*.5,e.fireLight.position.z=4+Math.sin(n*.3)*.3;let h=(3+Math.sin(n*.7+1.2)*1.5)*p;e.fireLight2.intensity=h,e.fireLight2.position.x=2+Math.sin(n*.2)*.3,e.runeGroup.position.y=s*-2,e.runeGroup.rotation.y+=o*(.06+s*.1),e.runeGroup.rotation.x=Math.sin(n*.02)*.05,e.runeGroup.children.forEach(e=>{e.rotation.x+=o*e.userData.speed*2,e.rotation.z+=o*e.userData.speed,e.position.y+=Math.sin(n*e.userData.floatSpeed+e.userData.phase)*e.userData.floatAmp*o*30});let g=e.particles.geometry.attributes.position.array;for(let t=0;t<e.particleCount;t++){g[t*3]+=e.velocities[t*3]*o*30,g[t*3+1]+=e.velocities[t*3+1]*o*30,g[t*3+2]+=e.velocities[t*3+2]*o*30;let n=i[t]+s*-6;if(g[t*3+1]+=(n-g[t*3+1])*.02,g[t*3+1]>3.5+s*-2){let e=Math.random()*Math.PI*2,n=2+Math.random()*4.5;g[t*3]=Math.cos(e)*n,g[t*3+1]=-2.5-Math.random()*1+s*-2,g[t*3+2]=Math.sin(e)*n}e.velocities[t*3]+=(Math.random()-.5)*5e-4+l*(Math.random()-.5),e.velocities[t*3+2]+=(Math.random()-.5)*5e-4+l*(Math.random()-.5),e.velocities[t*3]*=.99,e.velocities[t*3+2]*=.99}e.particles.geometry.attributes.position.needsUpdate=!0;let _=e.dustGeom.attributes.position.array;for(let t=0;t<e.dustCount;t++){_[t*3]+=e.dustVelocities[t*3]*o*30,_[t*3+1]+=e.dustVelocities[t*3+1]*o*30,_[t*3+2]+=e.dustVelocities[t*3+2]*o*30;let n=e.dustBaseY[t]+s*-8;if(_[t*3+1]+=(n-_[t*3+1])*.015,_[t*3+1]>6+s*-3){_[t*3+1]=-6+s*-3;let e=Math.random()*Math.PI*2,n=.5+Math.random()*8;_[t*3]=Math.cos(e)*n,_[t*3+2]=Math.sin(e)*n}e.dustVelocities[t*3]+=(Math.random()-.5)*3e-4,e.dustVelocities[t*3+2]+=(Math.random()-.5)*3e-4,e.dustVelocities[t*3]*=.995,e.dustVelocities[t*3+2]*=.995}e.dustGeom.attributes.position.needsUpdate=!0;let ee=Math.max(.005,.025+Math.sin(n*.4)*.012-s*.02);e.ring.material.opacity=ee,e.ringOuter.material.opacity=Math.max(.003,.015+Math.sin(n*.25+1)*.008-s*.015),e.ring.scale.setScalar(1+Math.sin(n*.15)*.03),e.ringOuter.scale.setScalar(1+Math.sin(n*.1+.5)*.02),Math.abs(c)>2&&(e.fireLight.intensity=m*(1+Math.min(Math.abs(c)*.05,.5))),e.composer.render(),requestAnimationFrame(a)}requestAnimationFrame(a)}function w(){let e=document.getElementById(`app`);e.innerHTML=`
    <!-- LOADING -->
    <div id="loading">
      <div class="loader-rune">✦</div>
      <div class="loader-text">Kindling the flame...</div>
      <div class="loader-bar"><div class="loader-fill"></div></div>
    </div>

    <!-- HERO -->
    <section class="section hero-section" id="hero">
      <div class="rune-border"></div>
      <div class="hero-rune">✦</div>
      <h1>The <span class="highlight">Ashen</span> One</h1>
      <p class="hero-tagline">Craftsman of Code · Forger of Worlds</p>
      <p class="hero-desc">A lone developer, raising bonfires in the darkness. Every commit a beacon, every shader a miracle.</p>
      <div class="scroll-indicator">
        <span>Descend</span>
        <div class="scroll-line"></div>
      </div>
    </section>

    <div class="section-divider"></div>

    <!-- STATS -->
    <section class="section" id="stats">
      <div class="rune-border"></div>
      <h2>Attributes</h2>
      <div class="stats-grid" id="stats-grid"></div>
    </section>

    <div class="section-divider"></div>

    <!-- PROJECTS -->
    <section class="section" id="projects">
      <div class="rune-border"></div>
      <h2>Arsenal</h2>
      <div class="projects-grid" id="projects-grid"></div>
    </section>

    <div class="section-divider"></div>

    <!-- LORE -->
    <section class="section lore-section" id="lore">
      <div class="rune-border"></div>
      <div class="lore-block">
        <blockquote>
          "In the age of abstractions, a lone engineer discovered the ancient art of raw GLSL. They did not flinch from the terminal. They did not fear the void of undefined behavior. And so the first commit was made — that which would light the repository."
        </blockquote>
        <span class="ornament">◆ ◆ ◆</span>
        <cite>— Item Description: <em>"Elder Scroll of Code"</em></cite>
      </div>
    </section>

    <div class="section-divider"></div>

    <!-- GALLERY -->
    <section class="section" id="gallery">
      <div class="rune-border"></div>
      <h2>Gallery</h2>
      <div class="gallery-grid" id="gallery-grid"></div>
    </section>

    <div class="section-divider"></div>

    <!-- MUSIC -->
    <section class="section music-section" id="music">
      <div class="rune-border"></div>
      <h2>Ambient</h2>
      <div class="music-player">
        <div class="track-name">Now playing</div>
        <div class="track-title">— Majula —</div>
        <div class="visualizer">
          <div class="bar"></div><div class="bar"></div><div class="bar"></div>
          <div class="bar"></div><div class="bar"></div><div class="bar"></div>
          <div class="bar"></div>
        </div>
        <div class="music-note">"A calm, distant flame..."</div>
      </div>
    </section>

    <div class="section-divider"></div>

    <!-- FOOTER -->
    <footer class="footer-section" id="footer">
      <div class="social-links">
        <a href="#">GitHub</a>
        <a href="#">Twitter</a>
        <a href="#">ArtStation</a>
        <a href="#">LinkedIn</a>
      </div>
      <a href="#" class="cv-btn">⌂ Download Scroll of Resumé</a>
      <p class="footer-quote">"Don't you dare go hollow."</p>
    </footer>
  `;let t=[{label:`VITALITY`,desc:`HTML/CSS`,value:87},{label:`STRENGTH`,desc:`JavaScript`,value:92},{label:`DEXTERITY`,desc:`Three.js / WebGL`,value:78},{label:`INTELLIGENCE`,desc:`Backend / API`,value:65},{label:`FAITH`,desc:`UI / UX Design`,value:88},{label:`LUCK`,desc:`Debugging`,value:45}],n=document.getElementById(`stats-grid`);t.forEach(e=>{let t=document.createElement(`div`);t.className=`stat-card`,t.innerHTML=`
      <div class="stat-label">
        <span>${e.label}</span>
        <span class="stat-level">${e.desc}</span>
      </div>
      <div class="stat-bar"><div class="stat-fill" data-target="${e.value}"></div></div>
      <div class="stat-value">${e.value}</div>
    `,n.appendChild(t)});let r=[{num:`01`,name:`Ember Engine`,desc:`A real-time particle system simulating the dying flame of the First Flame — built from scratch in GLSL.`,tags:[`Three.js`,`WebGL`,`GLSL`]},{num:`02`,name:`Crystal Cavern`,desc:`Procedural dungeon generator that weeps crystalline structures from the abyss using noise algorithms.`,tags:[`Procedural`,`Noise`,`R3F`]},{num:`03`,name:`Bonewheels`,desc:`A skeletal animation rig inspired by the unforgiving bonewheel skeletons of catacombs past.`,tags:[`Blender`,`Rigging`,`GLTF`]},{num:`04`,name:`Lost Izalith`,desc:`Volumetric fire shader with heat distortion and particle chaos, born from the chaos flame itself.`,tags:[`Shader`,`GLSL`,`PostFX`]}],i=document.getElementById(`projects-grid`);r.forEach(e=>{let t=document.createElement(`div`);t.className=`project-card`,t.innerHTML=`
      <div class="card-number">${e.num}</div>
      <h3>${e.name}</h3>
      <p>${e.desc}</p>
      <div class="tech-tags">${e.tags.map(e=>`<span>${e}</span>`).join(``)}</div>
    `,i.appendChild(t)});let a=[`Firelink Shrine`,`Anor Londo`,`Kiln of Flame`,`Crystal Cave`,`The Abyss`,`Ash Lake`],o=document.getElementById(`gallery-grid`);a.forEach(e=>{let t=document.createElement(`div`);t.className=`gallery-item`,t.innerHTML=`
      <div class="glow"></div>
      <div class="gallery-icon">◈</div>
      <div class="gallery-label">${e}</div>
    `,o.appendChild(t)});let s=()=>{document.querySelectorAll(`.stat-card`).forEach(e=>{let t=e.getBoundingClientRect(),n=e.querySelector(`.stat-fill`);n&&t.top<window.innerHeight*.85&&t.bottom>0?(n.style.width=n.dataset.target+`%`,e.classList.add(`filled`)):n&&t.top>window.innerHeight&&(n.style.width=`0%`,e.classList.remove(`filled`))})};window.addEventListener(`scroll`,s),setTimeout(s,100),document.querySelectorAll(`.project-card`).forEach(e=>{e.addEventListener(`mousemove`,t=>{let n=e.getBoundingClientRect(),r=(t.clientX-n.left)/n.width-.5,i=(t.clientY-n.top)/n.height-.5;e.style.transform=`perspective(1000px) rotateY(${r*5}deg) rotateX(${-i*5}deg) translateZ(12px)`,e.style.transition=`transform 0.08s ease`}),e.addEventListener(`mouseleave`,()=>{e.style.transform=`perspective(1000px) rotateY(0) rotateX(0) translateZ(0)`,e.style.transition=`transform 0.5s ease`})})}var T=()=>document.getElementById(`loading`)?.classList.add(`hidden`);setTimeout(T,4e3);var E={progress:0,velocity:0,prevY:0};w();var D=document.getElementById(`scene-container`);if(!D)T();else try{let e=S(D);e.scroll=E,C(e),window.addEventListener(`resize`,()=>{let t=window.innerWidth,n=window.innerHeight;e.camera.aspect=t/n,e.camera.updateProjectionMatrix(),e.renderer.setSize(t,n),e.composer.setSize(t,n)}),window.addEventListener(`scroll`,()=>{let t=document.documentElement.scrollHeight-window.innerHeight,n=window.scrollY/t,r=Math.min(Math.max(n,0),1);E.velocity=window.scrollY-E.prevY,E.prevY=window.scrollY,E.progress=r,e.camera.position.y=.5-r*3,e.camera.lookAt(0,e.camera.position.y-.3,0)}),T(),console.log(`✦ The First Flame has been linked.`)}catch(e){console.warn(`3D scene unavailable:`,e.message),T()}