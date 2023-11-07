
import PropTypes from 'prop-types';

const AppliedJobsRow = ({ job }) => {
    const { jobTitle, salary, formatEndDate, cvLink, category, applyUserEmail } = job;
    return (
        <tr className="hover">
            <td>{jobTitle}</td>
            <td>{category}</td>
            <td>{applyUserEmail}</td>
            <td>${salary}</td>
            <td>{formatEndDate}</td>
            <td>{cvLink}</td>
            <td></td>
        </tr>
    );
};

AppliedJobsRow.propTypes = {
    job: PropTypes.object
};

export default AppliedJobsRow;