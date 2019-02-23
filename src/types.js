import PropTypes from 'prop-types';

const STARS_TYPE = PropTypes.number;
const REPO_TYPE = PropTypes.string;
const URL_TYPE = PropTypes.string;
const DESCRIPTION_TYPE = PropTypes.string;
const ID_TYPE = PropTypes.number;

export const REPO_OBJECT_SHAPE = {
  STARS_TYPE,
  REPO_TYPE,
  ID_TYPE,
  DESCRIPTION_TYPE,
  URL_TYPE,
};

export const REPO_SHAPE = PropTypes.shape(REPO_OBJECT_SHAPE).isRequired;

