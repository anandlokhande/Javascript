﻿//Create outer div
function RenderRegistrationForm() {
    var form = CreateHTMLElement('form', 'form_registration', null, document.body, null, { method: "post", action: "javascript:alert('User Successfully Registered.');" }); //Create From
    var div = CreateHTMLElement('div', 'div_registration', null, form, 'border :1px solid;height:100%;width:800px;margin:0 auto;');//Create Outer Div
    var header = CreateHTMLElement('h3', 'header_registration', "Registration Form", div, 'padding-left: 20px;');//Create Header
    var hr = CreateHTMLElement('hr', 'hr1', null, div, null);

    //Create table
    var table = CreateHTMLElement('table', 'tbl', null, div, 'width:100%');
    table.cellPadding= "10px";
    table.cellSpacing= "10px";
    
    //Create form element
    var row = InsertRowCell(table, 'label', 'input', "First Name :", 'text', 'txt_firstName', 'First Name');
    var row1 = InsertRowCell(table, 'label', 'input', "Last Name :", 'text', 'txt_lastName', 'Last Name');
    var row2 = InsertRowCell(table, 'label', 'input', "Email :", 'email', 'txt_email', 'Email');
    var row3 = InsertRowCell(table, 'label', 'input', "Phone Number :",'text', 'txt_number', 'Phone Number(xxxxxxxxxx)');
    var row4 = InsertRowCell(table, 'label', 'input', "Date Of Birth :", 'date', 'txt_dob', 'Date Of Birth');
    document.getElementById("txt_number").pattern = "[0-9]{10}";
    div.appendChild(table);

    hr = CreateHTMLElement('hr', 'hr2', null, div, null);
    var div_bottom = CreateHTMLElement('div', 'div_bottom', null, div, 'margin:0 auto;text-align: center;');

    //Create buttons
    var btnSubmit = CreateHTMLElement('input', 'btn_register', null, div_bottom, 'margin: 10px;height: 30px;width: 100px;', {type: 'submit',value: 'Register'});
    var btnCancel = CreateHTMLElement('input', 'btn_cancel', null, div_bottom, 'margin: 10px;height: 30px;width: 100px;', { type: "button", value: 'Cancel' });
    document.getElementById("btn_cancel").addEventListener("click", Cancel);
}

//To create Html elements
function CreateHTMLElement(type, id, value, appendTo, cssStyle, attributeList) {
    var _type = document.createElement(type);
    _type.id = id;
    _type.style = cssStyle;
    if (value) _type.innerText = value;
    
    for (var key in attributeList) {
        _type.setAttribute(key, attributeList[key]);
    }
    appendTo.appendChild(_type);
    return _type;
}

function InsertRowCell(table, cellElement1, cellElement2, cellText1, cellType2,cell2ID,placeholdertxt ) {
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.style = 'width:30%';
    cell2.style = 'width:50%';

    var lblInputName = CreateHTMLElement(cellElement1, 'lbl' + cellText1, cellText1, cell1, null, null);
    var txtInputName = CreateHTMLElement(cellElement2, cell2ID, null, cell2, "width: 250px;height: 20px;", { type: cellType2, required: "", placeholder: placeholdertxt });
    return row;
}

//Clear all fileds value
function Cancel() {
    var elements = document.getElementsByTagName("input");
    for (var i = 0; i < elements.length; i++) {
            elements[i].value = "";
    }
}
RenderRegistrationForm();