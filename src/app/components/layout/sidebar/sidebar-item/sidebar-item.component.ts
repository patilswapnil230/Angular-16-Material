import { Component, Input, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from '../services/sidebar.service';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.css']
})
export class SidebarItemComponent implements AfterViewInit {

  @Input() item: any;
  @Input() resize: boolean =Object.create(null);
  @Input() subItem: boolean =Object.create(null);
  @Input() accordionId: number =Object.create(null); // If is Subitem, parent is  an Accordion Component

  constructor(private sidebarService: SidebarService, private router: Router) { }


  ngAfterViewInit(): void {

    if (this.subItem && this.router.isActive(this.item.route, true)) {
      this.sidebarService.setAccordion(this.accordionId);
    }

  }

}
