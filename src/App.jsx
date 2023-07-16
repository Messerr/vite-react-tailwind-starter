import './App.css';
import Layout from './components/Layout/Layout';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <>
      <Layout>
        <Navigation logoSrc={'/vite.svg'} logoAlt={'logo'} />
      </Layout>
    </>
  );
}

export default App;
