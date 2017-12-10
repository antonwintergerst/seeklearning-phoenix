import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({
  size, width, height, icon, color,
}) => {
  const styles = {
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle',
    },
    path: {
      fill: color,
    },
  };

  return (
    <svg
      style={styles.svg}
      width={`${width || size}px`}
      height={`${height || size}px`}
      viewBox={`0 0 ${width || 1024} ${height || 1024}`}
    >
      <path style={styles.path} d={icon} />
    </svg>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

Icon.defaultProps = {
  size: 16,
  width: null,
  height: null,
  color: '#000',
};

export default Icon;
