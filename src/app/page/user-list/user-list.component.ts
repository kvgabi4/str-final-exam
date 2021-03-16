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

  onDelete(user: User):void {
    this.userService.delete(user);


    this.router.navigate([]);

    // location.reload();
    // this.notifyService.showSuccessWithTimeout(`
    //   <table class="table">
    //     <thead>
    //       <tr>
    //         <th>customerID</th>
    //         <th>productID</th>
    //         <th>amount</th>
    //         <th>status</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       <tr class="text-danger">
    //         <td>${order.customerID}</td>
    //         <td>${order.productID} </td>
    //         <td>${order.amount}</td>
    //         <td>${order.status}</td>
    //       </tr>
    //     </tbody>
    //   </table>
    //   </span>`,
    //   "You have deleted this event:",
    //   5000)
  }

}
