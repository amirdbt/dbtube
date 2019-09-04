import React from 'react';
import {Grid} from '@material-ui/core'
import Searchbar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'
import './App.css';
import youtube from './api/youtube'

class App extends React.Component {
 constructor(){
   super()
   this.state={
     videos: [],
     selectedVideo: null
   }
 }
  
  handleSubmit = async (searchTerm) =>{
    const response = await youtube.get('search', {
       params :{
              part: 'snippet',
              maxResults : 5,
              key: 'AIzaSyAWOxgF6Y-z2jJibAE4KItBYO6NOJLTN6g',
              q: searchTerm
  }})

  this.setState({
    videos: response.data.items,
    selectedVideo: response.data.items[0]
  })
  }
  onSelectVideo=()=>{
    
  }

  render(){
    return(
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
            <Searchbar  onFormSubmit={this.handleSubmit} />
            </Grid>

            <Grid item xs={8}>
             <VideoDetail video={this.state.selectedVideo} />
            </Grid>

            <Grid item xs={4}>
            <VideoList videos={this.state.videos} onSelectVideo={this.onSelectVideo}/>
            </Grid>

          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default App;
