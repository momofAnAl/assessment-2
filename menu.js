///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays.
*/


//////////////////PROBLEM 1////////////////////
/*
    Create an object called `pizza` that has 6
    properties:
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

const pizza = {
    name: 'Pacific Vegie',
    price: 7,
    category: 'vegan',
    popularity: 100,
    rating: 5,
    tag: ['gluten-free', 'non-dairy', 'hand-made pan', 'kids size'],
};



//////////////////PROBLEM 2////////////////////
/*
    Let's print a few values from our pizza object.

    First, log the popularity of pizza.
    Use dot notation to access the value.
*/

console.log(pizza.popularity);


/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

console.log(pizza.tag[1]);


/*
    Third, destructure the price off of the
    pizza object.

    Print the value of your new price variable.
*/

const {price} = pizza;
console.log(price);




/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable.
*/

const {category} = pizza;
console.log(category);


//////////////////PROBLEM 3////////////////////
/*
    Create an array with 4 objects in it.
    The objects should mimic the `pizza` object
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

foodArr = [
    {name: 'Pacific Veggie', price: 17, category: 'vegan', popularity: 100, rating: 8, tag: ['gluten-free', 'non-dairy', 'hand-made pan', 'kids size']},
    {name: 'Italian', price: 10, category: 'noodle', popularity: 90, rating: 4.5, tag: ['gluten-free', 'tomatoes', 'hand-made pan', 'kids size']},
    {name: 'Hawaiian', price: 15, category: 'snacks', popularity: 100, rating: 5, tag: ['gluten-free', 'toasted', 'eggs and ham', 'cheese']},
    {name: 'American', price: 8, category: 'snacks', popularity: 80, rating: 6, tag: ['gluten-free', 'non-dairy', 'cheese', 'cucumber']},
];



//////////////////PROBLEM 4////////////////////
/*
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag
    of your choice.

    For example, you could return only the food objects
    which have "vegetarian" inside of their tags arrays.

    You can choose any tag that at least 1 of
    your food objects has.
*/

const filterFoods = (foods) => {
    const hasTag = (food) => food['tag'].includes('hand-made pan'); 
    return foods.filter(hasTag);
};
console.log(filterFoods(foodArr));

// const filteredFood = foodArr.filter(/* CALLBACK HERE */)



//////////////////PROBLEM 5////////////////////
/*
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for
    food that has above a certain rating,
    or is above a certain price.

    Write a function called `filterByProperty`
    that takes in two arguments: `property` and
    `number`

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against

    For example, calling filterByProperty('rating', 5)
    would return all the menu items with a rating above 5.

    And calling filterByProperty('price', 12)
    would return all the menu items with a price above 12.

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr. Return objects
    whose value for the given property is greater than the
    `number` passed in.

    Return the filtered array from the entire function
*/

const filterByProperty = (property, number) => {
    const hasTag = (food) => food[property] > number; 
    return foodArr.filter(hasTag);
};



/*
    Invoke the `filterByProperty` function, passing
    in a value for each parameter.

    You'll have to console.log to see the filtered array
*/

console.log(filterByProperty('price',12));
console.log(filterByProperty('rating',5));