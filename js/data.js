export const listData = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5', [
        'Item 5.1',
        'Item 5.2',
        'Item 5.3',
    ],
    'Item 6',
    'Item 7',
];




export const tableData = [
    ['Item 1.1', 'Item 1.2', 'Item 1.3'],
    ['Item 2.1', 'Item 2.2', 'Item 2.3'],
    ['Item 3.1', 'Item 3.2', 'Item 3.3'],
    ['Item 4.1', 'Item 4.3'],
    ['Item 5.1', 'Item 5.2', 'Item 5.3'],
];



export const formData = {
    name: 'myForm',
    fieldset: [{
        tagName: 'select',
        name: 'cars',
        id: 'cars',
        label: 'Choose a car:',
        options: ['Volvo', 'Saab', 'Honda', 'Toyota', 'Audi'],
    }, {
        tagName: 'input',
        type: 'text',
        label: 'First name',
        id: 'fname',
        name: 'fname',
    }, {
        tagName: 'input',
        type: 'radio',
        label: 'Male',
        id: 'male',
        name: 'gender',
        value: 'male',
    }, {
        tagName: 'input',
        type: 'radio',
        label: 'Female',
        id: 'female',
        name: 'gender',
        value: 'female',
    }, {
        tagName: 'button',
        type: 'submit',
    }],
}