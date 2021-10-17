import { HoverDirective } from './hover.directive';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { HomePageComponent } from './home-page/home-page.component';
import { SetupPageComponent } from './setup-page/setup-page.component';

@NgModule({
  declarations: [		
    AppComponent,
    UserComponent,
    HoverDirective,
    SearchPipe,
      HomePageComponent,
      SetupPageComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
