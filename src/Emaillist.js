import React from 'react';
import './css/emaillist.css';
import EmailListSetting from './EmailListSetting';
import Emailbody from './Emailbody';

function Emaillist() {
  return (
    <div className='emaillist'>
        <EmailListSetting />
        <Emailbody name="Sharpener" subject="this is subject" message="learning gmail clone" time="3:20pm" />
        

        

    </div>
  )
}

export default Emaillist;