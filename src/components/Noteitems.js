import React from "react"
import DeleteButton from "./DeleteButton"
import Archivebutton from "./Archivebutton"


function Noteitems({title,body,createdAt,id,onDelete,onArchive}){



    return(
        <div className="note-item">
            <h3 className="note-item__title">{title}</h3>
            <p className="note-item__body">{body}</p>
            <p className="note-item__date">{createdAt}</p>
            <DeleteButton id={id} onDelete={onDelete}/>
            <Archivebutton id={id} onArchive={onArchive}/>
        </div>

    )
}

export default Noteitems