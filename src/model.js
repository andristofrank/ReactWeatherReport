const model = (wh_Horsens,
    wh_Aarhus,
    wh_Cph,
    wf_Horsens,
    wf_Aarhus,
    wf_Cph,
     filter =() => true) => {
    const getAllDataFromCity= (city)=>{
        switch (city){
            case "Horsens":
                return wh_Horsens.concat(wf_Horsens);
            case "Aarhus":
                return wh_Aarhus.concat(wf_Aarhus);
            case "Copenhagen":
                return wh_Cph.concat(wf_Cph);
        }
    }
    const getData = (city,dateTimeFrom,dateTimeTo)=>{
        let weatherData = getAllDataFromCity(city);
        weatherData.filter((wd)=>{
           return wd.time > dateTimeFrom && wd.time < dateTimeTo;
        })
    }
   const upDateDate=(wh_Horsens,wf_Horsens,wh_Aarhus,wf_Aarhus,wh_Cph,wf_Cph)=>{
        wh_Horsens = wh_Horsens;
        wf_Horsens = wf_Horsens;
        wh_Aarhus = wh_Aarhus;
        wf_Aarhus = wf_Aarhus;
        wh_Cph= wh_Cph;
        wf_Cph = wf_Cph;

    }
}

export default model