import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CdiarySharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [CdiarySharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [CdiarySharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CdiarySharedModule {
  static forRoot() {
    return {
      ngModule: CdiarySharedModule
    };
  }
}
