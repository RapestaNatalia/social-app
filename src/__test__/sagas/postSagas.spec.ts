import {getComments, getPosts, saveComment} from '../../sagas/postSagas'
import { getCommentsByIdSuccess, getCommentsRequest, getCommentsSuccess, getPostsRequest, getPostsSuccess, saveCommentAction, saveCommentSuccess } from '../../actions/index';
import {  call, put} from 'redux-saga/effects';
import {getCommentsService, getPostsService} from '../../api';
import GetCommentsMock from '../GetCommentsMock';
import GetPostsMock from '../GetPostsMock';
import * as actions from '../../types/actionsTypes'

describe('test postSagas', () => {
    it('test getComments', () => {
        const gen = getComments();
        const response = GetCommentsMock;
        expect(gen.next().value).toEqual(put(getCommentsRequest()))
        expect(gen.next().value).toEqual(call(getCommentsService));
        expect(gen.next(response).value).toEqual(put(getCommentsSuccess(GetCommentsMock)));
        let dict:actions.ICommentCollection={};
		response.forEach(e => {
			if(Object.keys(dict).includes(e.postId.toString())){        
				dict[e.postId.toString()].push(e)
			}else{
				dict[e.postId.toString()]=[e]
			}      
        });
        expect(gen.next().value).toEqual(put(getCommentsByIdSuccess(dict)));
        expect(gen.next()).toEqual({ done: true, value: undefined });
    })
    it('test getPosts', () => {
        const gen = getPosts();
        const response = GetPostsMock;
        expect(gen.next().value).toEqual(put(getPostsRequest()))
        expect(gen.next().value).toEqual(call(getPostsService));
        expect(gen.next(response).value).toEqual(put(getPostsSuccess(GetPostsMock)));
        expect(gen.next()).toEqual({ done: true, value: undefined });
      })
    it('test save posts', () => {
        
        const gen = saveComment(saveCommentAction(GetCommentsMock[0]));
        expect(gen.next().value).toEqual(put(saveCommentSuccess(GetCommentsMock[0])));
        expect(gen.next()).toEqual({ done: true, value: undefined });
    })
})
