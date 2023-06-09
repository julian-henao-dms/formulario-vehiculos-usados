import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl: string;
  private apiUrlAlt: string;
  private readonly token = '';

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
    this.apiUrlAlt = environment.apiUrlAlt;
   }

   public authenticate(username: string, password: string): Observable<any> {
    const url = this.apiUrl + '/token';
    const credentials = { username, password };
    const Headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(url, credentials, { headers: Headers });
  }

  public setToken(token: string): void {
    localStorage.setItem('accessToken', token);
  }

  public getToken(): string | null {
    return localStorage.getItem('accessToken');
  }

   public  getInformacion(servicio: string): Observable<any> {
    const url = this.apiUrl + servicio;

    return this.http.get(url);
  }

  public saveInformacion(servicio: string, document: any): Observable<any> {
    const url = this.apiUrl + servicio;
    const params = JSON.stringify(document);
    const Headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.token);
    return this.http.post(url, params, { headers: Headers });
  }

  public updateInformacion(servicio: string, document: any): Observable<any> {
    const url = this.apiUrl + servicio;
    const params = JSON.stringify(document);
    const Headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(url, params, { headers: Headers });
  }
}
