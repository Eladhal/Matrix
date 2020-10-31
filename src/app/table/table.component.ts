import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {baseColor, CellType, DataService, ICellData, ITableData} from '../services/data.service';
import {Subscription} from 'rxjs/Subscription';
import {fromEvent} from 'rxjs/internal/observable/fromEvent';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterViewInit, OnDestroy {
  tableData: ITableData;
  dataSubscription: Subscription;
  mouseLeaveSubscription: Subscription;
  @ViewChild('table', {static: false}) table: ElementRef;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataSubscription = this.dataService.getDataAsObs().subscribe((data) => {
      this.tableData = data;
    });
  }

  ngAfterViewInit() {
    this.subToMouseLeave();
  }

  getCellData(row: string, column: string): ICellData {
    const cell = this.tableData.cellDataArr.find(cell => cell.row === row && cell.col === column);
    return cell;
  }

  getRowColHeaderCell() {
    return {
      col: '',
      row: '',
      color: baseColor,
      complianceLevel: 0,
      violationsCount: 0,
      cellType: CellType.rowColHeader
    };
  }

  private subToMouseLeave() {
    this.mouseLeaveSubscription = fromEvent(this.table.nativeElement, 'mouseleave').pipe(
      delay(300)
    ).subscribe(res => {
      this.dataService.resetTableColors();
    });
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
    this.mouseLeaveSubscription.unsubscribe();
  }

}
