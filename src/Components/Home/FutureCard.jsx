
import PropTypes from 'prop-types';
import { useState } from 'react';

const FutureCard = ({ data }) => {
  const { photoURL, jobTitle, description, category } = data;
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };
  return (
    <div
    data-aos='fade-up'
    data-aos-duration='2000'
    className="card w-auto bg-base-100 shadow-xl transition-transform transform hover:scale-105">
      <figure>
        <img className={`${ isLoaded ? 'blur-0' : 'blur-md'} h-52`}
        loading="lazy"
        onLoad={handleImageLoad}
        src={photoURL} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{jobTitle}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{category}</div>
        </div>
      </div>
    </div>

  );
};

FutureCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default FutureCard;