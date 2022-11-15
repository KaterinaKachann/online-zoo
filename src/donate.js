import './style.scss';
import './normalize.css';

const inputAnother = document.querySelector('.another-amount-input');

inputAnother.oninput = function () {
    if (this.value.length > 4) {
        this.value = this.value.slice(0,4); 
    }
}