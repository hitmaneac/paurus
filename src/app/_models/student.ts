export class Student {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  courses: {
    math?: number;
    science?: number;
    music?: number;
    biology?: number;
  }
}