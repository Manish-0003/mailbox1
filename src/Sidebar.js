import React from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Sidebaroptions from './Sidebaroptions';
import InboxIcon from '@mui/icons-material/Inbox';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import StarRateIcon from '@mui/icons-material/StarRate';
import DraftsIcon from '@mui/icons-material/Drafts';
import OutboxIcon from '@mui/icons-material/Outbox';
import ArchiveIcon from '@mui/icons-material/Archive';
import './css/sidebar.css';

function Sidebar() {
  return (
    <div className='sidebar'>
        <Button startIcon={<AddIcon />} className='compose_btn'>Compose</Button>
        <Sidebaroptions Icon={InboxIcon} title="Inbox" number="220" isactive={true} />
        <Sidebaroptions Icon={MarkEmailUnreadIcon} title="Unread" number="220" />
        <Sidebaroptions Icon={StarRateIcon} title="Starred" number="220" />
        <Sidebaroptions Icon={DraftsIcon} title="Draft" number="220" />
        <Sidebaroptions Icon={OutboxIcon} title="Sent" number="220" />
        <Sidebaroptions Icon={ArchiveIcon} title="Archive" number="220" />
    </div>
  )
}

export default Sidebar;
