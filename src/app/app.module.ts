import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';//add mano
import { AuthorComponent } from './component/author/author.component';
import { AuthorListarComponent } from './component/author/author-listar/author-listar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { CreateEditComponent } from './component/author/create-edit/create-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HeaderComponent } from './component/header/header.component';
import { MatMenuModule } from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import { NavbarComponent } from './component/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DialogoComponent } from './component/author/author-listar/dialogo/dialogo.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    AuthorListarComponent,
    CreateEditComponent,
    HeaderComponent,
    NavbarComponent,
    DialogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,//add mano
    MatTableModule,
    MatButtonModule,
    MatSortModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatGridListModule,
    MatToolbarModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
