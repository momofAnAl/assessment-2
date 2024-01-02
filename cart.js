///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]
const initialValue = 0;
const summedPrice = cart.reduce((runningTotal, curValue) => runningTotal + curValue.price, initialValue);
console.log(summedPrice);

// const summedPrice = cart.reduce(/* CALLBACK HERE */)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

const calcFinalPrice = (cartTotal, couponValue, tax) => {
    return (cartTotal * (1 + tax)) - couponValue;
}
console.log(calcFinalPrice(100, 15, .06));


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    Customer object has the following properties:
        - name (string): example "John" 
        - order (number): example 123
        - phone number (string of digits): example '406-000-009'
        - order items (array of objects, each object with two properties: item (string) and quantity (number)): because restaurant needs to know what customer order and in what quantities 
        - payment detail (object with two properties: payment type (string) and payment info (object)): because restaurant needs info about payment type (cash or credit card) and associated detail (i.e. card number)
        - eat option (string): because restaurant needs to know whether customer eats in or take out


*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const customerObjects = {
    name: "Anh Tran",
    order: "123456" ,
    phone: "406-000-0009" ,
    items: [{'pizza': 1}, {'drink': 2}],
    payment: {type:'credit_card', detail: {'cc_number': 123456, 'exp_date': '10/2025'}},
    eat_option: 'take-out'
}
