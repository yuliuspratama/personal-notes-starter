
import React from "react";

class Noteadd extends React.Component{
    constructor(props) {
        super(props);
    

    this.state = {
        title:'',
        body:'',
    }

    this.ontitleChangeEventHandler = this.ontitleChangeEventHandler.bind(this);
    this.onbodyChangeEventHandler = this.onbodyChangeEventHandler.bind(this);
    this.onSubmitChangeEventHandler = this.onSubmitChangeEventHandler.bind(this);
    }

    ontitleChangeEventHandler(event){
        this.setState(()=> {
            return{
                title: event.target.value,
            }
        });
    }

    onbodyChangeEventHandler(event){
        this.setState(()=> {
            return{
                body: event.target.value,
            }
        })
    }

    onSubmitChangeEventHandler(event){
            event.preventDefault();
            this.props.AddNote(this.state);
    }

    render(){
        return(
            <form className="note-input" onSubmit={this.onSubmitChangeEventHandler}>
                <input type="text" placeholder="Judul" value={this.state.title} onChange={this.ontitleChangeEventHandler}/>
                <input type="text" placeholder="Tulisan" value={this.state.body} onChange={this.onbodyChangeEventHandler}/>
                <button type="submit">Tambah</button>
            </form>
        )
    }
}

export default Noteadd;