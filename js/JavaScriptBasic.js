alert("Welcome to JS calculator\nPlease Enter Two Numbers");
var a=eval( prompt("Enter first Number"));
var b=eval(prompt("Enter Second Number"));
var c=prompt("Enter your choice\n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\n5. Remainder");

switch(c){
    case "1":document.write("Sum is "+(a+b));
    console.log("Sum is "+(a+b));
    alert("Sum is "+(a+b));
    break;
    case "2":document.write("Difference is "+(a-b));
    console.log("Difference is "+(a-b));
    alert("Difference is "+(a-b));
    break;
    case "3":document.write("Product is "+(a*b));
    console.log("Product is "+(a*b));
    alert("Product is "+(a*b));
    break;
    case "4":document.write("Quotient is "+(a/b));
    console.log("Quotient is "+(a/b));
    alert("Quotient is "+(a/b));
    break;
    case "5":document.write("Remainder is "+(a%b));
    console.log("Remainder is "+(a%b));
    alert("Remainder is "+(a%b));
    break;
    default:document.write("Wrong choice");
    console.log("Wrong choice");
    alert("Wrong choice");
}
