(this.webpackJsonpnet_art=this.webpackJsonpnet_art||[]).push([[0],{14:function(e,c,i){},15:function(e,c,i){},16:function(e,c,i){"use strict";i.r(c);var t=i(0),o=i(1),s=i.n(o),n=i(7),r=i.n(n),a=(i(14),i.p,i(15),i(2),function(e){var c=e.id,i=e.img,s=e.track,n=e.video,r=e.selected,a=e.setSelected;Object(o.useEffect)((function(){r!==c?document.getElementById(n).pause():document.getElementById(n).play()}),[r,c,s,n]);return Object(t.jsx)("div",{className:"choice_div",children:Object(t.jsxs)("div",{children:[Object(t.jsx)("img",{alt:"portfolio shot",src:i,className:"".concat(r===c?"choice_img with_border":"choice_img no_border"),onClick:function(){!function(e){console.log("clicked",e);var c=document.getElementById(n);e===r?(c.pause(),a(0)):(c.play(),a(e))}(c)}}),Object(t.jsx)("video",{id:n,width:"320",height:"240",src:n,className:"choice_vid",loop:!0,children:"Your browser does not support the video tag."})]})})}),d=i(8),l=i(4),j=function(e){var c=e.choices,i=e.arr,o=e.restart;return console.log("arr",i,c),Object(t.jsxs)("div",{className:"final-c",children:[Object(t.jsx)("h1",{children:"preference."}),Object(t.jsx)("div",{className:"final_choice",children:i.map((function(e,i){return console.log(e,i),Object(t.jsxs)("div",{children:[Object(t.jsx)("img",{alt:"portfolio shot",src:c[i][e-1].img,className:"final_img"}),Object(t.jsx)("video",{id:c[i][e-1].video,width:"320",height:"240",src:c[i][e-1].video,className:"final_img",loop:!0,autoPlay:!0,children:"Your browser does not support the video tag."}),Object(t.jsx)("audio",{id:c[i][e-1].track,src:c[i][e-1].track,loop:!0,autoPlay:!0})]})}))}),Object(t.jsx)("div",{onClick:function(){return o()},className:"start",children:"play again"})]})},m=function(e){var c=e.next;return Object(t.jsxs)("div",{className:"welcome",children:[Object(t.jsx)("h1",{className:"welcome_header",children:"how to play"}),Object(t.jsx)("p",{className:"welcome_p",children:"You will be presented two photos and two corresponding visual sound waves. Click the side you prefer. There are no right or wrong answers. Once you finish, your decisions will combine to form a suprise."}),Object(t.jsx)("div",{onClick:function(){return c()},className:"start",children:"click to begin"})]})},p=function(e){var c=e.next;return Object(t.jsxs)("div",{className:"welcome",children:[Object(t.jsx)("h1",{className:"welcome_header",children:"preference."}),Object(t.jsx)("p",{className:"welcome_p",children:"you decide."}),Object(t.jsx)("div",{onClick:function(){return c()},className:"start",children:"click to begin"})]})},u=function(e){var c=e.choices,i=Object(o.useState)(0),s=Object(l.a)(i,2),n=s[0],r=s[1],u=Object(o.useState)(-1),h=Object(l.a)(u,2),v=h[0],b=h[1],g=Object(o.useState)(c[v]),O=Object(l.a)(g,2),x=O[0],f=O[1],k=Object(o.useState)([]),N=Object(l.a)(k,2),w=N[0],_=N[1],y=function(){(n>0||v<1)&&(n>0&&_([].concat(Object(d.a)(w),[n])),b(v+1),f(c[v]),r(0))};return Object(t.jsxs)("div",{children:[-1===v&&Object(t.jsx)("div",{children:Object(t.jsx)(p,{next:y})}),0===v&&Object(t.jsx)("div",{children:Object(t.jsx)(m,{next:y})}),v>0&&v<6&&Object(t.jsxs)("div",{className:"choice_header",children:[Object(t.jsx)("h1",{className:"better",children:"Which do you like better?"}),Object(t.jsxs)("div",{className:"choice_container_div",children:[Object(t.jsx)(a,{id:1,img:x[0].img,track:x[0].track,video:x[0].video,selected:n,setSelected:r}),Object(t.jsx)(a,{id:2,img:x[1].img,track:x[1].track,video:x[1].video,selected:n,setSelected:r})]}),Object(t.jsx)("div",{id:"next",onClick:function(){return y()},className:"".concat(n>0||0===v?"start_blue":"start_choice"),children:"Next"})]}),6===v&&Object(t.jsx)("div",{children:Object(t.jsx)(j,{choices:c,arr:w,restart:function(){r(0),b(-1),f(c[v]),_([])}})})]})},h=[{img:"/2/pic1.jpg",track:"/2/audio1.mp3",video:"/2/vid1.mp4"},{img:"/2/pic2.jpg",track:"/2/audio2.mp3",video:"/2/vid2.mp4"}],v=[{img:"/3/pic1.jpg",track:"/3/audio1.mp3",video:"/3/vid1.mp4"},{img:"/3/pic2.jpg",track:"/3/audio2.mp3",video:"/3/vid2.mp4"}],b=[{img:"/4/pic1.jpg",track:"/4/audio1.mp3",video:"/4/vid1.mp4"},{img:"/4/pic2.jpg",track:"/4/audio2.mp3",video:"/4/vid2.mp4"}],g=[{img:"/5/pic1.jpg",track:"/5/audio1.mp3",video:"/5/vid1.mp4"},{img:"/5/pic2.jpg",track:"/5/audio2.mp3",video:"/5/vid2.mp4"}],O=[{img:"/6/pic1.jpg",track:"/6/audio1.mp3",video:"/6/vid1.mp4"},{img:"/6/pic2.jpg",track:"/6/audio2.mp3",video:"/6/vid2.mp4"}];var x=function(){return Object(t.jsx)("div",{className:"App",children:Object(t.jsx)(u,{choices:[h,v,b,g,O]})})},f=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,17)).then((function(c){var i=c.getCLS,t=c.getFID,o=c.getFCP,s=c.getLCP,n=c.getTTFB;i(e),t(e),o(e),s(e),n(e)}))};r.a.render(Object(t.jsx)(s.a.StrictMode,{children:Object(t.jsx)(x,{})}),document.getElementById("root")),f()},2:function(e,c,i){}},[[16,1,2]]]);
//# sourceMappingURL=main.09227558.chunk.js.map