export interface Stage {
  id: number;
  ordinal: number;
  name: string;
  completed: boolean;
  next: boolean;
  next_time: number;
  summary: string;
  estimated_difficulty: number;
}
