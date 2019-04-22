import { Component, OnInit } from '@angular/core';
import { ExcelService } from '../services/excel.service';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: Array<User>;

  constructor(private excelService: ExcelService, private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(
      (response: Array<User>) => {
        this.users = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.users, 'users');
  }

}
