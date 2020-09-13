import React from 'react';
import ReactDom from 'react-dom';
import Comment from '../src/comment/comment.component'
const App = () => {
    return (
        <div className="ui container comments">
            <Comment name='piincher'/>
            <Comment  name='lecze'/>
            <Comment name='focxy'/>
        </div>
    )
        
    
}

ReactDom.render(<App />, document.querySelector("#root"))