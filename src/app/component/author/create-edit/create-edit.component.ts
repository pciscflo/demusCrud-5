import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Author } from 'src/app/model/authors';
import * as moment from 'moment'; // add a mano
import { AuthorService } from 'src/app/service/author.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.css'],
})
export class CreateEditComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  author: Author = new Author();
  mensaje: string = '';
  maxFecha: Date = moment().add(1, 'days').toDate();
  id: number = 0;
  edicion: boolean = false; //no es edicion

  constructor(
    private authorService: AuthorService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    //para obtener el routerLink de listado
  }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id']; //capturando el id del listado
      this.edicion = data['id'] != null;
      this.init();
    });

    this.form = new FormGroup({
      id: new FormControl(),
      nameAuthor: new FormControl('', [Validators.required]),
      emailAuthor: new FormControl('', [Validators.required, Validators.email]),
      birthDateAuthor: new FormControl(),
    });
  }
  init() {
    if (this.edicion) {
      this.authorService.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          nameAuthor: new FormControl(data.nameAuthor),
          emailAuthor: new FormControl(data.emailAuthor),
          birthDateAuthor: new FormControl(data.birthDateAuthor),
        });
      });
    }
  }

  aceptar(): void {
    this.author.id = this.form.value['id'];
    this.author.nameAuthor = this.form.value['nameAuthor'];
    this.author.emailAuthor = this.form.value['emailAuthor'];
    this.author.birthDateAuthor = this.form.value['birthDateAuthor'];
    if (this.form.valid) {
        if (this.edicion) {
          //registrarlo en la base de  datos
          /*this.authorService.update(this.author).subscribe((data) =>
            this.router.navigate(['authors']).then(() => {
              window.location.reload();
            })
          );*/

          //actualiza el registro y tambien el listado

          this.authorService.update(this.author).subscribe((data) => {
            this.authorService.list().subscribe(data => {
              this.authorService.setList(data);//(enviando el listado al suscriptor)
            })
          });



        } else {
          //registrarlo en la base de  datos
          /*this.authorService.insert(this.author).subscribe((data) =>
            this.router.navigate(['authors']).then(() => {
              window.location.reload();
            })
          );*/

          this.authorService.insert(this.author).subscribe((data) => {
            this.authorService.list().subscribe(data => {
              this.authorService.setList(data);
            })
          });


        }
      } else{
        this.mensaje = "Agrege campos omitidos";
      }
  }
}
