import React, { PureComponent } from 'react';
import {
  Button,
  Link,
} from 'components';

class Repo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visited: false,
    };
  }

  render() {
    const {
      url,
      history: {
        goBack,
      },
    } = this.props;
    return (
      <div>
        <Link
          target="_blank"
          href={url}
        >
        Github
        </Link>
        <Button
          onClick={goBack}
        >
          Back
        </Button>
      </div>
    );
  }
}

export default Repo;
