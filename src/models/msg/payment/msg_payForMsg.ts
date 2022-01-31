import { Categories } from '../types';

class MsgPayForMsg {
  public category: Categories;
  public type: string;
  public signer: string;
  // eslint-disable-next-line camelcase
  public message_size: number;
  // eslint-disable-next-line camelcase
  public message_namespace_id: string;
  // eslint-disable-next-line camelcase
  public message_share_commitment: string;
  public json: any;

  constructor(payload: any) {
    this.category = 'payment';
    this.type = payload.type;
    this.signer = payload.signer;
    this.message_size = payload.message_size;
    this.message_namespace_id = payload.message_namespace_id;
    this.message_share_commitment = payload.message_share_commitment;
    this.json = payload.json;
  }

  static fromJson(json: any) {
    const hexNamespaceId = Buffer.from(json.message_namespace_id, 'base64').toString('hex');
    const hexCommitment = Buffer.from(json.message_share_commitment, 'base64').toString('hex');
    const raw = {
      type: json['@type'],
      signer: json.signer,
      message_size: json.message_size,
      message_namespace_id: hexNamespaceId,
      message_share_commitment: hexCommitment,
    };
    return new MsgPayForMsg({
      type: json['@type'],
      signer: json.signer,
      message_size: json.message_size,
      message_namespace_id: hexNamespaceId,
      message_share_commitment: hexCommitment,
      json: raw,
    });
  }
}

export default MsgPayForMsg;
