const model = (wh_Horsens,
    wh_Aarhus,
    wh_Cph,
    wf_Horsens,
    wf_Aarhus,
    wf_Cph,
     filter =() => true) => {
    let CurrentShownData
    const currentCity = "Horsens";
    let now = new Date();
    const DateFrom = new Date(now.getUTCFullYear(),now.getUTCMonth(),now.getUTCDate()-5,now.getUTCHours(),now.getUTCMinutes(),now.getUTCMilliseconds());
    const DateTo = now;
    const getAllDataFromCity= (city)=>{
        switch (city){
            case "Horsens":
                CurrentShownData = wh_Horsens.concat(wf_Horsens);
            case "Aarhus":
                CurrentShownData = wh_Aarhus.concat(wf_Aarhus);
            case "Copenhagen":
                CurrentShownData = wh_Cph.concat(wf_Cph);
        }
        return CurrentShownData;
    }
    const getData = (other)=>{
        if(other)
        let weatherData = getAllDataFromCity(city);
        weatherData.filter((wd)=>{
        let dateTime = new Date(wd.time);
           return dateTime > dateTimeFrom && dateTime < dateTimeTo;
        })
        return CurrentShownData = weatherData;
    }
   const upDateDate=(wh_HorsensN,wf_HorsensN,wh_AarhusN,wf_AarhusN,wh_CphN,wf_CphN)=>{
        wh_Horsens = wh_HorsensN;
        wf_Horsens = wf_HorsensN;
        wh_Aarhus = wh_AarhusN;
        wf_Aarhus = wf_AarhusN;
        wh_Cph= wh_CphN;
        wf_Cph = wf_CphN;
    }
    CurrentShownData = getData(currentCity,DateFrom,DateTo);
    return {
        getAllDataFromCity,getData,upDateDate, CurrentShownData, currentCity, DateFrom, DateTo
    };
};

export default model;