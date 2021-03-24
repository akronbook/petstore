import { Component, OnInit } from '@angular/core';
import { Pet } from '../models';
import { StoreService } from '../store.service';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit {
  pets: Pet[];
  constructor(private store: StoreService) { }

  ngOnInit() {
    const pet$ = this.store.getPets().pipe(
      map(results => {
        this.pets = results;
      }),
      catchError(error => {
        console.log(error);
        return of([]);
      })
    );
    pet$.subscribe(data => data);
  }

}
