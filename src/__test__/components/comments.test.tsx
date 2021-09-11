import React from 'react';
import   {Props } from '../../components/comments/Comment';
import { IComment } from '../../types/actionsTypes';
import { render } from '@testing-library/react';
import { Comment} from '../../components/comments/Comment'
function renderComment(props: Partial<Props> = {}) {
    const defaultProps: Props = {
        comment: {
            postId: 1,
             id: 1,
             name: "",
             email: "",
             body: ""  
        }
    }
    return render(<Comment  {...defaultProps} {...props }/>);
}
describe('Comment test', () => {
    test('Check the comment has name, email and body', async() => {
        const { findByTestId } = renderComment();
        const commentById = await findByTestId("comment");
        const nameById = await findByTestId("name");
        const emailById = await findByTestId("email");
        expect(commentById).toBeInTheDocument();
        expect(nameById).toBeInTheDocument();
        expect(emailById).toBeInTheDocument();
    })
    test('The comment take the params in the props', async () => {
        const commentMock:IComment ={
             postId: 1,
             id: 1,
             name: "Name-name",
             email: "Email-email",
             body: "Body-body" 
         }
        const {getByText } = renderComment({ comment: commentMock });

        const comment = getByText("Body-body");
        const name = getByText("Name-name")
        const email =getByText("Email-email")
        expect(comment).toBeDefined();
        expect(name).toBeDefined();
        expect(email).toBeDefined();

    })
})
