import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOrdersComponent } from "./orders/list-orders/list-orders.component";
import { ProductsModule } from './products/products.module';
import { SiteFrameworkModule } from './site-framework/site-framework.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListOrdersComponent,
    ProductsModule,
    SiteFrameworkModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
