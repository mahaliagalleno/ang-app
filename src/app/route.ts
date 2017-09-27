import { AdminProductComponent } from './admin-product/admin-product.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListResolver } from './shared/product-list-resolver';


export const appRoutes: Routes = [
    {path: 'products', component: HomeComponent, resolve: {products: ProductListResolver} },
    {path: 'products/AdminProduct', component: AdminProductComponent},
    {path: 'products/:PID', component: ProductDetailsComponent },
    {path: '', redirectTo: '/products', pathMatch: 'full'}
];
