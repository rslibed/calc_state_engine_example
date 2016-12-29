$(document).ready(initiate_click_handlers_SE);

var inputs = [''];
var input_index = 0;
var old_num2 = null;
var old_op = null;

function initiate_click_handlers(){
  $(".number").click(function(){
    var text = $(this).text();
    number_click(text);
  });
  $('.operator').click(function(){
    var text = $(this).text();
    operator_click(text);
  });
  $('.equals').click(function(){
    equals_click();
  });
}

function initiate_click_handlers_SE(){
  $(".number").click(function(){
    var text = $(this).text();
    current_state.number_clicked(text);
  });
  $('.operator').click(function(){
    var text = $(this).text();
    current_state.operator_clicked(text);
  });
  $('.equals').click(function(){
    current_state.equals_clicked();
  });	
}

function number_click(text){
  
  inputs[input_index]+=text;
}

function operator_click(text){
  input_index++;
  inputs[input_index] = text;
  input_index++;
  inputs[input_index] = '';
}


function equals_click(){
  console.log('the answer is '+(parseInt(inputs[0]) + parseInt(inputs[2])));
}

// function equals_click(){
//   console.log(inputs);
//   if(inputs[0]!=''){
//     if(inputs[1]!=undefined){
//       if(inputs[2]!=''){
//       } else {
//         inputs[2] = inputs[0];
//       }
//     } else {
//       if(old_num2!=null && old_op!=null){
//         inputs[1] = old_op;
//         inputs[2] = old_num2;
//       }
//     }
//     do_math();
//   }
// }

function noop(){
  console.log('cannot do that now');
}

var state_modules = {
  initial_calculator : {
  	name: 'initial_calculator',
    number_clicked: function(text){
    	number_click(text);
    	current_state = state_modules.number_pressed;
    },
    operator_clicked: noop,
    equals_clicked: noop
  },
  number_pressed : {
  	name: 'number_pressed',
    number_clicked: number_click,
    operator_clicked: function(text){
      operator_click(text);
      current_state = state_modules.number_and_op_pressed;
    },
    equals_clicked: noop   
  },
  number_and_op_pressed : {
  	name: 'number and op pressed',
    number_clicked: function(text){
    	number_click(text);
    	current_state = state_modules.number_and_op_and_number_pressed;
    },
    operator_clicked: noop,
    equals_clicked: noop,
  },
  number_and_op_and_number_pressed : {
  	name: 'two numbers and operator pressed',
    number_clicked: number_click,
    operator_clicked: noop,
    equals_clicked: function(){
      equals_click();
      current_state.update_display();
      current_state = state_modules.initial_calculator;
    }, 
    update_display: function(){
    	console.log('update called');
    	console.log(inputs);
    } 	
  }
}
var current_state = state_modules.initial_calculator;

//initial calculator : nothing pressed
  // numbers to add normally
  // operator to do nothing
  // equals to do nothing
//number pressed : first number exists
  // number to add normally
  // operator adds operator
    //switches state to "number and op pressed" state
  // equals to do nothing
//number and op pressed: first number and operator exist
  // number to add normally to next number
  // operator to do nothing
  // equals : calculators the equation
    //switches state to "initial calculator" state














