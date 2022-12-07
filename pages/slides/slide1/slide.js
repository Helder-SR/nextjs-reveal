
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';

import '/node_modules/reveal.js/dist/reveal.css';
import '/node_modules/reveal.js/dist/theme/black.css';


Reveal.initialize({
    //hash:true,
    controls:true,
    width:1000,
    height:1000,
    margin: 0.1,
    display:true,



    // Bounds for smallest/largest possible scale to apply to content
    minScale: 0.2,
    maxScale: 1.5,

    plugins: [ Markdown ]

});

export default function Slide(){
    return(
        <>
            <div class="reveal">
			<div class="slides">
				<section>Slide 1</section>
                <section data-state="make-it-pop">
                    <section>Vertical Slide 1</section>
                    <section>Vertical Slide 2</section>
                </section>
                <section data-markdown>
                    <textarea data-template>
                      ## Slide 1
                      A paragraph with some text and a [link](http://hakim.se).
                      ---
                      ## Slide 2
                      ---
                      ## Slide 3
                    </textarea>
                </section>

			</div>
		</div>
        </>
        
    )
}