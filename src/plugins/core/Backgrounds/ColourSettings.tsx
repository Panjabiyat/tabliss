import * as React from 'react';
import { Settings } from '../../interfaces';

interface Props {
  colour?: string;
  onChange: (settings: Settings) => void;
}

class ColourSettings extends React.Component<Props> /* implements Plugin - Not working because static */ {
  static defaultProps = {
    colour: '#8fd3f4',
  };

  render() {
    return (
      <div>
        <label>
          Colour
          <input
            type="text"
            value={this.props.colour}
            onChange={event => this.props.onChange({ colour: event.target.value })}
          />
        </label>
      </div>
    );
  }
}

export default ColourSettings;