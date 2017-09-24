import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { AuthServices } from "./shared/auth.services";
import { ProductComponent } from './product/product.component';
import { JQ_TOKEN } from './common/jquery.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductServices } from "./shared/product.services";
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule } from "@angular/router";
import { appRoutes } from './route';
import { ProductListResolver } from "./shared/product-list-resolver";
import { SimpleModalComponent } from "./common/simple-modal";
import { ModalTriggerDirective } from "./common/modal.trigger.directive";

declare let jQuery : Object;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ProductComponent,
    AddProductComponent,
    ProductDetailsComponent,
    SimpleModalComponent,
    ModalTriggerDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthServices,
    ProductServices,
    ProductListResolver,
    {provide: JQ_TOKEN, useValue: jQuery}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
