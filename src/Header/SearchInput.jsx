import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { InputField } from 'components';

// class SearchInput extends PureComponent {
//   constructor(props) {
//     super(props);
//     const { searchTerm } = this.props;
//     this.state = {
//       searchTerm,
//     };
//     this.onChange = this.onChange.bind(this);
//   }

//   onChange(e) {
//     const {
//       target: {
//         value: searchTerm,
//       },
//     } = e;
//     const {
//       onChange,
//     } = this.props;
//     this.setState({
//       searchTerm,
//     }, () => onChange(searchTerm));
//   }

//   render() {
//     const {
//       searchTerm,
//     } = this.state;
//     return (
//       <div className="search-box">
//         <i className="material-icons">
//           search
//         </i>
//         <InputField
//           value={searchTerm}
//           onChange={this.onChange}
//           className="search"
//         />
//       </div>
//     );
//   }
// }

const SearchInput = memo((props) => {
  const {
    searchTerm,
    onChange,
  } = props;
  return (
    <div className="search-box">
      <i className="material-icons">
              search
      </i>
      <InputField
        value={searchTerm}
        onChange={onChange}
        className="search"
      />
    </div>
  );
});

SearchInput.propTypes = {
  searchTerm: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

SearchInput.defaultProps = {
  searchTerm: '',
};

export default SearchInput;
