function deepEqual(obj1, obj2) {
  if ((typeof obj1 == "object" && obj1 != null) && (typeof obj2 == "object" && obj2 != null)) {
    let arr1 = Object.keys(obj1);
    let arr2 = Object.keys(obj2);
    
    if (arr1.length === arr2.length) {
      for (let i = 0; i <= arr1.length - 1; i++) { 
        if (arr1[i] === arr2[i]) {
            
          if (obj1[arr1[i]] ===  obj2[arr2[i]]) {
              continue;
            } else {
              return deepEqual(obj1[arr1[i]], obj2[arr2[i]]);
            }
         
        } else {
            return false;
          }
      }
      return true;
    }
  } else {
    return obj1 === obj2;
  }
}