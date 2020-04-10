import React from "react";

function About() {
  return (
    <div className="col-xs-12 col-md-10">
      <div className="bodyBox">
        <h2>About Me</h2>
        
        <img className="bioImage" src="../../images/pic-me.jpg"/>
        <p>A first generation Polish-American, walking high-fantasy Encyclopedia, and parent to two Siamese cats. I've
          been all over the world, and worked in many of the different industries on it. I first began drawing when
          young, and that took me into teaching myself how to use Photoshop in high school, which then pushed me to
          college to follow my ambition in creating the very video games I love playing.
        </p>
        
        <p>I have so many interests on so many spectrums; I'm a writer of short stories and poetry, I create art both
          on paper and digitally (2D and 3D), I've managed teams and prepared interns for their entire career, I've
          built upon old tech (EverQuest) and new (Virtual Reality). I feel as if I've done everything, though what
          I've always felt was my calling, is coding. The instances where I was able to manipulate products in
          previous art roles via CSS and Python left me chasing more. There's not a feeling even close to what
          creating code that works feels like; it's the ultimate challenge without a shortage of new problems to
          solve, and I'm not one to back down.
        </p>
      </div>
    </div>
  );
};

export default About;