import type { ReactNode } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import type { CycleType } from '../../models/CycleTypeModel';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

export function Tips() {
  const { state } = useTaskContext();
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  const tipsForWhenActiveTask: Record<CycleType, ReactNode> = {
    workTime: (
      <span>
        Foque por <strong>{state.config.workTime}min</strong>
      </span>
    ),
    shortBreakTime: (
      <span>
        Descanse por <strong>{state.config.shortBreakTime}min</strong>
      </span>
    ),
    longBreakTime: <span>Descanso longo.</span>,
  };

  const tipsForNoActiveTask: Record<CycleType, ReactNode> = {
    workTime: (
      <span>
        Próximo ciclo é de <strong>{state.config.workTime}min</strong>
      </span>
    ),
    shortBreakTime: (
      <span>
        Próximo descanso é de <strong>{state.config.shortBreakTime}min</strong>
      </span>
    ),
    longBreakTime: <span>Próximo descanso será longo.</span>,
  };
  return (
    <>
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask &&
        tipsForNoActiveTask[nextCycleType as keyof typeof tipsForNoActiveTask]}
    </>
  );
}
