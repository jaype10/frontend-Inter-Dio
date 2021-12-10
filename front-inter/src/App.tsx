import { ThemeProvider } from 'styled-components';
import Router from './routes';
import GlobalStyles from './styles/globalStyles'
import { theme } from './styles/themes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
    
  );
}

export default App;
