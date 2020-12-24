import React, {useState} from 'react'
import CardUser from './CardUser'
import InputBase from '@material-ui/core/InputBase';
import { makeStyles, fade } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import {IconButton } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    inputRoot: {
      color: 'inherit',
      borderBottom: '1px solid #fafafa',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '22ch',
      },
    },
  }));

function UserList() {
    const classes = useStyles();

    const [Data, setData] = useState([
        {
            name:'Lisa',
            profilePic: 'https://headlineplanet.com/home/wp-content/uploads/2019/07/Lisa-Instagram-e1562252580131.jpg',
            info: 'Hello',
        },
        {
            name:'Lisa BlackPink',
            profilePic:'https://kenh14cdn.com/2019/7/6/s11-15624058651631006795186.jpg',
            info:'leu leu leu leu',
        }
    ])
    return (
        <div>
            <div>
                <InputBase
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                />
                <IconButton>
                    <SearchIcon/>
                </IconButton>
            </div>
            {Data.map((db) =>(
                <CardUser name={db.name} profilePic={db.profilePic} info={db.info}/>
            ))}
        </div>
    )
}

export default UserList
