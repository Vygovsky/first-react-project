import React from 'react';
import ProfileInfoStyle from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (<div>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMo_qyzFtxrPl1ZqE_nBiKUGwTY4ioXeuBMBQdaL4PMvYg4x3UQQ'/>
                <div className={ProfileInfoStyle.descriptionBlock}>
                    ava + disc
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo;
