/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { css } from "@emotion/react";
import { createPortal } from "react-dom";
import { useEffect, useState } from 'react';
import { useScript } from '../../../lib/common/kakaoSDK';
import { ReactComponent as Share } from '../../../assets/share.svg';
import { ReactComponent as KakaoIconBtn } from '../../../assets/kakao.svg';
import { TwitterShareButton, TwitterIcon, FacebookShareButton, FacebookIcon } from 'react-share';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Kakao = (window as any).Kakao;

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
    const currentUrl = window.location.href as string;
    const status = useScript("https://developers.kakao.com/sdk/js/kakao.js");
    
    useEffect(() => {
        if (status === "ready" && Kakao) {
			if (!Kakao.isInitialized()) {
                console.log(process.env.REACT_APP_KAKAO_SHARE_KEY);
				Kakao.init(process.env.REACT_APP_KAKAO_SHARE_KEY);
            }
        }
    }, [status]);

    const handleKaoKaoShare = () => {
        console.log(currentUrl);
        Kakao.Link.sendScrap({
            requestUrl: currentUrl,
        });
    }

    return (
        <>
            <ModalOverlay visible={visible} />
            <ModalWrapper tabIndex={-1} visible={visible}>
                <ModalInner tabIndex={0} className="modal-inner">
                    <Container>
                        <Columns>
                            <FacebookShareButton url={currentUrl}>
                                <FacebookIcon size={48} round={true} borderRadius={24}></FacebookIcon>
                            </FacebookShareButton>
                            <TwitterShareButton url={currentUrl}>
                                <TwitterIcon size={48} round={true} borderRadius={24}></TwitterIcon>
                            </TwitterShareButton>
                            <CopyToClipboard text={currentUrl}>
                                <CopyUrlBtn>URL</CopyUrlBtn>
                            </CopyToClipboard>
                            <KakaoIconBtn css={kakao} onClick={handleKaoKaoShare}/>
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
`;

const CopyUrlBtn = styled.button`
    width: 45px;
	height: 45px;
	color: white;
	border-radius: 24px;
	border: 0px;
	font-weight: 500;
	font-size: 15px;
	cursor: pointer;
	background-color: #7362ff;
	&:hover {
		background-color: #a99fee;
        transform: scale(1.7);
	}
`;

const kakao = css`
    width: 48px;
    height: 48px;
    &:hover {
        transform: scale(1.7);
    }
`;


