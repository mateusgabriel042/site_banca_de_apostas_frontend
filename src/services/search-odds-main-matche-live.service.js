class SearchOddsMainMatcheLive {
  constructor(odds) {
    this.odds = odds;
  }

  getCountGoals(){
    let goalsTime1 = parseInt(new String(this.odds[0].SS).split('-')[0]);
    let goalsTime2 = parseInt(new String(this.odds[0].SS).split('-')[1]);
    return goalsTime1+goalsTime2;
  }

  getFinalOddsNull(qtdItensOdds){
    let finalOdds = [];

    for(let i = 0; i < qtdItensOdds; i++){
      finalOdds.push({OD: '-'});
    }

    return finalOdds;
  }

  getFinalOdds(nameOdd, qtdItensOdds){
    let finalOdds = [];
    let indexOddTitle = this.odds.findIndex(element => element.NA === nameOdd);
    
    if(indexOddTitle < 0)
      return this.getFinalOddsNull(qtdItensOdds);

    for(let i = 0; i < qtdItensOdds; i++){
      let oddSelected = this.odds[indexOddTitle+2+i];
      oddSelected.OD = (parseInt(new String(oddSelected.OD).split('/')[0]) / parseInt(new String(oddSelected.OD).split('/')[1]) +1).toFixed(2);
      finalOdds.push(oddSelected);
    }
    return finalOdds;
  }

  getOddsResultFinal() {
    return this.getFinalOdds("Fulltime Result", 3);
  }

  getOddsDoubleChance(){
    return this.getFinalOdds("Double Chance", 3);
  }

  getOddsNextGoal(){
    let abreviations = ['st', 'nd', 'rd', 'th'];
    let indexOddTitle;
    let finalOdds = [];
    let countGoals = this.getCountGoals()+1;
    let odds = this.odds;
    abreviations.forEach(function(item){
      indexOddTitle = odds.findIndex(element => element.NA === countGoals+item+" Goal");
      if(indexOddTitle >= 0){
        for(let i = 0; i < 3; i++){
          let oddSelected = odds[indexOddTitle+2+i];
          oddSelected.OD = (parseInt(new String(oddSelected.OD).split('/')[0]) / parseInt(new String(oddSelected.OD).split('/')[1]) +1).toFixed(2);
          finalOdds.push(oddSelected);
        }
      }
    });
    return finalOdds;
  }

  getOddsGoalsOverUnder(){
    return this.getFinalOdds("Match Goals", 5);
  }

  getOddsGoalsAlternativesOverUnder(){
    let finalOdds = [];
    let oddsTemp = [];
    let indexOddTitle = this.odds.findIndex(element => element.NA === "Alternative Match Goals");

    if(indexOddTitle < 0)
      return [];

    for(let i = 0; i < 8; i++){
      let oddSelected = this.odds[indexOddTitle+2+i];

      if(oddSelected.HA != undefined){
        oddSelected.OD = (parseInt(new String(oddSelected.OD).split('/')[0]) / parseInt(new String(oddSelected.OD).split('/')[1]) +1).toFixed(2);
        oddsTemp.push(oddSelected);
      }
    }

    if(oddsTemp.length == 2){
      finalOdds.push({over: oddsTemp[0], under: oddsTemp[1]});
    }else{
      finalOdds.push({over: oddsTemp[0], under: oddsTemp[2]});
      finalOdds.push({over: oddsTemp[1], under: oddsTemp[3]});
    }

    return finalOdds;
  }
  
}

export default SearchOddsMainMatcheLive;