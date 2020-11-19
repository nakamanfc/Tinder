import React, {useState} from 'react'
import './ChangeProfile.css'
import { Link } from 'react-router-dom'
import CloseIcon from '@material-ui/icons/Close'
import { Avatar, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const useStyles = makeStyles((theme) => ({
    img: {
      width: theme.spacing(28),
      height: theme.spacing(35),
    },
  }));
  let i = 0;
function FriendProfile({unProfile}) {

    const [img, setImg] = useState([
        'https://scontent.fhph1-1.fna.fbcdn.net/v/t1.0-9/95569662_1105829716451378_5436510620490924032_o.jpg?_nc_cat=111&ccb=2&_nc_sid=174925&_nc_ohc=pHjjLfHV1swAX_iIA5M&_nc_ht=scontent.fhph1-1.fna&oh=218ed06ae1be8376bbef20a3c78162d0&oe=5FD48909',
        'https://kenh14cdn.com/2019/7/6/s11-15624058651631006795186.jpg',
        'https://kenh14cdn.com/2019/7/6/s9-15624058651551231049471.jpg',
        'https://kenh14cdn.com/2019/7/6/s13-15624058651701270275259.jpg',

    ])
    const[avatar, setAvatar] = useState(img[i]);
    const classes = useStyles();

    const nextImgRight = () =>{
        let s = img.length;
        i++;
        if(i >= s){
            i = 0;
        } else if(i <= 0){
            i = s - 1;
        }
        setAvatar(img[i]);
    }

    const nextImgLeft = () =>{
        let s = img.length;
        i--;
        if(i >= s){
            i = 0;
        } else if(i < 0){
            i = s - 1;
        }
        setAvatar(img[i]);
    }

    const exit = () =>{
        i = 0;
        unProfile();
    }

    return (
        <div className='profile__bg-modal'>
            <div className='profile__window'>
            <div className='exitIcon' onClick={exit}>
                        <Link>
                            <CloseIcon/>
                        </Link>
                    </div>
                    <div className='profile__infomation'>
                        <div className='profile__img'>
                            <IconButton className="nextButton" onClick={nextImgLeft}>
                                <ChevronLeftIcon fontSize='large'/>
                            </IconButton>
                            <div className='profile__avatar'>
                                    <Avatar variant="rounded" className={classes.img} src={avatar}/>
                            </div>
                            <IconButton className="nextButton" onClick={nextImgRight}>
                                <ChevronRightIcon fontSize='large'/>
                            </IconButton>
                        </div>
                        <h2>Phạm Hoàng</h2>
                        <p>Nam, 20 tuổi</p>
                        <p>IG: pvh1192</p>
                        <p>Có phải bố em là dân tổ nên đã dậy em học úp vỉa vào tym anhhh.</p>
                    </div>
                    <div className= "profile__swipeButtons">
                        <Button className="profile__swipeButtons__left">
                            <h2>Chỉnh sửa hình ảnh</h2>
                        </Button>
                        <Button className="profile__swipeButtons__star">
                            <h2>Chỉnh sửa thông tin</h2>
                        </Button>
                    </div>
            </div>
        </div>
    )
}

export default FriendProfile
