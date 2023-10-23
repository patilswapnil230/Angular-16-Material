import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { LoginPageComponent } from './login-page.component';

const routes: Routes = [{ path: '', component: LoginPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginPageRoutingModule {}
