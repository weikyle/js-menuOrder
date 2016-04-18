// begin with a blank/new order
var type = '';
var tortilla = '';
var meat = '';
var rice = '';
var beans = '';
var toppings = '';
var order = '';


// build a function to ask questions

function question(n, q) {
  // your code goes here
  if ( n === 1){
  	type = prompt(q);
  	if (type.toUpperCase() === 'TACO'){
  		tortilla = prompt("Tortilla (soft flour, soft corn, or crispy corn): ");
  		order += tortilla + " " + type + " with ";
  	}
  }
  else if ( n === 2){
  	meat = prompt(q);
  	order += meat + ", ";
  	
  }
  else if ( n === 3){
  	rice = prompt(q);
  	order += rice + " rice, ";
  	
  }
  else if ( n === 4){
  	beans = prompt(q);
  	order += beans + " beans, and ";
  	
  }
  else if ( n === 5){
  	toppings = prompt(q);
  	order += toppings;
  	
  }


}

// call the QUESTION function with the order options
question(1,"Burrito, bowl, taco, or salad: ");
question(2,"Meat (chicken, steak, barbacoa, carnitas, sofritas, or veggie): ");
question(3,"Rice (none, brown, white): ");
question(4,"Beans (none, black, pinto): ");
question(5, "Toppings (fajita veggies, tomato salsa, green chili salsa, red chili salsa, sour cream, cheese, guacamole, lettuce): ");




// output their order
document.write("<p>Your order: " + order + "<p>");
document.write("<p>Type: " + tortilla + " " + type + "<p>");
document.write("<p>Meat: " + meat + "<p>");
document.write("<p>Rice: " + rice + "<p>");
document.write("<p>Beans: " + beans + "<p>");
document.write("<p>Toppings: " + toppings + "<p>");
