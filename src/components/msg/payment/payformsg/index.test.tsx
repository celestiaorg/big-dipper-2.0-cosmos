import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgPayForMsg } from '@models';
import Send from '.';

// ==================================
// mocks
// ==================================

jest.mock('@components', () => ({
  Name: (props) => <div id="Name" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/MsgPayForMsg', () => {
  it('matches snapshot', () => {
    const message = new MsgPayForMsg({
      category: 'payment',
      type: 'MsgPayForMsg',
      signer: 'signer',
      message_namespace_id: 'message_namespace_id',
      message_size: 'message_size',
      message_share_commitment: 'message_share_commitment',
    });
    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <Send
            message={message}
          />
        </MockTheme>
      </RecoilRoot>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
