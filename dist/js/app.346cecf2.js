(function(){"use strict";var e={5201:function(e,n,t){var l=t(9242),a=t(3396);const o={class:"content"};function s(e,n,t,l,s,i){const r=(0,a.up)("Navbar"),u=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(r),(0,a._)("div",o,[(0,a.Wm)(u)])],64)}var i=t(7139),r=t.p+"img/logo.3424ba7f.png";const u=e=>((0,a.dD)("data-v-f53036c8"),e=e(),(0,a.Cn)(),e),d={class:"navbar"},c=u((()=>(0,a._)("img",{src:r},null,-1))),p={class:"links"},g={style:{margin:"0 15px"}};function v(e,n,t,l,o,s){const r=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",d,[(0,a._)("nav",null,[c,(0,a._)("h1",null,[(0,a.Wm)(r,{to:{name:"Home"}},{default:(0,a.w5)((()=>[(0,a.Uk)("Spotifyyy")])),_:1})]),(0,a._)("div",p,[(0,a.Wm)(r,{to:{name:"CreatePlaylist"}},{default:(0,a.w5)((()=>[(0,a.Uk)("Create Playlist ")])),_:1}),l.user?((0,a.wg)(),(0,a.j4)(r,{key:0,to:{name:"userplaylist"}},{default:(0,a.w5)((()=>[(0,a.Uk)("My Playlists")])),_:1})):(0,a.kq)("",!0),(0,a._)("span",g,"Hi there "+(0,i.zw)(l.user.displayName),1),l.user?((0,a.wg)(),(0,a.iD)("button",{key:1,onClick:n[0]||(n[0]=(...e)=>l.handleSignout&&l.handleSignout(...e))},"Log out")):(0,a.kq)("",!0),l.user?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(r,{key:2,class:"btn",to:{name:"Signup"}},{default:(0,a.w5)((()=>[(0,a.Uk)("Sign Up")])),_:1})),l.user?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(r,{key:3,class:"btn",to:{name:"Login"}},{default:(0,a.w5)((()=>[(0,a.Uk)("Log in ")])),_:1}))])])])}t(560);var m=t(4870),y=t(1509);t(476),t(9786),t(6071);const w={apiKey:"AIzaSyD1cFdJJ-uZDlfYltS1hqOQQiBKcXTWsH0",authDomain:"spotifyyy-1285e.firebaseapp.com",projectId:"spotifyyy-1285e",storageBucket:"spotifyyy-1285e.appspot.com",messagingSenderId:"591697720842",appId:"1:591697720842:web:3feba9f70216a608a911f3",measurementId:"G-9Q1HR731DW"};y.Z.initializeApp(w);const h=y.Z.firestore(),f=y.Z.firestore.FieldValue.serverTimestamp,b=y.Z.auth(),_=y.Z.storage(),k=(0,m.iH)(null),D=(0,m.iH)(!1),S=async()=>{k.value=null,D.value=!0;try{await b.signOut(),D.value=!1}catch(e){console.log(e.message),k.value=e.message,D.value=!1}},H=()=>({error:k,logout:S,isPending:D});var P=H;const C=(0,m.iH)(b.currentUser);b.onAuthStateChanged((e=>{console.log("User state change. Current user is:",e),C.value=e}));const U=()=>({user:C});var q=U,j=t(2483),A={setup(){const e=(0,m.iH)(!1),n=(0,j.tv)(),{error:t,logout:l,isPending:a}=P(),o=async()=>{await l(),e.value=!0,n.push({name:"Login"})},{user:s}=q();return s.value?e.value=!0:e.value=!1,{error:t,isPending:a,handleSignout:o,showButtons:e,user:s}}},z=t(89);const I=(0,z.Z)(A,[["render",v],["__scopeId","data-v-f53036c8"]]);var O=I,Z={components:{Navbar:O}};const L=(0,z.Z)(Z,[["render",s]]);var N=L;function V(e,n,t,l,o,s){const i=(0,a.up)("ListView");return(0,a.wg)(),(0,a.j4)(i)}const x={class:"single"},B={class:"thumbnail"},M=["src"],E={class:"info"},W={class:"song-number"};function T(e,n,t,l,o,s){const r=(0,a.up)("router-link");return(0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.playlists,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.id},[(0,a.Wm)(r,{to:{name:"PlaylistDetails",params:{id:e.id}}},{default:(0,a.w5)((()=>[(0,a._)("div",x,[(0,a._)("div",B,[(0,a._)("img",{src:e.coverUrl},null,8,M)]),(0,a._)("div",E,[(0,a._)("h3",null,(0,i.zw)(e.title),1),(0,a._)("p",null,"Created by "+(0,i.zw)(e.userName),1)]),(0,a._)("div",W,(0,i.zw)(e.songs.length),1)])])),_:2},1032,["to"])])))),128)}const F=(e,n)=>{const t=(0,m.iH)(null),l=(0,m.iH)(null);let o=h.collection(e).orderBy("createdAt");n&&(o=o.where(...n));const s=o.onSnapshot((e=>{let n=[];e.docs.forEach((e=>{e.data().createdAt&&n.push({...e.data(),id:e.id})})),t.value=n,l.value=null}),(e=>{console.log(e.message),t.value=null,l.value="could not fetch the data"}));return(0,a.m0)((e=>{e((()=>s()))})),{error:l,documents:t}};var Y=F,K={props:["playlists"],setup(){const{error:e,documents:n}=Y("playlists");return{playlists:n}}};const Q=(0,z.Z)(K,[["render",T],["__scopeId","data-v-7fcd0ce9"]]);var J=Q,R={components:{ListView:J},setup(){const{error:e,playlists:n}=Y("playlists");return{playlists:n}}};const $=(0,z.Z)(R,[["render",V]]);var G=$;const X={key:0,class:"error"},ee={key:1},ne={key:2,disabled:""};function te(e,n,t,o,s,r){return(0,a.wg)(),(0,a.iD)("form",{onSubmit:n[2]||(n[2]=(0,l.iM)(((...e)=>o.handleSubmit&&o.handleSubmit(...e)),["prevent"]))},[(0,a.wy)((0,a._)("input",{type:"email","onUpdate:modelValue":n[0]||(n[0]=e=>o.email=e),placeholder:"email"},null,512),[[l.nr,o.email]]),(0,a.wy)((0,a._)("input",{type:"password","onUpdate:modelValue":n[1]||(n[1]=e=>o.password=e),placeholder:"password"},null,512),[[l.nr,o.password]]),o.error?((0,a.wg)(),(0,a.iD)("div",X,(0,i.zw)(o.error),1)):(0,a.kq)("",!0),o.isPending?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("button",ee,"Log in")),o.isPending?((0,a.wg)(),(0,a.iD)("button",ne,"Loading")):(0,a.kq)("",!0)],32)}const le=(0,m.iH)(null),ae=(0,m.iH)(!1),oe=async(e,n)=>{le.value=null,ae.value=!0;try{const t=await b.signInWithEmailAndPassword(e,n);return le.value=null,ae.value=!1,t}catch(t){console.log(t.message),le.value="Incorrect login credentials",ae.value=!1}},se=()=>({error:le,login:oe,isPending:ae});var ie=se,re={setup(){const e=(0,j.tv)(),n=(0,m.iH)(""),t=(0,m.iH)(""),{error:l,login:a,isPending:o}=ie(),s=async()=>{await a(n.value,t.value);l.value||console.log("user logged in"),e.push({name:"userplaylist"})};return{email:n,password:t,handleSubmit:s,error:l,isPending:o}}};const ue=(0,z.Z)(re,[["render",te]]);var de=ue;const ce={key:0,class:"error"},pe={key:1},ge={key:2,disabled:""};function ve(e,n,t,o,s,r){return(0,a.wg)(),(0,a.iD)("form",{onSubmit:n[3]||(n[3]=(0,l.iM)(((...e)=>o.handleSubmit&&o.handleSubmit(...e)),["prevent"]))},[(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=e=>o.displayName=e),placeholder:"display name"},null,512),[[l.nr,o.displayName]]),(0,a.wy)((0,a._)("input",{type:"email","onUpdate:modelValue":n[1]||(n[1]=e=>o.email=e),placeholder:"email"},null,512),[[l.nr,o.email]]),(0,a.wy)((0,a._)("input",{type:"password","onUpdate:modelValue":n[2]||(n[2]=e=>o.password=e),placeholder:"password"},null,512),[[l.nr,o.password]]),o.error?((0,a.wg)(),(0,a.iD)("div",ce,(0,i.zw)(o.error),1)):(0,a.kq)("",!0),o.isPending?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("button",pe,"Sign up")),o.isPending?((0,a.wg)(),(0,a.iD)("button",ge,"Loading")):(0,a.kq)("",!0)],32)}const me=(0,m.iH)(null),ye=(0,m.iH)(!1),we=async(e,n,t)=>{me.value=null,ye.value=!0;try{const l=await b.createUserWithEmailAndPassword(e,n);if(!l)throw new Error("Could not complete signup");return await l.user.updateProfile({displayName:t}),me.value=null,ye.value=!1,l}catch(l){console.log(l.message),me.value=l.message,ye.value=!1}},he=()=>({error:me,signup:we,isPending:ye});var fe=he,be={setup(){const e=(0,j.tv)(),n=(0,m.iH)(""),t=(0,m.iH)(""),l=(0,m.iH)(""),{error:a,signup:o,isPending:s}=fe(),i=async()=>{await o(n.value,t.value,l.value);a.value||console.log("user signed up"),e.push({name:"userplaylist"})};return{email:n,password:t,handleSubmit:i,error:a,isPending:s,displayName:l}}};const _e=(0,z.Z)(be,[["render",ve]]);var ke=_e;const De=(0,a._)("h4",null,"Create New Playlist",-1),Se=(0,a._)("label",null,"Choose Playlist Cover",-1),He={key:0,class:"error"},Pe=(0,a._)("button",null,"Create",-1);function Ce(e,n,t,o,s,r){return(0,a.wg)(),(0,a.iD)("form",{onSubmit:n[3]||(n[3]=(0,l.iM)(((...e)=>o.handleSubmit&&o.handleSubmit(...e)),["prevent"]))},[De,(0,a.wy)((0,a._)("input",{type:"text",required:"","onUpdate:modelValue":n[0]||(n[0]=e=>o.title=e),placeholder:"playlist title"},null,512),[[l.nr,o.title]]),(0,a.wy)((0,a._)("textarea",{required:"","onUpdate:modelValue":n[1]||(n[1]=e=>o.description=e),placeholder:"playlist description..."},null,512),[[l.nr,o.description]]),Se,(0,a._)("input",{type:"file",onChange:n[2]||(n[2]=(...e)=>o.handleChange&&o.handleChange(...e))},null,32),o.error?((0,a.wg)(),(0,a.iD)("div",He,(0,i.zw)(o.error),1)):(0,a.kq)("",!0),Pe],32)}const{user:Ue}=q(),qe=()=>{const e=(0,m.iH)(null),n=(0,m.iH)(null),t=(0,m.iH)(null),l=async l=>{t.value=`covers/${Ue.value.uid}/${l.name}`;const a=_.ref(t.value);try{const e=await a.put(l);n.value=await e.ref.getDownloadURL().then((e=>e))}catch(o){console.log(o.message),e.value=o.message}};return{url:n,filePath:t,error:e,uploadImage:l}};var je=qe;const Ae=e=>{const n=(0,m.iH)(null),t=(0,m.iH)(!1),l=async l=>{n.value=null,t.value=!0;try{const n=await h.collection(e).add(l);return t.value=!1,n}catch(a){console.log(a.message),n.value="could not send the message",t.value=!1}};return{error:n,addDoc:l,isPending:t}};var ze=Ae,Ie={setup(){const{url:e,filePath:n,err:t,uploadImage:l}=je(),{er:a,addDoc:o}=ze("playlists"),{user:s}=q(),i=(0,j.tv)(),r=(0,m.iH)(null),u=(0,m.iH)(null),d=(0,m.iH)(""),c=(0,m.iH)(""),p=async()=>{if(r.value){await l(r.value);const t=await o({title:d.value,description:c.value,userId:s.value.uid,userName:s.value.displayName,filePath:n.value,songs:[],createdAt:f(),coverUrl:e.value});u.value||i.push({name:"PlaylistDetails",params:{id:t.id}})}},g=e=>{const n=["image/png","image/jpeg","image/jpg"],t=e.target.files[0];t&&n.includes(t.type)?(r.value=t,u.value=null):(r.value=null,u.value="File Type Should be (png/jpeg/jpg)")};return{title:d,description:c,handleSubmit:p,handleChange:g,error:u}}};const Oe=(0,z.Z)(Ie,[["render",Ce]]);var Ze=Oe;const Le={key:0,style:{"text-align":"center"}},Ne={key:1,class:"loading"},Ve={key:2,class:"playlist-details"},xe={class:"playlistinfo"},Be={class:"cover"},Me=["src"],Ee={class:"username"},We={class:"description"},Te={class:"song-list"},Fe={key:0},Ye={class:"details"},Ke=["onClick"];function Qe(e,n,t,l,o,s){const r=(0,a.up)("addSong");return(0,a.wg)(),(0,a.iD)(a.HY,null,[l.element?((0,a.wg)(),(0,a.iD)("h4",Le,"Song List Here")):(0,a.kq)("",!0),l.element?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",Ne,"Loading...")),l.element?((0,a.wg)(),(0,a.iD)("div",Ve,[(0,a._)("div",xe,[(0,a._)("div",Be,[(0,a._)("img",{src:l.element.coverUrl},null,8,Me)]),(0,a._)("h2",null,(0,i.zw)(l.element.title),1),(0,a._)("p",Ee,"Created By "+(0,i.zw)(l.element.userName),1),(0,a._)("p",We,(0,i.zw)(l.element.description),1),l.checkUser?((0,a.wg)(),(0,a.iD)("button",{key:0,onClick:n[0]||(n[0]=(...e)=>l.handleDelete&&l.handleDelete(...e))},"Delete Playlist")):(0,a.kq)("",!0)]),(0,a._)("div",Te,[(0,a._)("div",null,[l.checkUser?((0,a.wg)(),(0,a.j4)(r,{key:0,element:l.element},null,8,["element"])):(0,a.kq)("",!0)]),l.element.songs.length?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",Fe,"No Songs To Show.")),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.element.songs,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.id,class:"single-song"},[(0,a._)("div",Ye,[(0,a._)("h3",null,(0,i.zw)(e.title),1),(0,a._)("p",null,(0,i.zw)(e.artist),1),(0,a._)("button",{onClick:n=>l.deleteSong(e.id)},"Delete",8,Ke)])])))),128))])])):(0,a.kq)("",!0)],64)}const Je=e=>((0,a.dD)("data-v-ced132dc"),e=e(),(0,a.Cn)(),e),Re={class:"contain"},$e={class:"botton"},Ge={key:0,class:"addSong"},Xe=Je((()=>(0,a._)("h4",null,"Add Song",-1)));function en(e,n,t,o,s,i){return(0,a.wg)(),(0,a.iD)("div",Re,[(0,a._)("div",$e,[!1===o.showAddButton?((0,a.wg)(),(0,a.iD)("button",{key:0,onClick:n[0]||(n[0]=(...e)=>o.showAddButtonF&&o.showAddButtonF(...e))},"Add Songs")):(0,a.kq)("",!0)]),!0===o.showAddButton?((0,a.wg)(),(0,a.iD)("div",Ge,[(0,a._)("form",{onSubmit:n[4]||(n[4]=(0,l.iM)(((...e)=>o.handleSubmit&&o.handleSubmit(...e)),["prevent"]))},[Xe,(0,a.wy)((0,a._)("input",{type:"text",required:"",placeholder:"Song title","onUpdate:modelValue":n[1]||(n[1]=e=>o.title=e)},null,512),[[l.nr,o.title]]),(0,a.wy)((0,a._)("input",{type:"text",required:"",placeholder:"Artist","onUpdate:modelValue":n[2]||(n[2]=e=>o.artist=e)},null,512),[[l.nr,o.artist]]),(0,a._)("button",{onClick:n[3]||(n[3]=(...e)=>o.handleSubmit&&o.handleSubmit(...e))},"Add")],32)])):(0,a.kq)("",!0)])}const nn=(e,n)=>{const t=(0,m.iH)(!1),l=(0,m.iH)(null);let a=h.collection(e).doc(n);const o=async()=>{t.value=!0,l.value=null;try{const e=await a.delete();return t.value=!1,e}catch(e){console.log(e.message),t.value=!1,l.value="could not delete"}},s=async e=>{t.value=!0;try{const n=await a.update(e);return t.value=!1,n}catch(n){console.log(n.message),t.value=!1,l.value="could not update"}};return{error:l,isPending:t,deleteDoc:o,updateDoc:s}};var tn=nn,ln={props:["element"],setup(e){const n=(0,m.iH)(""),t=(0,m.iH)(""),l=(0,m.iH)(!1),{updateDoc:a}=tn("playlists",e.element.id),o=()=>{l.value=!0},s=async()=>{const l={title:n.value,artist:t.value,id:Math.floor(1e6*Math.random())};await a({songs:[...e.element.songs,l]}),n.value="",t.value="",window.location.reload()};return{title:n,artist:t,showAddButton:l,showAddButtonF:o,handleSubmit:s}}};const an=(0,z.Z)(ln,[["render",en],["__scopeId","data-v-ced132dc"]]);var on=an,sn={props:["id"],components:{addSong:on},setup(e){const n=(0,j.tv)(),{error:t,documents:l}=Y("playlists"),a=(0,j.yj)(),o=(0,m.iH)(null),{user:s}=q(),i=(0,m.iH)(!1),{err:r,isPending:u,deleteDoc:d,updateDoc:c}=tn("playlists",e.id),p=async()=>{await l.value,setTimeout((()=>{l.value.forEach((e=>{e.id===a.params.id&&(o.value=e,o.value.userId===s.value.uid&&(i.value=!0))}))}),1500)};p();const g=async()=>{await d(),n.push("/")},v=async e=>{const n=o.value.songs.filter((n=>n.id!=e));await c({songs:n}),window.location.reload()};return{docVal:p,element:o,checkUser:i,handleDelete:g,deleteSong:v}}};const rn=(0,z.Z)(sn,[["render",Qe]]);var un=rn;const dn=e=>((0,a.dD)("data-v-629b900e"),e=e(),(0,a.Cn)(),e),cn={class:"user-playlist"},pn=dn((()=>(0,a._)("h2",null,"My playlists",-1))),gn={class:"single"},vn={class:"thumbnail"},mn=["src"],yn={class:"info"},wn={class:"song-number"};function hn(e,n,t,l,o,s){const r=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",cn,[pn,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.playlists,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.id},[(0,a.Wm)(r,{to:{name:"PlaylistDetails",params:{id:e.id}}},{default:(0,a.w5)((()=>[(0,a._)("div",gn,[(0,a._)("div",vn,[(0,a._)("img",{src:e.coverUrl},null,8,mn)]),(0,a._)("div",yn,[(0,a._)("h3",null,(0,i.zw)(e.title),1),(0,a._)("p",null,"Created by "+(0,i.zw)(e.userName),1)]),(0,a._)("div",wn,(0,i.zw)(e.songs.length),1)])])),_:2},1032,["to"])])))),128))])}var fn={setup(){const{user:e}=q(),{documents:n}=Y("playlists",["userId","==",e.value.uid]);return{playlists:n}}};const bn=(0,z.Z)(fn,[["render",hn],["__scopeId","data-v-629b900e"]]);var _n=bn;const kn=(e,n,t)=>{let l=b.currentUser;l?t():t({name:"Login"})},Dn=[{path:"/",name:"Home",component:G,beforeEnter:kn},{path:"/login",name:"Login",component:de},{path:"/signup",name:"Signup",component:ke},{path:"/playlists/create",name:"CreatePlaylist",component:Ze,beforeEnter:kn},{path:"/playlists/:id",name:"PlaylistDetails",component:un,beforeEnter:kn,props:!0},{path:"/playlists/user",name:"userplaylist",component:_n,beforeEnter:kn,props:!0}],Sn=(0,j.p7)({history:(0,j.PO)("/"),routes:Dn});var Hn=Sn;let Pn;b.onAuthStateChanged((()=>{Pn||(Pn=(0,l.ri)(N).use(Hn).mount("#app"))}))}},n={};function t(l){var a=n[l];if(void 0!==a)return a.exports;var o=n[l]={exports:{}};return e[l].call(o.exports,o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(n,l,a,o){if(!l){var s=1/0;for(d=0;d<e.length;d++){l=e[d][0],a=e[d][1],o=e[d][2];for(var i=!0,r=0;r<l.length;r++)(!1&o||s>=o)&&Object.keys(t.O).every((function(e){return t.O[e](l[r])}))?l.splice(r--,1):(i=!1,o<s&&(s=o));if(i){e.splice(d--,1);var u=a();void 0!==u&&(n=u)}}return n}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[l,a,o]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var l in n)t.o(n,l)&&!t.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:n[l]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,l){var a,o,s=l[0],i=l[1],r=l[2],u=0;if(s.some((function(n){return 0!==e[n]}))){for(a in i)t.o(i,a)&&(t.m[a]=i[a]);if(r)var d=r(t)}for(n&&n(l);u<s.length;u++)o=s[u],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(d)},l=self["webpackChunkspotifyyy"]=self["webpackChunkspotifyyy"]||[];l.forEach(n.bind(null,0)),l.push=n.bind(null,l.push.bind(l))}();var l=t.O(void 0,[998],(function(){return t(5201)}));l=t.O(l)})();
//# sourceMappingURL=app.346cecf2.js.map