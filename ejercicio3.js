/*Secret Society
Find the name of a secret society based on the first letter of each member's name.
Examples:
- `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
- `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
* `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HHR'`.
*/
const m1=["Esperanza", "Franco", "Nia"];
const m2=['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'];
const m3=['Harry', 'Ron', 'Hermione'];

function secretName(member){
let letters=[];
member.forEach(e => {
    letters.push(e.charAt(0));
});
return letters.sort().join("");
}

console.log(secretName(m1));
console.log(secretName(m2));
console.log(secretName(m3));