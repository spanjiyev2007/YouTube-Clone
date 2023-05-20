import { Stack, Box, Container, Typography } from "@mui/material"
import { useState, useEffect } from "react"
import { colors } from "../../constant/colors"
import {Category, Videos} from '../'
import {ApiService} from '../../service/api.service'

const Main = () => {
  const [selectedCatigory, setSelectedCatigory] = useState('New')
  const [videos, setVideos] = useState([])

  const selectedCatigoryHanfler = (category) => setSelectedCatigory(category)

  useEffect(() =>{
    const getData = async () =>{
      try{
        const data = await ApiService.fetching('search')
      setVideos(data)
      }catch(error){
        console.log(error);
      }
    }
    getData(getData)
    
  }, [])
console.log(process.env.REACT_APP_PUBLIC_KEY);
  return (
    <Stack>
      <Category selectedCatigoryHanfler={selectedCatigoryHanfler} selectedCatigory={selectedCatigory}/>
      <Box p={2} sx={{ height: '90vh' }}>
        <Container maxWidth={"90%"}>
          <Typography variant={"h4"} fontWeight={'bold'} mb={2}>
            {selectedCatigory} <span style={{color: colors.secondary}}>videos</span>
          </Typography>
          <Videos videos={videos}/>
        </Container>
      </Box>
    </Stack>
  )
}

export default Main
