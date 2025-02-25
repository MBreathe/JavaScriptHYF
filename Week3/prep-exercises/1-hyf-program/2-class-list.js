import { modules, students, mentors, classes } from "./hyf.js";

/**
 * We would like to have a list of everyone that is currently participating in a class.
 * This means the students, but also the mentors that are currently teaching the class.
 * The students should be self-explanatory, but to find the mentors you will need to follow these steps:
 * - Check what the `currentModule` of the class is
 * - Find the mentor(s) that are `nowTeaching` that module
 *
 * Should return the list of names and their roles. So something like:
 *
 *  [{ name: 'John', role: 'student' }, { name: 'Mary', role: 'mentor' }]
 */
const getPeopleOfClass = (className) => {
    let foundStudent = students.filter(x => x.class.includes(className))
                   .filter(y => y.graduated !== true)
                   .map(x => ({name: x.name}));
    foundStudent.forEach(x => x.role = 'student');
    let module = classes.filter(x => x.name.includes(className)).map(x => x.currentModule);
    let foundMentor = mentors.filter(x => x.nowTeaching === module[0]).map(x => ({name: x.name}));
    foundMentor.forEach(x => x.role = 'mentor');
    let classComposition = [foundStudent[0], foundMentor[0]]
    return classComposition
};
// You can uncomment out this line to try your function
console.log(getPeopleOfClass('class34'));

/**
 * We would like to have a complete overview of the current active classes.
 * First find the active classes, then for each get the people of that class.
 *
 * Should return an object with the class names as properties.
 * Each class name property contains an array identical to the return from `getPeopleFromClass`. So something like:
 *
 *  {
 *    class34: [{ name: 'John', role: 'student' }, { name: 'Mary', role: 'mentor' }],
 *    class35: [{ name: 'Jane', role: 'student' }, { name: 'Steve', role: 'mentor' }]
 *  }
 */
const getActiveClasses = () => {
    let activeClassesList = classes.filter(x => x.active === true)
                                         .map(x => x.name);
    let result = {};
    activeClassesList.map(x => {
        result[x] = getPeopleOfClass(x)
    })
    return result
};
// You can uncomment out this line to try your function
console.log(getActiveClasses());