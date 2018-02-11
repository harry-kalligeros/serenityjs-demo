import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TicketsComponent } from './tickets/tickets.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { PaymentComponent } from './payment/payment.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'tickets', component: TicketsComponent },
	{ path: 'schedule', component: ScheduleComponent },
	{ path: 'speakers', component: SpeakersComponent },
	{ path: 'payment', component: PaymentComponent },
	{ path: 'thankyou', component: ThankyouComponent },
	{ path: 'admin', component: AdminComponent },
	{ path: 'login', component: LoginComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
