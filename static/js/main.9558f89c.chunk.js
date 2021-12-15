(this["webpackJsonppercussion-app"]=this["webpackJsonppercussion-app"]||[]).push([[0],{11:function(e,t,s){},13:function(e,t,s){"use strict";s.r(t);var n=s(1),i=s.n(n),a=s(5),c=s.n(a),b=(s(11),s(2),s(0));var d=function(){return Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)("h1",{className:"title",children:"Percussion Kit"}),Object(b.jsxs)("h3",{className:"info",children:["Simple React application. ",Object(b.jsx)("br",{})," ",Object(b.jsx)("br",{}),Object(b.jsx)("span",{className:"extra",children:"Any sound delay only occurs on first try and should clear after."}),Object(b.jsx)("br",{}),Object(b.jsx)("span",{className:"desktop-info",children:"Use keys or click for sound!"}),Object(b.jsx)("span",{className:"mobile-info",children:"Tap for sound!"})]})]})},m=s(6);var r=function(){return Object(b.jsx)("div",{className:"foot-container",children:Object(b.jsxs)("p",{className:"footer",children:["Created by Andy McInnes in 2021 ",Object(b.jsx)(m.a,{})," ",Object(b.jsx)("br",{}),"View ",Object(b.jsx)("a",{href:"https://andymc7993.github.io/",children:"my portfolio"})]})})},j=s(3);var f=function(e){var t=Object(n.useState)(!1),s=Object(j.a)(t,2),i=s[0],a=s[1],c=function(){a(!0),new Audio(e.sound).play(),setTimeout((function(){a(!1)}),150)};return Object(n.useEffect)((function(){document.addEventListener("keydown",(function(t){t.key.toLowerCase()===e.letter.toLowerCase()&&c()}))}),[]),Object(b.jsxs)("div",{className:"instrument-box",children:[Object(b.jsx)("div",{className:"instrument ".concat(i?"playing":""),onClick:c,children:Object(b.jsx)("img",{className:"instrument-img",src:e.img,alt:"Instrument-img"})}),Object(b.jsx)("div",{className:"key-container",children:Object(b.jsx)("div",{className:"key",children:e.letter})})]})},h=s.p+"static/media/drum.8752f1e9.png",y=s.p+"static/media/cymbal.61b8e4cf.png",o=s.p+"static/media/gong.e7fe45dc.png",k=s.p+"static/media/thai-gong.ee458d2e.png",Z=s.p+"static/media/triangle.17770e6c.png",g=s.p+"static/media/bass-drum.58a0ed2f.mp3",u=s.p+"static/media/cowbell.5ea95e0a.mp3",A=s.p+"static/media/cymbal1.e221c3b6.mp3",v=s.p+"static/media/cymbal2.498aadcf.mp3",x=s.p+"static/media/gong.608700e3.mp3",P=s.p+"static/media/hi-hat.482e5231.wav",l=s.p+"static/media/snare.c03162a3.mp3",z=s.p+"static/media/thai-gong.4678fae3.mp3",p=s.p+"static/media/tom1.562edc31.mp3",L=s.p+"static/media/tom3.9fb15606.mp3",N=s.p+"static/media/tom2.b89ed9f5.mp3",R=[{id:1,name:"thai-gong",img:k,sound:z,key:"1"},{id:2,name:"Gong",img:o,sound:x,key:"2"},{id:3,name:"Triangle",img:Z,sound:s.p+"static/media/triangle.eea46e25.mp3",key:"3"},{id:4,name:"Cow-bell",img:"data:image/png;base64,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",sound:u,key:"4"},{id:5,name:"Hi-hat",img:y,sound:P,key:"Q"},{id:6,name:"Crash-cymbal",img:y,sound:v,key:"W"},{id:7,name:"Tom-1",img:h,sound:p,key:"E"},{id:8,name:"Tom-2",img:h,sound:L,key:"R"},{id:9,name:"Ride-cymbal",img:y,sound:A,key:"T"},{id:10,name:"Floor-tom",img:h,sound:N,key:"Y"},{id:11,name:"Snare-drum",img:h,sound:l,key:"A"},{id:12,name:"Bass-drum",img:h,sound:g,key:"S"}];function T(){var e=Object(n.useState)(R),t=Object(j.a)(e,2),s=t[0];t[1];return Object(b.jsx)("div",{className:"instrument-section",children:Object(b.jsx)("div",{className:"instrument-container",children:s.map((function(e,t){return Object(b.jsx)(f,{className:"instrument",img:e.img,letter:e.key,sound:e.sound},t)}))})})}var C=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(d,{}),Object(b.jsx)(T,{className:"percussion-section"}),Object(b.jsx)(r,{})]})},E=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,14)).then((function(t){var s=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;s(e),n(e),i(e),a(e),c(e)}))};c.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(C,{})}),document.getElementById("root")),E()},2:function(e,t,s){}},[[13,1,2]]]);
//# sourceMappingURL=main.9558f89c.chunk.js.map