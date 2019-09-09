'use-strict'
const appcnst = require('../appConstant');
class Calculation {
  constructor() {

  }

  calulation(income, activity) {
    let size_factor = this.sizeFactor(income);
    let activty_value=this.activityCalc(activity);
    let Base_premium = income / 2;
    let Actual_factor = activty_value;
    let percent_Actual_Factor = Actual_factor;
    let overAll_factor = percent_Actual_Factor;
    let baseRate=appcnst.default_value_base_rate/100;    
    let calculation_limit_premium = Math.ceil(Base_premium * size_factor * baseRate * overAll_factor);
    let bookPremium=appcnst.book_premium*calculation_limit_premium;
    bookPremium=parseFloat(bookPremium).toFixed(2)
    let Actual_Min_prem=appcnst.act_min_premium*appcnst.book_premium;
    let calculationResp = {
      "BasePremium": Base_premium,
      "ActualFactor": Actual_factor,
      "percentActualFactor": percent_Actual_Factor,
      "overAllFactor": overAll_factor,
      "CalculationLimitPremium": calculation_limit_premium,
      "bookPremium":bookPremium,
      "actualMinPrem":Actual_Min_prem
    }
    return calculationResp;
  }
  sizeFactor(income) {
    let size_fct_value = undefined;
    let keys = Object.keys(appcnst.SizeFactor);
    for (let i = 0; i < keys.length; i++) {
      let d = keys[i]
      //d= parseInt(d)
      console.log(d)
      if (d > income) {
        size_fct_value = appcnst.SizeFactor[d];
        break;
      }
    }
    return size_fct_value;
  }
  activityCalc(activity)
  {
      let activity_value=0;
      let activity_obj=Object.keys(activity);
      let default_value_activity=appcnst.activity;
      for (let i = 0; i < activity_obj.length; i++) {
        let d = activity_obj[i]
        let x=default_value_activity[d]
        let y=activity[d];  
        y=y/100;      
        activity_value=x*y+activity_value
      }
      return activity_value;
  }
}
module.exports = { Calculation }