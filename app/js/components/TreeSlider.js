import React, { PropTypes } from 'react';
import Item from './Item';
require('../../styles/treeSlider.css');
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const treeViews = [
    'useCase',
    'useCaseDetail',
    'release',
    'releaseDetail',
    'silo',
    'siloDetail'
];

class TreeSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            direction: '',
            currentTreeIndex: 0
        };
        this.getItems = this.getItems.bind(this);
        this.moveLeft = this.moveLeft.bind(this);
        this.moveRight = this.moveRight.bind(this);
    }

    moveLeft() {
        const newCurrentTreeIndex = this.state.currentTreeIndex === 0 ? 0 
        : Math.max(0, this.state.currentTreeIndex - 2);
        this.setState({
            currentTreeIndex: newCurrentTreeIndex,
            direction: 'left'
        });
    }

    moveRight() {
        const newCurrentTreeIndex = this.state.currentTreeIndex === 0 ? 1 
        : Math.min(treeViews.length-1, this.state.currentTreeIndex + 2);
        this.setState({
            currentTreeIndex: newCurrentTreeIndex,
            direction: 'left'
        });
    }

    getItems() {
        const items = [];
        let key = '';
        if (this.state.currentTreeIndex === 0) {
            // nothing to the left
            key = treeViews[this.state.currentTreeIndex];
            items.push(<Item key={key} id={key} position="positionFull">{key}</Item>);
            key = treeViews[this.state.currentTreeIndex + 1];
            items.push(<Item key={key} id={key} position="positionHiddenRight">{key}</Item>);
            key = treeViews[this.state.currentTreeIndex + 2];
            items.push(<Item key={key} id={key} position="positionHiddenRight">{key}</Item>);
        } else if (this.state.currentTreeIndex === treeViews.length-1) {
            // nothing to the right
            key =treeViews[this.state.currentTreeIndex - 2];
            items.push(<Item key={key} id={key} position="positionHiddenLeft">{key}</Item>);
            key =treeViews[this.state.currentTreeIndex - 1];
            items.push(<Item key={key} id={key} position="positionHiddenLeft">{key}</Item>);
            key = treeViews[this.state.currentTreeIndex];
            items.push(<Item key={key} id={treeViews[this.state.currentTreeIndex]} position="positionFull">{key}</Item>);
        } else {
            if (this.state.currentTreeIndex - 2 >= 0){
                key = treeViews[this.state.currentTreeIndex - 2];
                items.push(<Item key={key} id={key} position="positionHiddenLeft">{key}</Item>);
            }
            key = treeViews[this.state.currentTreeIndex - 1];
            items.push(<Item key={key} id={key} position="positionHiddenLeft">{key}</Item>);
            key =treeViews[this.state.currentTreeIndex];
            items.push(<Item key={key} id={key} position="positionLeft">{key}</Item>);
            key = treeViews[this.state.currentTreeIndex + 1];
            items.push(<Item key={key} id={key} position="positionRight">{key}</Item>);
            key = treeViews[this.state.currentTreeIndex + 2];
            items.push(<Item key={key} id={key} position="positionHiddenRight">{key}</Item>);
            if (this.state.currentTreeIndex + 3 <= treeViews.length -1) {
                key = treeViews[this.state.currentTreeIndex + 3];
                items.push(<Item key={key} id={key} position="positionHiddenRight">{key}</Item>);
            }
        }
        return items;
    }
    render() {
        return (
            <div>
                <ReactCSSTransitionGroup className="treeSlider"
                    transitionName={this.state.direction}
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {this.getItems()}
                </ReactCSSTransitionGroup>
                <div className="arrow" onClick={this.moveLeft}>left</div>
                <div className="arrow" onClick={this.moveRight}>right</div>
            </div>
        );
    }
}

TreeSlider.propTypes = {
    children: PropTypes.array
};

export default TreeSlider;