import { Injectable } from '@angular/core';
import { toolCategoriesInterFace } from '../interfaces/tool-categories-interface';

@Injectable({
  providedIn: 'root',
})
export class DataServices {
  toolCategoriesData: toolCategoriesInterFace[] = [
    {
      id: 'PDF-tools',
      toolCategoryName: 'PDF Tools',
    },
     {
      id: 'image-tools',
      toolCategoryName: 'Image Tools',
    },
     {
      id: 'converterTools',
      toolCategoryName: 'Converter Tools',
    },
  ]

  ngOnInit() {

  }

}
