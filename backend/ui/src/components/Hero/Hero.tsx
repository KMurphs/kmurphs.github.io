import React from 'react';
import './Hero.css';


const Hero: React.FC = () => {


    return (

        <section className="hero h-full bg-anchored flex justify-between items-center" style={{backgroundImage: 'url(/imgs/hero-bg.jpg)'}}>
            <div className="p-8 ml-8 text-gray-100 ">
                <h1 className="text-4xl py-8">Lorem ipsum dolor sit amet.</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, alias debitis maxime aspernatur quasi officia iste! Eligendi corporis vitae impedit sapiente necessitatibus, voluptates vel facilis, aut voluptas itaque quasi praesentium harum dolore eos esse perferendis. Incidunt ad suscipit commodi nesciunt, perspiciatis illo inventore ipsa ut impedit, a tempore quis sequi.</p>
            </div>
            <div className="cta ml-8 flex flex-center  p-8 text-gray-100">
                <div className="p-8 border border-gray-100 bg-mask-dark-500 rounded-lg ">
                    <h2 className="text-2xl pb-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, sequi.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid mollitia totam exercitationem culpa, optio quibusdam ratione dicta sed architecto libero! </p>
                    <div className="flex justify-between mt-8">
                        <a href="/" className="w-48 py-2 flex flex-center border-2 border-blue-500 px-8 rounded-lg text-white inline-block hover:bg-blue-900 transition-300 bg-blue-500"><span>View Projects</span></a>
                        <a href="/" className="w-48 py-2 flex flex-center border-2 border-blue-500 px-8 rounded-lg text-white inline-block hover:bg-blue-900 transition-300 bg-transparent"><span>Contact Me</span></a>
                    </div>

                </div>
            </div>
        </section>

    );
}

export default Hero;
