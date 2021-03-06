import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { LikeComponent } from './like/like.component';
import { NewOfferFormComponent } from './new-offer-form/new-offer-form.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SignupFormComponent } from "./signup-form/signup-form.component";
import { ChangePasswordComponent } from './change-password/change-password.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { RouterModule } from "@angular/router";
import { NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offers/offers.component';
import { SelectedOffersComponent } from './selected-offers/selected-offers.component';
import {HttpClientJsonpModule, HttpClientModule} from "@angular/common/http";
import { SingleOfferComponent } from './single-offer/single-offer.component';
import { FooterComponent } from './footer/footer.component';
import {OfferListService} from "../services/offer-list.service";

@NgModule({
  declarations: [
    AppComponent,
    FavouriteComponent,
    LikeComponent,
    NewOfferFormComponent,
    SignupFormComponent,
    ChangePasswordComponent,
    BsNavbarComponent,
    HomeComponent,
    OffersComponent,
    SelectedOffersComponent,
    SingleOfferComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    HttpClientModule,
    HttpClientJsonpModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'offer/:id', component: SingleOfferComponent},
      {path: 'offers', component: OffersComponent},
      {path: 'selected-offers', component: SelectedOffersComponent},
      {path: 'new-offer', component: NewOfferFormComponent},
      {path: 'sign-up', component: SignupFormComponent},
    ]),
  ],
  providers: [OfferListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
