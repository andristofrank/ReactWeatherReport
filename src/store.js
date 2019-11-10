function reducer(action, model) {
      switch(action.type) {
        case 'getCity':
          const {city} = action
          return model.getAllDataFromCity(city);
        case 'getByDateTo':
          const {dateTo} = action
          return model.getData(dateTo);
        case 'getByDateFrom':
          const {dateTo} = action
          return model.getData(dateFrom);
        case 'updateDate':
          const { wh_Horsens,wf_Horsens,wh_Aarhus,wf_Aarhus,wh_Cph,wf_Cph}  = action
          return model.upDateDate(wh_Horsens,wf_Horsens,wh_Aarhus,wf_Aarhus,wh_Cph,wf_Cph);
        case 'add Report':
          return model;
        default:
          return model;
      }
    }

export default (init_model, view, renderer) => {
    let model = init_model
    return action => {
      model = reducer(action, model)
      renderer(view(model))
    }
  }