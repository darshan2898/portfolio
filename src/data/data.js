import barscreenshot from "../images/barscreenshot.png";
import recipescreenshot from "../images/recipescreenshot.png";
import todoscreenshot from "../images/todoscreenshot.png";

const dataArr = [
  {
    id: 1,
    title: "Quick Recipe's",
    url: "https://quickrecipe.netlify.app/",
    info: "In This website there are total 5 pages that is HOME-PAGE,RECIPES-PAGE,FAVORITES-PAGE,CONTACT-PAGE & ERROR-PAGE.with the help of react-router i've setup all routing across website. all the styling is done with SASS.Home page mostly consist of basic view, Recipes page where all recipes are coming from mealdbapi. there is categories section also coming from same api with js fetch method.at the top of page there is search bar where user can search any dish recipe. if recipe is available of respective search item recipes will pop-up on screen nd if not message gets pop-up as search recipe is not available.You can choose any dish on screen to get recipe info of dish.user have an option to add particular dish recipe into favorites section. added recipes will pop-up on favorites page. favorites recipes stored in firebase database and it coming from firebase. user can also remove recipes from favorites page. on adding and removing action there's notification pop-up on screen. functionality is setup with useContext, useReducer,useState, and useState hooks.",
    pic: recipescreenshot,
    techs: ["HTML", "CSS", "SASS", "JAVASCRIPT", "REACT"],
  },
  {
    id: 2,
    title: "Costo-Bar",
    url: "https://costo-bar.netlify.app/",
    info: `Costo-bar is a website for simple restaurant and bar. there are 4 pages HOME-PAGE,MENU-PAGE,CONTACT-PAGE and ERROR-PAGE. All the styling is done with STYLED-COMPONENTS.all the routing is done with latest version of react router 6.Purpose behind this project is to learn styled-components in react.
    Home page has sections representing about restaurant , daily special menu items,reason for booking an appointment and banner.
    Menu page has menu of restaurant divided in three parts consisting Appetizers,drinks & other. all the data is coming from local data.js file including images. all the data is sated locally with useState hook nested looping over with array.map.
    contact page has Two sections one is contact form and second is address and contact info of restaurant.
    `,
    pic: barscreenshot,
    techs: ["HTML", "CSS", "STYLED-COMPONENTS", "JAVASCRIPT", "REACT"],
  },
  {
    id: 3,
    title: "Grocery buddy",
    url: "https://grocery-budddy.netlify.app/",
    info: "simple similar to todo-list application. user can add item. as soon as user add item item gets add in the below list from there user can delete items too. on adding and deleing notification will popup. on different actions color of notifications is different on adding the color is green and notified message is item added successfully and on deleting the color is red and notified message is item deleted successfully. everything is happening on run time.animation, local-storage and edit item functionality is still under Process ",
    pic: todoscreenshot,
    techs: ["HTML", "CSS", "REACT"],
  },
];

export default dataArr;
