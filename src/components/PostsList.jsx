import NewPost from "./NewPost";
import Post from "./Post";
import classes from './PostsList.module.css';


function PostsList() {
    return (
    <>
        <NewPost />
        <ul className={classes.posts}>
            <Post author="Pola" body="reaxt.js is awesome"/>
            <Post author="Ahmed" body="how to learn it??" />
        </ul>
    </>
    ); 
}

export default PostsList; 