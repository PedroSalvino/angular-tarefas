import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { PedroHomeComponent } from './pedro-home/pedro-home.component';
import { PedroTasksComponent } from './pedro-tasks/pedro-tasks.component';
import { PedroTasksService } from './pedro-tasks.service';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: PedroHomeComponent },
      { path: 'tasks', component: PedroTasksComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    NavbarComponent,
    PedroHomeComponent,
    PedroTasksComponent,
  ],
  bootstrap: [AppComponent],
  providers: [PedroTasksService],
})
export class AppModule {}
