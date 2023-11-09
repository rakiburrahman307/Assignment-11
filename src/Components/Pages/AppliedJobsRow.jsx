
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const AppliedJobsRow = ({ job }) => {
    const { jobTitle, salary, formatEndDate, cvLink, category, applyUserEmail } = job;
    return (
        <motion.tr
            whileHover={{ scale: 1.05, backgroundColor: "#f2f2f2" }}
            whileTap={{ scale: 0.95 }}
            className="hover:bg-gray-100 cursor-pointer"
        >
            <td>{jobTitle}</td>
            <td>{category}</td>
            <td>{applyUserEmail}</td>
            <td>${salary}</td>
            <td>{formatEndDate}</td>
            <td>{cvLink}</td>
            <td></td>
        </motion.tr>
    );
};

AppliedJobsRow.propTypes = {
    job: PropTypes.object
};

export default AppliedJobsRow;