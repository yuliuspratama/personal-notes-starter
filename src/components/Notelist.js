import React from "react";
import Noteitems from "./Noteitems";

function Notelist({notes,onDelete}){
    return(
        <div className="notes-list">
            {
        notes.map((notes) => (
            <Noteitems
            id ={notes.id}
            key ={notes.id}
            onDelete={onDelete}
            {...notes} />
        ))
}
</div>
    )
}

export default Notelist