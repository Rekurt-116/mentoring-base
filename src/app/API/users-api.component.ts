import { HttpClient } from "@angular/common/http";
import { Component, inject, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root', // Регистрируем сервис в корневом модуле
  })
  


export class UsersApiComponent{
    constructor(
        private http: HttpClient
    ){}
   
    
    getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
    }
}

