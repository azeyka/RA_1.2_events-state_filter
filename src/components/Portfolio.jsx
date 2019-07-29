import React, { Component } from 'react'
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

export default class Portfolio extends Component {
    state = {
        selected: 'All',
    };

    getFilters = () => {
        return ["All", "Websites", "Flayers", "Business Cards"];
    };

    onSelectFilter = filter => {
        this.setState({selected: filter});
    };

    getAllProjects = () => {
        return [{
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
          category: "Business Cards"
        }, {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
          category: "Websites"
        }, {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
          category: "Websites"
        }, {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
          category: "Websites"
        }, {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
          category: "Business Cards"
        }, {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
          category: "Websites"
        }, {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
          category: "Websites"
        }, {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
          category: "Business Cards"
        }, {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
          category: "Websites"
        }, {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
          category: "Flayers"
        }, {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
          category: "Websites"
        }, {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
          category: "Business Cards"
        }, {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
          category: "Websites"
        }, {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
          category: "Websites"
        }, {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
          category: "Business Cards"
        }, {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
          category: "Websites"
        }, {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
          category: "Flayers"
        }];
    };

    selectProjects = () => {
        if (this.state.selected !== 'All') {
            return this.getAllProjects().filter(prj => prj.category === this.state.selected);
        };

        return this.getAllProjects();
    };

    render() {        
        return (
            <div className='main_content'>
                <Toolbar    
                    filters={this.getFilters()}
                    selected={this.state.selected}
                    onSelectFilter={this.onSelectFilter}/>
                <ProjectList
                    projects={this.selectProjects()}/>
            </div>
        )
    }
};
