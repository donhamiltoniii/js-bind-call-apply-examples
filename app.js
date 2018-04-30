'use strict'

/* Apply *
** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
*/
var apply = function apply() {
	function Product(name, price) {
		this.name = name
		this.price = price
	}

	function Computer(name, price) {
		Product.apply(this, [name, price])
		this.category = 'computer'
	}

	function Book(name, price) {
		Product.apply(this, [name, price])
		this.category = 'book'
	}

	var goodLaptop = new Computer(['MacBook', 2000])
	var greatBook = new Book(['JavaScript: The Good Parts', 25])

	console.log(goodLaptop)
	console.log(greatBook)
}

/* Bind *
** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
**/

// TODO: Make a way better example than this
var bind = function bind() {
	var x = 9

	var module = {
		x: 81,
		getX: function() {
			return this.x
		},
	}

	console.log(module.getX())

	var retrieveX = module.getX
	console.log(retrieveX())

	var boundGetX = retrieveX.bind(module)
	console.log(boundGetX())
}

/* Call *
** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
**/
var call = function call() {
	function Product(name, price) {
		this.name = name
		this.price = price
	}

	function Food(name, price) {
		Product.call(this, name, price)
		this.category = 'food'
	}

	function Toy(name, price) {
		Product.call(this, name, price)
		this.category = 'toy'
	}

	var cheese = new Food('feta', 5)
	var fun = new Toy('robot', 40)

	console.log(cheese)
	console.log(fun)
}

// apply();
bind()
// call();
