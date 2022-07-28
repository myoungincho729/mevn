//2.5 템플릿 문자열

const name1 = 'brian';
const s = `My name is ${name1}`; //backtick
console.log(s);

const person = {
    'age': 26,
    'name': 'brian'
}
const tag = `<p>My age is ${person.age}</p>`;
const tag2 = `<p>Welcome ${person.name}</p>`;
console.log(tag2, tag);