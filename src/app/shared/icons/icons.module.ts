import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeftArrowComponent } from './left-arrow';
import { RightArrowComponent } from './right-arrow';
import { XSymbolComponent } from './x-symbol';
import { MagnifyGlassComponent } from './magnify-glass';
import { HomeIconComponent } from './home-icon';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        LeftArrowComponent,
        RightArrowComponent,
        XSymbolComponent,
        MagnifyGlassComponent,
        HomeIconComponent
    ],
    exports: [
        LeftArrowComponent,
        RightArrowComponent,
        XSymbolComponent,
        MagnifyGlassComponent,
        HomeIconComponent
    ]
})
export class IconsModule { }
