import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/operators/map';

@Injectable()
export class LoginService {

    constructor(private http:Http) { }
    
    login(data){
        return this.http.post('http://192.168.0.11:3232/api/players/login', data);
    }
}