import { useState } from 'react';
import { ReactComponent as Share } from '../../../assets/share.svg';
import ShareModal from './ShareModal';

const ShareButton:React.FC = () => {
    const [visible, setVisible] = useState<boolean>(false);
    return (
        <>
            <Share onClick={() => setVisible(!visible)}/>
            <ShareModal visible={visible} setVisible={setVisible}/>
        </>
    );
}

export default ShareButton;


