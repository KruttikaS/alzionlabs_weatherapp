(this.webpackJsonpweatherappalzionlabs=this.webpackJsonpweatherappalzionlabs||[]).push([[0],{21:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(22),r=n.n(s),i=n(15),o=n.n(i),l=n(23),d=n(13),j=n(76),u=n(62),h=n(18),p=n(24),b=n.n(p),O=n(77),m=n(78),x=(n(52),n(53),n(16)),g=n.n(x),w=(n(21),n(2)),f=function(e){var t=e.weatherData;g.a.globalFormat="D MMM YYYY";return Object(w.jsxs)("div",{className:"demo-div",children:[Object(w.jsx)("p",{className:"hourly-heading",children:"Hourly Forecast"}),Object(w.jsx)(b.a,Object(h.a)(Object(h.a)({},{dots:!0,infinite:!1,speed:500,focusOnSelect:!0,slidesToShow:7,slidesToScroll:7,initialSlide:0,responsive:[{breakpoint:1500,settings:{slidesToShow:7,slidesToScroll:7,infinite:!0,dots:!0}},{breakpoint:1040,settings:{slidesToShow:5,slidesToScroll:5,infinite:!0,dots:!0}},{breakpoint:840,settings:{slidesToShow:4,slidesToScroll:4,initialSlide:1,dots:!1}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:1,dots:!1}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:2,dots:!1}}]}),{},{children:t.hourly.map((function(e,t){var n=new Date(1e3*e.dt).toUTCString().slice(-13,-7),c="http://openweathermap.org/img/wn/".concat(e.weather[0].icon,".png");return Object(w.jsx)(j.a,{children:Object(w.jsx)(O.a,{className:"card-style",style:{backgroundColor:"rgb(255, 255, 255, 0.2)"},children:Object(w.jsxs)(m.a,{children:[Object(w.jsx)("img",{style:{margin:"0 auto"},src:c}),Object(w.jsxs)("p",{className:"card-content",children:[e.temp,"\xb0","C"]}),Object(w.jsx)("p",{className:"card-content",children:e.weather[0].description}),Object(w.jsx)("p",{className:"card-content",children:Object(w.jsx)(g.a,{unix:!0,children:e.dt})}),Object(w.jsx)("p",{className:"card-content",children:n})]})})})}))}))]})},y=(n.p,function(e){var t,n=e.weatherData,c="http://openweathermap.org/img/wn/".concat(n.current.weather[0].icon,"@4x.png"),a=new Date,s="".concat(a.getDate()," ").concat(["January","February","March","April","May","June","July","August","September","October","Nocvember","December"][a.getMonth()],", ").concat(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][a.getDay()]," ");return Object(w.jsx)("div",{children:Object(w.jsx)(j.a,{children:Object(w.jsxs)(u.a,{elevation:0,className:"paperstyle",children:[Object(w.jsxs)(j.a,{container:!0,spacing:3,children:[Object(w.jsx)(j.a,{className:"current-weather-des",item:!0,xs:6,sm:3,children:Object(w.jsxs)("p",{children:[n.current.weather[0].description?(t=n.current.weather[0].description,t.charAt(0).toUpperCase()+t.slice(1)):null,Object(w.jsx)("img",{src:c})]})}),Object(w.jsx)(j.a,{item:!0,xs:6,children:Object(w.jsx)("p",{className:"date",children:s})})]}),Object(w.jsxs)(j.a,{container:!0,spacing:3,children:[n?Object(w.jsx)(f,{weatherData:n}):Object(w.jsx)("p",{children:"No DATA Found"}),Object(w.jsx)(j.a,{item:!0,xs:6,children:Object(w.jsxs)("p",{className:"current-temp",children:[n.current.temp?n.current.temp:null,"\xb0","C"]})})]})]})})})}),S=function(e){return Object(w.jsx)("div",{className:"ui active dimmer",children:Object(w.jsx)("div",{className:"ui text loader",children:e.message})})};S.defaultProps={message:"Loading..."};var v=S,T=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)([]),r=Object(d.a)(s,2),i=r[0],j=r[1],u=Object(c.useState)([]),h=Object(d.a)(u,2),p=h[0],b=h[1];return Object(c.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return navigator.geolocation.getCurrentPosition((function(e){console.log(e),a(e.coords.latitude),j(e.coords.longitude)})),e.next=3,fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(n,"&lon=").concat(i,"&exclude=daily,minutely,alerts&units=metric&appid=37129062016901f2794952778d36c722")).then((function(e){return e.json()})).then((function(e){b(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n,i]),Object(w.jsx)("div",{children:"undefined"!=(typeof p.hourly&&typeof p.current)?Object(w.jsx)(y,{weatherData:p}):Object(w.jsx)(v,{})})};r.a.render(Object(w.jsx)(a.a.StrictMode,{children:Object(w.jsx)(T,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.9e0a448c.chunk.js.map