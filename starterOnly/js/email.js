class Email {
    emailForm = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    constructor(lastName) {
        this.value = lastName;
    }
    isValid() {
        return this.email.value.match(this.emailForm) && this.email !== ''
    }
}