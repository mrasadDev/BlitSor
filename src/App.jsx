import '@mantine/charts/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import '@mantine/dates/styles.css';
import { theme } from '../theme/customTheme';
import { useRoutes } from 'react-router-dom';
import { routes } from './Router'

function App() {
  const content = useRoutes(routes);
  return (
    <>
      <MantineProvider theme={theme}>{content}</MantineProvider>
    </>
  );
}

export default App;
