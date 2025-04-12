import Image from "next/image";
import NavigationBar from"./Components/NavBar";
import PromotionBanner from "./Components/PromotionBanner";
import Partner from "./Components/Partner";
export default function Home() {
  return (
   <div className="min-h-screen bg-gray p-2 mt-3">
    <NavigationBar/>
     <PromotionBanner/>
      <Partner/>
    
    </div>
     );
}