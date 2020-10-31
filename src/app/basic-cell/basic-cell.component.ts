import {AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CellType, DataService, ICellData} from '../services/data.service';
import {interval} from 'rxjs/internal/observable/interval';
import {Subscription} from 'rxjs/Subscription';
import {debounce} from 'rxjs/operators';
import { fromEvent } from 'rxjs';


@Component({
  selector: 'app-basic-cell',
  templateUrl: './basic-cell.component.html',
  styleUrls: ['./basic-cell.component.css']
})
export class BasicCellComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() title: string;
  @Input() cellData: ICellData;
  @Input() isSourceCell: boolean;
  @ViewChild('cellRef', { static: false}) cellRef: ElementRef;
  sourceCellCompData: { name: string, complLvl: number };
  cellRefSubscription: Subscription;

  constructor(private dataService: DataService) {
    this.sourceCellCompData = {
      name: '',
      complLvl: 0
    };
  }

  ngOnInit() {
    if (this.cellData) {
      this.sourceCellCompData.name = this.cellData.row;
      this.sourceCellCompData.complLvl = this.cellData.complianceLevel;
    }
  }

  ngAfterViewInit() {
    this.subToMouseHover();
  }

  getCellType() {
    if (this.cellData) {
      switch (this.cellData.cellType) {
        case CellType.basic:
          return 'basic';
        case CellType.colHeader:
          return 'header';
        case CellType.info:
          return 'info';
        case CellType.slant:
          return 'slant';
        case CellType.rowHeader:
          return 'source';
        case CellType.rowColHeader:
          return 'rowColHeader';
      }
    }
  }

  private subToMouseHover() {
    if (this.cellRef) {
      this.cellRefSubscription = fromEvent(this.cellRef.nativeElement, 'mouseover').pipe (
        debounce(() => interval(300))
      ).subscribe(res => {
        if (this.cellData.cellType === CellType.basic || this.cellData.cellType === CellType.info || this.cellData.cellType === CellType.slant ) {
          this.dataService.operateMouseOverOnCell(this.cellData.row, this.cellData.col);
        } else {
          this.dataService.resetTableColors();
        }
      })
    }
  };

  ngOnDestroy() {
   this.cellRefSubscription.unsubscribe();
  }
}
