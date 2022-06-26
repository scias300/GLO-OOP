'use strict';

const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.addElement = function () {
        let element;
        if (selector[0] === '.') {
            element = document.createElement('div');
            element.classList.add(`${selector.slice(1)}`);
            element.textContent = 'Новый элемент div ' + `"${element.getAttribute('class')}"`;
        }
        if (selector[0] === '#') {
            element = document.createElement('p');
            element.setAttribute('id', `${selector.slice(1)}`);
            element.textContent = 'Новый элемент p ' + `"${element.getAttribute('id')}"`;
        }
        element.style.cssText = `height: ${height};
                width: ${width};
                background: ${bg};
                font-size: ${fontSize};
            `;
        document.body.append(element);
    };
};

const element1 = new DomElement('.class1', '100px', '10px', '', '20px');
const element2 = new DomElement('#asdasdasd');
element1.addElement();
element2.addElement();