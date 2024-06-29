"use client"
import HelloComponent from './components/HelloComponent/page'; //Animated Hello
import HeroScrollBrandName from './components/HeroScrollBrandName/page';// Branding and brand name
import { LocationCard } from './components/LocationCard/page';
import ToggleButton from './components/ToggleButton/page';
import  DetailInformation  from './components/DetailInformation/page';
import People from './components/People/page';
import { PlaceholdersAndVanishInput } from './components/ui/placeholders-and-vanish-input';
import { SparklesPreview } from './components/SparkelsPreview/page';
import FlippingText from './components/FlippingText/page';
import SignupForm from './components/SignupForm/page';
import  GlobeComponent  from './components/GlobeComponent/page';
import  SocialMedia  from './components/SocialMedia/page';
import { TracingBeam } from './components/ui/TracingBeam';



export default function Home() {
    return (


      <>
     
        <HelloComponent/>
        <TracingBeam>
              <ToggleButton/>
              <HeroScrollBrandName/>
              <LocationCard/>
              <DetailInformation/>
              <People/>
              <SparklesPreview/>
              <FlippingText/>
              <PlaceholdersAndVanishInput/>
              <GlobeComponent/>
              <SocialMedia/>
              <SignupForm />
      </TracingBeam>
      
      
      
      
      </>
  );
}
