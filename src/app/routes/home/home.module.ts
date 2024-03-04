import { IconsComponent, MasterPageModule } from '$components';
import { SharedModule } from '$shared';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// Routing
import { MessagesModule } from 'primeng/messages';
import { routing } from './home.routes';

// Components
import { ReactiveFormsModule } from '@angular/forms';
import { ProgressBarModule } from 'primeng/progressbar';
import { ApiStateComponent } from './components/loan-payment/api-state/api-state.component';
import { ErrorComponent } from './components/loan-payment/error/error.component';
import { LoanPaymentComponent } from './components/loan-payment/loan-payment.component';
import { HomeComponent } from './home.component';
import { ShowErrorDirective } from './shared/directives/show-form-error.directive';
@NgModule({
  imports: [CommonModule, SharedModule, routing, MasterPageModule, IconsComponent, ReactiveFormsModule, MessagesModule, ProgressBarModule],
  declarations: [HomeComponent, LoanPaymentComponent, ErrorComponent, ShowErrorDirective, ApiStateComponent],
  providers: [],
  exports: [],
})
export class HomeModule {}
