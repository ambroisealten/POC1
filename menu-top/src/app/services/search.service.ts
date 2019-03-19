import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {
    private options: string[] = ['One', 'Two', 'Three','Viva',"L'Algérie",'Java','JavaScript','JEE',"C","C++","C#","CPP"];
    private optionsTaken:string[] = [];

    filter(value: string): string[] {
        if(value === null || value.length === 0) return [];
        const filterValue = value.toLowerCase();
        return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0).sort((one, two) => (one < two ? -1 : 1));
      }

    getOptions(){
        /*
        * TO-DO : prendre les données dans la base (pas en local comme fait ici présent)
        */
        return this.options;
    }

    addOptionTaken(option : string){
        if(!this.optionsTaken.includes(option)){
            this.optionsTaken.push(option);
        }
        return this.optionsTaken;
    }

    addInDB(option : string){
        if(!this.options.includes(option)){
            this.options.push(option);
        }
    }

    getOptionsTaken(){
        return this.optionsTaken;
    }

    deleteOptionTaken(option : string){
        if(this.optionsTaken.includes(option)){
            this.optionsTaken.splice(this.optionsTaken.indexOf(option),1);
        }
        return this.optionsTaken;
    }
}