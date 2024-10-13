import {
  AfterContentInit,
  afterNextRender,
  afterRender,
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  // HostBinding,
  // HostListener,
  inject,
  input,
  ViewEncapsulation,
  // HostBinding,
  // HostListener,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent implements AfterContentInit {
  constructor() {
    afterRender(() => console.log('afterRender'));

    afterNextRender(() => console.log('afterNextRender'));
  }

  ngAfterContentInit(): void {
    console.log('AfterContentInit');
  }
  // @HostBinding('class') className = 'control';
  // @HostListener('click')
  onClick() {
    console.log('Clicked for host');
    console.log('host: ', this.hostElement);
    console.log('control: ', this.control);
    console.log(this.controlBySignal());
  }
  // onClick() {
  //   console.log('Clicked for host');
  // }

  private controlBySignal =
    contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>(
      'input'
    );
  label = input.required<string>();
  //it is host element
  private hostElement = inject(ElementRef);
  @ContentChild('input') private control?: ElementRef<
    HTMLInputElement | HTMLTextAreaElement
  >;
}
