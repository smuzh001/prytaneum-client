import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { format } from 'date-fns';

interface Props {
    time: number;
}
export default function MessageItemTimestamp({ time }: Props) {
    return (
        <Typography variant='body1'>
            {format(new Date(time), 'hh:mm')}
        </Typography>
    );
}

MessageItemTimestamp.propTypes = {
    time: PropTypes.number.isRequired,
};
