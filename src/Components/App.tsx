/// <reference path="../typings/tsd.d.ts" />

import React = require('react');
import TimeLine = require('./TimeLine.tsx')


export interface IAppProps {
}

export default class App extends React.Component<IAppProps, any> {
    render() {
		return (
			<div>
            <TimeLine.TimeLineComponent cards={[{name: "Card11"}, {name: "Card2"}]}/>
            </div>
		);
	}
}
