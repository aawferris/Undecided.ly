(this["webpackJsonpmessing-around"]=this["webpackJsonpmessing-around"]||[]).push([[0],{17:function(e,t,a){e.exports=a(41)},22:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(14),l=a.n(s),u=(a(22),a(3)),c=a.n(u),i=a(15),o=a(2),m=(a(5),a(16)),d=a.n(m);var E=function(e){var t=Object(r.useState)(!1),a=Object(o.a)(t,2),s=a[0],l=a[1];return n.a.createElement("div",{class:"container",id:"master-container"},n.a.createElement("div",{class:"container",id:"header"},n.a.createElement("h1",null,"Undecided.ly"),n.a.createElement("p",{id:"subtitle"},"Now you ",n.a.createElement("span",null,"don't")," have to make a decision!")),n.a.createElement("div",{class:"container",id:"intro"},n.a.createElement("h2",null,e.userData.strMeal),n.a.createElement("img",{src:e.userData.strMealThumb,alt:"image of the completed dish"}),n.a.createElement("button",{id:"button-show",onClick:function(){return l(!s)}},s?"Show Less":"Show More"),s?n.a.createElement("p",{className:"container",id:"show-more"},n.a.createElement("p",null,n.a.createElement("strong",null,"Meal Category: "),e.userData.strCategory),n.a.createElement("p",null,n.a.createElement("strong",null,"Origin: "),e.userData.strArea),n.a.createElement("p",null,n.a.createElement("strong",null,"Recipe Source: "),n.a.createElement("a",{href:e.userData.strSource,target:"_blank"},e.userData.strSource)),n.a.createElement("p",null,n.a.createElement("strong",null,"Tags: "),e.userData.strTags)):n.a.createElement("div",null)),n.a.createElement("div",{class:"container",id:"recipe-box"},n.a.createElement("div",{class:"container",id:"ingredients"},n.a.createElement("h3",null,"Ingredients:"),n.a.createElement("ul",null,n.a.createElement("li",null,e.userData.strMeasure1,"  ",e.userData.strIngredient1),n.a.createElement("li",null,e.userData.strMeasure2,"  ",e.userData.strIngredient2),n.a.createElement("li",null,e.userData.strMeasure3,"  ",e.userData.strIngredient3),n.a.createElement("li",null,e.userData.strMeasure4,"  ",e.userData.strIngredient4),n.a.createElement("li",null,e.userData.strMeasure5,"  ",e.userData.strIngredient5),n.a.createElement("li",null,e.userData.strMeasure6,"  ",e.userData.strIngredient6),n.a.createElement("li",null,e.userData.strMeasure7,"  ",e.userData.strIngredient7),n.a.createElement("li",null,e.userData.strMeasure8,"  ",e.userData.strIngredient8),n.a.createElement("li",null,e.userData.strMeasure9,"  ",e.userData.strIngredient9),n.a.createElement("li",null,e.userData.strMeasure10,"  ",e.userData.strIngredient10),n.a.createElement("li",null,e.userData.strMeasure11,"  ",e.userData.strIngredient11),n.a.createElement("li",null,e.userData.strMeasure12,"  ",e.userData.strIngredient12),n.a.createElement("li",null,e.userData.strMeasure13,"  ",e.userData.strIngredient13),n.a.createElement("li",null,e.userData.strMeasure14,"  ",e.userData.strIngredient14),n.a.createElement("li",null,e.userData.strMeasure15,"  ",e.userData.strIngredient15),n.a.createElement("li",null,e.userData.strMeasure16,"  ",e.userData.strIngredient16),n.a.createElement("li",null,e.userData.strMeasure17,"  ",e.userData.strIngredient17),n.a.createElement("li",null,e.userData.strMeasure18,"  ",e.userData.strIngredient18),n.a.createElement("li",null,e.userData.strMeasure19,"  ",e.userData.strIngredient19),n.a.createElement("li",null,e.userData.strMeasure20,"  ",e.userData.strIngredient20))),n.a.createElement("div",{class:"container",id:"instructions"},n.a.createElement("h3",null,"Instructions:"),e.userData.strInstructions,n.a.createElement("button",{id:"watch"},n.a.createElement("a",{href:e.userData.strYoutube,target:"_blank",alt:"link to YouTube video on how to make the recipe"},"See How")))))};var D=function(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),a=t[0],s=t[1];return Object(r.useEffect)((function(){(function(){var e=Object(i.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://www.themealdb.com/api/json/v1/1/random.php");case 2:t=e.sent,console.log(t.data.meals[0]),s(t.data.meals[0]);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),document.title="Undecided.ly"}),[]),null===a?n.a.createElement("h1",null,"Yelling at the chef..."):n.a.createElement("div",{className:"App"},n.a.createElement(E,{userData:a}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t,a){}},[[17,1,2]]]);
//# sourceMappingURL=main.7010dbc5.chunk.js.map