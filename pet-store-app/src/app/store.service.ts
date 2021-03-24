import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet, Reward, Transaction } from './models';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http : HttpClient) { }

  getPets(): Observable<Pet[]> {
    const uri = `${environment.api_host}/api/pets`;
    return this.http.get<Pet[]>(uri);
  }

  getSales(): Observable<Transaction[]> {
    const uri = `${environment.api_host}/api/transactions`;
    return this.http.get<Transaction[]>(uri);
  }

  getRewards(): Observable<Reward[]> {
    const uri = `${environment.api_host}/v1/rewards`;
    return this.http.get<Reward[]>(uri);
  }
}
