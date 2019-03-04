import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mobile-extras-columns-description-unit',
  templateUrl: './mobile-extras-columns-description-unit.component.html',
  styleUrls: ['./mobile-extras-columns-description-unit.component.css']
})
export class MobileExtrasColumnsDescriptionUnitComponent implements OnInit {
  @Input() color = 'blue';
  @Input() column = [];
  columnTitle;
  columnDescription;
  constructor() { }

  ngOnInit() {
    this.columnTitle = this.column['name'];
    this.columnDescription = this.column['description'];
  }

}
