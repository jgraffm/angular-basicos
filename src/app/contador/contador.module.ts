import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';
import { AppModule } from '../app.module';

@NgModule({
    declarations:[
        ContadorComponent
    ],
    exports:[
        ContadorComponent
    ]
})

export class ContadorModule{
    
}