import {Component, Input, OnInit} from '@angular/core';
import {ICellData} from '../services/data.service';

@Component({
  selector: 'app-info-cell',
  templateUrl: './info-cell.component.html',
  styleUrls: ['./info-cell.component.css']
})
export class InfoCellComponent implements OnInit {
  successWidth: string;
  warningWidth: string;

  @Input() cellData: ICellData;

  constructor() { }

  ngOnInit() {
    this.successWidth = this.cellData.complianceLevel + '%';
    this.warningWidth = (100 - this.cellData.complianceLevel) + '%';
  }

}
