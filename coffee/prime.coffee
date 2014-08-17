getPrimes = (max) ->
    last = 2
    numbers = [last]
    num = last
    while num <= max
        isPrime = checkPrime last++
        if isPrime
            numbers.push isPrime
            num++
    numbers

checkPrime = (n) -> 
    for i in [2..Math.ceil(Math.sqrt(n))]
        if n % i == 0
            return false
    n

convToStr = (number) -> 
    underTwenty = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    decades = ['twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    multiples = ['hundred', 'thousand']
    result = []
    string = ''
    lastTwo = number % 100
    lastOne = number % 10

    if lastTwo > 0 && lastTwo < 20
        result.unshift underTwenty[lastTwo - 1]
        result.unshift 'and'
    else if lastTwo >= 20
        if lastOne > 0
            result.unshift underTwenty[lastOne - 1]
        result.unshift decades[(Math.floor(lastTwo / 10)) - 2]
        result.unshift 'and' 
    i = 0
    divider = 100
    calc = Math.floor(number / divider)
    while calc > 0
        lastOne = calc % 10
        if lastOne > 0
            if multiples[i] != undefined
                result.unshift multiples[i]
            else
                console.log('number longer than 4 digits')
                return
            result.unshift underTwenty[lastOne - 1]
        divider *= 10
        i++
        calc = Math.floor(number / divider)
    if result[0] == 'and'
        result.shift()
    string = result.join ' ' 
    string

numbers = getPrimes(1000)
strings = []
i = 0
while i<numbers.length  && convToStr numbers[i]
    strings.push convToStr(numbers[i])
    i++

console.dir(strings)