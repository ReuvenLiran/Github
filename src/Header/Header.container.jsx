import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import SearchInput from './SearchInput';
// import SearchButton from './SearchButton';

import HeaderView from './Header';

const withSearch = WrappedComponent => class extends PureComponent {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onChange(e) {
    const {
      target: {
        value: searchTerm,
      },
    } = e;
    this.setState({
      searchTerm,
    });
  }

  onSearch() {
    const { onSearch } = this.props;
    const {
      searchTerm,
    } = this.state;
    onSearch(searchTerm);
  }

  render() {
    const {
      searchTerm,
    } = this.state;
    return (
      <div>
        <HeaderView
          onChange={this.onChange}
          onSearch={this.onSearch}
          searchTerm={searchTerm}
        />
        <WrappedComponent
          searchTerm={searchTerm}
        />
      </div>
    );
  }
};

export default withSearch;

// class Header extends PureComponent {
//   static propTypes = {
//     onSearch: PropTypes.func.isRequired,
//   }

//   constructor() {
//     super();
//     this.state = {
//       searchTerm: '',
//     };
//     this.onChange = this.onChange.bind(this);
//     this.onSearch = this.onSearch.bind(this);
//   }

//   onChange(e) {
//     const {
//       target: {
//         value: searchTerm,
//       },
//     } = e;
//     this.setState({
//       searchTerm,
//     });
//   }

//   onSearch() {
//     const { onSearch } = this.props;
//     const {
//       searchTerm,
//     } = this.state;
//     onSearch(searchTerm);
//   }

//   render() {
//     const {
//       searchTerm,
//     } = this.state;
//     return (
//       <div>
//         <HeaderView
//           onChange={this.onChange}
//           onSearch={this.onSearch}
//           searchTerm={searchTerm}
//         />
//         </div>
//     );
//   }
// }

// export default Header;
