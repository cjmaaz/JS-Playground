import { name, age, ageAfter5 } from './namedExport';
import { n, a } from './namedExport';
import { studentName, studentBranch } from './namedExport';



const allImports = () => {
    console.log('From NamedExport: Exported as List/Object:');
    console.log(`Name: ${name}, age: ${age}, function: ${ageAfter5()}`);
    console.log('\nFrom NamedExport: Exported as List/Object using Name as:');
    console.log(`Name as n: ${n}, age as a: ${a}`);
    console.log('\nFrom NamedExport: Exported as Individual Items:');
    console.log(`Student Name: ${studentName}, and branch: ${studentBranch}`);
}
export default allImports;