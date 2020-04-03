// Write a recursive function called reverse which accpets a string and returns
// a new string in reverse.

// reverse('awesome') // 'emosewa'
// reverse('rithschool') // 'loohcshtir'

function reverse(string) {
  return string.length <= 1 ? string : reverse(string.slice(1)) + string[0];
}
