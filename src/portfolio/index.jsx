import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './project.scss';
import Section from './SectionComponent.jsx';
import ProjectEntry from './projectEntry.jsx';

export default class Project extends Component {
	_isMounted = false;

	constructor(props) {
		super(props);

		this.state = {
			data: [],
		}
	}

	componentDidMount() { 
		this._isMounted = true;

		if(this._isMounted) {
			// SET UP DIFFERENT API END POINTS FOR COLLECTING DATA
			fetch(`http://localhost:3000/api/projects/${this.props.projectId}`)
		      .then(response => response.json())
		      .then(data => this.setState({ data: data }))		
		}
	}


	render () {
		var data = this.state.data;
		var sectionsArray = this.state.data.sections;

		if (sectionsArray != null) {
		return (
			<div id='project-page-container'>
				<ProjectEntry data={data} />
				{sectionsArray.map((section, i) => 
					<Section 
						key={i}
						text={section.text}
						title={section.title.toUpperCase()}
					/>

			 	)}
					
			</div>
		)} else {
			return null;
		}
	}
}