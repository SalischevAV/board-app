import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  // viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent, ControlComponent } from '../../../shared';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements AfterViewInit, OnInit {
  ngOnInit(): void {
    console.log('OnInit');
    console.log(this.form?.nativeElement);
  }
  ngAfterViewInit(): void {
    console.log('AfterViewInit');
    console.log(this.form?.nativeElement);
  }
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  // private form = viewChild<ElementRef<HTMLFormElement>>('form');

  onSubmit(title: string, ticket: string) {
    console.log(title, ticket);
    this.form?.nativeElement.reset();
  }
}
