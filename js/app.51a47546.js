(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,t,n){e.exports=n("2f39")},"034f":function(e,t,n){"use strict";var r=n("fb1c"),a=n.n(r);a.a},"1e5d":function(e,t,n){},"2f39":function(e,t,n){"use strict";n.r(t);n("ac6a"),n("a114"),n("d14b"),n("1e5d"),n("7e6d");var r=n("2b0e"),a=n("e84f"),o=n("7051"),u=n("2040"),i=n("cf12"),s=n("46a9"),c=n("32a1"),p=n("7646"),f=n("6580"),d=n("3a08"),l=n("dc23"),h=n("3054"),m=n("6ddb"),b=n("79e9"),Q=n("5d8b"),g=n("f30c"),v=n("ce67"),w=n("b70a"),y=n("7668"),A=n("482e"),q=n("9e58"),S=n("52b5"),I=n("1180"),R=n("1e55"),C=n("506f"),$=n("9541"),L=n("2f48"),x=n("93f5"),U=n("b8d9"),T=n("7d43"),k=n("0952"),D=n("e9e5"),E=n("1526"),M=n("133b"),_=n("a9a0"),B=n("6780");r["a"].use(a["a"],{config:{},components:{QLayout:o["a"],QLayoutHeader:u["a"],QLayoutDrawer:i["a"],QPageContainer:s["a"],QPage:c["a"],QCard:p["a"],QCardTitle:f["a"],QCardMain:d["a"],QCardMedia:l["a"],QCardSeparator:h["a"],QCardActions:m["a"],QField:b["a"],QInput:Q["a"],QToolbar:g["a"],QToolbarTitle:v["a"],QSpinner:w["a"],QSpinnerMat:y["a"],QBtn:A["a"],QBtnDropdown:q["a"],QIcon:S["a"],QList:I["a"],QListHeader:R["a"],QItem:C["a"],QItemTile:$["a"],QUploader:L["a"],QScrollArea:x["a"],QItemMain:U["a"],QItemSide:T["a"],QModal:k["a"],QPagination:D["a"]},directives:{Ripple:E["a"]},plugins:{Notify:M["a"],Loading:_["a"],Dialog:B["a"]}});var K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},P=[];K._withStripped=!0;var j={name:"App"},F=j,O=(n("034f"),n("2877")),z=Object(O["a"])(F,K,P,!1,null,null,null);z.options.__file="App.vue";var H=z.exports,J=n("2f62"),V=(n("96cf"),n("c973")),X=n.n(V),Y=n("59ca"),N=n.n(Y),W=(n("ea7b"),n("66ce"),n("588e"),n("5f30")),G=n.n(W),Z=n("1dce"),ee=n.n(Z),te={apiKey:"AIzaSyCRqi1FoKA4tXFyEKa7SdywYnsjLY8gKXI",authDomain:"stifire-c6c2f.firebaseapp.com",databaseURL:"https://stifire-c6c2f.firebaseio.com",projectID:"stifire-c6c2f",storageBucket:"stifire-c6c2f.appspot.com",messagingSenderId:"466857491363"};N.a.initializeApp(te);var ne=N.a.auth(),re=N.a.database(),ae=N.a.storage(),oe=re.ref("homeTestimonial"),ue=re.ref("products"),ie=re.ref("inquiries"),se=re.ref("homeLayout"),ce=re.ref("contacts"),pe=re.ref("newsSettings"),fe=re.ref("productSettings"),de=function(e){e.app;var t=e.router,n=e.Vue,r=e.store;n.use(G.a),n.use(ee.a),n.prototype.$newsRef=oe,n.prototype.$storage=ae,n.prototype.$productRef=ue,n.prototype.$inquireRef=ie,n.prototype.$layoutRef=se,n.prototype.$contactRef=ce,n.prototype.$newsSettings=pe,n.prototype.$productSettings=fe,t.beforeEach(function(e,t,n){var a=e.matched.some(function(e){return e.meta.requiresAuth});ne.onAuthStateChanged(function(e){a?e?(r.state.user=e,n()):(r.state.user=null,n("/")):e?(r.state.user=e,n("/header")):(r.state.user=null,n())})})},le={namespaced:!0,state:{user:{}},getters:{user:function(e){return e.user}},mutations:{setUser:function(e,t){e.user=t},resetUser:function(e){e.user=null}},actions:{signIn:function(){var e=X()(regeneratorRuntime.mark(function e(t,n){var r,a,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,a=n.email,o=n.password,e.next=5,ne.signInWithEmailAndPassword(a,o).then(function(e){r("setUser",e.user)}).catch(function(e){throw r("resetUser"),e});case 5:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),signOut:function(){var e=X()(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,ne.signOut().then(function(){n("resetUser")});case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}};r["a"].use(J["a"]);var he=function(){var e=new J["a"].Store({modules:{auth:le}});return e},me=n("8c4f"),be=[{path:"/",component:function(){return n.e("32a5c660").then(n.bind(null,"f241"))},children:[{path:"",component:function(){return n.e("00e299b0").then(n.bind(null,"c6f7"))},meta:{requiresAuth:!1}}]},{path:"",component:function(){return n.e("32a5c660").then(n.bind(null,"f241"))},children:[{path:"/header",component:function(){return n.e("c4b56d8a").then(n.bind(null,"f15b"))},meta:{requiresAuth:!0}},{path:"/news",component:function(){return n.e("5ea9f918").then(n.bind(null,"6078"))},meta:{requiresAuth:!0}},{path:"/products",component:function(){return n.e("75317ed1").then(n.bind(null,"dc08"))},meta:{requiresAuth:!0}},{path:"/inquiries",component:function(){return n.e("46b3288f").then(n.bind(null,"4dc8"))},meta:{requiresAuth:!0}},{path:"/settings",component:function(){return n.e("7f811114").then(n.bind(null,"c52c"))},meta:{requiresAuth:!0}},{path:"/inquiries/:id",component:function(){return n.e("609e08a0").then(n.bind(null,"54ea"))},meta:{requiresAuth:!0}}]},{path:"*",component:function(){return n.e("4b47640d").then(n.bind(null,"e51e"))}}];be.push({path:"*",component:function(){return n.e("4b47640d").then(n.bind(null,"e51e"))}});var Qe=be;r["a"].use(me["a"]);var ge=function(){var e=new me["a"]({scrollBehavior:function(){return{y:0}},routes:Qe,mode:"hash",base:"/sti-admin/"});return e},ve=function(){var e="function"===typeof he?he():he,t="function"===typeof ge?ge({store:e}):ge;e.$router=t;var n={el:"#q-app",router:t,store:e,render:function(e){return e(H)}};return{app:n,store:e,router:t}},we=ve(),ye=we.app,Ae=we.store,qe=we.router;[de].forEach(function(e){e({app:ye,router:qe,store:Ae,Vue:r["a"],ssrContext:null})}),new r["a"](ye)},"7e6d":function(e,t,n){},fb1c:function(e,t,n){}},[[0,"runtime","vendor"]]]);