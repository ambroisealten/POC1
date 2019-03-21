import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable()
export class SearchService {
    private options: string[] = [];
    private optionsTaken:string[] = [];

    constructor(private httpClient: HttpClient){

    }

    filter(value: string): string[] {
        if(value === null || value.length === 0) return [];
        const filterValue = value.toLowerCase();
        return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0).sort((one, two) => (one < two ? -1 : 1));
      }

    getOptions(callback){
        /*
        * TO-DO : prendre les données dans la base (pas en local comme fait ici présent)
        */

       let token = window.sessionStorage.getItem("bearerToken");
       let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token != "" ? token : ''});
    
        let options = { headers: headers };
    
        this.httpClient
          .get('http://localhost:8080/users', options)
          .subscribe(data => {
            for(let item of JSON.parse(JSON.stringify(data))){
                this.options.push(item["name"]+" "+item['forname']);
            }
            console.log(this.options);
            console.log("ICICICICICICICICICICIC"+this.options);
            callback(this.options);
          }, error => {
            console.log(error);// Error getting the data
          });
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