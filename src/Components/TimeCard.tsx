/// <reference path="../typings/tsd.d.ts" />

import React = require('react');

export interface ITimeCardProps {
	card: ICard;
}

export class TimeCardComponent extends React.Component<ITimeCardProps, any> {
	render() {
		return (
			<li>{this.props.card.name}</li>
		);
	}
}
