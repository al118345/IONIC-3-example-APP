/**
 * Created by Ruben on 16/05/2017.
 */

import { Injectable } from '@angular/core';
import {Http, Response , URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';


/*
Esta clase tiene la finalidad extraer los procesos de comunicación de la lógica de logueo.
De esta forma subdivido el proceso de comunicacaión.
 */
@Injectable()
export class Comunicaciones {
  constructor(private http: Http) {
  }

//método de comunicación con el servicio web alojado en multimedia.uoc.edu.
  login_Web(username: string, password: string): Observable<boolean> {
    //alert(username);
    const params: URLSearchParams = new URLSearchParams();
    params.set('user', username);
    params.set('passwd', password);
    return this.http.post(
      'http://multimedia.uoc.edu/frontend/auth.php', params)
      .map((response: Response) => {
        if (response.json().status.localeCompare('OK') === 0) {
            return true;
        } else {
          return false;
        }
      });
  }

  logout_web(): void {
    //a implementar
  }
}
