import Mycard from './Mycard';


function Portfolio() {
    return (
        <div>
            <div className="container mt-5 text-white">
                <div className='row my-4 text-center'>

                    <h2>Latest <span className="text-info"> Project </span> </h2>

                </div>

                <div className=" row ">
                    <div className="col">
                        <Mycard/>
                    </div>
                    <div className="col">
                        <Mycard/>
                    </div>
                    <div className="col">
                        <Mycard/>
                    </div>
                    
                    
                </div>

            </div>

        </div>
    );
}

export default Portfolio;