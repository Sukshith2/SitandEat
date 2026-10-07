  import { useEffect, useState } from "react";
  import "./App.css";
  import { getfooditems } from "./api/wordpress";
import type { FoodItem } from "./types/food";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";


  function App() {
    const [food, setfood] = useState<FoodItem[]>([]);
    const [error, seterror] = useState("");
    const [loading, setloading] = useState(true)

    useEffect(() => {
      const fetchData = async () => {
         try {
        const data = await getfooditems();
        setfood(data);
      } catch (error) {
        console.error("Failed to fetch food items:", error);
        seterror("Unable to load the menu. Please try again later.");
      } finally {
        setloading(false);
      }
    };

      fetchData();
    }, []);
  if (error) {
    return <p>{error}</p>;
  }

    return (
       <main>
      <Navbar/>
      <Hero/>
    </main>
    );
  }

  export default App;