import { listData } from "./data.js";


export const listRender = () => {
    const list = document.querySelector(".List");

    listData.forEach((item, i) => {
        if (i != 5) {
            list.innerHTML += '<li>' + item + '</li>';
        } else if (i == 5) {
            item.forEach(item => {
                list.innerHTML += '<li>' + item + '</li>';
            })
        }
        console.log(item)
    })

    const listChild = list.childNodes;
    console.log('всего в списке - ' + (listChild.length - 1) + ' позиций');
    console.log('первый элемент списка - ' + `${list.firstChild}` + "," + 'последний элемент списка - ' + `${list.lastChild}`)

}