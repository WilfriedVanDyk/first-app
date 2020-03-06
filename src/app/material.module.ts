import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input'; //wat is dit???

@NgModule({
imports: [MatButtonModule, MatInputModule],
exports: [MatButtonModule, MatInputModule]
})

export class MaterialModule {
    
}