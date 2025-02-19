export class Money {
    constructor(value) {
        this.value = value;
    }

    add(money) {
        if (this.currency !== money.currency) {
            throw new Error('Currency mismatch');
        }
        return new Money(this.value + money.value, this.currency);
    }
}