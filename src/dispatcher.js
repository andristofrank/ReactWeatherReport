export default store => async ({type, ...params}) =>  {

    switch(type) {
      case 'getCity':
                const {city} = params.city;
                store({type, ...params, city})
                break;
      case 'getByDateTo':
                const{dateTo} = params.date;
                store({type,...params,dateTo})
    case 'getByDateFrom':
             const{dateTo} = params.date;
             store({type,...params,dateFrom})
      case 'getData':
            const {dateFrom} = params.from | null;
            const {dateTo} = params.to | null;

            store({type, ...params, city, dateFrom, dateTo})
            break;
      case 'updateDate':
            const wh_Horsens = await fetch("http://localhost:8080/data/Horsens").then(
                res => res.json()
              );
              const wf_Horsens = await fetch(
                "http://localhost:8080/forecast/Horsens"
              ).then(res => res.json());
              const wh_Aarhus = await fetch("http://localhost:8080/data/Aarhus").then(
                res => res.json()
              );
              const wf_Aarhus = await fetch(
                "http://localhost:8080/forecast/Aarhus"
              ).then(res => res.json());
              const wh_Cph = await fetch("http://localhost:8080/data/Copenhagen").then(
                res => res.json()
              );
              const wf_Cph = await fetch(
                "http://localhost:8080/forecast/Copenhagen"
              ).then(res => res.json());
              console.log(wh_Horsens);
              store({type,...params, wh_Horsens, wf_Horsens, wh_Aarhus, wf_Aarhus, wh_Cph, wf_Cph});
              
          break;
      default:
    }
}