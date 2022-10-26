const binaryArrayToNumber = arr => {
    let result = 0
    let g = arr.length - 1
    
    for (let i = 0; i < arr.length; i++) {
      result += arr[i] * Math.pow(2, g)
      // console.log(result)
      g--
    }
    console.log(result)
  };


  binaryArrayToNumber([1,1,1,1,1,1,1,1,0,0,0,0,0,1,0])