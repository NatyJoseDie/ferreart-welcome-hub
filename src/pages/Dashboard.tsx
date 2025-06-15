
import { Navbar } from "@/components/Navbar";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <About />
      <Footer />
    </div>
  );
};

export default Dashboard;
