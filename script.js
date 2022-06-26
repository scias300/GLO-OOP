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

const square = new DomElement('.square', '100px', '100px', 'green', '0');
square.makeAbsolute = function () {
    document.querySelector(`${this.selector}`).style.position = 'absolute';
};
square.top = 0;
square.left = 0;
square.makeMove = function (event) {
    const elem = document.querySelector(`${this.selector}`);
    if (event.key === 'ArrowUp') {
        this.top -= 10;
        elem.style.top = this.top + 'px';
    }
    if (event.key === 'ArrowLeft') {
        this.left -= 10;
        elem.style.left = this.left + 'px';
    }
    if (event.key === 'ArrowDown') {
        this.top += 10;
        elem.style.top = this.top + 'px';
    }
    if (event.key === 'ArrowRight') {
        this.left += 10;
        elem.style.left = this.left + 'px';
    }
};

document.addEventListener("DOMContentLoaded", () => {
    square.addElement();
    square.makeAbsolute();
});

window.addEventListener('keydown', () => square.makeMove(event));