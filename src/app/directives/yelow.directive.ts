import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[yelow]',
    standalone: true,
})

export class YelowDirective {
color = 'transparent';

@HostBinding('style.backgroundColor')
get backgroundColor() {
    return this.color
}


@HostListener('mouseenter')
    enter() {
        this.color = '#F0BA4E';
    }

@HostListener('mouseleave')
    leave() {
        this.color = 'transparent';
    }
}