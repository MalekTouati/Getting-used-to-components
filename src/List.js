import React from 'react';
import ListItem from './ListItem.js'

function List(){
    return(
        <div>
            <h1 style={{fontFamily:'Verdana'}}>This text's objective: annoy Azer!!!</h1>
            <div style={{backgroundColor:'yellow'}}> 
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
            </div>
            <div>
                <h1 style={{backgroundColor:'green'}}>Bad colors too! Muahahahahahahaha</h1>
            </div>
        </div>
    )
}

export default List;

