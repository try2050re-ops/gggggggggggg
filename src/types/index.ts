export interface Student {
  id: number;
  name: string;
  category: string;
  grade: number;
  rank?: number;
}

export interface ContestStats {
  totalStudents: number;
  categories: string[];
  averageGrade: number;
  topGrade: number;
}