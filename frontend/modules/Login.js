import { _ } from 'core-js';
import validator from 'validator';

export default class Login {
    constructor(formClass) {
        this.form = document.querySelector(formClass)
    }

    init() {
        this.events();
    }

    events() {
        if (!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        })
    }

    validate(e) {
        const el = e.target;
        const emailInput = el.querySelector('input[name="email"]');
        const passwordInput = el.querySelector('input[name="password"]');
        let error = false;

        this.resetErrors();


        if (!validator.isEmail(emailInput.value)) {
            this.criaErro(emailInput, `   E-mail inválido`);

            error = true;
        }

        if (passwordInput.value.length < 3 || passwordInput.value.length > 50) {
            this.criaErro(passwordInput, `   A senha deve ter entre 3 e 50 caracteres`);
            error = true;
        }

        if (!error) el.submit();
    }

    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerText = msg;
        div.classList.add('alert-danger','my-2','rounded', 'px-2');
        campo.insertAdjacentElement('afterend', div);
    }

    resetErrors() {
        for (let erro of document.querySelectorAll('.alert-danger')) {
            erro.remove();
        }
    }
}