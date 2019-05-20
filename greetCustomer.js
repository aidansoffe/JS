var customerData = {
  'Joe': { visits: 1 },
  'Carol': { visits: 2 },
  'Howard': {  visits: 3 },
  'Carrie': { visits: 4 }
};

function greetCustomer(firstName) {
  var greeting = ''; 
	for(var i in customerData){
	  for (var value in customerData[i]){
	    if(!(firstName in customerData)){
	      greeting = 'Welcome! Is this your first time?';
	    }else if(i === firstName && customerData[i][value] > 1){
	     greeting = 'Welcome back, ' +firstName+  '! So glad to see you again!';
	    } else if(i === firstName && customerData[i][value] === 1){
	      greeting = "Welcome back, " + firstName + "! We're glad you liked us the first time!";
	    }
	  }
	}
  return greeting;
}

 greetCustomer('Lee');


=> 'Welcome! Is this your first time?'



