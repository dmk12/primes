            var f = (function() {
                /**
                 * Returns prime numbers
                 * @param {int} max The maximum amount of prime numbers to return
                 * @returns {int[]} numbers Array of prime numbers
                 */
                function getPrimes(max) {
                    var last = 2;
                    var numbers = [last];
                    var num = last;
                    while (num <= max) {
                        var isPrime = checkPrime(last++);
                        if (isPrime) {
                            numbers.push(isPrime);
                            num++;
                        }
                    }
                    return numbers;
                }
                /**
                 * Checks if number is prime, returns the number if it's prime, false if not
                 * @param {int} n Number to check
                 * @returns {int|Boolean} n Prime number | false
                 */
                function checkPrime(n) {
                    for (var i = 2; i <= (Math.ceil(Math.sqrt(n))); i++) {
                        if (n % i === 0) {
                            return false;
                        }
                    }
                    return n;
                }
                /**
                 * Converts number to string, places words in array, then joins array items
                 * @param {int} number Number to convert
                 * @returns {String} string String representing number as words
                 */
                function convToStr(number) {
                    var underTwenty = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
                    var decades = ['twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
                    var multiples = ['hundred', 'thousand'];
                    //an array that holds the resulting string parts        
                    var result = [];
                    var string = '';
                    //process two last digits
                    var lastTwo = number % 100;
                    var lastOne = number % 10;
                    if (lastTwo > 0 && lastTwo < 20) {
                        //two last digits (under 20)
                        result.unshift(underTwenty[lastTwo - 1]);
                        result.unshift('and');
                    } else if (lastTwo >= 20) {
                        //two last digits (over 20)
                        if (lastOne > 0) {
                            //record last digit
                            result.unshift(underTwenty[lastOne - 1]);
                        }
                        //one before last digit 
                        result.unshift(decades[(Math.floor(lastTwo / 10)) - 2]);
                        result.unshift('and');
                    }
                    //process 3rd digit and up
                    var i = 0;
                    var divider = 100;
                    var calc = Math.floor(number / divider);
                    while (calc > 0) {
                        lastOne = calc % 10;
                        if (lastOne > 0) {
                            if (multiples[i] !== undefined) {
                                result.unshift(multiples[i]);
                            } else {
                                //limit output to 4 digit number for the moment as more is not needed for the first 1000 primes
                                console.log('number longer than 4 digits');
                                return;
                            }
                            result.unshift(underTwenty[lastOne - 1]);

                        }
                        divider *= 10;
                        i++;
                        calc = Math.floor(number / divider);
                    }
                    //remove 'and' from beginning of array when number is 1 or 2 digits long
                    if (result[0] === 'and') {
                        result.shift();
                    }
                    string = result.join(' ');
                    return string;
                }
                var numbers = getPrimes(1000);
                var strings = [];
                var i = 0;
                while (i < numbers.length && convToStr(numbers[i])) {
                    strings.push(convToStr(numbers[i]));
                    i++;
                }

                return {
                    strings : strings,
                    checkPrime : checkPrime,
                    convToStr : convToStr,
                    getPrimes : getPrimes
                };
            })();
            console.dir(f.strings);