import {
  ContentChild,
  Directive,
  EmbeddedViewRef,
  HostBinding,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[geochemButton]',
})
export class ButtonDirective {
  @ContentChild(`loader`)
  loaderTmp!: TemplateRef<any>;

  constructor(private viewContainerRef: ViewContainerRef) {}

  private _loader = false;

  @HostBinding('class')
  classes = `py-1.5 px-4 flex justify-center items-center space-x-1  transition ease-in duration-200
  text-center text-sm  tracking-tight
  shadow focus:outline-none focus:ring-2 focus:ring-offset-2 rounded uppercase disabled:opacity-50 disabled:cursor-not-allowed`;

  @Input()
  @HostBinding('loader')
  get loader() {
    return this._loader;
  }

  set loader(status) {
    this.viewContainerRef.clear();

    if (status) this.viewContainerRef.createEmbeddedView(this.loaderTmp);

    this._loader = status;
  }
}
