func binaryArrayToNumber(binary: [Decimal]){

    var g = binary.count - 1
    var result: Decimal = 0

    for element in binary{
        let number = pow(2, g)
        result = result + element * number
        
        g = g - 1
    }

    print(result)
}

binaryArrayToNumber(binary: [1,1,1,1,1,1,1,1,0,0,0,0,0,1,0])