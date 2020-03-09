import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input'; //wat is dit???
let MaterialModule = class MaterialModule {
};
MaterialModule = __decorate([
    NgModule({
        imports: [MatButtonModule, MatInputModule],
        exports: [MatButtonModule, MatInputModule]
    })
], MaterialModule);
export { MaterialModule };
//# sourceMappingURL=material.module.js.map