export default (init_model, view, renderer) => {
    let model = init_model
  
    function reducer(action, model) {
      switch(action.type) {
        case 'getData':
          const { city, dateFrom, dateTo } = action
          return model.getData(city, dateFrom, dateTo);
        case 'upDateDate':
          const { wh_Horsens,wf_Horsens,wh_Aarhus,wf_Aarhus,wh_Cph,wf_Cph}  = action
          return model.UpdateData(wh_Horsens,wf_Horsens,wh_Aarhus,wf_Aarhus,wh_Cph,wf_Cph);
        case 'add Report':
          return model;
        default:
          return model
      }
    }
  
    return action => {
      model = reducer(action, model)
      renderer(view(model))
    }
  }