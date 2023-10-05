import photo4 from './photo4.jpg';

function About() {
    return (
        <div>
            <div className="container text-light mt-5">
                <div className="row">
                    <div className="col">
                        <img src={photo4} alt="Not Found " className="rounded mx-auto d-block w-50" />
                    </div>

                    <div className="col">
                        <h2> About <span className="text-info"> Me </span></h2>
                        <h4>Web Developer</h4>
                        <div>
                            I am Bharat Bisen, and I am very happy to tell you that i have completed 
                            my full-stack Web Development Course From RTSoft solution Computer Training Institute Gondia.  
                            In this course I learnd HTML 5, CSS, JavaScript, Reactjs, jQuery, Bootstrap, SQL, MySQL, Node.js Express.js, React.js, JSON, Git, Github, Figma.
                            Also I have created Some Prjects like CURD Application ( Ragistration form in this I used Database and I created API to Fatch Data ), 
                            Front-End Templates (Like Home page, About page and etc,. ),  
                            Now I am working as Intern in RTSoft solution Gondia. 
                            In this training I am learning how to work with team and get knowladge 
                            about some other technologies like Tailwindcss and etc,.
                        
                        </div>
                        <div className="my-5">
                            <a href="./resume" class="btn btn-info rounded-pill "> Read More </a>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default About;