function sum(x, y) {
    if (x == y) {
      return 3 * (x + y);
      } 
     else
     {
      return (x + y);
     }
   }
  //console.log(sum(10, 20));
  //console.log(sum(20, 20));


  function diff_num(n) {
    if (n <= 19) {
      return (19 - n);
      }
    else
      {
       return (n - 19) * 3;
      }
  }
  
//   console.log(diff_num(10));
//   console.log(diff_num(19));
//   console.log(diff_num(23));

function masked3 (a){
    var output=[]
    for(i=0;i<10;i++){
        var b = a.replace('*',i)
        if(b%3===0){
            output.push(b)
        }
    }
    return output;
}
//console.log(masked3('12*'));


function masked6 (a){
    var output=[]
    for(i=0;i<10;i++){
        var b = a.replace('*',i)
        if(b%6===0){
            output.push(b)
        }
    }
    return output;
}
//console.log(masked6('15*'));
