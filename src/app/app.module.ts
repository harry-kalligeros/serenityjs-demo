import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { RegistrationComponent } from './registration/registration.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { TicketsComponent } from './tickets/tickets.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { PaymentComponent } from './payment/payment.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { RegistrationService } from './registration.service';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { TicketService } from './ticket.service';
import { TicketTableComponent } from './admin/ticket-table.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';



@NgModule({
	declarations: [
		AppComponent,
		NavComponent,
		FooterComponent,
		HomeComponent,
		TicketsComponent,
		ScheduleComponent,
		SpeakersComponent,
		RegistrationComponent,
		PaymentComponent,
		ThankyouComponent,
		AdminComponent,
		LoginComponent,
		TicketTableComponent
	],
	imports: [
		BrowserModule, AppRoutingModule, CommonModule, FormsModule, BsDatepickerModule.forRoot()
	],
	providers: [ RegistrationService, TicketService ],
	bootstrap: [AppComponent]
})
export class AppModule { }
