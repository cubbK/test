(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[346],{9495:function(e,t,r){Promise.resolve().then(r.bind(r,8739))},8739:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var n=r(7821),l=r(9032);let s=()=>{let e=(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"})}),t=(0,n.jsxs)("div",{className:"text-teal-300 text-xl bg-teal-800 p-4 py-12 rounded-lg w-72 bg-opacity-30 flex gap-2 justify-center",children:[e,"Premium Member"]});return t},i=()=>{let e=(0,n.jsx)("div",{className:"text-slate-300 text-xl bg-slate-600 p-4 py-12 rounded-lg w-72 bg-opacity-30 flex gap-2 justify-center",children:"Standard Member"});return e};var o=r(3198),a=r(4291),c=r(9614),u=r(8380),d=r(1270);let g=async(e,t)=>{var r;let n=(0,c.v0)(e),l=null===(r=n.currentUser)||void 0===r?void 0:r.uid;if(!l)throw Error("User is not authenticated");let s=(0,u.ad)(e),i=(0,u.hJ)(s,"customers",l,"checkout_sessions"),o=await (0,u.ET)(i,{price:t,success_url:window.location.origin,cancel_url:window.location.origin});return new Promise((e,t)=>{let r=(0,u.cf)(o,n=>{let{error:l,url:s}=n.data();l&&(r(),t(Error("An error occurred: ".concat(l.message)))),s&&(console.log("Stripe Checkout URL:",s),r(),e(s))})})},p=async e=>{let t;let r=(0,c.v0)(e),n=r.currentUser;try{let r=(0,d.$C)(e,"us-central1"),l=(0,d.V1)(r,"ext-firestore-stripe-payments-createPortalLink"),{data:s}=await l({customerId:null==n?void 0:n.uid,returnUrl:window.location.origin});t=s,console.log("Reroute to Stripe portal: ",t.url)}catch(e){console.error(e)}return new Promise((e,r)=>{t.url?e(t.url):r(Error("No url returned"))})},x=async e=>{var t;let r=(0,c.v0)(e),n=null===(t=r.currentUser)||void 0===t?void 0:t.uid;if(!n)throw Error("User not logged in");let l=(0,u.ad)(e),s=(0,u.hJ)(l,"customers",n,"subscriptions"),i=(0,u.IO)(s,(0,u.ar)("status","in",["trialing","active"]));return new Promise((e,t)=>{let r=(0,u.cf)(i,t=>{console.log("Subscription snapshot",t.docs.length),0===t.docs.length?(console.log("No active or trialing subscriptions found"),e(!1)):(console.log("Active or trialing subscription found"),e(!0)),r()},t)})};function m(){var e,t,r;let u=(0,a.u)(),d=(0,c.v0)(u),m=null===(e=d.currentUser)||void 0===e?void 0:e.displayName,h=null===(t=d.currentUser)||void 0===t?void 0:t.email,f=(0,l.useRouter)(),[v,b]=(0,o.useState)(!1);(0,o.useEffect)(()=>{let e=async()=>{let e=!!d.currentUser&&await x(u);b(e)};e()},[u,null===(r=d.currentUser)||void 0===r?void 0:r.uid]);let w=async()=>{let e=await g(u,"price_1NfO2zJZCbcx7noNipgGC7Ph");f.push(e),console.log("Upgrade to Premium")},j=async()=>{let e=await p(u);f.push(e),console.log("Manage Subscription")},N=(0,n.jsx)("button",{onClick:w,className:"bg-blue-600 p-4 px-6 text-lg rounded-lg hover:bg-blue-700 shadow-lg",children:(0,n.jsx)("div",{className:"flex gap-2 items-center align-middle justify-center",children:"Upgrade To Premium"})}),y=(0,n.jsx)("button",{onClick:j,className:"bg-blue-600 p-4 px-6 text-lg rounded-lg hover:bg-blue-700 shadow-lg",children:(0,n.jsx)("div",{className:"flex gap-2 items-center align-middle justify-center",children:"Manage Subscription"})}),k=(0,n.jsx)("button",{onClick:()=>{d.signOut(),f.push("/")},className:"hover:underline text-slate-500 hover:text-slate-300 text-lg text-center",children:(0,n.jsx)("div",{className:"flex gap-2 items-center align-middle justify-center",children:"Sign Out"})}),U=(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"text-slate-500 mb-1",children:["Signed in as ",m]}),(0,n.jsx)("div",{className:"text-slate-300 text-xl",children:h})]}),_=v?(0,n.jsx)(s,{}):(0,n.jsx)(i,{});return(0,n.jsxs)("div",{className:"flex flex-col gap-8",children:[U,_,v?y:N,k]})}},4291:function(e,t,r){"use strict";r.d(t,{u:function(){return s}});var n=r(6054);let l=(0,n.ZF)({apiKey:"AIzaSyADI_mWqCQqNWBQjRsPhD75_jUE1FqgqHw",authDomain:"netflix-dubbing.firebaseapp.com",projectId:"netflix-dubbing",storageBucket:"netflix-dubbing.appspot.com",messagingSenderId:"652223430056",appId:"1:652223430056:web:40a891214f83e9faf8f19d",measurementId:"G-ZMVKPZVL38"}),s=()=>l}},function(e){e.O(0,[664,585,198,45,648,800,744],function(){return e(e.s=9495)}),_N_E=e.O()}]);