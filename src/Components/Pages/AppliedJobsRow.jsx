
import PropTypes from 'prop-types';

const AppliedJobsRow = ({ job }) => {
    const { jobTitle, salary, formatEndDate, cvLink } = job;
    return (
        <tr className="hover">
            <td>{jobTitle}</td>
            <td>{salary}</td>
            <td>{formatEndDate}</td>
            <td>{cvLink}</td>
        </tr>
    );
};

AppliedJobsRow.propTypes = {
    job: PropTypes.object
};

export default AppliedJobsRow;