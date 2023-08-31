const button1 = document.getElementById("button1");
const slider1 = document.getElementById("slider1");
const nameDisplay = document.getElementById("buttonNameDisplay");
nameDisplay.innerText = "Button type name: Default"

const buttonDisabled = document.getElementById('buttonDisable');
const checkboxDisableBtn = document.getElementById("disableButton");
const checkboxDisableShadow = document.getElementById("disableShadow");

const buttonsWithIcons = document.querySelectorAll("#buttonIcons");
const checkboxIcons = document.getElementById("iconSideCheck");

let checkBoxDisableName = '';
let checkBoxShadowDisableName = '';

function setDisableBtnStyle(btn, shadow){
    buttonDisabled.className = btn + ' ' + shadow;
}

function classNameVariableSetArrays(className){
    buttonsWithIcons.forEach(button => {
        button.className = className;
    });
}

slider1.addEventListener('change', () => {
    switch (slider1.value) {
        case '1':
            button1.className = 'text';
            nameDisplay.innerText = "Button type name: Text"
        break;
        case '3':
            button1.className = 'outline';
            nameDisplay.innerText = "Button type name: Outline"
        break;
        default:
            button1.className = '';
            nameDisplay.innerText = "Button type name: Default"
        break;
    }
    
});

checkboxDisableBtn.addEventListener('change', (e) => {
    if (e.target.checked) checkBoxDisableName = 'disabled';
    else checkBoxDisableName = '';
    setDisableBtnStyle(checkBoxDisableName, checkBoxShadowDisableName);
});

checkboxDisableShadow.addEventListener('change', (e) => {
    if (e.target.checked) checkBoxShadowDisableName = 'disableShadow';
    else checkBoxShadowDisableName = '';
    setDisableBtnStyle(checkBoxDisableName, checkBoxShadowDisableName);
})

checkboxIcons.addEventListener('change', (e) => {
    if (e.target.checked) classNameVariableSetArrays('iconRight');
    else classNameVariableSetArrays('iconLeft');
});