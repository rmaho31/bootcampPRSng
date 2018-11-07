import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
      console.log('term', searchText);
    
      return searchText 
          ? items.filter(item => item.title.indexOf(searchText) !== -1)
          : items;
  }
  
}
