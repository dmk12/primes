primes
======

Using CoffeeScript output first 1000 prime numbers as strings, i.e 101 will output "one hundred and one".
Also contains a JavaScript version of the code.

CoffeeScript
------------
- `prime-coffee.html` - contains a reference to `coffee/prime.js`, which is the file compiled from CoffeeScript.
- `coffee` folder 
  - `prime.coffee` - contains the CoffeeScript version of the code.
  - `prime.js` - JavaScript file compiled from `prime.coffee`. 

JavaScript
----------
- `prime.html` - contains a reference to `js/prime.js`, which is the JavaScript version of the code.
- `js` folder
	- `prime.js` - contains the JavaScript version of the code.

Tests
----------
- `test` folder
	- jasmine tests for `js/prime.js`.

**Notes:**

*This is my first attempt at CoffeeScript, I have no previous experience with it.*

*This code only outputs prime numbers up to 4 digits long (the first 1229 prime numbers), as this is what was required in the current brief. Modifications will be needed to output a wider range on numbers.*
