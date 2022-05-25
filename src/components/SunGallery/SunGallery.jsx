import React from 'react';
import { Card, Dimmer, Segment, Image  } from 'semantic-ui-react'
import SunPostCard from '../SunPostCard/SunPostCard';
import Loader from '../Loader/Loader';

export default function SunGallery({removeSunPost, sunPosts, numPhotosCol, isProfile, loading, addComment, removeComment, user }){

    return (
        <Card.Group itemsPerRow={numPhotosCol} stackable>
        {loading ? (
          <Segment>
            <Dimmer active inverted>
              <Loader size="small">Loading</Loader>
            </Dimmer>
            <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
          </Segment>
        ) : null}
        {sunPosts.map((sunPost) => {
          return (
            <SunPostCard
              sunPost={sunPost}
              key={sunPost._id}
              isProfile={isProfile}
              removeSunPost={removeSunPost}
              // addComment={addComment}
              // removeComment={removeComment}
              user={user}
            />
          );
        })}
      </Card.Group>
  
    )
}