let num1 = document.getElementById("alph");
let num2 = document.getElementById("charc");
let num3 = document.getElementById("digits");
let button = document.getElementById("btn");
let alrt = document.getElementById("alrt");
let remark = document.getElementById("remark");
alrt.style.display = "none";

button.addEventListener("click", (e) => {
    if(num1.value.length ===0 || num2.value.length ===0  || num3.value.length ===0){
        return;
    }
    e.preventDefault();
    let pass = generatePassword(num1, num2, num3);
    document.getElementById("pass").innerHTML = pass;
    alrt.style.display = "block";   
   
});

function generateAlphabets(number) {
    const listOfAphabets = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "v",
        "w",
        "x",
        "y",
        "z",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
    ];

    if (!typeof number === "number") throw new Error("Please pass an integer");
    length = listOfAphabets.length;
    let alphs = [];
    for (n of listOfAphabets) {
        let ran = Math.floor(Math.random(length - 1) * length);
        console.log(listOfAphabets[ran]);
        alphs.push(listOfAphabets[ran]);
        if (alphs.length === number) break;
    }
    console.log(alphs.join(" "));
    return alphs.join(" ");
}

function generateCharacters(number) {
    const listOfChars = [
        "!",
        "@",
        "#",
        "$",
        "%",
        "^",
        "&",
        "*",
        "(",
        ")",
        "<",
        ">",
        "?",
    ];
    if (!typeof number === "number") throw new Error("Please pass an integer");
    length = listOfChars.length;
    let chars = [];
    for (num of listOfChars) {
        let ran = Math.floor(Math.random(length - 1) * length);
        console.log(listOfChars[ran]);
        chars.push(listOfChars[ran]);
        if (chars.length === number) break;
    }
    console.log(chars.join(" "));
    return chars.join(" ");
}

function generateDigits(number) {
    const listOfDigit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    if (!typeof number === "number") throw new Error("Please pass an integer");
    length = listOfDigit.length;
    let digits = [];
    for (num of listOfDigit) {
        let ran = Math.floor(Math.random(length - 1) * length);
        console.log(listOfDigit[ran]);
        digits.push(listOfDigit[ran]);
        if (digits.length === number) break;
    }
    console.log(digits.join(" "));
    return digits.join(" ");
}

function generatePassword() {
    let numOfAlps = generateAlphabets(parseInt(num1.value));
    let numOfChars = generateCharacters(parseInt(num2.value));
    let numOfDIgits = generateDigits(parseInt(num3.value));
    let password = "";
    let res = numOfAlps + numOfChars + numOfDIgits;
    const splittedRes = res.split("");
    let newArr = [];
    splittedRes.forEach((s) => {
        if (s != " ") newArr.push(s);
    });
    for (n of newArr) {
        let res = shuffleArray(newArr);
        for (s of res) {
            password = password + s;
        }
        if (password.length === res.length) {
            console.log("true");
            break;
        }

    }
    recommend();

    console.log(password);
    return password;
}

function recommend(){
    if(parseInt(num1.value) < 8){
     remark.innerHTML = "Password Strength Weak\n Trying Adding more alphabets";
     alrt.className = "col-md-4 alert alert-warning mt-5";
    }
    else{
        remark.innerHTML = "Password Strength Strong\n Great Job!";
        alrt.className = "col-md-4 alert alert-success mt-5";  
    }
}

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
