import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { AuthServices } from './shared/auth.services';
import { ProductComponent } from './product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductServices } from './shared/product.services';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './route';
import { ProductListResolver } from './shared/product-list-resolver';
import { DialogComponent } from './common/dialog.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AdminProductComponent } from './admin-product/admin-product.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ProductComponent,
    AddProductComponent,
    ProductDetailsComponent,
    DialogComponent,
    AdminProductComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthServices,
    ProductServices,
    ProductListResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
