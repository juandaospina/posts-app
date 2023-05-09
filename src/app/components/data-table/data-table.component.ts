import {
  AfterViewInit,
  Component,
  ViewChild,
  Input,
  ElementRef
} from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private _elementRef: ElementRef
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
  public post: Post = {
    id: 0,
    userId: 0,
    title: '',
    body: ''
  };
  displayedColumns: string[] = ['id', 'title', 'body', 'delete', 'update'];
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
          this.closeModal('delete')
          this.success = true;
          this._snackBar.open('✅ Se eliminó el post correctamente', 'Cerrar', {
            horizontalPosition: 'right',
            duration: 3000
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

  public updatePost(): void {
    this._postService.update(this.post).subscribe({
      next: (response) => {
        if (typeof response === 'object') {
          this.closeModal('update')
          this.success = true;
          this._snackBar.open('✅ Se actualizo el post correctamente', 'Cerrar', {
            horizontalPosition: 'right',
            duration: 3000
          })
        }
      },
      error: (err) => {
        console.log("[error_update]", err)
      }
    })
  }

  private closeModal(action: string) {
    let modal;
    if (action === 'delete') {
      modal = document.getElementById('deleteModal') as HTMLDivElement;
      modal.style.display = 'none';

      const modalBackdrop = document.querySelector('.modal-backdrop') as HTMLDivElement;
      if (modalBackdrop) {
        modalBackdrop.style.backgroundColor = 'transparent'; 
        setTimeout(() => {
          window.location.reload();
        }, 4000)
      }
    }

    if (action === 'update') {
      modal = document.getElementById('updateModal') as HTMLDivElement;
      modal.style.display = 'none';

      const modalBackdrop = document.querySelector('.modal-backdrop') as HTMLDivElement;
      if (modalBackdrop) {
        modalBackdrop.style.backgroundColor = 'transparent'; 
        setTimeout(() => {
          window.location.reload();
        }, 4000)
      }
    }
  }

  public onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    (this.post as any)[input.name] = input.value;
  }

  public onUpdateHandler(data: Post) {
    this.post = data;
  }
}
