const movieList = [
    {
        title: 'Batman',
        year: 1989,
        director: 'Tim Burton',
        imdbRating: 7.6
    },
    {
        title: 'Batman Returns',
        year: 1992,
        director: 'Tim Burton',
        imdbRating: 7.0
    },
    {
        title: 'Batman Forever',
        year: 1995,
        director: 'Joel Schumacher',
        imdbRating: 5.4
    },
    {
        title: 'Batman & Robin',
        year: 1997,
        director: 'Joel Shumacher',
        imdbRating: 3.7
    },
    {
        title: 'Batman Begins',
        year: 2005,
        director: 'Christopher Nolan',
        imdbRating: 8.3
    },
    {
        title: 'The Dark Knight',
        year: 2008,
        director: 'Christopher Nolan',
        imdbRating: 9.0
    },
    {
        title: 'The Dark Knight Rises',
        year: 2012,
        director: 'Christopher Nolan',
        imdbRating: 8.5
    }
];

const titles = movies => movies.map(movie => movie.title);

const byNolan = movie => movie.director === 'Christopher Nolan';

const filter = (movies, func) => movies.filter(func);

const goodRating = movie => movie.imdbRating >= 7.5;

const ratings = movies => movies.map(movie => movie.imdbRating);

const average = array => array.reduce((sum, value) => sum + value, 0) / array.length;

// Older movies
const old = movie => movie.year <= 2000;

console.log(titles(movieList));
const nolanMovieList = filter(movieList, byNolan);
console.log(nolanMovieList.length);
console.log(titles(filter(movieList, goodRating)));
console.log(average(ratings(nolanMovieList)));
// Older movies
console.log(titles(filter(movieList, old)));

// Government forms

const governmentForms = [
    {
        name: 'Plutocracy',
        definition:'Rule by the wealthy.'
    },
    {
        name: 'Oligarchy',
        definition:'Rule by a small number of people.'
    },
    {
        name: 'Kleptocracy',
        definition: 'Rule by the thieves.'
    },
    {
        name: 'Theocracy',
        definition: 'Rule by a religious elite.'
    },
    {
        name: 'Democracy',
        definition: 'Rule by the people.'
    },
    {
        name: 'Autocracy',
        definition: 'Rule by a single person.'
    }
];

const formNames = forms => forms.map(form => form.name);

const endingWithCy = form => form.name.endsWith('cy');

console.log(formNames(filter(governmentForms, endingWithCy)));

// Arrays sum

const arrays = [[1, 4], [11], [3, 5, 7]];

const arraysSum = arrays => arrays.map(element => element.reduce((sum, value) => sum + value, 0)).reduce((sum, value) => sum + value, 0);

console.log(arraysSum(arrays));

// Student results

const students = [
    {
        name: 'Anna',
        sex: 'f',
        grades: [4.5, 3.5, 4]
    },
    {
        name: 'Dennis',
        sex: 'm',
        country: 'Germany',
        grades: [5, 1.5, 4]
    },
    {
        name: 'Martha',
        sex: 'f',
        grades: [5, 4, 2.5, 3]
    },
    {
        name: 'Brock',
        sex: 'm',
        grades: [4, 3, 2]
    }
];

const female = student => student.sex === 'f';
const femaleStudentsResults = students => students.filter(female).map(student => {
    return {
        name: student.name,
        avgGrade: average(student.grades)
    };
});
/*
const femaleStudentsResults = [];
for (const student of students) {
    if (student.sex === 'f') {
        let gradesSum = 0;
        for (const grade of student.grades) {
            gradesSum += grade;
        }
        const averageGrade = gradesSum / student.grades.length;
        femaleStudentsResults.push({
            name: student.name,
            avgGrade: averageGrade
        });
    }
}*/

console.log(femaleStudentsResults(students));