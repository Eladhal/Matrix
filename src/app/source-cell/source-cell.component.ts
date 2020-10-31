import {Component, Input, OnInit} from '@angular/core';
import {ICellData} from '../services/data.service';

@Component({
  selector: 'app-source-cell',
  templateUrl: './source-cell.component.html',
  styleUrls: ['./source-cell.component.css']
})
export class SourceCellComponent implements OnInit {

  @Input() cellData: ICellData;
  constructor() {
  }

  ngOnInit() {
  }

}
