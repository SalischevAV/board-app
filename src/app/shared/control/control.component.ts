import {
  Component,
  ElementRef,
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
    '(click)': 'onClick',
  },
})
export class ControlComponent {
  // @HostBinding('class') className = 'control';
  // @HostListener('click)
  // onClick() {
  //   console.log('Clicked for host');
  // }

  label = input.required<string>();
  //iy is host element
  private hostElement = inject(ElementRef);

  onClick() {
    console.log('Clicked for host');
    console.log(this.hostElement);
  }
}
