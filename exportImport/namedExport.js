/** 
 * 
 * * Named Exports 
 * 
 * Named exports let you do multiple exports in a single module.
 * There are 2 ways to do multiple exports:
 * 1) Export List (as an Object).
 * 2) Exporting individual features.
 * 
**/

export const studentName = 'Smith Evans';
export const studentBranch = 'Pharmacy';

//Export as Group
const name = 'John Doe';
const age = 20;

const ageAfter5 = () => {
    return age + 5;
}

export { name, age, ageAfter5 }
// Name as
export { name as n, age as a }