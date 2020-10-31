import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

export interface ITableData {
  colHeaderArr: ICellData[];
  rowHeaderArr: ICellData[];
  cellDataArr: ICellData[];
}

export interface ICellData {
  col: string;
  row: string;
  color: string;
  complianceLevel: number;
  violationsCount: number;
  cellType: CellType;
}

export enum CellType {
  basic,
  info,
  slant,
  rowHeader,
  colHeader,
  rowColHeader
}

export const baseColor = '#F8F8F8';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private mapGuidToName = {};
  private mapNameToNum = {};
  // readonly color = '#F8F8F8';
  private tableData: ITableData;
  private dataSub = new BehaviorSubject<ITableData>({colHeaderArr: [], rowHeaderArr: [], cellDataArr: []});

  constructor(private http: HttpClient) {
    this.tableData = {colHeaderArr: [], rowHeaderArr: [], cellDataArr: []};
  }

  getData() {
    this.http.get('/assets/zones.json').subscribe((data: any) => {
      if (data) {
        this.createMapGuidToName(data);
        this.createMapNameToNum(data);
        this.tableData.colHeaderArr = data.zones.map(item => {
          return {
            col: item.name,
            row: '',
            color: baseColor,
            complianceLevel: 0,
            violationsCount: 0,
            cellType: CellType.colHeader
          };
        });

        this.tableData.rowHeaderArr = data.zones.map(item => {
          return {
            col: '',
            row: item.name,
            color: baseColor,
            complianceLevel: item.complianceLevel || 0,
            violationsCount: 0,
            cellType: CellType.rowHeader
          };
        });

        const guids = data.zones.map(item => item.guid);
        for (let row of guids) {
          for (let col of guids) {
            const cell = data.sections.find(sec => sec.sourceGuid === row && sec.destinationGuid === col);
            if (!cell) {
              if (row === col) { // slant cell
                this.tableData.cellDataArr.push(
                  {
                    col: this.mapGuidToName[col],
                    row: this.mapGuidToName[row],
                    color: baseColor,
                    complianceLevel: 0,
                    violationsCount: 0,
                    cellType: CellType.slant
                  }
                );
              } else { // basic empty cell
                this.tableData.cellDataArr.push(
                  {
                    col: this.mapGuidToName[col],
                    row: this.mapGuidToName[row],
                    color: baseColor,
                    complianceLevel: 0,
                    violationsCount: 0,
                    cellType: CellType.basic
                  }
                );
              }
            } else { // Info cell
              this.tableData.cellDataArr.push(
                {
                  col: this.mapGuidToName[col],
                  row: this.mapGuidToName[row],
                  color: baseColor,
                  complianceLevel: cell.complianceLevel,
                  violationsCount: cell.violationsCount,
                  cellType: CellType.info
                }
              );
            }
          }
        }
      }
    });
    this.dataSub.next(this.tableData);
  }

  private createMapGuidToName(data) {
    for (let item of data.zones) {
      this.mapGuidToName[item.guid] = item.name;
    }
  }

  private createMapNameToNum(data: any) {
    for (let i = 0; i < data.zones.length; i++) {
      this.mapNameToNum[data.zones[i].name] = i;
    }
  }

  getDataAsObs(): Observable<ITableData> {
    return this.dataSub.asObservable();
  }


  operateMouseOverOnCell(row: string, col: string) {
    this.tableData.rowHeaderArr.forEach(cell => {
      if (cell.row === row) {
        cell.color = '#D0FAEE';
      } else {
        cell.color = baseColor;
      }
    });

    this.tableData.colHeaderArr.forEach(cell => {
      if (cell.col === col) {
        cell.color = '#D0FAEE';
      } else {
        cell.color = baseColor;
      }
    });

    this.tableData.cellDataArr.forEach(cell => {
      let aa = this.mapNameToNum[cell.row];
      let bb = this.mapNameToNum[row];
      if (cell.row === row && cell.col === col) {
        cell.color = '#0FDDAF';
      } else if (cell.row === row && this.mapNameToNum[cell.col] < this.mapNameToNum[col]) {
        cell.color = '#D0FAEE';
      } else if (cell.col === col && this.mapNameToNum[cell.row] < this.mapNameToNum[row]) {
        cell.color = '#D0FAEE';
      } else {
        cell.color = baseColor;
      }
    });
  }

  resetTableColors() {
    this.tableData.colHeaderArr.forEach( cell => {
      cell.color = baseColor;
    });
    this.tableData.rowHeaderArr.forEach( cell => {
      cell.color = baseColor;
    });
    this.tableData.cellDataArr.forEach( cell => {
      cell.color = baseColor;
    });
  }
}
