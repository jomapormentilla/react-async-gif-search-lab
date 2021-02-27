import React from 'react'

class GifList extends React.Component {
    render(){
        return(
            <div>
                <img src={ this.props.image.src } alt="" />
            </div>
        )
    }
}

export default GifList