(this.webpackJsonpnet_art=this.webpackJsonpnet_art||[]).push([[0],{14:function(e,c,i){},15:function(e,c,i){"use strict";i.r(c);var t=i(0),a=i(1),s=i.n(a),d=i(7),o=i.n(d),n=(i(14),i(8)),r=i(4),m=(i(2),function(e){var c=e.id,i=e.img,s=e.track,d=e.video,o=e.selected,n=e.setSelected;Object(a.useEffect)((function(){o!==c?document.getElementById(d).pause():document.getElementById(d).play()}),[o,c,s,d]);return Object(t.jsx)("div",{className:"choice_div",children:Object(t.jsxs)("div",{className:"vertical",children:[Object(t.jsx)("img",{alt:"portfolio shot",src:i,className:"".concat(o===c?"choice_img with_border":"choice_img no_border"),onClick:function(){!function(e){console.log("clicked",e);var c=document.getElementById(d);e===o?(c.pause(),n(0)):(c.play(),n(e))}(c)}}),Object(t.jsx)("video",{id:d,width:"320",height:"240",src:d,className:"choice_vid",loop:!0,children:"Your browser does not support the video tag."})]})})}),l=function(e){var c=e.choices,i=e.arr,a=e.restart;return console.log("arr",i,c),Object(t.jsxs)("div",{className:"final-c",children:[Object(t.jsx)("h1",{children:"preference."}),Object(t.jsx)("div",{className:"final_choice",children:i.map((function(e,i){return console.log(e,i),Object(t.jsxs)("div",{children:[Object(t.jsx)("img",{alt:"portfolio shot",src:c[i][e-1].img,className:"final_img"}),Object(t.jsx)("video",{id:c[i][e-1].video,width:"320",height:"240",src:c[i][e-1].video,className:"final_img",loop:!0,autoPlay:!0,children:"Your browser does not support the video tag."}),Object(t.jsx)("audio",{id:c[i][e-1].track,src:c[i][e-1].track,loop:!0,autoPlay:!0})]})}))}),Object(t.jsx)("div",{onClick:function(){return a()},className:"start",children:"play again"})]})},p=function(e){var c=e.next;return Object(t.jsxs)("div",{className:"welcome",children:[Object(t.jsx)("h1",{className:"welcome_header",children:"how to play"}),Object(t.jsx)("p",{className:"welcome_p",children:"You will be presented two photos and two corresponding visual sound waves. Click the side you prefer. There are no right or wrong answers. Once you finish, your decisions will combine to form a suprise."}),Object(t.jsx)("div",{onClick:function(){return c()},className:"start",children:"click to begin"})]})},j=function(e){var c=e.next;return Object(t.jsxs)("div",{className:"welcome",children:[Object(t.jsx)("h1",{className:"welcome_header",children:"preference."}),Object(t.jsx)("p",{className:"welcome_p",children:"you decide."}),Object(t.jsx)("div",{onClick:function(){return c()},className:"start",children:"click to begin"})]})},b=function(e){var c=e.choices,i=Object(a.useState)(0),s=Object(r.a)(i,2),d=s[0],o=s[1],b=Object(a.useState)(-1),u=Object(r.a)(b,2),h=u[0],v=u[1],g=Object(a.useState)(c[h]),f=Object(r.a)(g,2),O=f[0],x=f[1],k=Object(a.useState)([]),N=Object(r.a)(k,2),w=N[0],_=N[1],y=function(){(d>0||h<1)&&(d>0&&_([].concat(Object(n.a)(w),[d])),v(h+1),x(c[h]),o(0))};return Object(t.jsxs)("div",{children:[-1===h&&Object(t.jsx)("div",{children:Object(t.jsx)(j,{next:y})}),0===h&&Object(t.jsx)("div",{children:Object(t.jsx)(p,{next:y})}),h>0&&h<6&&Object(t.jsxs)("div",{className:"choice_header",children:[Object(t.jsx)("h1",{className:"better",children:"Which do you like better?"}),Object(t.jsxs)("div",{className:"choice_container_div",children:[Object(t.jsx)(m,{id:1,img:O[0].img,track:O[0].track,video:O[0].video,selected:d,setSelected:o}),Object(t.jsx)(m,{id:2,img:O[1].img,track:O[1].track,video:O[1].video,selected:d,setSelected:o})]}),Object(t.jsx)("div",{id:"next",onClick:function(){return y()},className:"".concat(d>0||0===h?"start_blue":"start_choice"),children:"Next"})]}),6===h&&Object(t.jsx)("div",{children:Object(t.jsx)(l,{choices:c,arr:w,restart:function(){o(0),v(-1),x(c[h]),_([])}})})]})},u=i.p+"static/media/pic1.442d173c.jpg",h=i.p+"static/media/pic2.71df3a7f.jpg",v=i.p+"static/media/audio1.bb754804.mp3",g=i.p+"static/media/audio2.e4227152.mp3",f=i.p+"static/media/vid1.a191ea61.mp4",O=i.p+"static/media/vid2.3752d586.mp4",x=i.p+"static/media/pic1.96e37448.jpg",k=i.p+"static/media/pic2.fc7be648.jpg",N=i.p+"static/media/audio1.d5219b4b.mp3",w=i.p+"static/media/audio2.c99ab8e6.mp3",_=i.p+"static/media/vid1.aedca997.mp4",y=i.p+"static/media/vid2.e429f588.mp4",C=i.p+"static/media/pic1.3cc90ff5.jpg",S=i.p+"static/media/pic2.65599e53.jpg",B=i.p+"static/media/audio1.7de3c1f2.mp3",E=i.p+"static/media/audio2.6b11b0b3.mp3",I=i.p+"static/media/vid1.e3aa4c09.mp4",F=i.p+"static/media/vid2.08f8fe1c.mp4",P=i.p+"static/media/pic1.6485741c.jpg",T=i.p+"static/media/pic2.12c9df77.jpg",Y=i.p+"static/media/audio1.f8afa5a8.mp3",J=i.p+"static/media/audio2.821c5c1e.mp3",L=i.p+"static/media/vid1.17a8d3fb.mp4",A=i.p+"static/media/vid2.2689ad47.mp4",D=i.p+"static/media/pic1.f290f2f9.jpg",M=i.p+"static/media/pic2.3ff1bd53.jpg",W=i.p+"static/media/audio1.b22743c2.mp3",q=i.p+"static/media/audio2.cee268ed.mp3",z=i.p+"static/media/vid1.bce94974.mp4",G=i.p+"static/media/vid2.464d5963.mp4",H=[{img:u,track:v,video:f},{img:h,track:g,video:O}],K=[{img:x,track:N,video:_},{img:k,track:w,video:y}],Q=[{img:C,track:B,video:I},{img:S,track:E,video:F}],R=[{img:P,track:Y,video:L},{img:T,track:J,video:A}],U=[{img:D,track:W,video:z},{img:M,track:q,video:G}];var V=function(){return console.log(),Object(t.jsx)("div",{className:"App",children:Object(t.jsx)(b,{choices:[H,K,Q,R,U]})})},X=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,16)).then((function(c){var i=c.getCLS,t=c.getFID,a=c.getFCP,s=c.getLCP,d=c.getTTFB;i(e),t(e),a(e),s(e),d(e)}))};o.a.render(Object(t.jsx)(s.a.StrictMode,{children:Object(t.jsx)(V,{})}),document.getElementById("root")),X()},2:function(e,c,i){}},[[15,1,2]]]);
//# sourceMappingURL=main.38b14d28.chunk.js.map