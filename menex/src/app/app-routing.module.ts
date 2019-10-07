import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InputComponent} from './input/input.component';
import {AutoCompleteComponent} from './auto-complete/auto-complete.component';
import {CheckBoxComponent} from './check-box/check-box.component';
import {DatepickerComponent} from './datepicker/datepicker.component';
import {RadioButtonComponent} from './radio-button/radio-button.component';
import {SelectComponent} from './select/select.component';
import {SliderComponent} from './slider/slider.component';
import {SliderToggleComponent} from './slider-toggle/slider-toggle.component';
import {MenuComponent} from './menu/menu.component';
import {SidenavComponent} from './sidenav/sidenav.component';
import {ToolBarComponent} from './tool-bar/tool-bar.component';
import {DividerComponent} from './divider/divider.component';
import {ExpansionPanelComponent} from './expansion-panel/expansion-panel.component';
import {GridListComponent} from './grid-list/grid-list.component';
import {ListComponent} from './list/list.component';
import {StepperComponent} from './stepper/stepper.component';
import {TabsComponent} from './tabs/tabs.component';
import {ButtonComponent} from './button/button.component';
import {ButtonToggleComponent} from './button-toggle/button-toggle.component';
import {BadgeComponent} from './badge/badge.component';
import {IconComponent} from './icon/icon.component';
import {ProgressComponent} from './progress/progress.component';
/*import {BottomSheetComponent} from './bottom-sheet/bottom-sheet.component';*/
import {DialogComponent} from './dialog/dialog.component';
import {SnackbarComponent} from './snackbar/snackbar.component';
import {TooltipComponent} from './tooltip/tooltip.component';
import {PaginatorComponent} from './paginator/paginator.component';
import {SortheaderComponent} from './sortheader/sortheader.component';
import {TableComponent} from './table/table.component';
import {ChipsComponent} from './chips/chips.component';




const routes: Routes = [
{ path:'Input',component: InputComponent },
{ path:'Autocomplete',component :AutoCompleteComponent},
{ path:'Checkbox',component:CheckBoxComponent},
{ path:'Datepicker',component:DatepickerComponent},
{ path:'Radio',component:RadioButtonComponent },
{ path:'Select',component:SelectComponent},
{ path:'Slider',component:SliderComponent},
{ path:'SliderToggle',component:SliderToggleComponent},
{ path:'Menu',component:MenuComponent},
{ path:'Sidenav',component:SidenavComponent},
{ path:'ToolBar',component:ToolBarComponent},
{ path:'Divider',component:DividerComponent},
{ path:'ExpansionPanel' ,component:ExpansionPanelComponent},
{ path:'Grid',component:GridListComponent},
{ path:'List',component:ListComponent},
{ path:'Stepper',component:StepperComponent},
{ path:'Tabs',component:TabsComponent},
{ path:'Button',component:ButtonComponent},
{ path:'Buttontoggle',component:ButtonToggleComponent},
{ path:'Badge',component:BadgeComponent},
{ path:'Icon',component:IconComponent},
{ path:'Progress',component:ProgressComponent},
/*{ path:'BottomSheet',component:BottomSheetComponent},*/
{ path:'Dialog',component:DialogComponent},
{ path:'Snackbar',component:SnackbarComponent},
{ path:'tool',component:TooltipComponent},
{ path:'Paginator',component:PaginatorComponent},
{ path:'Sortheader',component:SortheaderComponent},
{ path:'Table',component:TableComponent},
{ path:'Chips',component:ChipsComponent},
//除了以上几种path
{ path: '**', component:InputComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
