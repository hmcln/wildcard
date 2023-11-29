import { Stage } from './stage';

export interface Idea {
  id: number;
  name: string;
  summary: string;
  goal: string;
  stages: Stage[];
}
