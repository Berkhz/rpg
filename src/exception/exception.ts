export class exception extends Error {
    constructor(msg: string) {
        super(msg);
        Object.setPrototypeOf(this, exception.prototype);
    }

    erroCatastrofico() {
        return "Internal Server Error!\n Log: " + this.message;
    }
}