import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { FormControl } from '@angular/forms';

@Directive({
  selector: '[appShowError]',
})
export class ShowErrorDirective {
  private hasView = false;

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}

  @Input() set appShowError(control: FormControl) {
    if (control && control.invalid && control.touched) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}
