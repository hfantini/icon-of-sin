import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { DglibModule } from 'dographics-library';

@NgModule(
{
    declarations: 
    [
        AppComponent
    ],
    imports: 
    [
        BrowserModule,
        RoutingModule,
        DglibModule
    ],
    providers: 
    [

    ],
    bootstrap: 
    [
        AppComponent
    ]
})
export class AppModule { }
