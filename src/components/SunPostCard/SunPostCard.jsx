import React from "react";
import { Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";


export default function SunPostCard({ removeSunPost, sunPost, isProfile }){
    
  const clickHandler = () => {
        removeSunPost(sunPost._id)
      }

  if (isProfile) {
    return (
      <Card key={sunPost._id} raised>
        <Image src={`${sunPost.photoUrl}`} wrapped ui={false} circular />
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
          <Card.Header>
            <Link to={`/${sunPost.user.username}`}>
              <Image
                size="large"
                avatar
                src={
                  sunPost.user.photoUrl
                    ? sunPost.user.photoUrl
                    : "https://react.semantic-ui.com/images/wireframe/square-image.png"
                }
              />
              {sunPost.user.username}
            </Link>
          </Card.Header>
            <Card.Description>{sunPost.location}</Card.Description>
            <Card.Description>{sunPost.date}</Card.Description>
            <Card.Description>{sunPost.postType}</Card.Description>
          </Card.Content>
          <button className="delete-button" onClick={clickHandler} type="submit">Delete</button>
        </Card>
      )
    }
  }

