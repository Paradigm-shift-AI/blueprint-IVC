(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{91:function(e,t,n){},92:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),i=n.n(r),c=n(14),s=n.n(c),o=(n(91),n.p,n(92),n(29)),l=n(11),j=n(31),d=n(30),h=n(52),b=n(70),p=n(4),u=n(140),x=n(150),g=n(158),m=n(157),O=n(151),f=n(152),v=n(101),y=n(154),w=n(141),C=n(153),k=n(155),N=n(103),S=n(67),B=n.n(S),T=n(69),z=n.n(T),I=n(68),F=n.n(I),_=n(147),D=n(142),L=n(146),M=n(145),P=n(143),R=n(144);var H=n(60),G=n.n(H),W=n(61),A=n.n(W),J=n(42),Q=n.n(J);function V(e){e.preventDefault()}var Y=Object(u.a)((function(e){return{seeMore:{marginTop:e.spacing(3)},refresh:{marginLeft:"90%"}}}));function q(){var e=Y(),t=Object(r.useState)([]),n=Object(j.a)(t,2),c=n[0],s=n[1];fetch("https://eaogudskckezrfywev.pythonanywhere.com/leader").then((function(e){return e.json()})).then((function(e){return s(e.items)}));return Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)(w.a,{"aria-label":"refresh",className:e.refresh,onClick:function(){return console.log("press"),void fetch("https://eaogudskckezrfywev.pythonanywhere.com/leader").then((function(e){return e.json()})).then((function(e){return s(e.items)}))},children:Object(a.jsx)(Q.a,{})}),Object(a.jsxs)(D.a,{size:"small",children:[Object(a.jsx)(P.a,{children:Object(a.jsxs)(R.a,{children:[Object(a.jsx)(M.a,{children:"Name"}),Object(a.jsx)(M.a,{children:"Time Taken"}),Object(a.jsx)(M.a,{align:"right",children:"Answer"})]})}),Object(a.jsx)(L.a,{children:c.map((function(e){return Object(a.jsxs)(R.a,{children:[Object(a.jsx)(M.a,{children:e.name}),Object(a.jsx)(M.a,{children:e.time.toFixed(2)}),Object(a.jsx)(M.a,{align:"right",children:e.correct?Object(a.jsx)(G.a,{style:{color:"green"}}):Object(a.jsx)(A.a,{style:{color:"red"}})})]},e.name)}))})]}),Object(a.jsx)("div",{className:e.seeMore,children:Object(a.jsx)(_.a,{color:"primary",href:"#",onClick:V,children:"See more"})})]})}var E=n(159),X=n(156),K=n(5),U=n(148);function Z(e){e.preventDefault()}var $=Object(u.a)((function(e){return{root:{flexGrow:1},seeMore:{marginTop:e.spacing(3)},refresh:{marginLeft:"90%"}}})),ee=Object(K.a)((function(e){return{root:{height:10,borderRadius:5},colorPrimary:{backgroundColor:e.palette.grey["light"===e.palette.type?200:700]},bar:{borderRadius:5,backgroundColor:"green"}}}))(U.a);function te(e){var t=$();return Object(a.jsx)("div",{className:t.root,children:Object(a.jsx)(ee,{variant:"determinate",value:e.val})})}function ne(){var e=$(),t=Object(r.useState)([]),n=Object(j.a)(t,2),c=n[0],s=n[1];fetch("https://eaogudskckezrfywev.pythonanywhere.com/score").then((function(e){return e.json()})).then((function(e){return s(e.items)}));return Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)(w.a,{"aria-label":"refresh",className:e.refresh,onClick:function(){return console.log("press"),void fetch("https://eaogudskckezrfywev.pythonanywhere.com/score").then((function(e){return e.json()})).then((function(e){return s(e.items)}))},children:Object(a.jsx)(Q.a,{})}),Object(a.jsxs)(D.a,{size:"small",children:[Object(a.jsx)(P.a,{children:Object(a.jsxs)(R.a,{children:[Object(a.jsx)(M.a,{children:"Name"}),Object(a.jsx)(M.a,{align:"right",children:"Score"})]})}),Object(a.jsx)(L.a,{children:c.map((function(e){return Object(a.jsxs)(R.a,{children:[Object(a.jsx)(M.a,{children:e.name}),Object(a.jsxs)(M.a,{align:"right",children:[Object(a.jsx)(te,{val:10*e.score}),"".concat(10*e.score," %")]})]},e.name)}))})]}),Object(a.jsx)("div",{className:e.seeMore,children:Object(a.jsx)(_.a,{color:"primary",href:"#",onClick:Z,children:"See more"})})]})}var ae=n(149);function re(){var e=ce();return Object(a.jsxs)("div",{align:"center",children:[Object(a.jsx)(o.b,{to:"/doc",style:{textDecoration:"none"},children:Object(a.jsx)(ae.a,{variant:"outlined",size:"large",color:"primary",className:e.margin,children:"How it works?"})}),Object(a.jsxs)(v.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(a.jsx)(o.b,{color:"inherit",href:"https://material-ui.com/",children:"IVC"})," ",(new Date).getFullYear(),"."]})]})}function ie(e){var t=e.children,n=e.value,r=e.index,i=Object(b.a)(e,["children","value","index"]);return Object(a.jsx)("div",Object(h.a)(Object(h.a)({role:"tabpanel",hidden:n!==r,id:"simple-tabpanel-".concat(r),"aria-labelledby":"simple-tab-".concat(r)},i),{},{children:n===r&&Object(a.jsx)(m.a,{p:3,children:Object(a.jsx)(v.a,{children:t})})}))}var ce=Object(u.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(h.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(d.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240},tab:{flexGrow:1},margin:{margin:e.spacing(1)}}}));function se(){var e=ce(),t=i.a.useState(!1),n=Object(j.a)(t,2),r=n[0],c=n[1],s=(Object(p.a)(e.paper,e.fixedHeight),i.a.useState(0)),o=Object(j.a)(s,2),l=o[0],d=o[1];return Object(a.jsxs)("div",{className:e.root,children:[Object(a.jsx)(x.a,{}),Object(a.jsx)(O.a,{position:"absolute",className:Object(p.a)(e.appBar,r&&e.appBarShift),children:Object(a.jsxs)(f.a,{className:e.toolbar,children:[Object(a.jsx)(w.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){c(!0)},className:Object(p.a)(e.menuButton,r&&e.menuButtonHidden),children:Object(a.jsx)(B.a,{})}),Object(a.jsx)(v.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title,children:"Dashboard"}),Object(a.jsx)(w.a,{color:"inherit",children:Object(a.jsx)(C.a,{badgeContent:4,color:"secondary",children:Object(a.jsx)(F.a,{})})})]})}),Object(a.jsxs)(g.a,{variant:"permanent",classes:{paper:Object(p.a)(e.drawerPaper,!r&&e.drawerPaperClose)},open:r,children:[Object(a.jsx)("div",{className:e.toolbarIcon,children:Object(a.jsx)(w.a,{onClick:function(){c(!1)},children:Object(a.jsx)(z.a,{})})}),Object(a.jsx)(y.a,{})]}),Object(a.jsxs)("main",{className:e.content,children:[Object(a.jsx)("div",{className:e.appBarSpacer}),Object(a.jsxs)(k.a,{maxWidth:"lg",className:e.container,children:[Object(a.jsxs)(N.a,{className:e.tab,children:[Object(a.jsxs)(E.a,{value:l,onChange:function(e,t){d(t)},indicatorColor:"primary",textColor:"primary",centered:!0,children:[Object(a.jsx)(X.a,{label:"Most Recent Question"}),Object(a.jsx)(X.a,{label:"Test Score"})]}),Object(a.jsx)(ie,{value:l,index:0,children:Object(a.jsx)(q,{})}),Object(a.jsx)(ie,{value:l,index:1,children:Object(a.jsx)(ne,{})})]}),Object(a.jsx)(m.a,{pt:4,children:Object(a.jsx)(re,{})})]})]})]})}function oe(){return Object(a.jsxs)(v.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(a.jsx)(o.b,{color:"inherit",href:"https://material-ui.com/",children:"IVC"})," ",(new Date).getFullYear(),"."]})}var le=Object(u.a)((function(e){return{appBar:{position:"relative"},layout:Object(d.a)({width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:Object(d.a)({marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),button:{marginLeft:"80%"}}}));function je(){var e=le();return Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)(x.a,{}),Object(a.jsx)(O.a,{position:"absolute",color:"default",className:e.appBar,children:Object(a.jsxs)(f.a,{children:[Object(a.jsx)(v.a,{variant:"h6",color:"inherit",noWrap:!0,children:"How it works?"}),Object(a.jsx)(o.b,{to:"/",style:{textDecoration:"none"},children:Object(a.jsx)(ae.a,{variant:"outlined",size:"large",color:"primary",className:e.button,children:"Dashboard"})})]})}),Object(a.jsxs)("main",{className:e.layout,children:[Object(a.jsxs)(N.a,{className:e.paper,children:[Object(a.jsx)(v.a,{component:"h1",variant:"h5",align:"center",children:"Transcript"}),Object(a.jsx)("br",{}),Object(a.jsx)(v.a,{align:"justified",children:'An integrated circuit or monolithic integrated circuit (also referred to as an IC, a chip, or a microchip) is a set of electronic circuits on one small flat piece (or "chip") of semiconductor material that is normally silicon. The integration of large numbers of tiny MOS transistors into a small chip results in circuits that are orders of magnitude smaller, faster, and less expensive than those constructed of discrete electronic components. The IC\'s mass production capability, reliability, and building-block approach to integrated circuit design has ensured the rapid adoption of standardized ICs in place of designs using discrete transistors. ICs are now used in virtually all electronic equipment and have revolutionized the world of electronics. Computers, mobile phones, and other digital home appliances are now inextricable parts of the structure of modern societies, made possible by the small size and low cost of ICs.'})]}),Object(a.jsxs)(N.a,{className:e.paper,children:[Object(a.jsx)(v.a,{component:"h1",variant:"h5",align:"center",children:"Questions"}),Object(a.jsx)("br",{}),Object(a.jsxs)(v.a,{align:"justified",children:["The integration of large numbers of tiny MOS transistors into a large chip results in circuits that are orders of magnitude larger, faster, and less expensive than those constructed of discrete electronic components.",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"True",Object(a.jsx)("br",{}),"False"]}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)(v.a,{align:"justified",children:"Computers, mobile phones, and other digital home appliances are now inextricable parts of the structure of modern societies, made possible by the small size and low cost of ___________ ."})]}),Object(a.jsx)(oe,{})]})]})}var de=function(){return Object(a.jsx)(o.a,{children:Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{path:"/doc",children:Object(a.jsx)(je,{})}),Object(a.jsx)(l.a,{path:"/",children:Object(a.jsx)(se,{})})]})})},he=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,161)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))};s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(de,{})}),document.getElementById("root")),he()}},[[99,1,2]]]);
//# sourceMappingURL=main.d496e774.chunk.js.map