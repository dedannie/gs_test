const { expect, test } = require('@jest/globals')
const { checkPrime, Average, Person } = require('./index')

// Initialize variable before test
const personA = new Person(10, 12)
const personB = new Person(13, 17)

// Ensure that number killed has correct answer
test('person info and people killed', () => {
  expect(personA.killed()).toEqual(2)
  expect(personB.killed()).toEqual(7)
})

// Ensure invalid data, return -1
test('invalid year and age data', () => {
  expect(personC.age).toEqual(-1)
  expect(personC.year).toEqual(-1)
})

// Ensure year start from 1, otherwise killed is 0
const personC = new Person(-6, -8)
test('person info and people killed', () => {
  expect(personC.killed()).toEqual(0)
})

// Ensure average number killed has correct answer
test('average killing', () => {
  const arrays = [personA.killed(), personB.killed()]
  expect(Average(arrays)).toEqual(4.5)
})

// Ensure every number throw in can be detected as prime or not
const number = 3
test('check if number is prime', () => {
  expect(checkPrime(number)).toEqual(true)
})