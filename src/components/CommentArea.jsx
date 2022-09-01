import { Component } from "react";

class CommentArea extends Component{
    





recuperaDati = async (e)  => {
    e.preventDefault()
    try {
        let response = await fetch('https://striveschool-api.herokuapp.com/api/comments')

if (response.ok){
    let data = await response.json()
    console.log(data)
}



    } catch (error) {
        
    }
}


    
    


 render() {
    return (
        <div>

        </div>
    )
 }




}




export default CommentArea