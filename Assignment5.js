// Student Manager Program

// Array to store students
let students = [
    {
        name: "Rahul",
        marks: {
            math: 85,
            science: 90,
            english: 78
        }
    },
    {
        name: "Sneha",
        marks: {
            math: 92,
            science: 88,
            english: 95
        }
    },
    {
        name: "Arjun",
        marks: {
            math: 70,
            science: 75,
            english: 80
        }
    }
];

// Function to calculate average marks
function calculateAverage(student) {
    let marks = student.marks;
    let total = marks.math + marks.science + marks.english;
    return total / 3;
}

// Display student details with averages
students.forEach(student => {
    let avg = calculateAverage(student);
    console.log("Student Name:", student.name);
    console.log("Math:", student.marks.math);
    console.log("Science:", student.marks.science);
    console.log("English:", student.marks.english);
    console.log("Average Marks:", avg.toFixed(2));
    console.log("-------------------------");
});