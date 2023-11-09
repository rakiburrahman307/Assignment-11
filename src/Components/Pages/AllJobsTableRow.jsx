
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AllJobsTableRow = ({ row }) => {
    const { _id, userName, photoURL, jobTitle, salary, category, applicantsNumber, formatStartDate, formatEndDate } = row;
    return (
        <motion.tr
            whileHover={{ scale: 1.05, backgroundColor: "#f2f2f2" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="hover:bg-gray-100 cursor-pointer"
        >
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photoURL ? photoURL : 'https://i.ibb.co/BqRpHN5/60111.jpg'} alt={jobTitle} />
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
            <th>
                <Link to={`/all_job/${_id}`} className="btn btn-outline btn-xs btn-info">details</Link>
            </th>
        </motion.tr>
    );
};

AllJobsTableRow.propTypes = {
    row: PropTypes.object.isRequired,
};

export default AllJobsTableRow;