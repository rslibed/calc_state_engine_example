var the_calculator;
$(document).ready(initializeCalc);
function initializeCalc () {
    the_calculator = new calculator()
    the_calculator.set_calc_body(".calc");
    the_calculator.set_calc_numbers(".number");
}
function calculator () {
    this.calc_parts = {
        body: null,
        numbers: null,
        operators: null,
        equals: null,
        display: null
    };
    this.calc_body = null;
    this.calc_numbers = null;
    this.initialize = function () {

    }
    this.set_calc_body = function (dom_element) {
        this.calc_parts.body = $(dom_element);
    }
    this.set_calc_display = function (dom_element) {
        this.calc_parts.display = $(dom_element);
    }
    this.set_calc_numbers = function (dom_element) {
        this.calc_parts.numbers = $(dom_element);
    }
    this.set_calc_operators = function (dom_element) {
        this.calc_parts.operators = $(dom_element);
    }
    this.set_calc_equals = function (dom_element) {
        this.calc_parts.equals = $(dom_element);
    }
}
function number_object () {

}
function operator_object () {

}
