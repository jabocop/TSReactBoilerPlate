/// <reference path="../typings/tsd.d.ts" />

import React = require('react');
import TimeCard = require('./TimeCard.tsx')

export interface ITimeLineProps {
	cards : ICard[];
}

export class TimeLineComponent extends React.Component<ITimeLineProps, any> {
	private handleClick : () => void = () => {
        this.setState({cards: [{name: "Card3"}, {name: "Card4"}]});
        alert("TJOTHO");
    }
    
    public render() {
		return (
			<div>
            <ol>
                {this.props.cards.map(card => <TimeCard.TimeCardComponent card={card} />)}
            </ol>
            <div onClick={this.handleClick}>Add item</div>
            </div>
		);
	}
}
