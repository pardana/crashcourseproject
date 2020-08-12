import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StaticMessagesComponent } from './static-messages/static-messages.component';
import { DynamicMessagesComponent } from './dynamic-messages/dynamic-messages.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { StylingComponent } from './styling/styling.component';
import { StylingCssClassComponent } from './styling-css-class/styling-css-class.component';
import { IfElseConditionComponent } from './if-else-condition/if-else-condition.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';
import { ForLoopComponent } from './for-loop/for-loop.component';
import { ClickEventComponent } from './click-event/click-event.component';
import { MouseEventComponent } from './mouse-event/mouse-event.component';
import { InbuildDirectiveComponent } from './inbuild-directive/inbuild-directive.component';
import { MyColorDirective } from './directive/my-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    StaticMessagesComponent,
    DynamicMessagesComponent,
    PropertyBindingComponent,
    StylingComponent,
    StylingCssClassComponent,
    IfElseConditionComponent,
    SwitchCaseComponent,
    ForLoopComponent,
    ClickEventComponent,
    MouseEventComponent,
    InbuildDirectiveComponent,
    MyColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
