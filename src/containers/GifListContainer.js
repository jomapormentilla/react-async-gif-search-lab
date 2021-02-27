import React from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
    state = {
        query: "",
        images: []
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.getGifs()
    }

    getGifs = () => {
        let url = `https://api.giphy.com/v1/gifs/search?q=`
        let apikey = `dc6zaTOxFJmzC&rating=g`

        fetch(url + this.state.query + `&api_key=` + apikey)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let images = data.data.map(img => {
                return {src: img.images.original.url, id: img.id}
            })
            this.setState({ images: images })
        })
    }

    renderGifs = () => {
        if (this.state.images.length !== 0) {
            return this.state.images.map(image => <GifList key={ image.id } image={ image } />)
        }
    }

    render(){
        return(
            <div className="gifListContainer">
                <GifSearch handleInputChange={ this.handleInputChange } handleSubmit={ this.handleSubmit } />
                { this.renderGifs() }
            </div>
        )
    }
}

export default GifListContainer