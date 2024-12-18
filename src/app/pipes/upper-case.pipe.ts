import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'customUpperCase',
    standalone: true,
})

export class CustomUpperCase implements PipeTransform {
    transform(text: string) : string {
        return text.toUpperCase();
    }
    
}