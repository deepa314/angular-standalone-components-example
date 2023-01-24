import { Component, OnInit } from '@angular/core';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  standalone:true,
  imports:[MatCardModule ]
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
