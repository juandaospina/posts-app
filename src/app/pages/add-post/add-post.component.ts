import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/types/post';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent {
  constructor(
    private _postService: PostService,
    private _snackBar: MatSnackBar,
  ) {}

  public onSubmit(form: NgForm) {
    if (!form.value.userId || !form.value.title || !form.value.body) {
      return this._snackBar.open('🚫  Debe completar los campos marcados como requeridos', 'Cerrar', {
        horizontalPosition: 'right',
        duration: 4000
      })
    }
    return this._postService.create(form.value).subscribe({
      next: (response) => {
        console.log("[create_response]", response)
        if (typeof response === "object") {
          this._snackBar.open('✅  Post creado con éxito', 'Cerrar', {
            horizontalPosition: 'right',
            duration: 4000
          })
        }
      },
      error: (err) => {
        if (!err.ok) {
          this._snackBar.open('🚫  Ocurrió un error al crear el post', 'Cerrar', {
            horizontalPosition: 'right',
            duration: 4000
          })
        }
      }
    })
  }
}
