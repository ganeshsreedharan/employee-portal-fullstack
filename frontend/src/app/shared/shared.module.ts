import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './component/spinner/spinner.component';
import { ToasterMessageComponent } from './component/toaster-message/toaster-message.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SearchPipe } from './pipe/search.pipe';
@NgModule({
  declarations: [SpinnerComponent, ToasterMessageComponent, SearchPipe],
  imports: [
    CommonModule,
    NgxSpinnerModule
  ],
  exports: [
    SpinnerComponent,
    ToasterMessageComponent,
    SearchPipe
  ]
})
export class SharedModule { }
