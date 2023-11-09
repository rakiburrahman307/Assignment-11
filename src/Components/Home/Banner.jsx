const Banner = () => {
    const textField = (
        <div>
            <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                <div className="w-1/2 text-white pl-10 space-y-8" data-aos="zoom-in-left">
                    <h2 className="text-6xl font-bold">Unlock Your Career Potential with JobSwift</h2>
                    <p>
                        Explore a world of opportunities and take the next step in your professional journey with JobSwift Industries Ltd.
                        We are dedicated to connecting talented individuals with rewarding careers. Your dream job awaits!
                    </p>
                    <div className="flex" data-aos="flip-left">
                        <input type="text" placeholder="Type here" className="input input-bordered input-md w-48 max-w-md text-black rounded-none rounded-s-lg" />
                        <button className="btn btn-outline btn-warning rounded-e-full">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href="#slide6" className="btn btn-circle mr-5">❮</a>
        <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/8X9jbJ9/pexels-alena-darmel-7710118.jpg" className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 z-10">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                {textField}
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/YQ4q9XS/pexels-fox-1595385.jpg" className="w-full" />

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 z-10">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                {textField}
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/yW13vwn/Adobe-Stock-230967964-Preview.jpg" className="w-full" />

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 z-10">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
                {textField}
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/xDQxhLR/pexels-fauxels-3184418.jpg" className="w-full" />

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 z-10">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
                {textField}
            </div>
        </div>
    );
};

export default Banner;
