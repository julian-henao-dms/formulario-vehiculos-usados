import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { SessionStorageService } from './session-storage.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly apiUrl: string;


  constructor(
    private http: HttpClient,
    private _storaged: SessionStorageService,
    private authService: AuthService
    ) {
    this.apiUrl = environment.apiUrl;

   }


   public  getInformacion(servicio: string): Observable<any> {
    const url = this.apiUrl + servicio;
    const token = this.authService.getToken();
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer ' + token);

      return this.http.get(url, { headers: headers });

  }


  public saveInformacion(servicio: string, document: any): Observable<any> {
    const url = this.apiUrl + servicio;
    const params = JSON.stringify(document);
    const token = this.authService.getToken();
    const Headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + token);
    return this.http.post(url, params, { headers: Headers });
  }

  public updateInformacion(servicio: string, document: any): Observable<any> {
    const url = this.apiUrl + servicio;
    const params = JSON.stringify(document);
    const token = this.authService.getToken();
    const Headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + token);
    return this.http.post(url, params, { headers: Headers });
  }


}
