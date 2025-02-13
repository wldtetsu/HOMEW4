// TAB SLIDER

const tabContentBlocks = document.querySelectorAll('.tab_content_block');
const tabs = document.querySelectorAll('.tab_content_item');
const tabsParent = document.querySelector('.tab_content_items');
let currentTab = 0;

const hideTabContent = () => {
    tabContentBlocks.forEach(item => {
        item.style.display = 'none';
    });
    tabs.forEach(item => {
        item.classList.remove('tab_content_item_active');
    });
};

const showTabContent = (i = 0) => {
    tabContentBlocks[i].style.display = 'block';
    tabs[i].classList.add('tab_content_item_active');
};

hideTabContent();
showTabContent(currentTab);

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((item, i) => {
            if (event.target === item) {
                currentTab = i;
                hideTabContent();
                showTabContent(i);
            }
        });
    }
};

// AVTO SLIDER

setInterval(() => {
    currentTab = (currentTab + 1) % tabs.length;
    hideTabContent();
    showTabContent(currentTab);
}, 3000);


// CONVERTER

const somInput = document.querySelector('#som')
const usdInput = document.querySelector('#usd')
const euroInput = document.querySelector('#eur')



const converter = (element, targetElement, targetElement2) => {
    element.oninput = () => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', '..');
        xhr.setRequestHeader('Content-type', 'application/json')
        xhr.send()

        xhr.onload = () => {
            const data = JSON.parse(xhr.response)
            if(targetElement.id === 'som'){
                targetElement.value = (element.value * data.usd).toFixed(2)
                targetElement2.value = (element.value * data.eur).toFixed(2)
            }
            if(targetElement.id === 'usd'){
                targetElement.value = (element.value / data.usd).toFixed(2)
                targetElement2.value = (element.value / data.eur).toFixed(2)
            }
            if(targetElement.id === 'eur'){
                targetElement.value = (element.value / data.usd).toFixed(2)
                targetElement2.value = (element.value / data.eur).toFixed(2)
            }
            if(element.value === '') {
                targetElement.value = ''
                targetElement2.value = ''

            }
        }
    }

}
converter(somInput, usdInput, euroInput)
converter(usdInput, somInput, euroInput)
converter(euroInput,somInput,usdInput)
