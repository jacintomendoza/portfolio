import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Account } from './account.model'
import { Observable } from 'rxjs';


const baseUrl = 'https://portfolio-users.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  createAccount(newAccount: Account): Observable<Account> {
    return this.http.post<Account>(baseUrl + '/users', newAccount);
  }

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(`${baseUrl}/users`);
  }
}
