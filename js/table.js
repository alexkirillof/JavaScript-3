import { tableData } from "./data.js";


export const tableRender = () => {
    const tableWrapper = document.querySelector(".Table-wrapper"),
        table = document.createElement('table');

    tableData.forEach(item => {
        const tr = document.createElement('tr');
        item.forEach(item => {
            const td = document.createElement('td');
            td.innerHTML += item
            tr.appendChild(td)
        })
        table.appendChild(tr)
        tableWrapper.appendChild(table)
        console.log(item)
    })

    const tds = table.getElementsByTagName('td').length + 1;
    console.log('всего ячеек - ' + tds + ' штук');
    console.log('первый элемент таблицы - ' + `${table.firstChild}` + "," + 'последний элемент таблицы - ' + `${table.lastChild}`)
}