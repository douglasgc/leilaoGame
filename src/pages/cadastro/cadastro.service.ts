import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CadastroService {

    constructor(private http:Http) { }

    cadastro(data){
        return this.http.post('http://192.168.0.11:3232/api/players/add', data);
    }
    
}