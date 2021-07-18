import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: '[dropdownDirective]'
})

export class DropdownDirective {
  @HostBinding('method.dropdown()') isOpen = false;

  @HostListener('click') click()  {
    this.isOpen = !this.isOpen;
  }
}
