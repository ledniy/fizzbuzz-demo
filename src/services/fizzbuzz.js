module.exports = {
  createList(length) {
    return Array.from({ length }).map((_, index) => {
      const number = index + 1;

      let result = '';

      if (number % 3 === 0) result += 'Fizz';
      if (number % 5 === 0) result += 'Buzz';
      if (result === '') result += String(number);

      return result;
    });
  }
}
