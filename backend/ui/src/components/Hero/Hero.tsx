import React, {useState} from 'react';
import './Hero.css';


const Hero: React.FC = () => {
    const [isPaneOpen, setIsPaneOpen] = useState<boolean>(false);

    return (

        <section className="h-full bg-anchored" style={{backgroundImage: 'url(/imgs/hero-bg.jpg)'}}>
            
        </section>

    );
}

export default Hero;
