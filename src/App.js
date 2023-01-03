
import { useEffect } from 'react';
import './App.css';
import { SCHEDULER_EMBEDDED, SLUG } from './env';
import { importResource, removeMultipleResources, removeResource } from './functions';

const App = () => {
  useEffect(() => {
		setTimeout(() => {
			importResource({
				id: 'scheduler-embeded-by-vecindario',
				script: SCHEDULER_EMBEDDED,
			});
		}, 10);
		return () => {
			removeResource('#scheduler-embeded-by-vecindario');
			removeMultipleResources('.script-my-suite-scheduler');
			removeMultipleResources('.style-my-suite-scheduler');
		};
	}, []);

  return (
    <div className="App">
      <header className="App-header">
          <h1>Agendador</h1>
          <div id="agendadorByVecindario" data-projectslug={SLUG}></div>
      </header>
    </div>
  );
}

export default App;
