import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Breed } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';
import { invokeCatsAPI } from '../../store/cats.action';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  public limit = [10, 16, 20, 24];
  public defaultLimit = this.limit[0];

  public breeds: Breed[] = [];
  public defaultBreed = '';

  constructor(private httpService: HttpService, private store: Store) {}

  ngOnInit(): void {
    this.getBreeds();
  }

  searchCatsForm = new FormGroup({
    breed: new FormControl(this.defaultBreed),
    amount: new FormControl(this.defaultLimit)
  });

  onSubmit() {
    this.store.dispatch(
      invokeCatsAPI({
        limit: this.searchCatsForm.value.amount,
        breed: this.searchCatsForm.value.breed
      })
    );
  }

  getBreeds() {
    this.httpService.getBreedsList().subscribe((breedsList) => {
      this.breeds = breedsList;
    });
  }
}
