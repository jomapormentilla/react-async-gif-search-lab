import React from 'react'

class GifSearch extends React.Component {
    render(){
        return(
            <div>
                <form onSubmit={ this.props.handleSubmit }>
                    <input onChange={ (e)=>{this.props.handleInputChange(e)} } type="text" name="query" />
                    <input type="submit" value="Search Gifs" />
                </form>
            </div>
        )
    }
}

export default GifSearch