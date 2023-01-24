import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  standalone:true,
  imports:[MatCardModule ]
})
export default class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}


