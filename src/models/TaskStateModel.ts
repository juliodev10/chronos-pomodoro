import type { TaskModel } from './TaskModel';

//Estado -> Componente -> Filhos

export type TaskStateModel = {
  tasks: TaskModel[]; //historico, MainForm
  secondsRemaining: number; //Countdown, histórico, MainForm, button
  formattedSecondsRemaining: string; //titulo, countdown
  activeTask: TaskModel | null; //Countdown, histórico, MainForm, button
  currentCycle: number; //1 a 8/ Home
  config: {
    workTime: number; //MainForm
    shortBreakTime: number; //MainForm
    longBreakTime: number; //MainForm
  };
};
