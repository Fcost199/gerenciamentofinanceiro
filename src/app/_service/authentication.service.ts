import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<any>; // Caminho para setar o objeto LocalStorage or SessionStorage

  public currentUser: Observable<any>;

  constructor(
    private http: HttpClient
  ) {
    //Observa o SessionStorage para ver se tem mudança
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem(`currentUser`)));
    //Se houver alteração o currentUser tbm é alterado.
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue() {
    return this.currentUserSubject.getValue();
  }
  login(cpf: String, password: String) {
    //Header da requisição
    const headerDict = {
      'Content-Type': 'application/json'
    };


    let options = { headers: new HttpHeaders( headerDict ) };

    return this.http.post<any>('usuario/autenticar/', { cpf, password }, options)
      .pipe(map(user => {
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        console.log( user )
        return user;
      }));


  }
  logout() {
    //Retira o registro do local storage
    sessionStorage.removeItem('currentUser');
    //Atualiza o Subject e o Observable
    this.currentUserSubject.next(null);
  }
}
