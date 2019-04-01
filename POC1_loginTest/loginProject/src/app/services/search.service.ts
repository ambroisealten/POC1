import { Injectable, Input } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable()
export class SearchService {
    private options: string[] = [];
    private optionsTaken:string[] = [];
    @Input() dataType : string;
    private urlBase : string = "http://localhost:8080/";
    private urlAPI : string;

    constructor(private httpClient: HttpClient){

    }

    filter(value: string): string[] {
        if(value === null || value.length === 0) return [];
        const filterValue = value.toLowerCase();
        return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0).sort((one, two) => (one < two ? -1 : 1));
      }

    setUrlAPI(dataType){
      this.urlAPI = this.urlBase+this.dataType+"/";
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
          .get(this.urlAPI, options)
          .subscribe(data => {
            for(let item of JSON.parse(JSON.stringify(data))){
                this.options.push(item["mail"]);
            }
            callback(this.options);
          }, error => {
            console.log(error);// Error getting the data
          });
    }

    getUser(mail : string,callback){
        let token = window.sessionStorage.getItem("bearerToken");
       let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token != "" ? token : ''});
    
        let options = { headers: headers };
    
        this.httpClient
          .get(this.urlAPI+'?mail='+mail, options)
          .subscribe(data => {
            callback(JSON.parse(JSON.stringify(data)));
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

    setDataType(newDataType : string){
      this.dataType = newDataType;
      this.setUrlAPI(this.dataType);
    }

    getDataType(){
      return this.dataType;
    }
}