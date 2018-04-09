import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CadastroService } from './cadastro.service';

@Component({
selector: 'page-cadastro',
templateUrl: 'cadastro.html'
})
export class CadastroPage {

	maskData:any = [/[0-9]/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/];
	maskCel:any = ['(', /[0-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, ' - ', /\d/, /\d/, /\d/, /\d/];
	maskCpf:any = [/[0-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
	maskCep:any = [/[0-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
	form:FormGroup = new FormGroup({
		nome : new FormControl('', [
			Validators.required
			]),
		email : new FormControl('', [
			Validators.required,
			Validators.email
			]),
		datanasc : new FormControl('', [
			Validators.required,
			Validators.minLength(this.maskData.length)
			]),
		celular : new FormControl('', [
			Validators.required,
			Validators.minLength(this.maskCel.length)
			]),
		cpf : new FormControl('', [
			Validators.required,
			Validators.minLength(this.maskCpf.length)
			]),
		cep : new FormControl('', [
			Validators.required,
			Validators.minLength(this.maskCep.length)
			]),
		logradouro : new FormControl('', [
			Validators.required
			]),
		numero : new FormControl('', [
			Validators.required
			]),
		complemento : new FormControl('', [
			Validators.required
			]),
		bairro : new FormControl('', [
			Validators.required
			]),
		cidade : new FormControl('', [
			Validators.required
			]),
		estado : new FormControl('', [
			Validators.required
			])
	});

	constructor(public navCtrl: NavController, private cs:CadastroService) {

	}

	ngOnInit() {
		console.log(this.form);1
		let formdata:FormData = new FormData();
		console.log(formdata)
	}

	finalizar() {
		console.log(this.form.value);
		if (this.form.valid) {
			this.cs.cadastro(this.form.value)
			.subscribe( ( data:any ) => {
				console.log(data);
			})
		}
	}
}
