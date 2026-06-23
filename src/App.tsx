import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Olá, Mundo!
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Este é um parágrafo de exemplo. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Este é um parágrafo de exemplo. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit.
      </p>
    </>
  );
}
