
    import React, { Component } from 'react'

import LoginService from '../services/LoginService'



class MovieListComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                movies: []
        }
       
    }
  


    componentDidMount(){
        
       LoginService.getMovies().then(res => {
        this.setState({movies: res.data});
    })
}
            
   
        
    

 

    render() {
       
        return (
            <div>
                
                <h3> Shopping Made easy </h3>
                
                 <h2 className="text-center">Movies List</h2>
                
                <br></br> 
                <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Movie Name</th>
                                    <th> Description</th>
                                    <th> Rating</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.movies.map(
                                        movie => 
                                        <tr key = {movie.id}>
                                             <td> {movie.name} </td>   
                                             <td> {movie.desc}</td>
                                             <td> {movie.rating}</td>
                                             <td>
                                                 <button ame="btn btn-dark"> </button>
                                                 
                                                 <button style={{marginLeft: "10px"}} >View Cart </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                            </table>

                            </div> 

            </div>
        )
    }
}

export default  MovieListComponent;