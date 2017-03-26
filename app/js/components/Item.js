import React, {PropTypes} from 'react';
class Item extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            position: this.props.position
        };
    }
    
    render() {
        const className = 'item ' + this.props.position;
        return(
            <div className={className}>
                {this.props.children}
            </div>
        );
    }
}

Item.propTypes = {
    position: PropTypes.string,
    id: PropTypes.string,
    children: PropTypes.string
};

export default Item;