# Math API

## About

A very simple math API I built to experiment with building APIs, and use JavaScript classes.

It takes 2 numbers, and can either add, subtract, multiply, or divide. Then returns a JSON object with the 2 provided numbers, the operator, and the result.

## Usage

The API is live at `https://ghall-math.herokuapp.com`, and must be accessed with a GET request.

### URL endpoints

- `/add` - Add both numbers.
- `/subtract` - Subtract the second number from the first.
- `/multiply` - Multiply both numbers.
- `/divide` - Divide the second number from the first.
- `/random` - Generate a random number between the first and second numbers.

### Headers

You must provide 2 items in the header named `firstnum` and `secondnum`, and they must be integers.

When using `/random`, `firstnum` should be less than `secondnum`.
