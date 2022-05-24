import React, { useState, useEffect } from "react";

import PageHeader from "../../components/Header/Header";
import AddSunPostForm from "../../components/AddSunPostForm/AddSunPostForm";
import SunGallery from "../../components/SunGallery/SunGallery";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loading from "../../components/Loader/Loader";

import * as sunPostsAPI from "../../utils/sunPostApi";
import * as commentsAPI from '../../utils/commentsApi';

import { Grid } from "semantic-ui-react";



export default function SunFeedPage({user, handleLogout}) {
  console.log(sunPostsAPI, " <-- sunPostsAPI")
  const [sunPosts, setSunPosts] = useState([]); // <- likes are inside of the each post in the posts array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  // async function addComment(sunPostId){
  //   try {
  //     const data = await commentsAPI.create(sunPostId)
  //     console.log(data, ' <- the response from the server when we make a comment');
  //     getSunPosts(); // <- to go get the updated posts with the comment
  //   } catch(err){
  //     console.log(err)
  //     setError(err.message)
  //   }
  // }

  // async function removeComment(commentId){
  //   try {
  //     const data = await commentsAPI.removeComment(commentId);
  //     console.log(data, '<-  this is the response from the server when we remove a comment')
  //     getSunPosts()
      
  //   } catch(err){
  //     console.log(err);
  //     setError(err.message);
  //   }
  // }



  // C create in Crud
  // we invoke this function in addPost component when the submit button on our form is clicked
  // so we need to pass it as a prop
  async function handleAddSunPost(sunPost) {
    try {
      setLoading(true);
      const data = await sunPostsAPI.create(sunPost); // our server is going to return
      // the created post, that will be inside of data, which is the response from
      // the server, we then want to set it in state
      console.log(data, " this is response from the server, in handleAddPost");
      setSunPosts([data.sunPost, ...sunPosts]);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  }

  // R read in crud
  // async function getSunPosts() {
  //   try {
  //     const data = await sunPostsAPI.getAll();
  //     console.log(data, " this is data,");
  //     setSunPosts([...data.sunPosts]);
  //     setLoading(false);
  //   } catch (err) {
  //     console.log(err.message, " this is the error");
  //     setError(err.message);
  //   }
  // }

  // useEffect runs once
  // the component is first rendered (whenever you first view the component)
  // Component Lifecycle in react
  // useEffect(() => {
  //   getSunPosts();
  // }, []);



  // if (error) {
  //   return (
  //     <>
  //       <PageHeader handleLogout={handleLogout} user={user}/>
  //       <ErrorMessage error={error} />;
  //     </>
  //   );
  // }

  // if (loading) {
  //   return (
  //     <>
  //       <PageHeader handleLogout={handleLogout} user={user}/>
  //       <Loading />
  //     </>
  //   );
  // } 

  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column>
          <PageHeader handleLogout={handleLogout} user={user}/>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 450 }}>
          <AddSunPostForm handleAddSunPost={handleAddSunPost} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 450 }}>
          <SunGallery
            sunPosts={sunPosts}
            numPhotosCol={1}
            isProfile={false}
            // loading={loading}
            // addComment={addComment}
            // removeComment={removeComment}
            user={user}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
