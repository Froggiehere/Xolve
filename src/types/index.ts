export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Unit {
  id: number;
  name: string;
  grade: number;
  questions: Question[];
}

export interface Shape {
  id: number;
  name: string;
  definition: string;
  properties: string[];
  formulas: {
    area?: string;
    perimeter?: string;
    volume?: string;
  };
  realLifeExamples: string[];
  imageUrl?: string;  
}

export interface Article {
  id: number;
  title: string;
  preview: string;
  content: string;
  category: string;
  date: string;
}
export interface Lecture {
  id: number;
  title: string;
  preview: string;
  content: string;
  category: string;
  date: string;
}