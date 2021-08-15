import { NgModule } from '@angular/core';

import { StringArrayPipe } from './string-array.pipe';

@NgModule({
  declarations: [StringArrayPipe],
  exports: [StringArrayPipe]
})
export class CommonPipeModule {
}
