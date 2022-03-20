import React from 'react'
const dark = {
    backgroundColor: 'grey',
    color: 'white'
}
const light = {
    backgroundColor: 'rgba(60, 87, 84, 1)',
    color: 'white',
    secondColor: '#D6E1E0',
}
const common ={
    dashRowLeft: {
        width: 'calc(50% - 40px)',
        ml: '10px',
        mr: '10px',
        backgroundColor: 'rgba(41, 46, 51, 1)',
        p: '10px',
        borderRadius: '20px',
    },
    row : {
        display: 'flex',
        flexFlow: 'row'
    },
    column:{
        display:'flex',
        flexFlow:'column'
    }
}
export const useStyles = {
    light: {
        HomeCard:{
            display:'flex',
            flexFlow:'column',
            cursor:'pointer',
            borderRadius:'10px',
            '&:hover':{
                boxShadow:'0 0 15px rgb(56 54 53 / 17%)'
            }
        },
    }
}