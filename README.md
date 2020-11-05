Simple student administration system

<code>Pull, npm install, npm start</code>


Instructions:

Implement a simple student information system, where the user can:
    - add a new student (basic student information and courses that student will be part of),
    - edit the student (courses only),
    - delete a student.

You will also have to implement a page with an overview of all students (a table where each row displays student information). Table should have pagination with 20 students per page. If an user is not authenticated then he will be redirected to /login page, which means that you will have to implement a simple authentication which saves a token into local storage.

You can use JS setTimeout method to simulate endpoint calls (or similar way to simulate asynchronous response).

Optional:
    When a student is added, a unique ID is generated and assigned to him/her. This ID consists of two 3-digits numbers and their subtraction. The subtraction must be a Fibonacci number. (Example ID: 543399144 . Explanation: First 3-digits number is 543, second 3-digits number is 399 and their subtraction is 144 which is a Fibonacci number).

Requirements:
- Authentication
- Routing (/login and /overview page (/overview page should be lazily loaded))

Required technologies:
- Angular 9 (or newer)
- PrimeNg (component library)
- Bootstrap (CSS framework)
