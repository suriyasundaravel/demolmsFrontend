import { Component, Input, OnInit } from '@angular/core';
import {RoundProgressModule} from 'angular-svg-round-progressbar';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {

  @Input() isBig: boolean = true;
  @Input() value: number = 0;
  @Input() color: string = 'green';

   classes = [];

  constructor() { }

  ngOnInit() {
  }

}
