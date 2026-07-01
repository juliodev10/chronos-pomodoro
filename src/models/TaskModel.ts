import type { TaskStateModel } from './TaskStateModel';
import type { CycleType } from './CycleTypeModel';

export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  completeDate: number | null;
  interruptedDate: number | null;
  type: CycleType;
};
