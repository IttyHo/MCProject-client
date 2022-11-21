import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material';
import { MainModule } from './main/main.module'; 
import { environment } from 'src/environments/environment';
import { GetOptionsService, ConfigurationService } from 'services';
import { DirectivesModule } from 'directives';
import { IonicModule } from '@ionic/angular';
import { CounselorsByTypeComponent } from './main/view/counselors-by-type/counselors-by-type.component';
import { UpdateConselorComponent } from './main/view/update-conselor/update-conselor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 

@NgModule({
  declarations: [
    AppComponent, ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MainModule,
    DirectivesModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule
 ],
  providers: [
    {provide: APP_INITIALIZER, useFactory: initOptions, deps: [GetOptionsService], multi: true},
    {provide: APP_INITIALIZER, useFactory: initConfig, deps: [ConfigurationService], multi: true},
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents:[CounselorsByTypeComponent],

})
export class AppModule { }

export function initOptions(getOptionsService: GetOptionsService) {
  return (_ => getOptionsService.initService(environment.options, environment.imgesPath));
  }

  export function initConfig(configurationService: ConfigurationService) {
    return (_ => configurationService.initConfiguration(environment.configPath));
    }
  
