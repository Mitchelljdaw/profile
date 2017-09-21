/* finds all prime numbers up to random number between 0 and 1000 and returns the sum of all the prime numbers.
*/
var count = 0;
var result = 0;
function sumPrime(){
  var pButton = document.getElementById('answer');
  var num = Math.floor(Math.random()*1000);
  for(var i = 2; i <= num ; i++){
    count = 0;
    for(var j = 2; j <= num; j++){
      if(i%j === 0){
        count++;
      }
    }
    if(count < 2 && i !== 2){
      result += i;
    }
  }
  pButton.innerHTML = "" + num + " sum of primes "+result;
}
