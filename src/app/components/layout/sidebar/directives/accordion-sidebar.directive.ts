import { Directive, ElementRef, AfterViewInit, Input, OnDestroy } from '@angular/core';
import { SidebarService } from '../services/sidebar.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: "[appAccordionSidebar]"
})
export class AccordionSidebarDirective implements AfterViewInit, OnDestroy {

  @Input() id: number= Object.create(null);

  accordionArrows: HTMLElement= Object.create(null);
  expandMoreArrow: HTMLElement= Object.create(null);
  expandLessArrow: HTMLElement= Object.create(null);
  accordionBody: HTMLElement= Object.create(null);

  expandSub: Subscription;
  expanded = false;

  constructor(
    private elemRef: ElementRef,
    private sidebarService: SidebarService
  ) {
    this.expandSub = this.sidebarService.expand$.subscribe((id: number) => {
      if (this.id === id) {
        this.toggle();
      } else {
        this.shrink();
      }
    });
  }

  ngOnDestroy(): void {
    this.expandSub.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.accordionArrows = this.elemRef.nativeElement.querySelector(
      ".sidebar-accordion-arrows"
    );
    this.expandMoreArrow = this.elemRef.nativeElement.querySelector(
      ".expand-more"
    );
    this.expandLessArrow = this.elemRef.nativeElement.querySelector(
      ".expand-less"
    );
    this.accordionBody = this.elemRef.nativeElement.querySelector(
      ".sidebar-accordion-body"
    );

    // Check if the current Accordion contains the Active Route Link, so expanded.
    if (this.id === this.sidebarService.accordionId) {
      this.expand();
    } else {
      this.shrink();
    }
  }

  private toggle() {
    this.expanded ? this.shrink() : this.expand();
  }

  private expand() {
    this.expandLessArrow.style.display = "block";
    this.expandMoreArrow.style.display = "none";
    this.accordionBody.style.maxHeight = "1200px";
    this.expanded = true;
  }

  private shrink() {
    this.expandLessArrow.style.display = "none";
    this.expandMoreArrow.style.display = "block";
    this.accordionBody.style.maxHeight = "0";
    this.expanded = false;
  }
}
