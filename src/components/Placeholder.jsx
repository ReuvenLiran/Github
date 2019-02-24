import React, { memo } from 'react';
import classNames from 'classnames';

const Placeholder = memo((props) => {
  const { className, children, icon } = props;
  return (
    <div className={classNames('placeholder', className)}>
      {children}
      <i className="material-icons">{icon}</i>
    </div>
  );
});

export default Placeholder;
