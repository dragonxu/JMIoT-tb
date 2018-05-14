import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControllerPanelComponent } from './controller-panel/controller-panel.component';
import {MainPanelComponent} from "./main-panel.component";
import {SensorPanelComponent} from "./sensor-panel/sensor-panel.component";
import { SensorComponent } from './sensor-panel/sensor/sensor.component';
import { TwoStateComponent } from './controller-panel/two-state/two-state.component';
import { ThreeStateComponent } from './controller-panel/three-state/three-state.component';
import {TransformPipe} from "./sensor-panel/sensor/transform-pipe";
import { TimePipePipe } from './time-pipe.pipe';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import {ChartModule,HIGHCHARTS_MODULES} from 'angular-highcharts';
import stock from 'highcharts/modules/stock.src';
import more from 'highcharts/highcharts-more.src';

export function highchartsModules() {
  return [stock,more];
}
@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    ChartModule,
  ],
  exports: [
    MainPanelComponent
  ],
  declarations: [
    ControllerPanelComponent,
    SensorPanelComponent,
    MainPanelComponent,
    SensorComponent,
    TwoStateComponent,
    ThreeStateComponent,
    TransformPipe,
    TimePipePipe
  ],
  providers: [{provide:HIGHCHARTS_MODULES,useFactory:highchartsModules}],
})
export class MainPanelModule { }
