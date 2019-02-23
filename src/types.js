import PropTypes from 'prop-types';

const STARS_TYPE = PropTypes.number;
const REPO_TYPE = PropTypes.string;
const DESCRIPTION_TYPE = PropTypes.string;

export const REPO_OBJECT_SHAPE = {
  STARS_TYPE,
  REPO_TYPE,
  DESCRIPTION_TYPE,
};

export const REPO_SHAPE = PropTypes.shape(REPO_OBJECT_SHAPE).isRequired;

