import { inject, Injectable } from "@angular/core";
import {  CanActivateFn, Router, UrlTree } from "@angular/router";
import { AuthService } from "../services/auth.service";


export const authGuard:CanActivateFn=():boolean | UrlTree=>{
 const auth=inject(AuthService);
 const router=inject(Router);


    if(auth.isLoggedIn()){
      return true;
    }
    return router.createUrlTree(['auth/login']);

}
