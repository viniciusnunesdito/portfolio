import Navbar from './sections/Navbar.jsx';
import Intro from './sections/Intro.jsx';
import Projects from './sections/Projects.jsx';
import ContactCTA from './sections/ContactCTA.jsx';

const App = () => {
  return (
    <main className="min-h-screen max-w-7xl mx-auto relative">
      <Navbar />
      <Intro />
      <Projects />
      <ContactCTA />
    </main>
  );
};

export default App;
