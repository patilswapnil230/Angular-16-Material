import { Component, Input } from '@angular/core';
import { SidebarService } from '../services/sidebar.service';

@Component({
  selector: 'app-sidebar-item-accordion',
  templateUrl: './sidebar-item-accordion.component.html',
  styleUrls: ['./sidebar-item-accordion.component.css']
})
export class SidebarItemAccordionComponent {

  @Input() item: any;
  @Input() resize: boolean = Object.create(null);
  @Input() id: number = Object.create(null);

  constructor(private sidebarService: SidebarService) { }

  onExpand() {
   this.sidebarService.onExpand(this.id);
  }
}

