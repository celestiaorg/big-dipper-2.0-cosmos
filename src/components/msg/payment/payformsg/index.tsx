import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgPayForMsg } from '@models';
import {
  useProfileRecoil,
} from '@recoil/profiles';

const PayForMsg = (props: {
  message: MsgPayForMsg;
}) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);
  const signerMoniker = signer ? signer?.name : message.signer;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txPayForMsgContent"
        components={[
          (
            <Name
              address={message.signer}
              name={signerMoniker}
            />
          ),
          <b />,
          <b />,
          <b />,
        ]}
        values={{
          message_namespace_id: message.message_namespace_id,
          message_size: message.message_size,
          message_share_commitment: message.message_share_commitment,
        }}
      />
    </Typography>
  );
};

export default PayForMsg;
