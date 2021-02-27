function fahToCel(farhrenheit) {
    var temp = farhrenheit
    var ftocel = (temp -32) * 5 / 9
    var result = temp+'\xB0F em celsius é ' + ftocel + '\xB0C'
        console.log(result) 
}

fahToCel(100)