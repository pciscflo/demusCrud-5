import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Author } from 'src/app/model/authors';
import { AuthorService } from 'src/app/service/author.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogoComponent } from './dialogo/dialogo.component';

@Component({
  selector: 'app-author-listar',
  templateUrl: './author-listar.component.html',
  styleUrls: ['./author-listar.component.css']
})
export class AuthorListarComponent implements OnInit{
  lista: Author[] = [];
  displayedColumns = ['id','nameAuthor','emailAuthor','birthDateAuthor','cantidad', 'accion01', 'accion02'];
  dataSource = new MatTableDataSource<Author>();
  @ViewChild(MatPaginator) paginator : MatPaginator;
  @ViewChild(MatSort) sort : MatSort;

  constructor(private authorService: AuthorService,
     private router: Router, private dialog:MatDialog){
  }
  ngOnInit(): void {
    this.authorService.list().subscribe(data => {

      for( var i = 0 ; i < data.length ; i++){

           data[i].cantidad  = 20;
      }

      this.dataSource.data = data; // asíncrona

      });
  }


  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }

  openDialog(id: string){
     const dialogRef = this.dialog.open(DialogoComponent);
     dialogRef.afterClosed().subscribe(result => {
        if(result){
           this.delete(id);
        }else{
          console.log("FALSE");
        }
     });
  }

  delete(id:string){
    this.authorService.delete(id).subscribe(() =>
        this.router.navigate(['authors']).then(() => {
          window.location.reload();
        }))
  }


}
