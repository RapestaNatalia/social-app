import React,{FunctionComponent} from 'react'
import { IComment } from '../../types/actionsTypes';
import './CommentStyle.css';

export interface Props{
    comment: IComment
}

export const Comment: FunctionComponent<Props> = props => {
    const { comment } = props;
    return (
        <div data-testid="comment" className='comment-body'>
            <h1 data-testid="email" className="comment-email"> {comment.email}</h1>
            <h4 data-testid="name" className='comment-name'> {comment.name}</h4>
            {comment.body}
        </div>
    )
}