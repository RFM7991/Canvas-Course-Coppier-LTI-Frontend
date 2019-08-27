import mongoose from 'mongoose';
import { async } from 'q';

const oauthSchema = new mongoose.Schema({
    oauth: {
        nonce: String
    },
});

oauthSchema.statics.findByOauth = async function ()

const oauth = mongoose.model('Oauth', oauthSchema);

export default oauth;