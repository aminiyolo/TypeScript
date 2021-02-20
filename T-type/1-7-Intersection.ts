{
        // Intersection Type: &

        type Student = {
            name: string;
            age: number;
        };

        type Worker = {
            employeeId: number;
            work: () => void;
        };

        function internWork(person: Student & Worker) {
            console.log(person.name, person.age, person.employeeId, person.work());
        };

        internWork({
            name:'park',
            age: 25,
            employeeId: 3,
            work: () => {},
        });
}