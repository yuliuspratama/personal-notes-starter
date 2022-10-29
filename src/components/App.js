import React from 'react';
import AppHeader from './AppHeader';
import Notelist from './Notelist';
import { getInitialData , showFormattedDate } from '../utils';
import Noteadd from './Noteadd';
import Notekosong from './NoteKosong';
import '../styles/style.css';

class Appnote extends React.Component {
    constructor(props){
        super(props);
        this.state={
            notes : getInitialData(),
        }
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this)
        this.onDeleteHandler= this.onDeleteHandler.bind(this)
    }

    onDeleteHandler(id){
        const notes = this.state.notes.filter(notes => notes.id !== id);
        this.setState({notes});
    }

    onAddNoteHandler({title,body,createdAt,archived}){
        this.setState((prevState)=>{
            return{
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt : showFormattedDate(new Date()),
                        archived : false,
                    }
                ]
            }
        })
    }
    render(){

        return(
        <div className='Noteapp'>
        <AppHeader />
        <Noteadd AddNote={this.onAddNoteHandler}/>
        <h1>Aktif</h1>
        {this.state.notes == 0 && <Notekosong />}
        <Notelist notes={this.state.notes} onDelete={this.onDeleteHandler} />
        <h1>Arsip</h1>
        <Notelist notes={this.state.notes} onDelete={this.onDeleteHandler} />
        </div>
        )
    }
}


export default Appnote;