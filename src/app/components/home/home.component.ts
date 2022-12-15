import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { APIResponse, Breed, Cat } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public breeds: Breed[] = [];
  public limit = [10, 16, 20, 24];
  public cats: Cat[] = [];

  constructor(private router: Router, private httpService: HttpService) {}

  ngOnInit(): void {
    this.getBreeds();
  }

  onSubmit(form: NgForm) {
    this.getCats(10);
  }

  getBreeds(): void {
    this.httpService
      .getBreedsList()
      .subscribe((breedsList: APIResponse<Breed>) => {
        this.breeds = breedsList;
      });
  }

  getCats(amount: number): void {
    this.httpService
      .getCatsList(amount)
      .subscribe((catsList: APIResponse<Cat>) => {
        this.cats = catsList;
      });
  }
}
