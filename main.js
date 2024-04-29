const form = document.querySelector("form")

form.addEventListener("submit",function(e){
  e.preventDefault();

  const height =  parseInt(document.querySelector("#height").value);
  const weight =  parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if(height === ""|| height<0 || isNaN(height)){
    results.innerHTML=`please enter a vallid height ${height}`
  }
  else if(weight  === ""|| weight <0 || isNaN(weight)){
     results.innerHTML=`please enter a vallid weight ${weight}`
  }
  else {
   const bmi= (weight/(height*height/10000)).toFixed(1)
    results.innerHTML = `<span>${bmi}</span>`
  }


  const bmi= (weight/(height*height/10000)).toFixed(1)
  if(bmi>0 && bmi<18.6){
    mess.innerHTML="you are under weight"
  }
  else if(bmi>=18.6 && bmi<24.9){
    mess.innerHTML="you are in normal range"
  }
  else if(bmi>=24.9){
    mess.innerHTML="you are overweight"
  }
  else{
    mess.innerHTML="kuch to gadbad hai daya"
  }
})