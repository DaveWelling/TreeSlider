import React, {PropTypes} from 'react';

class TreeSlider extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                Hi!
                {this.props.children}
            </div>
        );
    }
}

TreeSlider.propTypes = {
    children: PropTypes.array
};

export default TreeSlider;