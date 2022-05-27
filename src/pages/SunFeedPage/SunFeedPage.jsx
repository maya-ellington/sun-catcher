import React, { useState, useEffect } from "react";

import './SunFeedPage.css';
import { Grid } from "semantic-ui-react";

import PageHeader from "../../components/Header/Header";
import AddSunPostForm from "../../components/AddSunPostForm/AddSunPostForm";
import SunGallery from "../../components/SunGallery/SunGallery";
import SunSearch from "../../components/SunSearch/SunSearch";
import LandingMessage from "../../components/LandingMessage/LandingMessage";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loading from "../../components/Loader/Loader";

import * as sunPostsAPI from "../../utils/sunPostApi";


export default function SunFeedPage({user, handleLogout}) {
  console.log(sunPostsAPI, " <-- sunPostsAPI")
  const [sunPosts, setSunPosts] = useState([]); // <- likes are inside of the each post in the posts array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [sunriseApiData, setSunriseApiData] = useState({});
  const [sunsetApiData, setSunsetApiData] = useState({});


  async function handleAddSunPost(sunPost) {
    try {
      setLoading(true);
      const data = await sunPostsAPI.create(sunPost); 
      console.log(data, " this is response from the server, in handleAddPost");
      setSunPosts([data.sunPost, ...sunPosts]);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  }

  async function getSunPosts() {
    try {
      const data = await sunPostsAPI.getAll();
      console.log(data, " this is data,");
      setSunPosts([...data.sunPosts]);
      setLoading(false);
    } catch (err) {
      console.log(err.message, " this is the error");
      setError(err.message);
    }
  }

  useEffect(() => {
    getSunPosts();
  }, []);

  async function deleteSunPost(id) {
    const data = await sunPostsAPI.removeSunPost(id)
    getSunPosts();
    console.log(data)
  }


  
  function makeApiCall() {
    const sunUrl = `https://api.ipgeolocation.io/astronomy?apiKey=${process.env.REACT_APP_SUN_API}`;
    fetch(sunUrl)
      .then((res) => res.json())
      .then((data) => {

        setSunriseApiData({sunriseTime: data.sunrise})
        setSunsetApiData({sunsetTime: data.sunset})

      });
  }
  
  useEffect(() => {
    makeApiCall();
  }, []);
    



  if (error) {
    return (
      <>
        <PageHeader handleLogout={handleLogout} user={user}/>
        <ErrorMessage error={error} />;
      </>
    );
  }

  if (loading) {
    return (
      <>
        <PageHeader handleLogout={handleLogout} user={user}/>
        <Loading />
      </>
    );
  } 

  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column>
          <PageHeader handleLogout={handleLogout} user={user}/>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <LandingMessage className='landing' />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 450 }}>
          <SunSearch sunriseApiData={sunriseApiData} sunsetApiData={sunsetApiData}/>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 450 }}>
          <AddSunPostForm handleAddSunPost={handleAddSunPost} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row style={{ marginTop: 200 }}>
        <Grid.Column style={{ maxWidth: 1200 }}>
          <SunGallery
            sunPosts={sunPosts}
            numPhotosCol={1}
            isProfile={false}
            loading={loading}
            removeSunPost={deleteSunPost}
            user={user}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
