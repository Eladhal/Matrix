import {Component, Input, OnInit} from '@angular/core';
import {ICellData} from '../services/data.service';

@Component({
  selector: 'app-header-cell',
  templateUrl: './header-cell.component.html',
  styleUrls: ['./header-cell.component.css']
})
export class HeaderCellComponent implements OnInit {
  @Input() cellData: ICellData;

  constructor() { }

  ngOnInit() {
  }

}
