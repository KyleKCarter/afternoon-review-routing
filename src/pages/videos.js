import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Video extends Component {
    constructor() {
        super();
        this.state = {
            videos: [
                {
                    id: '6WNqJixasGA',
                    name: 'Video 1'
                },
                {
                    id: '_2ASPUkkHMs',
                    name: 'Video 2'
                },
                {
                    id: 'paG1-lPtIXA',
                    name: 'Video 3'
                },
                {
                    id: 'tMgSvn2kKlk',
                    name: 'Video 4'
                },
                {
                    id: 'gR9izDp89c0',
                    name: 'Video 5'
                },
                {
                    id: 'eybZtDx6tAU',
                    name: 'Video 6'
                }
            ]
        }
    }

    render() {
        const mappedVideos = this.state.videos.map((val, index) => {
            return (
                <div key={index}>
                <Link to={`/videos/${val.id}`}><button>{val.name}</button></Link>
                </div>
            )
        })
        return (
            <div>
                <h1>Comedy Playlist Page</h1>
                <p>Viewer discretion is advised</p>
                {mappedVideos}
            </div>
        )
    }
}