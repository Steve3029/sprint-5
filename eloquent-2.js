// Looping a triangle
var signal = '';
for (var i = 0; i < 7; i++) {
  console.log(signal += '#');
}

// FizzBuzz
for (var i = 0; i < 100; i++) {
  var number = i + 1;
  if (number % 3 == 0 && number % 5 == 0) {
    console.log('FizzBuzz');
  } else if (number % 3 == 0) {
    console.log('Fizz');
  } else if (number % 5 == 0) {
    console.log('Buzz');
  } else {
    console.log(number);
  }
}

// Chess board
for (var i = 0;i < 8; i++) {
  var line = '';
  if (i % 2 == 0) {
    for (var j = 0; j < 8; j++) {
      if (j % 2 == 0) {
        line += ' ';
      } else {
        line += '#';
      }
    }
  } else {
    for (var j = 0; j < 8; j++) {
      if (j % 2 == 0) {
        line += '#';
      } else {
        line += ' ';
      }
    }
  }
  line += '\n';
  console.log(line);
}

// Another solution for Chess board
for (var i = 0;i < 8; i++) {
  var line = '';
  for (var j = 0; j < 8; j++) {
    if (i % 2 == 0){
      if (j % 2 == 0) {
      	line += ' ';
      } else {
        line += '#';
      }
    } else {
      if (j % 2 == 0) {
      	line += '#';
      } else {
        line += ' ';
      }
    }
    
  }
  line += '\n';
  console.log(line);
}