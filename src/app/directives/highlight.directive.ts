import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  private el: ElementRef;

  @Input('appHighlight') highlightColor: string;

  readonly defaultHighLightColor: string;

  constructor(el: ElementRef) {
    this.el = el;
    this.defaultHighLightColor = 'yellow';
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    console.log(this.highlightColor);
    this.highlight(this.highlightColor || this.defaultHighLightColor);
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
