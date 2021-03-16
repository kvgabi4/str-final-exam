import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$: Observable<User[]> = this.userService.getAll();
  // clicked: boolean = false;

  phrase: string = '';
  filterKey: string = 'name';
  filterKeys: string[] = Object.keys(new User());

  columnKey: string = 'id';

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onColumnSelect(key: string): void {
    this.columnKey = key;
  }

  onDelete(user: User): void {
    if (window.confirm('Delete this user?')) {
      this.userService.delete(user)
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.navigate([this.router.url]);
    }
  }

}
