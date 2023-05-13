import { PureComponent } from 'react';
import { connect } from 'react-redux';

import RouterComponent from './Router.component';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

class RouterContainer extends PureComponent {
  renderRouter() {
    return <RouterComponent />;
  }

  render() {
    return this.renderRouter();
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RouterContainer);
