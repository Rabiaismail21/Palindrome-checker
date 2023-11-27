const inputElem = document.querySelector('.input');
const btnElem = document.querySelector('.input-btn');
const modalSubtext = document.querySelector('.modal-sub-text');

const checkPalindrome = () => {
    let inputValue = inputElem.value;
    let reversedString = inputValue.split('').reverse().join('');
    const isPalindrome = reversedString === inputValue;
    
    modalSubtext.innerText = isPalindrome
    ? `'${reversedString}' is a palindrome`
    : `'${reversedString}' is not a palindrome`;
}
btnElem.addEventListener('click', checkPalindrome);


