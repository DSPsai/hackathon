import { Grid, Typography, FormControl, InputLabel, Select, SingleCard, OutlinedInput, MenuItem, handleChange, TextField, Button } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../Styles/Projects.css'
export default function Projects(props) {
    const go = useNavigate();
    const SingleCard = (data) => {
        return <Grid onClick={() => { go(data.go); }} sx={props.styles.HomeCard} item>
            <img className='HomeCardImage' src={data.src} />
            <Typography variant='subtitle1'>{data.text}</Typography>
        </Grid>
    }
    var names = [
        'CBIT (CHAITANYA BHARATHI INSTITUTE OF TECHNOLOGY)',
        'VBIT (VIGNANA BHARATHI INSTITUTE OF TECHNOLOGY)',
        'VASAVI',
        'MGIT (MAHATMA GANDI INSTITUTE OF TECHNOLOGY)',
    ];
    return (
        <div className='AllProjectsPage'>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Box sx={{ width: '450px', p: '20px', pt: '100px' }}>
                    <Typography sx={{ mb: '20px' }} variant='h4'>Filters</Typography>
                    <FormControl sx={{ m: 1, fontSize: '17px', width: 300 }}>
                        <InputLabel id="demo-multiple-name-label">College Name</InputLabel>
                        <Select
                            labelId="demo-multiple-name-label"
                            id="demo-multiple-name"
                            input={<OutlinedInput label="College Name" />}
                        >
                            {names.map((name) => (
                                <MenuItem
                                    key={name}
                                    value={name}
                                >
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <TextField label='Languages used (Comma seperated)' sx={{ backgroundColor: 'white', borderRadius: '10px', width: '100%' }} variant='outlined'></TextField >
                    <FormControl sx={{ m: 1, fontSize: '17px', width: 300 }}>
                        <InputLabel id="demo-multiple-name-labeld">Domain</InputLabel>
                        <Select
                            labelId="demo-multiple-name-labeld"
                            id="demo-multiple-named"
                            input={<OutlinedInput label="Domain" />}
                        >
                            <MenuItem
                                key='webdev'
                                value='webDevelopment'
                            >
                                {'Web-Development'}
                            </MenuItem>
                            <MenuItem
                                key='anddev'
                                value='andDevelopment'
                            >
                                {'Android-Development'}
                            </MenuItem>
                            <MenuItem
                                key='MachineLearning'
                                value='MachineLearning'
                            >
                                {'Machine Learning'}
                            </MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, fontSize: '17px', width: 300 }}>
                        <InputLabel id="demo-multiple-name-labelp">Project Type</InputLabel>
                        <Select
                            labelId="demo-multiple-name-labelp"
                            id="demo-multiple-namep"
                            input={<OutlinedInput label="Project Type" />}
                        >
                                <MenuItem
                                    key={'Start-Up'}
                                    value={'Start-Up'}
                                >
                                    {'Start Up'}
                                </MenuItem>
                                <MenuItem
                                    key={'Simple-Project'}
                                    value={'Simple-Project'}
                                >
                                    {'Simple Project'}
                                </MenuItem>
                        </Select>
                    </FormControl>
                    <Button sx={{ width: '100%', backgroundColor: '#DC3845', my: '30px' }} variant="contained" >Submit</Button>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box><div className="search">
                        <div className='SearchHead'>Search For Projects</div>
                        <div className="searchbarBox">
                            <input className="searchbar" placeholder='Enter Project Name, Features...' />
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                    </Box>
                    <Box sx={{ textAlign: 'initial', fontWeight: '500', m: '10px', mt: '20px' }}>Student Projects</Box>
                    <Grid container sx={props.styles.HomeCardContain} columns={{ xs: 2, sm: 2, md: 3 }}>
                        <SingleCard src='/Images/demo.jpg' go='SingleProject/asd' text='GetCam ( Camera Rental Website )' />
                        <SingleCard src='/Images/demo.jpg' go='SingleProject/asd' text='GetCam ( Camera Rental Website )' />
                        <SingleCard src='/Images/demo.jpg' go='SingleProject/asd' text='GetCam ( Camera Rental Website )' />
                        <SingleCard src='/Images/demo.jpg' go='SingleProject/asd' text='GetCam ( Camera Rental Website )' />
                        <SingleCard src='/Images/demo.jpg' go='SingleProject/asd' text='GetCam ( Camera Rental Website )' />
                        <SingleCard src='/Images/demo.jpg' go='SingleProject/asd' text='GetCam ( Camera Rental Website )' />
                        <SingleCard src='/Images/demo.jpg' go='SingleProject/asd' text='GetCam ( Camera Rental Website )' />
                        <SingleCard src='/Images/demo.jpg' go='SingleProject/asd' text='GetCam ( Camera Rental Website )' />
                        <SingleCard src='/Images/demo.jpg' go='SingleProject/asd' text='GetCam ( Camera Rental Website )' />
                        <SingleCard src='/Images/demo.jpg' go='SingleProject/asd' text='GetCam ( Camera Rental Website )' />
                        <SingleCard src='/Images/demo.jpg' go='SingleProject/asd' text='GetCam ( Camera Rental Website )' />
                        <SingleCard src='/Images/demo.jpg' go='SingleProject/asd' text='GetCam ( Camera Rental Website )' />
                        <SingleCard src='/Images/demo.jpg' go='SingleProject/asd' text='GetCam ( Camera Rental Website )' />
                        <SingleCard src='/Images/demo.jpg' go='SingleProject/asd' text='GetCam ( Camera Rental Website )' />
                    </Grid>
                </Box>
            </Box>
        </div>
    )
}
