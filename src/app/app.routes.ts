import { Route} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BatchesComponent } from './batches/batches.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { RecipesComponent } from './recipes/recipes.component';
import { LoginComponent } from './auth/login/login.component';
import { ChangePasswordComponent } from './auth/change-password/change-password.component';
import { BrewStepsComponent } from './brew-steps/brew-steps.component';

export const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'batches',
    component: BatchesComponent,
  },
  {
    path: 'voorraad',
    component: IngredientsComponent,
  },
  {
    path: 'recepten',
    component: RecipesComponent,
  },
  {
  path: 'login',
  component: LoginComponent,
  },
  {
  path: 'change-password',
  component: ChangePasswordComponent,
  },
  {
  path: 'brouw-stappen',
  component: BrewStepsComponent,
  }
];
