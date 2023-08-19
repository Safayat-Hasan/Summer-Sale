function getElementName(elementId) {
    const element = document.getElementById(elementId);
    const name = element.innerText;
    return name;
}

function getElementPrice(elementId) {
    const element = document.getElementById(elementId);
    const price = parseFloat(element.innerText);
    return price;
}

function getInfos(id1, id2) {
    const name = getElementName(id1);
    const price = getElementPrice(id2);
    addToItems(name, price);
}


function addToItems(name, newPrice) {
    const itemsEntry = document.getElementById('items-entry');
    const p = document.createElement('p');

    const count = itemsEntry.childElementCount;
    p.classList.add('my-4');
    p.classList.add('text-2xl');
    p.classList.add('font-medium');

    p.innerHTML = (count + 1) + '.' + ' ' + name;
    itemsEntry.appendChild(p);

    const initialPriceString = document.getElementById('total-price');
    const initialPrice = parseFloat(initialPriceString.innerText);
    const currentPrice = initialPrice + newPrice;
    initialPriceString.innerText = currentPrice.toFixed(2);

    const iniDisc = document.getElementById('discount');
    const disc = parseFloat(iniDisc.innerText);

    const totalPrice = currentPrice - disc;

    const finalPriceString = document.getElementById('total');
    finalPriceString.innerText = totalPrice.toFixed(2);

    const priceString = document.getElementById('total-price').innerText;
    // console.log(priceString);
    document.getElementById('purchase').disabled = false;

    if (parseFloat(priceString) >= 200) {
        document.getElementById('apply').disabled = false;
    }

}


document.getElementById('purchase').disabled = true;
document.getElementById('apply').disabled = true;

document.getElementById('apply').addEventListener('click', function () {
    const field = document.getElementById('coupon');
    const initialPriceString = document.getElementById('total-price');
    const initialPrice = parseFloat(initialPriceString.innerText);
    const fieldValue = field.value;
    if (fieldValue === 'SELL200') {
        const disc = initialPrice * 0.2;
        const iniDisc = document.getElementById('discount');
        iniDisc.innerText = disc.toFixed(2);
        const finalTotal = initialPrice - disc;
        const finalPriceString = document.getElementById('total');
        finalPriceString.innerText = finalTotal.toFixed(2);
    }

})