import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { MenuItemComponent } from './menu/menu/menu-item/menu-item.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { PurchaseRequestListComponent } from './purchaserequest/purchaserequest-list/purchaserequest-list.component';
import { PurchaseRequestEditComponent } from './purchaserequest/purchaserequest-edit/purchaserequest-edit.component';
import { PurchaseRequestCreateComponent } from './purchaserequest/purchaserequest-create/purchaserequest-create.component';
import { PurchaseRequestDetailComponent } from './purchaserequest/purchaserequest-detail/purchaserequest-detail.component';
import { LineItemCreateComponent } from './lineitem/lineitem-create/lineitem-create.component';
import { LineItemEditComponent } from './lineitem/lineitem-edit/lineitem-edit.component';
import { LineItemListComponent } from './lineitem/lineitem-list/lineitem-list.component';
import { LineItemDetailComponent } from './lineitem/lineitem-detail/lineitem-detail.component';
import { MenuComponent } from './menu/menu/menu.component';
import { HomeComponent } from './home/home/home.component';
import { AboutComponent } from './about/about/about.component';

import { SystemService } from './services/system.service';
import { CookieService } from 'ngx-cookie-service';
import { BoolDisplayPipe } from './pipe/bool-display.pipe';
import { SortPipe } from './pipe/sort.pipe';
import { PurchaseRequestReviewComponent } from './purchaserequest/purchaserequest-review/purchaserequest-review.component';
import { SearchPipe } from './pipe/search.pipe';
import { SearchModalComponent } from './modals/searchmodal/searchmodal.component';
import { VendorPurchaseOrderComponent } from './vendor/vendor-purchaseorder/vendor-purchaseorder.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent,
    UserEditComponent,
    UserLoginComponent,
    UserCreateComponent,
    VendorListComponent,
    VendorDetailComponent,
    VendorEditComponent,
    VendorCreateComponent,
    ProductCreateComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    MenuItemComponent,
    PurchaseRequestListComponent,
    PurchaseRequestEditComponent,
    PurchaseRequestCreateComponent,
    PurchaseRequestDetailComponent,
    PurchaseRequestReviewComponent,
    LineItemCreateComponent,
    LineItemEditComponent,
    LineItemListComponent,
    LineItemDetailComponent,
    BoolDisplayPipe,
    SortPipe,
    PurchaseRequestReviewComponent,
    SearchPipe,
    SearchModalComponent,
    VendorPurchaseOrderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CookieService,
  SystemService],
  bootstrap: [AppComponent],
  exports: [UserListComponent,
    UserDetailComponent,
    UserEditComponent,
    UserLoginComponent,
    UserCreateComponent,
    VendorListComponent,
    VendorDetailComponent,
    VendorEditComponent,
    VendorCreateComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    MenuItemComponent,
    ProductCreateComponent,
    ProductListComponent,
    ProductEditComponent,
    PurchaseRequestListComponent,
    PurchaseRequestEditComponent,
    PurchaseRequestCreateComponent,
    PurchaseRequestDetailComponent,
    LineItemCreateComponent,
    LineItemEditComponent,
    LineItemListComponent,
    LineItemDetailComponent,
    PurchaseRequestReviewComponent,
    SearchModalComponent,
    VendorPurchaseOrderComponent]
})
export class AppModule { }
