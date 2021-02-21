{
    // Enum
    // JavaScript
    const MAX_NUMBER = 6;
    const MAX_STUDENT_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WENDSDAY = 2;
    const DAYS_ENUM = Object.freeze({"MONDAY" : 0, "TUESDAY": 1, "WENDSDAY": 2});
    const dayOfTooday = DAYS_ENUM.MONDAY
    console.log(dayOfTooday); // 0
    
    // TypeScript
    type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday";
    enum Days {
        Monday,  // 0
        Tuesday, // 1
        wednesday, // 2
        Thursday, // 3     
        Friday, // 4
        Saturday, // 5
        Sunday, // 6
    }
    console.log(Days.Saturday); // 5
    const day = Days.wednesday;
    console.log(day); // 2

    let dayOfWeek: DaysOfWeek = 'Monday';
    dayOfWeek ='Wednesday';
    console.log(dayOfWeek);
}