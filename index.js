// Processing text input to get result
function getAnswer() {
  personAgeA = document.getElementById('age_of_death_a').value;
  personYearA = document.getElementById('year_of_death_a').value;
  personAgeB = document.getElementById('age_of_death_b').value;
  personYearB = document.getElementById('year_of_death_b').value;

  if ((personYearA - personAgeA) > 0 && (personYearB - personAgeB) > 0) {
    let personA = new Person(personAgeA, personYearA)
    let personB = new Person(personAgeB, personYearB)
    persons = [personA.killed(), personB.killed()]
    average_killed = Average(persons)
  
    answer1= document.getElementById('answer1')
    answer2= document.getElementById('answer2')
    answer3= document.getElementById('answer3')
  
    substractionA = personYearA - personAgeA
    substractionB = personYearB - personAgeB
  
    answer1_value = 'Person A born on Year = ' + personA.year + ' - '+ personA.age + ' = ' + substractionA + ', number of people killed on year ' + substractionA + ' is ' + personA.killed() + '.'
    answer2_value = 'Person B born on Year = ' + personB.year + ' - '+ personB.age + ' = ' + substractionB + ', number of people killed on year ' + substractionB + ' is ' + personB.killed() + '.'
    answer3_value = 'So the average is ( ' + personB.killed() + ' + ' + personA.killed() + ')/' + persons.length + ' = ' + average_killed
  
    answer1.innerHTML = answer1_value
    answer2.innerHTML = answer2_value
    answer3.innerHTML = answer3_value
  } else {
    answer1.innerHTML = ''
    answer2.innerHTML = ''
    answer3.innerHTML = '-1'
  }

  
}

// Check if number is prime
function checkPrime(num) {
  for (let i = 2; i * i <= num; i++)
      if (num % i === 0)
        return false; 
  return num > 1;
}

// Get average from any numbers throw in
function Average(numbers) {
  var total = 0;
  for(var i = 0; i < numbers.length; i++) {
      total += numbers[i];
  }
  return total / numbers.length;
}

// Object of person information and how many killed did at certain age and year
function Person(age, year) {
  this.age = age,
  this.year = year,
  this.killed = function() {
    numberofyears = year - age;
    numberofkilled = 0;
    i = 0;
    while (i < numberofyears) {
      if (i > 1) {
        
        j = i;
        while (true) {
          isPrime = checkPrime(j)
          if (isPrime) {
            numberofkilled += j;
            break;
          } else {
            j++;
          }
        }
        
      } else {
        numberofkilled += i;
      }
      i++;
    }
    numberofkilled += 1;
    return numberofkilled;
  };
}

// For test purpose
module.exports = { checkPrime, Average, Person };