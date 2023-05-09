import { AfterViewInit, Component, ViewChild, Input } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { Post } from 'src/types/post';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements AfterViewInit {

  // Properties
  @Input() public posts!: Post[];
  @Input() set _data(results: Post[]) {
    if (results) {
      this.posts = results;
      this.dataSource.data = results;
    }
  }
  displayedColumns: string[] = ['id', 'title', 'body', 'action'];
  dataSource = new MatTableDataSource<Post>(this.posts);

  @ViewChild(MatTable) table!: MatTable<any>
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}


