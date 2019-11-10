export default store => async ({type, ...params}) =>  {
    switch(type) {
      case 'getData':
            const {city} = params.city;
            const {dateFrom} = params.from;
            const {dateTo} = params.to;
            store({type,...params,city,dateFrom,dateTo})
      case 'upDateDate':
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
              store({type,...params,wh_Horsens,wf_Horsens,wh_Aarhus,wf_Aarhus,wh_Cph,wf_Cph})
          break;
      default:
    }
}