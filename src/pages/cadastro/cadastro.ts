import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CadastroService } from './cadastro.service';
import { AlertController } from 'ionic-angular';

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
			Validators.minLength(8)
			]),
		celular : new FormControl('', [
			Validators.required,
			Validators.minLength(14)
			]),
		cpf : new FormControl('', [
			Validators.required,
			Validators.minLength(14)
			]),
		cep : new FormControl('', [
			Validators.required,
			Validators.minLength(9)
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
			]),
		senha : new FormControl('', [
			Validators.required,
			Validators.minLength(6)
		]),
		termos : new FormControl('false', [
			Validators.required
		])
	});

	constructor(public navCtrl: NavController, private cs:CadastroService, public alertCtrl: AlertController) {

	}

	ngOnInit() {
		console.log(this.form);1
		let formdata:FormData = new FormData();
		console.log(formdata)
	}

	showAlert(title:string, text:string) {
		let alert = this.alertCtrl.create({
		  title: title,
		  subTitle: text,
		  buttons: ['OK']
		});
		alert.present();
	}

	finalizar() {
		console.log(this.form.value);
		if (this.form.valid) {
			this.cs.cadastro(this.form.value)
			.subscribe( ( data:any ) => {
				this.showAlert('Sucesso!', 'Sua conta foi criada com sucesso!');
			})
		}
	}
}
