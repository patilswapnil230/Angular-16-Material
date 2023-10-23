import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { LoginPageRoutingModule } from './login-page.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '../../app/components/layout/layout.module';
import { AutofocusModule } from '../../app/components/autofocus/autofocus.module';

// Components
import { LoginPageComponent } from './login-page.component';
import { DemoMaterialModule } from '../demo-material-module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DashboardRoutes } from '../dashboard/dashboard.routing';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    DemoMaterialModule,
    RouterModule.forChild(DashboardRoutes),
    DashboardComponent,
    LoginPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    AutofocusModule
  ],
  exports: [LoginPageComponent],
  providers: []
})
export class LoginPageModule {}
