import * as React from 'react';
import data from '../paxful.json';

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {

    componentWillMount(){
        this.props.getData()
    }
  public render() {
    return (
      <div>
        
      </div>
    );
  }
}
