/// <reference path="typings/tsd.d.ts" />

import React = require('react');

export interface IAppProps {
	name: string;
}

export default class App extends React.Component<IAppProps, any> {
	render() {
		return (
			<h1>Hello2, {this.props.name}!</h1>
		);
	}
}
