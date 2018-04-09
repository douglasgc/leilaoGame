import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'pagamento',
    templateUrl: 'pagamento.html'
})

export class PagamentoPage {

    form:FormGroup = new FormGroup({
        endereco : new FormControl('', [Validators.required]),
        numero : new FormControl('', [Validators.required]),
        complemento : new FormControl('', [Validators.required]),
        bairro : new FormControl('', [Validators.required]),
        cidade : new FormControl('', [Validators.required]),
        estado : new FormControl('', [Validators.required]),
        cep : new FormControl('', [Validators.required]),
        celular : new FormControl('', [Validators.required]),
        nCartao : new FormControl('', [Validators.required]),
        nomeCartao : new FormControl('', [Validators.required])
    });

    constructor() { }

    ngOnInit() { console.log(this.form) }

    finalizar() {
        console.log(this.form.value);
    }

}