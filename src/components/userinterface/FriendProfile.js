import React from 'react'
import './FriendProfile.css'
import { Link } from 'react-router-dom'
import CloseIcon from '@material-ui/icons/Close'
import { Avatar } from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton"

const useStyles = makeStyles((theme) => ({
    img: {
      width: theme.spacing(28),
      height: theme.spacing(35),
    },
  }));

function FriendProfile({unProfile}) {
    const classes = useStyles();
    return (
        <div className='profile__bg-modal'>
            <div className='profile__window'>
                    <div className='exitIcon' onClick={unProfile}>
                        <Link>
                            <CloseIcon/>
                        </Link>
                    </div>
                    <div className='profile__infomation'>
                        <div className='profile__avatar'>
                                <Avatar variant="rounded" className={classes.img} src='https://headlineplanet.com/home/wp-content/uploads/2019/07/Lisa-Instagram-e1562252580131.jpg'/>
                        </div>
                        <h2>Lisa</h2>
                        <p>Nữ, 20 tuổi</p>
                        <p>IG: Lisa.BlackPink</p>
                        <p>Có phải bố anh là dân tổ nên đã dậy anh học úp vỉa vào tym emmmm.</p>
                    </div>
                    <div className= "profile__swipeButtons">
                        <IconButton className="profile__swipeButtons__left">
                            <CloseIcon fontSize='large'/>
                        </IconButton>
                        <IconButton className="profile__swipeButtons__star">
                            <StarRateIcon fontSize='large'/>
                        </IconButton>
                        <IconButton className="profile__swipeButtons__right">
                            <FavoriteIcon fontSize='large'/>
                        </IconButton>
                    </div>
            </div>
        </div>
    )
}

export default FriendProfile
