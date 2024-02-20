import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";

function App() {
  return (
    <AuthProvider>
      <div>
        <Navbar />
        <Section />
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
