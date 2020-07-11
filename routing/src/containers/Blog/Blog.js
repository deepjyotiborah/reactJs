import React, { Component } from 'react';
import './Blog.css';
import Posts from '../Posts/Posts'
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'
import NewPost from '../NewPost/NewPost'
import FullPost from '../FullPost/FullPost'

class Blog extends Component {
    
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink  exact activeClassName="my-active" to="/posts">Home</NavLink></li>
                            <li><NavLink activeClassName="my-active" to={{
                                pathname: '/new-post',
                                search: '?searchParam=test',
                                hash: '#submit'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/new-post" exact component={NewPost} />
                    <Route path="/posts" component={Posts} />
                    <Redirect from="/" to="posts" />
                </Switch>
            </div>
        );
    }
}

export default Blog;