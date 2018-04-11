import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class CadastroService {

    constructor(private http:Http) { }

    cadastro(data){
        return this.http.post('http://192.168.25.195:8080/api/players/add', data)
        .map(data => data.json());
    }
    
}