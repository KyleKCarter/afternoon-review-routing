import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Video extends Component {
    constructor() {
        super();
        this.state = {
            video1: '6WNqJixasGA',
            video2: '_2ASPUkkHMs',
            video3: 'paG1-lPtIXA',
            video4: 'tMgSvn2kKlk',
            video5: 'gR9izDp89c0',
            video6: 'eybZtDx6tAU',
        }
    }
    
    render() {
        return (
            <div>
                <h1>Video Playlist Page</h1>
            </div>
        )
    }
}