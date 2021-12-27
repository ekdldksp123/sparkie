/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { createPortal } from "react-dom";
import { useEffect, useState } from 'react';
import { ReactComponent as Share } from '../../../assets/share.svg';
import { TwitterShareButton, TwitterIcon, FacebookShareButton, FacebookIcon } from 'react-share';

type ModalProps = {
    visible: boolean,
    setVisible:(value:boolean) => void;
}

const ShareButton = () => {
    const [visible, setVisible] = useState<boolean>(false);
    return (
        <>
            <Share onClick={() => setVisible(!visible)}/>
            <ShareModal visible={visible} setVisible={setVisible}/>
        </>
    );
}

const ShareModal:React.FC<ModalProps> = ({ visible, setVisible }:ModalProps) => {
    const currentUrl = window.location.href;
    
    return (
        <>
            <ModalOverlay visible={visible} />
            <ModalWrapper tabIndex={-1} visible={visible}>
                <ModalInner tabIndex={0} className="modal-inner">
                    <Container>
                        <h3>공유하기</h3>
                        {visible && <CloseBtn onClick={() => setVisible(!visible)}/>}
                        <Columns>
                        <FacebookShareButton url={currentUrl}>
                            <FacebookIcon size={48} round={true} borderRadius={24}></FacebookIcon>
                        </FacebookShareButton>
                        <TwitterShareButton url={currentUrl}>
                            <TwitterIcon size={48} round={true} borderRadius={24}></TwitterIcon>
                        </TwitterShareButton>
                            <button>3</button>
                            <button>4</button>
                        </Columns>
                    </Container>
                </ModalInner>
            </ModalWrapper>
        </>
    );
}

export default ShareButton;

const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${({visible} : {visible:boolean}) => (visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${({visible} : {visible:boolean}) => (visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 360px;
  max-width: 480px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 20px;
`;

const Container = styled.div`
    display: flex;
	flex-direction: column;
	align-items: center;
`;

const Columns = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 48px);
    grid-column-gap: 8px;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
`;

const CloseBtn = styled.div`
    display: inline;
    content: "\00d7";
`;


