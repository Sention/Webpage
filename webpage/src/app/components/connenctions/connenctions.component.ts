import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-connenctions',
  templateUrl: './connenctions.component.html',
  styleUrls: ['./connenctions.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [style({ opacity: 0 }), animate('1s ease-in')]),
    ]),
  ],
})
export class ConnenctionsComponent {

}
