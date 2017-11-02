import { BrowserModule } from '@angular/platform-browser';
import { NgModule, forwardRef } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule } from '@angular/http';
import 'hammerjs';

/**Services**/
import { LayoutService } from './services/layout/layout.service';
import { UserService } from './services/user/user.service';
import { UtilService } from './services/util/util.service';


/**Components**/
import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpModule
  ],
  providers: [
    forwardRef(() => LayoutService),
    UserService,
    UtilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
