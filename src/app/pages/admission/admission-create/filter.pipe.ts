import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchText: string[]): any {
    if(!value) return [];
    if(!searchText) return value;
    return value.filter((info:any)=>{
      return info['reg'].toLowerCase().includes(searchText);
    })
  }

}
