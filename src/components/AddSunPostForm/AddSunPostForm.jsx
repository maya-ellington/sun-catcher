import React, { useState } from 'react';

import { Button, Form, Grid, Segment } from 'semantic-ui-react'

export default function AddSunEventForm(props){
  const [selectedFile, setSelectedFile] = useState('')
  const [state, setState] = useState({
    user: '',
    photoUrl: '',
    date: '',
    location: '',
    description: '',
    postType: ''
  })

  function handleFileInput(e){
    setSelectedFile(e.target.files[0])
  }


  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
             
    const formData = new FormData()
    formData.append('photo', selectedFile)
    formData.append('postType', state.postType)
    formData.append('date', state.date)
    formData.append('description', state.description)
    formData.append('postType', state.postType)
    formData.append('location', state.location)




    props.handleAddSunPost(formData); 
    
    // Have to submit the form now! We need a function!
  }


  return (
    
    <Grid textAlign='center' style={{ height: '25vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Segment>
        
            <Form  autoComplete="off" onSubmit={handleSubmit}>
            <Form.Input
                  className="form-control"
                  name="postType"
                  value={state.postType}
                  placeholder="Sunrise or Sunset?"
                  onChange={handleChange}
                  required
              />   
              <Form.Input
                  className="form-control"
                  name="date"
                  value={state.date}
                  placeholder="When did you catch the sunrise/sunset?"
                  onChange={handleChange}
                  required
              />   
               <Form.Input
                  className="form-control"
                  name="description"
                  value={state.description}
                  placeholder="Any details about your experience"
                  onChange={handleChange}
                  required
              />    
               <Form.Input
                  className="form-control"
                  name="location"
                  value={state.location}
                  placeholder="Location"
                  onChange={handleChange}
                  required
              />              
              <Form.Input
                className="form-control"
                type="file"
                name="photo"
                placeholder="upload sunrise/sunset image"
                onChange={handleFileInput}
              />   
              <Button
                type="submit"
                className="btn"
              >
                ADD SUN EVENT
              </Button>
            </Form>
          </Segment>
      </Grid.Column>
    </Grid>
   
  ); 
}