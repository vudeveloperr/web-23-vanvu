'use strict'

function search(input, target) {
  for(var i =0 ; i<input.length ; i++){
      if (target == input[i]) {
        return input.indexOf(target);
      }
      else{
        return -1;
      }
  }
   
}

module.exports = search
