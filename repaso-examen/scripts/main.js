window.onload = () => {
    const number = document.querySelector('#number');
    const add = document.querySelector('#add');
    const reset = document.querySelector('#reset');
    const sub = document.querySelector('#sub');

    const counter = {
        value: 0,

        defValue() {
            number.innerHTML = this.value
        },
        add() {
            this.value++;
            this.defValue();
        },
        reset(initialState = 0) {
            this.value = initialState;
            this.defValue();
        },
        sub() {
            if(this.value === 0) {
                this.value = 0;
            } else {
                this.value--;
                this.defValue();
            }
        }
    }

    counter.defValue();

    add.onclick = () => {
        counter.add();
    }
    reset.onclick = () => {
        counter.reset();
    }
    sub.onclick = () => {
        counter.sub();
    }
}