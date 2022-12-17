import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCats } from '../../store/cats.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  cats$ = this.store.select(selectCats);

  constructor(private store: Store) {}
}
