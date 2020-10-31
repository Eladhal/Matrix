import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  title = 'NIST - Access Policy Compliance Matrix';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData();
  }

}
