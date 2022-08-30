import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AgencyCard from './Card/AgencyCard';
const styles = () => ({
  myCard: {
    backgroundColor: 'blue',
  },
});
class AgencyBox extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <AgencyCard classes={{
          root: classes.myCard  // <---- OK
        }} />
      </div>);
  }
}
export default withStyles(styles)(AgencyBox);