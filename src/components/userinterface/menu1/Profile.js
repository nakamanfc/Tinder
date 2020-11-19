import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import './Profile.css'
  
  const SmallAvatar = withStyles((theme) => ({
    root: {
      width: 22,
      height: 22,
    background: 'white',
    borderRadius:100,
    },
  }))(AddCircleIcon);

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(16),
    height: theme.spacing(16),
  },
}));

function Profile({changeProfile}) {
  const classes = useStyles();

  return (
    <>
        <div className='profile'>
            <div className='avatar'>
            <Badge
            overlap="circle"
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
            }}
            badgeContent={<SmallAvatar/>}
        >
            <Avatar className={classes.large} src='https://scontent.fhph1-1.fna.fbcdn.net/v/t1.0-9/95569662_1105829716451378_5436510620490924032_o.jpg?_nc_cat=111&ccb=2&_nc_sid=174925&_nc_ohc=pHjjLfHV1swAX_iIA5M&_nc_ht=scontent.fhph1-1.fna&oh=218ed06ae1be8376bbef20a3c78162d0&oe=5FD48909'/>
        </Badge>
            </div>
            <div>
                <h2>Hoàng Phạm</h2>
                <p>Nam, 20 tuổi</p>
                <p>IG: pvh1192</p>
                <p>Có phải bố em là dân tổ nên đã dậy em học úp vỉa vào tym anhhh.</p>
            </div>
        </div>
        <div className='bottom__'>
            <div className='button__' onClick={changeProfile}>
              Chỉnh sửa thông tin
            </div>
            <div className='button__'>
              Đăng xuất
            </div>
        </div>
    </>
  );
}

export default Profile