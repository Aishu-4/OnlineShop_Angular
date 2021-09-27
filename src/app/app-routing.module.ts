import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { CarouselComponent } from './Home/carousel/carousel.component';


import { TopProductsListComponent } from './Home/top-products-list/top-products-list.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { ProductDetailsComponent } from './Retailer/product-details/product-details.component';
import { RegisterDetailsComponent } from './Retailer/register-details/register-details.component';
import { RegisterOTPComponent } from './Retailer/register-otp/register-otp.component';
import { RegisterComponent } from './Retailer/register/register.component';
import { UserForgotPswdComponent } from './Users/user-forgot-pswd/user-forgot-pswd.component';
import { UserOTPComponent } from './Users/user-otp/user-otp.component';
import { UserProfileComponent } from './Users/user-profile/user-profile.component';
import { UserRegisterComponent } from './Users/user-register/user-register.component';
import { WishlistComponent } from './Users/wishlist/wishlist.component';




const routes: Routes = [
  
  {path:'',component:CarouselComponent},
  {path:'NavBar',component:NavBarComponent},
  {path:'Login',component:LoginComponent},
  {path:'Register',component:RegisterComponent},
  {path:'RegisterOTP',component:RegisterOTPComponent},
  {path:'RegisterDetails',component:RegisterDetailsComponent},
  {path:'UserRegister',component:UserRegisterComponent},
  {path:'Forgot Password',component:UserForgotPswdComponent},
  {path:'UserOTP',component:UserOTPComponent},
  {path:'New Password',component:NewPasswordComponent},
  {path:'ProductDetails',component:ProductDetailsComponent},
  {path:'Admin1',component:AdminComponent},
  {path:'WishList',component:WishlistComponent},
  {path:'UserProfile',component:UserProfileComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
