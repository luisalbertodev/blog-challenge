import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { sectionsMetadata } from '@app/shared/constants/sectionsMetadata';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: 'identificate',
    data: sectionsMetadata.login,
    component: LoginComponent,
  },
  {
    path: 'registro',
    data: sectionsMetadata.register,
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
