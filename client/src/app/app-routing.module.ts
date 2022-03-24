import { AuthGuard } from './_guards/auth.guard';
import { MessagesComponent } from './messages/messages.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* initial, inainte sa pun verificare pe fiecare ramura a aplicatiei
const routes: Routes = [
  {path : '', component: HomeComponent},
  {path : 'members', component: MemberListComponent, canActivate: [AuthGuard]},
  {path : 'members/:id', component: MemberDetailComponent},
  {path : 'lists', component: ListsComponent},
  {path : 'messages', component: MessagesComponent},
  {path : '**', component: HomeComponent, pathMatch: 'full'},  //cand introduce o cale ce nu exista
];
*/

//daca vreau sa pun verificare pe mai  multe componente, adica daca userul nu este logat sa nu poti accesa acea ramura
const routes: Routes = [
  {path : '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path : 'members', component: MemberListComponent, canActivate: [AuthGuard]},
      {path : 'members/:id', component: MemberDetailComponent},
      {path : 'lists', component: ListsComponent},
      {path : 'messages', component: MessagesComponent}
    ]
  },
  {path : '**', component: HomeComponent, pathMatch: 'full'},  //cand introduce o cale ce nu exista
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
