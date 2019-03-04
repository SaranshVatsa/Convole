import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mobile-contributions-unit',
  templateUrl: './mobile-contributions-unit.component.html',
  styleUrls: ['./mobile-contributions-unit.component.css', '../mobile-link-unit/mobile-link-unit.component.css']
})
export class MobileContributionsUnitComponent implements OnInit {
  @Input() box_shadow = true;
  constructor() { }

  ngOnInit() {
  }

}
