import React from 'react';
import faker from 'faker'


const Comment = ({name}) => (
     <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {name}
                    </a>
                    <div className="metadata">
                        <span className="date">aujourdhui a 16h20mn</span>
                    </div>
                    <div className="text">
                        nice blog post
                    </div>
                </div>
            </div>
)

export default Comment

