import React from "react";
import { Card, Image } from "semantic-ui-react";

export default function SunPostCard({ removeSunPost, sunPost, isProfile }){
    
  const clickHandler = () => {
        removeSunPost(sunPost._id)
      }

  if (isProfile) {
    return (
      <Card key={sunPost._id} raised>
        <Image src={`${sunPost.photoUrl}`} wrapped ui={false} />
        <Card.Content>
          <Card.Description>{sunPost.location}</Card.Description>
          <Card.Description>{sunPost.date}</Card.Description>
          <Card.Description>{sunPost.postType}</Card.Description>
        </Card.Content>
      </Card>
    )
    } else {
      return(
        <Card key={sunPost._id} raised>
          <Image src={`${sunPost.photoUrl}`} wrapped ui={false} />
          <Card.Content>
            <Card.Description>{sunPost.location}</Card.Description>
            <Card.Description>{sunPost.date}</Card.Description>
            <Card.Description>{sunPost.postType}</Card.Description>
          </Card.Content>
          <button className="delete-button" onClick={clickHandler} type="submit">Delete</button>
        </Card>
      )
    }
  }

