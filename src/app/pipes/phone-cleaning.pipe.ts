import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'phoneclean',
    standalone: true,
})

export class PhoneCleaning implements PipeTransform {
    transform(phone: any): any {
        return phone ? phone.replace(/[^+0-9]/g, '') : phone
    }
}