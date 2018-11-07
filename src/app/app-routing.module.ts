import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';

import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorPurchaseOrderComponent } from './vendor/vendor-purchaseorder/vendor-purchaseorder.component';

import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';

import { PurchaseRequestListComponent } from './purchaserequest/purchaserequest-list/purchaserequest-list.component';
import { PurchaseRequestCreateComponent } from './purchaserequest/purchaserequest-create/purchaserequest-create.component';
import { PurchaseRequestDetailComponent } from './purchaserequest/purchaserequest-detail/purchaserequest-detail.component';
import { PurchaseRequestEditComponent } from './purchaserequest/purchaserequest-edit/purchaserequest-edit.component';
import { PurchaseRequestReviewComponent } from './purchaserequest/purchaserequest-review/purchaserequest-review.component'
import { LineItemListComponent } from './lineitem/lineitem-list/lineitem-list.component';
import { LineItemCreateComponent } from './lineitem/lineitem-create/lineitem-create.component';
import { LineItemDetailComponent } from './lineitem/lineitem-detail/lineitem-detail.component';
import { LineItemEditComponent } from './lineitem/lineitem-edit/lineitem-edit.component';



import { HomeComponent } from './home/home/home.component';
import { AboutComponent } from './about/about/about.component';

const routes: Routes = [
  {path:'', redirectTo: '/users/login', pathMatch: 'full'},
  {path:'users/list', component: UserListComponent},
  {path:'users/create', component: UserCreateComponent},
  {path:'users/detail/:id', component: UserDetailComponent},
  {path:'users/edit/:id', component: UserEditComponent},
  {path:'users/login', component: UserLoginComponent},
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'vendors/list', component: VendorListComponent},
  {path:'vendors/create', component: VendorCreateComponent},
  {path:'vendors/detail/:id', component: VendorDetailComponent},
  {path:'vendors/edit/:id', component: VendorEditComponent},
  {path:'vendors/purchaseorder/:id', component: VendorPurchaseOrderComponent},
  {path:'products/list', component: ProductListComponent},
  {path:'products/create', component: ProductCreateComponent},
  {path:'products/detail/:id', component: ProductDetailComponent},
  {path:'products/edit/:id', component: ProductEditComponent},
  {path:'purchaserequests/list', component: PurchaseRequestListComponent},
  {path:'purchaserequests/create', component: PurchaseRequestCreateComponent},
  {path:'purchaserequests/detail/:id', component: PurchaseRequestDetailComponent},
  {path:'purchaserequests/edit/:id', component: PurchaseRequestEditComponent},
  {path:'purchaserequests/review', component: PurchaseRequestReviewComponent},
  {path:'lineitems/list/:id', component: LineItemListComponent},
  {path:'lineitems/create/:id', component: LineItemCreateComponent},
  {path:'lineitems/detail/:id', component: LineItemDetailComponent},
  {path:'lineitems/edit/:id', component: LineItemEditComponent},
  {path:'**', component: UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
