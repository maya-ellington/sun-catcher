import React, { useState, useEffect } from "react";
import { Grid, Image, Segment } from "semantic-ui-react";

import PageHeader from "../../components/Header/Header";
import SunGallery from "../../components/SunGallery/SunGallery";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import SunTokens from "../../components/SunTokens/SunTokens";
import Loading from "../../components/Loader/Loader";

import { useParams } from "react-router-dom";

import userService from "../../utils/userService";



export default function ProfilePage(props) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [user, setUser] = useState({});
    const [sunPosts, setSunPosts] = useState([]);
    const [sunTokens, setSunTokens] = useState("");

    // We need to grab the username out of the url,
    const { username } = useParams();
  
    function ObjectLength( object ) {
        var length = 0;
        for( var key in object ) {
            if( object.hasOwnProperty(key) ) {
                ++length;
            }
        }
        return length;
    };
  
    async function getProfile() {
      try {
        const data = await userService.getProfile(username);
        console.log( data.sunPosts, " < -- data");

        setLoading(() => false);
        setUser(() => data.user);
        setSunPosts(() => data.sunPosts);
        setSunTokens(() => ObjectLength(data.sunPosts))
        console.log( ObjectLength(data.sunPosts), " < -- ObjectLength(data)");
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
          <SunTokens sunTokens={sunTokens} user={props.user}/>
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