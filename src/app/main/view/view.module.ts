import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view.component';
import {
  MatButtonModule, MatFormFieldModule,
  MatIconModule, MatOptionModule, MatSelectModule, MatTabsModule,
  MatTooltipModule} from '@angular/material';
import { CunselorsModule } from './cunselors/cunselors.module';
import { EntrepreneurModule } from './entrepreneur/entrepreneur.module';
import { ProjectsModule } from './projects/projects.module';
import { PaymentModule } from './payment/payment.module';
import { ProjectModule } from './project/project.module';
import { DateAndClockModule } from './date-and-clock/date-and-clock.module';
import { DirectivesModule } from 'directives';
import { AddProjectModule } from './add-project/add-project.module';
import { FormsModule } from '@angular/forms';
import { AddEntrepreneurModule } from './add-entrepreneur/add-entrepreneur.module';
import { OneEntrepreneurModule } from './one-entrepreneur/one-entrepreneur.module';
import { OneCounselorModule } from './one-counselor/one-counselor.module';
import { CounselorsByTypeModule } from './counselors-by-type/counselors-by-type.module';
import { AddCounselorModule } from './add-counselor/add-counselor.module';
import { AddCounselorTypeModule } from './add-counselor-type/add-counselor-type.module';
import { IonicModule } from '@ionic/angular';
import { OrdersModule } from './orders/orders.module';


@NgModule({
  declarations: [ViewComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    FormsModule,
    MatIconModule,
    EntrepreneurModule,
    CunselorsModule,
    MatButtonModule,
    MatTooltipModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    ProjectsModule,
    PaymentModule,
    ProjectModule,
    MatFormFieldModule,
    DateAndClockModule,
    DirectivesModule,
    AddProjectModule,
    AddCounselorModule,
    AddEntrepreneurModule,
    OneEntrepreneurModule,
    OneCounselorModule,
    CounselorsByTypeModule,
    AddCounselorTypeModule,
    IonicModule,
    OrdersModule
  ],
  exports: [ViewComponent],

})
export class ViewModule { }
