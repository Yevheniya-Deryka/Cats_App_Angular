import { createFeatureSelector } from '@ngrx/store';
import { Breed } from '../models';

export const selectBreeds = createFeatureSelector<Breed[]>('breeds');
