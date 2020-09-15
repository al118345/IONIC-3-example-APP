import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {User} from "../../models/user";

import {Http  } from '@angular/http';
import {Comunicaciones} from "../comunicaciones/comunicaciones";


/*
 Generated class for the AuthServiceProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class AuthServiceProvider {
  currentUser: User;
  logueado : Boolean;
  constructor(private http: Http,
              private comunicaciones: Comunicaciones
  ) {}



//función para  realizar el login
  login(credentials): Observable<boolean> {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      this.logueado = false;
      return Observable.create(observer => {
        //nos comunicamos con el servicio web de login y con el resultado  que nos proporcione redirigimos al hombe o nos quedamos en el
        //login
        this.comunicaciones.login_Web( credentials.email, credentials.password)
          .subscribe(result => {
            if (result === true) {
              // login successful
              this.currentUser = credentials;
              //vamos a home
              observer.next(true);
              observer.complete();
            } else {
              // login failed
              this.currentUser = credentials;
              // Volvemos a pedir la introducción de los datos.
              observer.next(false);
              observer.complete();
            }
          });
      });
    }
  }

  public getUserInfo() : User {
    return this.currentUser;
  }

  //en producción, aún no funciona.
  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }

}
