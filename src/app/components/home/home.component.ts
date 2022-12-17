import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { Store } from '@ngrx/store';
import { invokeBreedsAPI } from '../../store/breeds.action';
import { selectBreeds } from '../../store/breeds.selector';
import { invokeCatsAPI } from '../../store/cats.action';
import { selectCats } from '../../store/cats.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public limit = [10, 16, 20, 24];
  public defaultLimit = this.limit[0];

  breeds$ = this.store.select(selectBreeds);
  public defaultBreed = '';

  cats$ = this.store.select(selectCats);

  constructor(private httpService: HttpService, private store: Store) {}

  searchCatsForm = new FormGroup({
    breed: new FormControl(this.defaultBreed),
    amount: new FormControl(this.defaultLimit)
  });

  ngOnInit(): void {
    this.store.dispatch(invokeBreedsAPI());
  }

  onSubmit() {
    this.store.dispatch(
      invokeCatsAPI({
        limit: this.searchCatsForm.value.amount,
        breed: this.searchCatsForm.value.breed
      })
    );
  }
}
