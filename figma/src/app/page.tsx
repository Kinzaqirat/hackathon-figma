import HeroSection from "@/components/HeroSection";

import About from "../components/page";
import ChooseItem from "@/components/ChooseItem";
import ChooseItemtwo from "@/components/chooseItemtwo";
import Main from "@/components/Main";
import Chefs from "@/components/Chefs";
import Blog from "@/components/Blog";
import Testimormals from "@/components/Testimormals";
import Main2 from "@/components/Main2";


export default function Home() {
  return (
   <div className="bg-gradient-to-r from-black to-gray-900">
     <HeroSection/>
    <About/>

<ChooseItem/>
<ChooseItemtwo/>
<Main/>
<Chefs/>
<Testimormals/>
<br />
<Main2/>
<Blog/>


   </div>
  );
}
