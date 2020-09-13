import React from 'react';
import ReactDom from 'react-dom';
import Comment from '../src/comment/comment.component';
import faker from 'faker';
import ApprovalCard from '../src/approvalCard/approvalCard.component';
const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard />
			<Comment
				author="piincher"
				timeAgo="today at 4h:45mn"
				text="interesting blog"
				avatar={faker.image.avatar()}
			/>
			<Comment author="lecze" timeAgo="today at 5h:09mn" text="very cool post" avatar={faker.image.avatar()} />
			<Comment author="focxy" timeAgo="today at 08h:07mn" text="nice blog" avatar={faker.image.avatar()} />
		</div>
	);
};

ReactDom.render(<App />, document.querySelector('#root'));
