import { createFeatureSelector } from '@ngrx/store';
import { Cat } from '../models';

export const selectCats = createFeatureSelector<Cat[]>('cats');
