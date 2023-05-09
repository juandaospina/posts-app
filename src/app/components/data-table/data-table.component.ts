import {
  AfterViewInit,
  Component,
  ViewChild,
  Input,
} from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/types/post';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements AfterViewInit {
  constructor(
    private _postService: PostService,
    private _snackBar: MatSnackBar,
  ) {}

  // Properties
  @Input() public posts!: Post[];
  @Input() set data(results: Post[]) {
    if (results) {
      this.posts = results;
      this.dataSource.data = results;
    }
  }
  public id: number | null = null;
  public success: boolean = false;
  public error: boolean = false;
  public snackBarConfig = new MatSnackBarConfig();
  displayedColumns: string[] = ['id', 'title', 'body', 'action'];
  dataSource = new MatTableDataSource<Post>(this.posts);
  @ViewChild(MatTable) table!: MatTable<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  public deletePost(): void {
    if (this.id === null) return;
    this._postService.delete(this.id).subscribe({
      next: (response) => {
        if (typeof response === 'object') {
          this.closeModal()
          this.success = true;
          this._snackBar.open('✅ Se eliminó el post correctamente', 'Cerrar', {
            horizontalPosition: 'right',
            duration: 2000
          })
        }
      },
      error: (err) => {
        if (!err) {
          this.error = true;
          this._snackBar.open('Ocurrió un error al eliminar el post', 'Cerrar')
        }
      },
    });
  }

  private closeModal() {
    const modal = document.getElementById('deleteModal') as HTMLDivElement;
    modal.style.display = 'none';

    const modalBackdrop = document.querySelector('.modal-backdrop') as HTMLDivElement;
    console.log("[backdrop]", modalBackdrop)
    if (modalBackdrop) {
      modalBackdrop.style.backgroundColor = 'transparent'; 
      modalBackdrop.style.zIndex = '-1'
      setTimeout(() => {
        window.location.reload();
      }, 3000)
    }
  }
}
