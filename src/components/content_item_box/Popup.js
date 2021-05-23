import { React, useState } from 'react';
import { FacebookIcon, WhatsappIcon, TelegramIcon } from 'react-share';
import IconButton from '@material-ui/core/IconButton';
import { MdContentCopy } from 'react-icons/md';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import {
  FacebookShareButton,
  WhatsappShareButton,
  TelegramShareButton,
} from 'react-share';
import './Popup.css';
export default function Popup() {
  const shareURl = 'https://laptontest.tk/';
  const title = 'share now';
  return (
    <div className="popup">
      <div className="popup_content">
        <FacebookShareButton url={shareURl} quote={title} hashtag="#lapton">
          <FacebookIcon logoFillColor="white" round={true}></FacebookIcon>
        </FacebookShareButton>
      </div>
      <div className="popup_content">
        <WhatsappShareButton title={title} url={shareURl}>
          <WhatsappIcon logoFillColor="white" round={true}></WhatsappIcon>
        </WhatsappShareButton>
      </div>
      <div className="popup_content">
        <TelegramShareButton url={shareURl} title={title}>
          <TelegramIcon logoFillColor="white" round={true}></TelegramIcon>
        </TelegramShareButton>
      </div>
      <div className="popup_content">
        <CopyToClipboard text={shareURl}>
          <IconButton aria-label="share" className="copy_button">
            <MdContentCopy />
          </IconButton>
        </CopyToClipboard>
      </div>
    </div>
  );
}
