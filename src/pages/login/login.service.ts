import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/operators/map';
import 'rxjs/Rx';

@Injectable()
export class LoginService {

    constructor(private http:Http) { }
    
    login(data){
        return this.http.post('http://192.168.25.195:8080/api/players/login', data)
        .map(data => data.json());
    }
}