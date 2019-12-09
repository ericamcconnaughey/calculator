
	// Back-End (business logic)

	var add = function(number1, number2) {
		return number1 + number2;
	}
	
	var subtract = function(number1, number2) {
		return number1 - number2;
	}
	
	var multiply = function(number1, number2) {
		return number1 * number2;
	}
	
	var divide = function(number1, number2) {
		return number1 / number2;
	}
	
	// Front-End (user-interface logic)
	
	$(document).ready(function() {
		$("form#calculator").submit(function() {
			event.preventDefault();
			var number1 = parseInt($("#input1").val());
			var number2 = parseInt($("#input2").val());
			var operator = $("input:radio[name=operator]:checked").val();
			/*console.log("1st number: " + number1);  // for debugging
    	console.log("2nd number: " + number2);  // for debugging
			console.log("operator: " + operator);  // for debugging*/
			var result;
			if (operator === "add") {
				result = add(number1, number2);
			} else if (operator === "subtract") {
				result = subtract(number1, number2);
			} else if (operator === "multiply") {
				result = multiply(number1, number2);
			} else if (operator === "divide") {
				result = divide(number1, number2);
			}
			$("#output").text(result);
		})
	})
		
		
		/* OLD WAY WITH FOUR DIFFERENT FORMS $("form#add").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#add1").val());
		var number2 = parseInt($("#add2").val());
		var result = add(number1, number2);
		$("#add-output").text(result);

	})

	$("form#subtract").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#subtract1").val());
		var number2 = parseInt($("#subtract2").val());
		var result = subtract(number1, number2);
		$("#subtract-output").text(result);

	})

	$("form#multiply").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#multiply1").val());
		var number2 = parseInt($("#multiply2").val());
		var result = multiply(number1, number2);
		$("#multiply-output").text(result);

	})

	$("form#divide").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#divide1").val());
		var number2 = parseInt($("#divide2").val());
		var result = divide(number1, number2);
		$("#divide-output").text(result);

	})*/
