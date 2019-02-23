import React, { PureComponent } from 'react';
import {
  Button,
  Link,
} from 'components';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Repo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isVisited: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      isVisited: true,
    });
  }

  render() {
    const {
      url,
      name,
      history: {
        goBack,
      },
    } = this.props;
    const {
      isVisited,
    } = this.state;
    return (
      <div className="repo-page">
        <div className="repo">
          <h6>{name}</h6>
          <div>
            <Link
              className={classNames({ disabled: isVisited })}
              target="_blank"
              href={url}
              onClick={this.onClick}
            >
              Open On Github
            </Link>
            <Button
              onClick={goBack}
            >
              Back
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

Repo.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
};

export default Repo;
