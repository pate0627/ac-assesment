import { Component, ViewChild, OnInit } from "@angular/core";
import { CoffeesService } from './coffees.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component ({
    selector: 'app-coffees',
    templateUrl: './coffees.component.html',
    styleUrls: ['./coffees.component.css']
})

export class CoffeesComponent implements OnInit {
  dataSource: any = [];

  @ViewChild('paginator') paginator!: MatPaginator;
  displayedColumns: string[] = ['id', 'blend_name', 'origin', 'variety', 'notes', 'intensifier']

    constructor (private coffee:CoffeesService) { }

    ngOnInit() {
      this.coffee.getData().subscribe((response: any) => {
        this.dataSource = new MatTableDataSource(response);
        this.dataSource.paginator = this.paginator;
      });
    }
}