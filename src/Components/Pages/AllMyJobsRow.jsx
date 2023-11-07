
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AllMyJobsRow = ({job, handleDelete}) => {
    const {_id, userName, photoURL, jobTitle, salary, category, applicantsNumber, formatStartDate, formatEndDate } = job;

    return (
        
             <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photoURL ? photoURL :'https://i.ibb.co/BqRpHN5/60111.jpg '} alt={jobTitle} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{userName}</div>
                    </div>
                </div>
            </td>
            <td>
                {jobTitle}
                <br />
                <span className="badge badge-ghost badge-sm">{category}</span>
            </td>
            <td>
                <p>$ {salary}</p>
            </td>
            <td>
                <p>{applicantsNumber}</p>
            </td>
            <td>
                {formatStartDate}
            </td>
            <td>{formatEndDate}</td>
            <th className='space-x-2'>
                <Link to={`/update/${_id}`} className="btn btn-outline btn-xs btn-warning">Update</Link>
                <Link onClick={()=>handleDelete(_id)} className="btn btn-outline btn-xs btn-error">Delete</Link>
            </th>
        </tr>

    );
};

AllMyJobsRow.propTypes = {
    job: PropTypes.object.isRequired,
    handleDelete: PropTypes.func
};

export default AllMyJobsRow;