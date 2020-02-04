import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class ViewVideo extends Component {
    render() {
        console.log(this.props.match)
        return (
            <div>
                <h1>Video Page</h1>
                <Link to='/videos'><button>Back</button></Link>
                <br/>
                <br/>
                <iframe title='video' width="560" height="315" src={`https://www.youtube.com/embed/${this.props.match.params.videoId}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        )
    }
}