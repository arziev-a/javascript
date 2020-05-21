var array = ["John", "Ali", "Jonathan", "Thomas", "Yaakov"];

for(var i=0; i<array.length; i++ ){
   if((array[i].charAt(0)) ==="j" || (array[i].charAt(0)) ==="J"){

      console.log("goodbye "+array[i]);

  }
 
  else {
     console.log("hello " + array[i]);
  }
}
