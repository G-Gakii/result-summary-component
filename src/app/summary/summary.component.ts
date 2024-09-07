import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css',
})
export class SummaryComponent {
  @Input() childData: any;
  ngOnInit(): void {}
}
