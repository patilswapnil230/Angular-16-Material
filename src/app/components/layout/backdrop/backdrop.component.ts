import { Component, Input, OnChanges, ElementRef } from '@angular/core';

@Component({
  selector: 'app-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.css']
})
export class BackdropComponent implements OnChanges {

  @Input() show = false;

  constructor(private elmRef: ElementRef) { }

  ngOnChanges(): void {
    if (this.show) {
      this.elmRef.nativeElement.style.display = 'block';
    } else {
      this.elmRef.nativeElement.style.display = 'none';
    }
  }

}
