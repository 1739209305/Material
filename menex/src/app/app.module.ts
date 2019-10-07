import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material';

import {MatExpansionModule, MatInputModule} from '@angular/material';
import { InputComponent } from './input/input.component';
import {MatCardModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { CheckBoxComponent } from './check-box/check-box.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { SliderComponent } from './slider/slider.component';
import { SliderToggleComponent } from './slider-toggle/slider-toggle.component';
import { SelectComponent } from './select/select.component';
import { MenuComponent } from './menu/menu.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import {MatAutocompleteModule} from '@angular/material';
import {MatRadioModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material';
import {MatDatepickerModule,MatNativeDateModule} from '@angular/material';
import {MatSliderModule} from '@angular/material';
import {MatSlideToggleModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';
import {MatMenuModule} from '@angular/material';

import {MatToolbarModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material';
import {MatButtonToggleModule} from '@angular/material';
import {MatBadgeModule} from '@angular/material';
import {MatChipsModule} from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material';
import {MatRippleModule} from '@angular/material';
import {MatDividerModule} from '@angular/material';
import {MatGridListModule} from '@angular/material';
import {MatStepperModule} from '@angular/material';
import {MatTabsModule} from '@angular/material';
import {MatSnackBarModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSortModule} from '@angular/material';
import { DividerComponent } from './divider/divider.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { ListComponent } from './list/list.component';
import { StepperComponent } from './stepper/stepper.component';
import { TabsComponent } from './tabs/tabs.component';
import { TreeComponent } from './tree/tree.component';
import { BadgeComponent } from './badge/badge.component';
import { IconComponent } from './icon/icon.component';
import { ProgressComponent } from './progress/progress.component';
import { PaginatorComponent } from './paginator/paginator.component';
import {MatListModule} from '@angular/material';
import {MatTreeModule, MatIconModule, MatButtonModule} from '@angular/material';
import {MatProgressBarModule} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { SidenavleftComponent } from './sidenavleft/sidenavleft.component';
import { SidenavrightComponent } from './sidenavright/sidenavright.component';
import {AppRoutingModule} from './app-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ButtonComponent } from './button/button.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { DialogComponent } from './dialog/dialog.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SortheaderComponent } from './sortheader/sortheader.component';
import { TableComponent } from './table/table.component';
import { ChipsComponent } from './chips/chips.component';
import {MatTableModule} from '@angular/material';
import {MatTooltipModule} from '@angular/material'
import {
  DialogAddressFormComponent,
  DialogFruitComponent,
  DialogNeptuneComponent,
  DialogNeptuneIFrameComponent,
  DialogWelcomeComponent,
} from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    AutoCompleteComponent,
    RadioButtonComponent,
    CheckBoxComponent,
    DatepickerComponent,
    SliderComponent,
    SliderToggleComponent,
    SelectComponent,
    MenuComponent,
    ToolBarComponent,
    DividerComponent,
    ExpansionPanelComponent,
    GridListComponent,
    ListComponent,
    StepperComponent,
    TabsComponent,
    TreeComponent,
    BadgeComponent,
    IconComponent,
    ProgressComponent,
    PaginatorComponent,
    HeaderComponent,
    SidenavleftComponent,
    SidenavrightComponent,
    SidenavComponent,
    ButtonComponent,
    ButtonToggleComponent,
    DialogComponent,
    SnackbarComponent,
    TooltipComponent,
    SortheaderComponent,
    TableComponent,
    ChipsComponent,
    DialogAddressFormComponent,
    DialogFruitComponent,
    DialogNeptuneComponent,
    DialogNeptuneIFrameComponent,
    DialogWelcomeComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatExpansionModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatMenuModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule,
    MatStepperModule,
    MatTabsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSortModule,
    MatTreeModule,
    MatProgressBarModule,
    AppRoutingModule,
    MatTableModule,
    MatTooltipModule

    



  ],
  entryComponents:  [
  DialogAddressFormComponent,
  DialogFruitComponent,
  DialogNeptuneComponent,
  DialogNeptuneIFrameComponent,
  DialogWelcomeComponent,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
