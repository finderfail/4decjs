//1 
const concatenateStrings = (str1, str2) => {
    return (str1 + str2).replace(/\s+/g, '');
}
//console.log(concatenateStrings("sdlkdjflakjdk", "sldjaldjalksjljd"))


//2

const getStringLength = (str) => {
    return str.length;
}

//console.log(getStringLength("sldkakdalksdklaksdkl"))

//3
const getStringFromTemplate = (firstName, lastName) => {
    return `Hello, ${firstName} ${lastName}!`;
}
// console.log(getStringFromTemplate("Ilya", "Lvov"))


//4 
const getChar = (str, position) => {
    return str[position - 1];
}
// console.log(getChar("sdfjlsdjflskdf", 3))

//5

const removeFirstOccurrences = (str, substr) => {
    return str.replace(substr, '');
}
// console.log(removeFirstOccurrences("dsjfhksjfkdjsf", "dsj"))


//6 
const getRectangleString = (width, height) => {
    if (width < 2 || height < 2) return '*'.repeat(width);
    const top = '*'.repeat(width);
    const middle = '*' + ' '.repeat(width - 2) + '*';
    const bottom = '*'.repeat(width);
    let result = top + '\n';
    for (let i = 0; i < height - 2; i++) {
        result += middle + '\n';
    }
    result += bottom;
    return result;
}

// console.log(getRectangleString(5, 4))
