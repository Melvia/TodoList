export interface IItem {
    id:number,
    text:string,
    importance?: string,
    isDone:boolean
  };

export interface IApp {
    items: IItem[];
    text: string,
    isDone: boolean,
    importance: string,
    filterType: number
  } 