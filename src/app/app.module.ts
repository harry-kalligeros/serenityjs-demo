import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { RegistrationComponent } from './registration/registration.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { TicketsComponent } from './tickets/tickets.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SpeakersComponent } from './speakers/speakers.component';


@NgModule({
	declarations: [
		AppComponent,
		NavComponent,
		FooterComponent,
		HomeComponent,
		TicketsComponent,
		ScheduleComponent,
		SpeakersComponent,
		RegistrationComponent
	],
	imports: [
		BrowserModule, AppRoutingModule, CommonModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
