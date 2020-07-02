import React, { Component } from 'react';
import './Blog.css';
import Posts from '../Posts/Posts'
import {Route, NavLink} from 'react-router-dom'
import NewPost from '../NewPost/NewPost'
import FullPost from '../FullPost/FullPost'

class Blog extends Component {
    
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink  exact activeClassName="my-active" to="/">Home</NavLink></li>
                            <li><NavLink activeClassName="my-active" to={{
                                pathname: '/new-post',
                                search: '?searchParam=test',
                                hash: '#submit'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" exact component={NewPost} />
                <Route path="/post/:postId" exact component={FullPost} />
            </div>
        );
    }
}

export default Blog;