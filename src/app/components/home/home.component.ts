import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { APIResponse, Breed, Cat } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public breeds: Breed[] = [];
  public defaultBreed = '';

  public limit = [10, 16, 20, 24];
  public defaultLimit = this.limit[0];

  public cats: Cat[] = [];

  constructor(private httpService: HttpService) {}

  searchCatsForm = new FormGroup({
    breed: new FormControl(this.defaultBreed),
    amount: new FormControl(this.defaultLimit)
  });

  ngOnInit(): void {
    this.getBreeds();
  }

  onSubmit() {
    this.getCats(
      this.searchCatsForm.value.amount,
      this.searchCatsForm.value.breed
    );
  }

  getBreeds(): void {
    this.httpService
      .getBreedsList()
      .subscribe((breedsList: APIResponse<Breed>) => {
        this.breeds = breedsList;
      });
  }

  getCats(limit?: number | null, breed?: string | null): void {
    this.httpService
      .getCatsList(limit, breed)
      .subscribe((catsList: APIResponse<Cat>) => {
        this.cats = catsList;
      });
  }
}
