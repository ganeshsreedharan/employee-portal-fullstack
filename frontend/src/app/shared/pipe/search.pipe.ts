import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(items: any, term: string): any {
    if (!term || !items) {
      return items;
    }
    const result = this.filter(items, term);
    return result.length > 0 ? result : [];
  }


   filter(items: Array<{ [key: string]: any }>, term: string): Array<{ [key: string]: any }> {
    const toCompare = term.toLowerCase();

    return items.filter((item) => {
      for (const property in item) {
        if (item[property] === null || item[property] === undefined) {
          continue;
        }
        if (item[property].toString().toLowerCase().includes(toCompare)) {
          return true;
        }
      }
      return false;
    });
  }

}
