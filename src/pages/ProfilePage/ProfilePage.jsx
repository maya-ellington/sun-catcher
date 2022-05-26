import React, { useState, useEffect } from "react";
import { Grid } from "semantic-ui-react";

import PageHeader from "../../components/Header/Header";
import SunGallery from "../../components/SunGallery/SunGallery";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import SunTokens from "../../components/SunTokens/SunTokens";
import Loading from "../../components/Loader/Loader";

import * as sunPostsAPI from "../../utils/sunPostApi";
// import * as commentsAPI from '../../utils/commentsApi';


import { useParams } from "react-router-dom";

import userService from "../../utils/userService";



export default function ProfilePage(props) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [user, setUser] = useState({});
    const [sunPosts, setPosts] = useState([]);
    // We need to grab the username out of the url,
    const { username } = useParams();
  
  
  
    async function getProfile() {
      try {
        const data = await userService.getProfile(username);
        console.log(data, " < -- data");
        setLoading(() => false);
        setUser(() => data.user);
        setPosts(() => data.sunPosts);
      } catch (err) {
        console.log(err);
        setError("Profile Doesn't exists, CHECK YOUR TERMINAL FOR EXPRESS!");
      }
    }
  
  
    // then when the component loads we can use that username to fetch all the users data
    // then we can store that in state
    useEffect(() => {
      getProfile();
    }, []);
  
  
  
  
    if (error) {
      return (
        <>
          <PageHeader handleLogout={props.handleLogout} user={props.user}/>
          <ErrorMessage error={error} />;
        </>
      );
    }
  
    if (loading) {
      return (
        <>
          <PageHeader handleLogout={props.handleLogout} user={props.user}/>
          <Loading />
        </>
      );
    }
  
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <PageHeader handleLogout={props.handleLogout} user={props.user}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column style={{ maxWidth: 750 }}>
          <SunTokens/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column style={{ maxWidth: 750 }}>
          <SunGallery
              isProfile={true}
              sunPosts={sunPosts}
              numPhotosCol={3}
              user={user}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }