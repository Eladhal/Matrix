import {Component, Input, OnInit} from '@angular/core';
import {baseColor, ICellData} from '../services/data.service';

@Component({
  selector: 'app-slant-cell',
  templateUrl: './slant-cell.component.html',
  styleUrls: ['./slant-cell.component.css']
})
export class SlantCellComponent implements OnInit {

  @Input() cellData: ICellData;

  constructor() { }

  ngOnInit() {
  }

  getSlantBackround() {
    if (this.cellData) {
      return this.cellData.color === baseColor ? 'repeating-linear-gradient(-45deg,transparent 1px, transparent .25em ,#C8C8C8 calc(.25em + 1px), #C8C8C8 .85em)' :
                                                 `repeating-linear-gradient(-45deg,#F8F8F8 1px, #F8F8F8 .25em ,${this.cellData.color} calc(.25em + 1px), ${this.cellData.color} .85em)`
    }
  }

}
