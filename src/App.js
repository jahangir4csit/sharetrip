import './App.css';
import theme from './components/ui/theme';
import { ThemeProvider } from '@mui/material';
import Header from  './components/layout/header'
import Content from './components/layout/content'
import Footer from './components/layout/footer'

function App() {
  return (
    <ThemeProvider theme={theme}> 
      <div className="App">
        <Header/>
        <Content />
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
