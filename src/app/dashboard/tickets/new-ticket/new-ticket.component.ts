import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  output,
  ViewChild,
  // viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent, ControlComponent } from '../../../shared';
import { Ticket } from '../ticket/ticket.model';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements AfterViewInit, OnInit {
  addTicket = output<Pick<Ticket, 'title' | 'request'>>({});

  enteredTitle = '';
  enteredText = '';

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

  onSubmit() {
    this.addTicket.emit({
      title: this.enteredTitle,
      request: this.enteredText,
    });
    this.form?.nativeElement.reset();
  }
}
