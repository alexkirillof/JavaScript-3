import { formData } from "./data.js";

export const formRender = () => {
    const form = document.createElement('form'),
        formContent = formData.fieldset;
    document.body.append(form)
    form.classList.add(formData.name)


    formContent.forEach(item => {
        form.innerHTML += `<${item.tagName} name=${item.name} 
                                            type=${item.type} 
                                            label=${item.label} 
                                            id=${item.id}  
                                            value=${item.value} 
                                            options=${item.options}>`;
        console.log(item)
    })

    const formItems = form.childNodes
    console.log('всего в форме - ' + (formItems.length) + ' позиций');
    console.log('первый элемент формы- ' + `${form.firstChild}` + "," + 'последний элемент таблицы - ' + `${form.lastChild}`)
}