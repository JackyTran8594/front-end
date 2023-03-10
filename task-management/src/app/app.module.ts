import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ThemeModule } from './_theme/theme.module';
import { IconsProviderModule } from './_theme/iconsProvider.module';
import { NgZorroModule } from './_theme/ng-zorro.module';
import { CoreModule } from './_core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    IconsProviderModule.forRoot()
    // ShareModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
