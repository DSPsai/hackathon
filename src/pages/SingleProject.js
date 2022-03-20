import React from 'react'
import { Box, Typography } from '@mui/material'

function SingleProject() {
  const student = {
    name: "M.SHIVANI",
    college: "xyz",
    branch: "CSE",
    year: "2",
    email: "sai@gmail.com",
  }
  const projectDesc = "A single definable purpose, end-item or result. ally specified in terms of cost, schedule and performance requirements.\
  Every project is unique. It requires the doing our market, public services and local utilities make each project different.\
  Projects are temporary activities. A project is , material, equipment and facilities that is put together to accomplish a goal.\
  Projects cut across organizational lines. Projects always cut across the regular organizational"
  return (
    <div>
      <Box className='' style={{ width: '100vw'}}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box style={{color: "#FE5912"}}>
            <Typography sx={{ textAlign: 'initial', ml: '20px', mb: '10px' }} variant='h6'>
              PROJECT NAME
            </Typography>
          </Box>
          <Box style={{backgroundColor: "#FFD1C4",minWidth:"450px"}}>
          <Typography sx={{ textAlign: 'initial', ml: '20px',fontSize:'15px',pl:"40px",pr:"20px",pt:"30px"}} variant='h6'>
            Name : {student.name}
          </Typography>
          <Typography sx={{ textAlign: 'initial', ml: '20px',fontSize:'15px',pl:"40px",pr:"20px"}} variant='h6'>
            College : {student.college}
          </Typography>
          <Typography sx={{ textAlign: 'initial', ml: '20px',fontSize:'15px',pl:"40px",pr:"20px"}} variant='h6'>
            Branch : {student.branch}
          </Typography>
          <Typography sx={{ textAlign: 'initial', ml: '20px',fontSize:'15px',pl:"40px",pr:"20px"}} variant='h6'>
            Year : {student.year}
          </Typography>
          <Typography sx={{ textAlign: 'initial', ml: '20px',fontSize:'15px',pl:"40px",pr:"20px",pb:"30px"}} variant='h6'>
            Email : {student.email}
          </Typography>
          </Box>
        </Box>
        <Box></Box>
        <Box  sx={{ textAlign: 'initial', ml: '20px'}}>
        <Typography sx={{ textAlign: 'initial',mt: '20px', mb: '10px',color: "#FE5912" }} variant='h6'>
          PROJECT FEATURES
        </Typography>
          {projectDesc}
        </Box>
        <Box  sx={{ textAlign: 'initial', ml: '20px'}}>
        <Typography sx={{ textAlign: 'initial', mt: '20px', mb: '10px',color: "#FE5912" }} variant='h6'>
          LANGUAGES
        </Typography>
          
          HTML
          CSS
          JS
          PHP.......
          ........
          ..........
        </Box>
        <Box  sx={{ textAlign: 'initial'}}>
          <Typography sx={{ textAlign: 'initial', ml: '20px', mt: '20px', mb: '10px',color: "#FE5912" }} variant='h6'>
            FLOW CHART
          </Typography>
        </Box>
        <Box style={{backgroundColor: "#FFD1C4"}}>
          <Typography sx={{ textAlign: 'initial', ml: '20px', mt: '20px', mb: '10px' }} variant='h6'>
            COLLEGE DETAILS
          </Typography>
          <Typography sx={{ textAlign: 'initial', ml: '20px',fontSize:'15px'}} variant='h6'>
            College Name:
          </Typography>
          <Typography sx={{ textAlign: 'initial', ml: '20px',fontSize:'15px'}} variant='h6'>
            E-Mail Id:
          </Typography>
          <Typography sx={{ textAlign: 'initial', ml: '20px',fontSize:'15px'}} variant='h6'>
            Institute Code:
          </Typography>
          <Typography sx={{ textAlign: 'initial', ml: '20px',fontSize:'15px'}} variant='h6'>
            Contact Number:
          </Typography>
          <Typography sx={{ textAlign: 'initial', ml: '20px',fontSize:'15px'}} variant='h6'>
            Address:
          </Typography>
        </Box>
      </Box>
    </div>
  )
}

export default SingleProject