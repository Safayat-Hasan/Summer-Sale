function getElementName(elementId){
    const element = document.getElementById(elementId);
    const name = element.innerText;
    console.log(name);
}

function getElementPrice(elementId){
    const element = document.getElementById(elementId);
    const price = parseFloat(element.innerText).toFixed(2);
    console.log(price);
}

function getInfos(id1,id2){
    const name = getElementName(id1);
    const price = getElementPrice(id2);
}