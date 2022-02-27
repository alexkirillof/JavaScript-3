export function changeStyle() {
    const listItem = document.getElementsByTagName('li'),
        tableItem = document.getElementsByTagName('td');
    console.log(listItem)
    for (let i = 1; i < listItem.length; i++) {
        if (i % 2 !== 0) {
            listItem[i].style.color = 'red'

        }
    }

    for (let i = 1; i < tableItem.length; i++) {
        if (i % 2 !== 0) {
            tableItem[i].style.color = 'green'

        }
    }
};