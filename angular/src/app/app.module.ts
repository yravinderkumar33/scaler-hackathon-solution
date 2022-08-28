import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { CommitRevisionsComponent } from './components/commit-revisions/commit-revisions.component';

@NgModule({
  declarations: [AppComponent, AuthComponent, CommitRevisionsComponent],
  imports: [BrowserModule, AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
