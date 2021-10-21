import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { StudentTableComponent } from './components/student-table/student-table.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'studentlist', component: StudentTableComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
