/* L’utente sceglie pari o dispari e un numero da 1 a 5.
Generiamo un numero random(sempre da 1 a 5) per il computer.
Sommiamo i due numeri e dichiariamo chi ha vinto. */

var oddOrEven = prompt("Odd or even?");
var userNum = parseInt(prompt("Enter a number between 0 and 5"));
// a random number between 0 and 5 is generated
var computerNum = Math.floor(Math.random() * 5 + 1);
var sum = userNum + computerNum;
document.querySelector(".user-num-msg").textContent = "Your number: " + userNum;
document.querySelector(".computer-num-msg").textContent = "Computer's number: " + computerNum;
document.querySelector(".sum-msg").textContent = userNum + " + " + computerNum + " = " + sum;
document.querySelector(".winner-msg").textContent = winnerMsg(oddOrEven, sum);

function winnerMsg(oddOrEven, sum)
{
    var str = "You chose " + oddOrEven + " so ";
    // if the argument is "even" and the sum is even
    return (oddOrEven === "even" && sum % 2 === 0) ? str + "you win!" : str + "Computer wins!";
}
