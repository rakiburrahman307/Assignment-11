
import PropTypes from 'prop-types';

const FutureCard = ({ data }) => {
  const { photoURL, jobTitle, description, category } = data;
  return (
    <div className="card w-auto bg-base-100 shadow-xl">
      <figure><img src={photoURL} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">
          {jobTitle}

        </h2>
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