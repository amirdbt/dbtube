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
  componentDidMount(){
    this.handleSubmit("javascript")
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
  onVideoSelect=(video)=>{
    this.setState({
      selectedVideo : video
    })
  }

  render(){
    return(
      <div style={{ padding: 20 }}>
      <Grid  spacing={10} justify="center" container>
        <Grid item xs={12} >
          <Grid container spacing={10} >
            <Grid item xs={12}>
            <Searchbar  onFormSubmit={this.handleSubmit} />
            </Grid>

            <Grid item xs={8}>
             <VideoDetail video={this.state.selectedVideo} />
            </Grid>

            <Grid item xs={4}>
            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
            </Grid>

          </Grid>
        </Grid>
      </Grid>
      </div>
    )
  }
}

export default App;
