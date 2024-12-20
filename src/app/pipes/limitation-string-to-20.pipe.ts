import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'limitionLenth',
    standalone: true,
})

export class LimitationString implements 
PipeTransform {
    transform(text: string | null | undefined): string {
        if (!text) return '';
        return text.length > 20 ?
    text.slice(0, 23) + '...' : text;
    }
}