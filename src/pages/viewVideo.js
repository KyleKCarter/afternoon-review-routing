import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Video extends Component {
    render() {
        return (
            <div>
                <h1>Video Page</h1>
                <br/>
                <br/>
                <iframe title='video' width="560" height="315" src={`https://www.youtube.com/embed/${}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        )
    }
}