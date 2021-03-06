import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchpipe'
})
export class SearchpipePipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.toLocaleLowerCase().includes(searchText);
    });
  }
}



// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'searchpipe'
// })
// export class SearchpipePipe implements PipeTransform {

//   transform(value: any[], filterString:string,props: string[]): any[] {
//     const resultArray = [];
//     if (value.length === 0 || filterString === '' || props[0] === '' || props[1].toString() === ''){
//       return value;
//     }
//     for (const item of value){
//       if ((item[props[0]].toLowerCase().includes(filterString.toLowerCase())) ||
//       (item[props[1]].toString().toLowerCase().includes(filterString.toLowerCase()))

//       ){
//         resultArray.push(item);
//       }
//     }
//     return resultArray;
//   }

// }
