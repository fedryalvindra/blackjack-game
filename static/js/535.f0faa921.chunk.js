"use strict";(self.webpackChunkblackjack_game=self.webpackChunkblackjack_game||[]).push([[535],{535:(e,n,a)=>{a.r(n),a.d(n,{calculatePoint:()=>ae,default:()=>se});var s=a(43),r=a(3),l=a(975),c=a(475);const o="GameNav_nav__K06UK",i="GameNav_coin__npwUI",d="GameNav_title__sg7lb",t="GameNav_line__JRm5A";var u=a(579);const h="#42b626",_="#317d1e";const g=function(){const[e,n]=(0,s.useState)(!1),a=(0,r.d4)((e=>e.game.money));return(0,u.jsxs)("nav",{className:o,children:[(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:(0,u.jsx)(c.N_,{to:-1,style:{background:e?_:h},onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:"Back"})}),(0,u.jsxs)("li",{className:i,children:[(0,u.jsx)("p",{className:d,children:"Your Money"}),(0,u.jsxs)("div",{children:[(0,u.jsx)("img",{src:"/assets/Money.png",alt:"Money"}),(0,u.jsx)("p",{children:a})]})]})]}),(0,u.jsx)("div",{className:t})]})},j="Button_btn__WWyoT";const x=function(e){let{children:n,background:a,hover:r,isDeal:l,isLoading:c,is2x:o=!1,onClick:i}=e;const[d,t]=(0,s.useState)(!1);return(0,u.jsx)("button",{className:j,style:{background:l||o||c?"linear-gradient(0deg, rgba(79,79,79,1) 0%, rgba(111,111,111,1) 47%, rgba(145,145,145,1) 100%)":d?r:a},onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),disabled:l||o||c,onClick:i,children:n})},m="GameButtons_content__IlPWa",v="GameButtons_bet__AMu+v",[p,b,y,N]=[{background:"linear-gradient(180deg, #3700D3 0%, #2D1377 100%)",hover:"linear-gradient(180deg, #2a00a6 0%, #1f0f5b 100%)"},{background:"linear-gradient(180deg, #D3CB00 0%, #6D6900 100%)",hover:"linear-gradient(180deg, #B5AD00 0%, #555400 100%)"},{background:"linear-gradient(180deg, #D30000 0%, #6D0000 100%)",hover:"linear-gradient(180deg, #A80000 0%, #500000 100%)"},{background:"linear-gradient(180deg, #006ED3 0%, #00396D 100%)",hover:"linear-gradient(180deg, #0056A3 0%, #002D4D 100%)"}];const k=function(){const{player1:e,player2:n,bet:a,isDeal:s,is2x:c,isLoading:o}=(0,r.d4)((e=>e.game)),i=(0,r.wA)();return(0,u.jsxs)("div",{className:m,children:[(0,u.jsx)(x,{background:p.background,hover:p.hover,isDeal:!s,is2x:c,onClick:()=>{if(!c)return i((0,l.Gp)())},isLoading:o,children:"2X"}),(0,u.jsx)(x,{background:b.background,hover:b.hover,isDeal:s,onClick:()=>{if(!(a<=0))return i((0,l.oW)())},isLoading:o,children:"Deal"}),(0,u.jsxs)("div",{className:v,children:[(0,u.jsx)("h1",{children:"Bet"}),(0,u.jsx)("input",{type:"number",value:a,onChange:e=>i((0,l.xB)(Number(e.target.value))),disabled:s})]}),(0,u.jsx)(x,{background:y.background,hover:y.hover,isDeal:!s,onClick:()=>i((0,l.T6)(n,ae(n))),isLoading:o,children:"Stand"}),(0,u.jsx)(x,{background:N.background,hover:N.hover,isDeal:!s,onClick:()=>i((0,l.wd)(e)),isLoading:o,children:"Hit"})]})},f="Card_card__EIbbQ";const C=function(e){let{card:n,i:a}=e;return(0,u.jsx)("img",{className:"".concat(f),src:n.images.png,alt:n.code,style:{marginLeft:a>0?"-10%":"0px"}})},D="PlayerCards_cards__BOl3G";const L=function(e){let{cards:n}=e;return(0,u.jsx)("div",{className:D,children:n.map(((e,n)=>(0,u.jsx)(C,{card:e,i:n},e.code)))})},E="PlayerLayout_layout__CbnlM";const M=function(e){let{children:n,isLoading:a}=e;return(0,u.jsx)("div",{className:E,style:{justifyContent:a&&"center",alignItems:a&&"center"},children:n})},P="GameLayout_layout__dJSbb";const A=function(e){let{children:n}=e;return(0,u.jsx)("div",{className:P,children:n})};var G=a(216);const B="Player_player__pnMhj",w="Player_name__xy8BM",O="Player_point__sOfCQ";const I=function(e){let{point:n,color:a,player:s}=e;return(0,u.jsxs)("div",{className:B,style:{background:a},children:[(0,u.jsx)("p",{className:w,children:s}),(0,u.jsxs)("div",{className:O,children:[(0,u.jsx)("p",{children:"Total"}),(0,u.jsx)("h1",{style:{color:a},children:n})]})]})},K="Players_players__pL+e6",[S,U]=[{color:"#e00"},{color:"#1DC9FF"}];const W=function(){const{name:e}=(0,G.g)(),{player1:n,player2:a}=(0,r.d4)((e=>e.game));return(0,u.jsxs)("div",{className:K,children:[(0,u.jsx)(I,{point:Number(ae(a)),color:S.color,player:"Host"}),(0,u.jsx)(I,{point:Number(ae(n)),color:U.color,player:e})]})};var Y=a(76);const V="Popup_modal__3eZhj",J="Popup_modalContent__Emjky",T="Popup_points__iDOT0",F="Popup_point__JlSM1",H="Popup_back__G9W1i",Q="YOU WIN!",$="YOU LOSE!",R=(e,n)=>e>21?$:21===e||e===n||n>21||e>n?Q:$;const X=function(){const{player1:e,player2:n,bet:a}=(0,r.d4)((e=>e.game)),s=(0,r.wA)(),c=Number(ae(e)),o=Number(ae(n));return(0,u.jsx)("div",{className:V,children:(0,u.jsxs)("div",{className:J,children:[(0,u.jsx)("h1",{children:R(c,o)}),(0,u.jsxs)("div",{className:T,children:[(0,u.jsxs)("div",{className:F,children:[(0,u.jsx)("h2",{children:"Host point"}),(0,u.jsx)("p",{children:o})]}),(0,u.jsxs)("div",{className:F,children:[(0,u.jsx)("h2",{children:"Your point"}),(0,u.jsx)("p",{children:c})]})]}),(0,u.jsxs)("div",{className:H,children:[(0,u.jsxs)("p",{children:[R(c,o)===Q?"YOU GAINED +$":"YOU LOSS -$",a]}),(0,u.jsx)("button",{onClick:()=>{s((0,l.Ke)(c,o))},children:"BACK"})]})]})})},Z="ErrorMessage_modal__IwtKU",q="ErrorMessage_modalContent__F-Kyc";const z=function(e){let{error:n}=e;return(0,u.jsx)("div",{className:Z,children:(0,u.jsx)("div",{className:q,children:(0,u.jsx)("h1",{children:n})})})},ee="Game_content__a6-aE",ne=[{value:"KING",convertedValue:10},{value:"QUEEN",convertedValue:10},{value:"JACK",convertedValue:10},{value:"ACE",convertedValue:1}],ae=e=>null===e||void 0===e?void 0:e.cards.reduce(((e,n)=>{const a=ne.find((e=>e.value===n.value));return a?a.convertedValue+e:Number(n.value)+e}),0);const se=function(){const{player1:e,player2:n,isLoading:a,isPopup:c,error:o}=(0,r.d4)((e=>e.game)),i=(0,r.wA)();return(0,s.useEffect)((function(){21===ae(e)&&i((0,l.w1)()),ae(e)>21&&i((0,l.w1)())}),[e,i]),(0,u.jsxs)("main",{className:ee,children:[(0,u.jsx)(g,{}),(0,u.jsxs)(A,{children:[(0,u.jsxs)(M,{isLoading:a,children:[n&&!a&&(0,u.jsx)(L,{cards:n.cards}),e&&!a&&(0,u.jsx)(L,{cards:e.cards}),a&&(0,u.jsx)(Y.A,{})]}),(0,u.jsx)(k,{})]}),e&&n&&(0,u.jsx)(W,{}),c&&(0,u.jsx)(X,{}),o&&(0,u.jsx)(z,{error:o})]})}}}]);
//# sourceMappingURL=535.f0faa921.chunk.js.map