import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form.component';

const newItemRoutes: Routes = [{ path: '', component: FormComponent }];

export const newItemRouting = RouterModule.forChild(newItemRoutes);
