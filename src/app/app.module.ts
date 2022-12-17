import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { BreedsEffect } from './store/breeds.effect';
import { StoreModule } from '@ngrx/store';
import { breedReducer } from './store/breeds.reducer';
import { catReducer } from './store/cats.reducer';
import { CatsEffect } from './store/cats.effect';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    HttpClientModule,
    MatCardModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreModule.forFeature('breeds', breedReducer),
    StoreModule.forFeature('cats', catReducer),
    EffectsModule.forFeature([BreedsEffect]),
    EffectsModule.forFeature([CatsEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
