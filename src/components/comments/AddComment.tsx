import React,{FunctionComponent, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import { saveCommentAction } from '../../actions';
import { RootState } from '../../reducers';

interface Props{
    postId: number
}
export const AddComment: FunctionComponent<Props> = props => {
        const { postId } = props;
        const [textInput, setTextInput] = useState<string>('');
        const comments = useSelector((state: RootState) => state.posts.commentsById[postId]);

        const dispatch = useDispatch()
        const addComment = () => {
        dispatch(saveCommentAction({
                                    "postId": postId,
                                    "id": 6,
                                    "email": "nd.rapesta@gmail.com",
                                    "name":"name-default",
                                    "body": textInput
             }))
        }

        return (
                <div className="InputGroup">
                    <InputGroup>
                        <InputGroupAddon addonType="prepend"><Button onClick={() => {
                                    addComment()
                                    }}>Add comment</Button>
                        </InputGroupAddon>
                        <Input data-testid="add-input" value={textInput} onChange={e => setTextInput(e.target.value)}/>
                    </InputGroup>
                </div>
        )
}
