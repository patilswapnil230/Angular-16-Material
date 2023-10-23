import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Module
import { MatIconModule } from '@angular/material/icon';

// Components
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, MatIconModule],
  exports: [DashboardComponent],
  providers: []
})
export class DashboardModule {}
