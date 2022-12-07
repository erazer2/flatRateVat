minimumCapitalGoodsSpendPercentage=2;

function calcGrossVat(){

  turnOver=document.getElementById("turnover").value;
grossVatRate=document.getElementById("grossVat").value/100;
flatVatRate=document.getElementById("flatRate").value/100;

gbpGrossVatted=(turnOver*grossVatRate)+parseInt(turnOver);
gbpFlatVatRatePayable=flatVatRate*gbpGrossVatted;

gbpFlatRateAdvantage=gbpGrossVatted-gbpFlatVatRatePayable-turnOver;
capGoods=turnOver*minimumCapitalGoodsSpendPercentage/100;
postCapGoods=gbpFlatRateAdvantage-capGoods;
itemsToPurchase=postCapGoods/grossVatRate;



document.getElementById("postVatTurnover").innerHTML=gbpGrossVatted;

document.getElementById("flatRatePayable").innerHTML=gbpFlatVatRatePayable;

document.getElementById("flatRateAdvantage").innerHTML=gbpGrossVatted-gbpFlatVatRatePayable-turnOver;

document.getElementById("itemsToBuy").innerHTML=itemsToPurchase;

document.getElementById("capitalGoods").innerHTML=capGoods;

document.getElementById("postCapitalGoods").innerHTML=postCapGoods;


}

function areYouListening(){

  console.log("i am");
  
}