import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Modules
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';

// Components
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { SidebarItemComponent } from './sidebar/sidebar-item/sidebar-item.component';
import { SidebarItemAccordionComponent } from './sidebar/sidebar-item-accordion/sidebar-item-accordion.component';
import { ProfileMenuComponent } from './header/profile-menu/profile-menu.component';
import { BackdropComponent } from './backdrop/backdrop.component';

// Directives
import { ResizeSidebarDirective } from './sidebar/directives/resize-sidebar.directive';
import { AccordionSidebarDirective } from './sidebar/directives/accordion-sidebar.directive';

// Services
import { SidebarService } from './sidebar/services/sidebar.service';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    MainContainerComponent,
    SidebarItemComponent,
    SidebarItemAccordionComponent,
    ResizeSidebarDirective,
    AccordionSidebarDirective,
    ProfileMenuComponent,
    BackdropComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatRippleModule,
    MatMenuModule
  ],
  exports: [MainContainerComponent, FooterComponent],
  providers: [SidebarService]
})
export class LayoutModule {}
