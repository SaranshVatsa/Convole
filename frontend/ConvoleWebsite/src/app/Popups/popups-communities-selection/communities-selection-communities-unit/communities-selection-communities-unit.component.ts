import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-communities-selection-communities-unit',
  templateUrl: './communities-selection-communities-unit.component.html',
  styleUrls: ['./communities-selection-communities-unit.component.css']
})
export class CommunitiesSelectionCommunitiesUnitComponent implements OnInit {
  @Input() commSelected = false;
  clickCount = 0;
  constructor() { }

  ngOnInit() {
  }
  onCommSelect() {
    this.clickCount++;
    if (this.clickCount % 2 === 1) {
      this.commSelected = true;
    } else {
      this.commSelected = false;
    }
  }

}
