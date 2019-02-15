import { NgModule } from '@angular/core';

import { FloodsPolandSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [FloodsPolandSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [FloodsPolandSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class FloodsPolandSharedCommonModule {}
