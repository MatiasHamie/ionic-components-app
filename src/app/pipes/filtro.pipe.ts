import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[],
            texto: string = '',
            columna: string = ''): any[] {

    console.log(texto)
    if (texto === '' || !arreglo) return arreglo;

    texto = texto.toLowerCase();
    return arreglo.filter(
      // item => item.title.toLowerCase().includes(texto)
      // ahora es dinamico, mandas especificamente q queres buscar como argumento
      item => item[columna].toLowerCase().includes(texto)
    );
  }

}
