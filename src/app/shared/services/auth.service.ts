import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router,private route:ActivatedRoute) { }

  isLoggedIn(){
    if(true){
      return true;
    }
    return false;
    console.log('activated route',this.route);
  }
}
