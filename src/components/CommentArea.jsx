import { Component } from "react";

class CommentArea extends Component{
    
state= {
comments : []
}




componentDidMount = async ()  => {
    try {
        let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + this.props.asin
        ,{
            headers: {
                Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzEwOGU4MWVkZDY3ODAwMTUwN2Q3MzQiLCJpYXQiOjE2NjIwMjk0NDEsImV4cCI6MTY2MzIzOTA0MX0.V3BZhbimXxKJnE2_CHALYYWFMGvvzYXBcX7sjT60dK4'
            },
            
        }
        )

if (response.ok){
    let data = await response.json()
    console.log(data)
}else {

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