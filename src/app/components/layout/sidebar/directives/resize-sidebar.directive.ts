import { Directive, AfterViewInit, Input, ElementRef, HostListener } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SidebarService } from '../services/sidebar.service';
import { distinctUntilChanged } from 'rxjs/operators';
import { SidebarConstants } from '../services/sidebar.constants';

@Directive({
    selector: '[appResizeSidebar]'
})
export class ResizeSidebarDirective implements AfterViewInit {

    @Input() resizeSidebar: BehaviorSubject<boolean>= Object.create(null);

    resize$: Observable<boolean>= Object.create(null);
    resize = false;

    sideBar: HTMLElement= Object.create(null);

    // Width Breakpoints
    mobileBreakpoint = 768;
    mobileTwoBreakpoint = 900;
    desktopBreakpoint = 1023;

    widthRezisedSidebar = SidebarConstants.WIDTH_RESIZED;

    constructor(private elemRef: ElementRef, private sidebarService: SidebarService) { }

    ngAfterViewInit() {
        this.sideBar = this.elemRef.nativeElement;

        this.sidebarService.resizeSidebar$
            .pipe(distinctUntilChanged()) // Resize only when change to a different status
            .subscribe((val: boolean) => {
                this.resize = val;
                this.onResizeSidebar();
            });
    }

    private onResizeSidebar() {

        if (this.resize) {
            this.sideBar.style.width = this.widthRezisedSidebar;
        } else {
            this.sideBar.style.width = '';
        }

    }

    @HostListener('window:resize', ['$event'])
    onResize(event: { target: { innerWidth: number; }; }) {
        if (event.target.innerWidth <= this.desktopBreakpoint && event.target.innerWidth > this.mobileBreakpoint) {
            this.sidebarService.onResize(true);
        } else if (event.target.innerWidth <= this.mobileBreakpoint) {
            this.sidebarService.onResize(false);
        }
    }

}
