import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, UsersModule, AdminModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
