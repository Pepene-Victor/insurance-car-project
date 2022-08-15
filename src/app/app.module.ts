import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CarWrapperComponent} from "./components/car/car-wrapper/car-wrapper.component";
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {InsuranceWrapperComponent} from "./components/insurance/insurance-wrapper/insurance-wrapper.component";
import {CarListComponent} from "./components/car/car-list/car-list.component";
import {CarComponent} from "./components/car/car.component";
import {AddNewCarComponent} from "./components/car/add-new-car/add-new-car.component";
import {InsuranceComponent} from "./components/insurance/insurance.component";
import {NewInsuranceComponent} from "./components/insurance/new-insurance/new-insurance.component";
import {InsuranceListComponent} from "./components/insurance/insurance-list/insurance-list.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { OwnersComponent } from './components/owners/owners.component';
import { AddNewOwnerComponent } from './components/owners/add-new-owner/add-new-owner.component';
import {OwnerWrapperComponent} from "./components/owners/owner-wrapper/owner-wrapper.component";
import {OwnersListComponent} from "./components/owners/owners-list/owners-list.component";
import { ChangeBackgroundDirective } from './directives/change-background.directive';
import { InputFocusDirective } from './directives/input-focus.directive';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ZebraStripedTableDirective } from './directives/zebra-striped-table.directive';
import { TestComponent } from './test/test.component';
import {CommonModule} from "@angular/common";
import { MyFirstPipePipe } from './pipes/my-first-pipe.pipe';
import { CarPlatesPipe } from './pipes/car-plates.pipe';
import {InputTextModule} from 'primeng/inputtext';
import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';
import {RadioButtonModule} from 'primeng/radiobutton';

@NgModule({
  declarations: [
    AppComponent,
    CarWrapperComponent,
    HeaderComponent,
    FooterComponent,
    OwnerWrapperComponent,
    InsuranceWrapperComponent,
    CarListComponent,
    CarComponent,
    AddNewCarComponent,
    InsuranceComponent,
    NewInsuranceComponent,
    InsuranceListComponent,
    OwnersComponent,
    AddNewOwnerComponent,
    OwnersListComponent,
    ChangeBackgroundDirective,
    InputFocusDirective,
    ButtonsComponent,
    ZebraStripedTableDirective,
    TestComponent,
    MyFirstPipePipe,
    CarPlatesPipe,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        CommonModule,
        InputTextModule,
        AccordionModule,
        ReactiveFormsModule,
        RadioButtonModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
