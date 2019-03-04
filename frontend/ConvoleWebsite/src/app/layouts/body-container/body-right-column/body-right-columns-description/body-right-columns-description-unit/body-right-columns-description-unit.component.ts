import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-body-right-columns-description-unit',
  templateUrl: './body-right-columns-description-unit.component.html',
  styleUrls: ['./body-right-columns-description-unit.component.css']
})
export class BodyRightColumnsDescriptionUnitComponent implements OnInit {
  @Input() color = 'blue';
  @Input() column = [];
  constructor() { }

  ngOnInit() {
  }

}
