import { Routes } from '@angular/router';
import { CreateaccountComponent } from './pages/createaccount/createaccount.component';
import { WellcomeComponent } from './pages/wellcome/wellcome.component';
import { CompanyRegistrationComponent } from './pages/company-registration/company-registration.component';
import { CompanyViewComponent } from './pages/company-view/company-view.component';

export const routes: Routes = [
	{
		path: 'cadastrar-usuario',
		component:CreateaccountComponent
	},
	{
		path: 'seja-bem-vindo',
		component:WellcomeComponent
	},
	{
		path: 'cadastrar-empresa',
		component:CompanyRegistrationComponent
	},
	{
		path: 'configuracoes-empresa',
		component:CompanyViewComponent
	},
	{
		path: '',
		redirectTo:'/cadastrar-usuario',
		pathMatch: 'full'
	}

];
