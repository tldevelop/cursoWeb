import printCards from "./hooks/printCards.js";
import printComments from "./hooks/printComments.js";
import {getUsers} from "./helper/getUsers.js";
import {getComments} from "./helper/getComments.js";

window.onload = () => {
    const cardList = document.querySelector('#card-list');

    //getUsers();
    getComments();

    //printCards(cardList);
    printComments(cardList);
}