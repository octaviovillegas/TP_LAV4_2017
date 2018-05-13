import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import {Http ,Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MiHttpService {
  
  constructor(public http:Http, private db: AngularFireDatabase) { }
  
  getList(api, params?): Observable<any[]> {
    return this.db.list(api).valueChanges();
  }

  get(api, params?): Observable<any[]> {
    //cambiar list por el q sea
    return this.db.list(api).valueChanges();
  }

  /* EJEMPLO DE CONSUMO API EXTERNA
   return   this.miHttp.httpGetP("https://restcountries.eu/rest/v2/all")
   .then( data => {
     console.log( data );
     return data;
   })
   .catch( err => {
     console.log( err );
     return null;
   });
   //return null;
 }*/

  public httpGetP(url: string, ) {
    return this.http
      .get(url)
      .toPromise()
      .then(this.extraerDatos)
      .catch(this.handleError);
  }

  public httpPostP(url: string, objeto: any) {
    return this.http
      .get(url)
      .subscribe(data => {
        console.log(data);
        return data;
      });
  }

  public httpGetO(url: string): Observable<Response> {
    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  public httpGetPromise(url: string, objeto:any){
    return this.http
    .get(url)
    .toPromise()
    .then(this.extraerDatos)
    .catch(this.handleError);
  }

  private extraerDatos(resp:Response) {

      return resp.json() || {};

  }
  private handleError(error:Response | any) {
      return error;
  }

}
