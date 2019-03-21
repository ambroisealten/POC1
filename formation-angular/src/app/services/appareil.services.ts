export class AppareilService{
    lastUpdate = new Promise((resolve, reject) => {
        const date = new Date();
        setTimeout(
          () => {
            resolve(date);
          }, 100
        );
      });

    appareils = [
        {
          id: 1,
          name : "Frigo",
          status : "Allumé",
          lastUpdate : this.lastUpdate
        },
        {
          id: 2,
          name : "Sommier lit 2 places 140x190 super chiant à monter dans un petit escalier d'un vieil immeuble :)",
          status : 'En bas de ton escalier',
          lastUpdate : this.lastUpdate
        },
        {
          id: 3,
          name : "La box fibre de Maxime",
          status : 'Pas encore arrivée :/',
          lastUpdate : this.lastUpdate
        },
        {
          id: 4,
          name : "La fibre chez moi",
          status : 'Si Dieu le veut',
          lastUpdate : this.lastUpdate
        },{
          id: 5,
          name : "Le néon du Franprix passé minuit",
          status : 'Éteint',
          lastUpdate : this.lastUpdate
        }
      ];

      allumerTout(){
        for(let appareil of this.appareils){
          appareil.status = "Allumé";
          appareil.lastUpdate = new Promise((resolve, reject) => {
            const date = new Date();
            setTimeout(
              () => {
                resolve(date);
              }, 1
            );
          });
        }
      }
    
      eteindreTout(){
        for(let appareil of this.appareils){
          appareil.status = "Éteint";
          appareil.lastUpdate = new Promise((resolve, reject) => {
            const date = new Date();
            setTimeout(
              () => {
                resolve(date);
              }, 1
            );
          });
        }
      }

      allumer(id : number){
        switch(this.appareils[id].status){
            case "Allumé":
                break;
            default:
                this.appareils[id].status = "Allumé";
                break;
          }
      }

      eteindre(id : number){
        switch(this.appareils[id].status){
            case "Éteint":
                break;
            default:
                this.appareils[id].status = "Éteint";
                break;
          }
        }

        getAppareilById(id: number){
          const appareil = this.appareils.find(
            (s) => {
              return s.id === id;
            }
          );
          return appareil;
        }
}