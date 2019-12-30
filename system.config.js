/**
 * Created by Khanhtran  on 2019/12/29.
 */
const debug = process.env.NODE_ENV == 'development';
const serverPort = '4000';

const httpServerDev = 'http://localhost:'+serverPort;
const defaultOptionsDev = {
    mode: 'cors',
    credentials: 'include',
    headers: {
        'content-type': 'application/json'
    },
};

const httpServerPro = '';
const defaultOptionsProd = {
    credentials: 'same-origin',
    headers: {
		'content-type': 'application/json'
    },
};


const mongooseConnectDev = "mongodb://localhost:27017/accountSystem";
const mongooseConnectPro = "mongodb://localhost:27017/accountSystem";

const uploadImgServerDev = 'localhost';
const uploadImgServerPro = '192.168.195.74';

module.exports = {
	httpServer: debug ? httpServerDev:httpServerPro,
	serverPort: serverPort,
	defaultOptions: debug ? defaultOptionsDev : defaultOptionsProd,
	mongooseConnect: debug ? mongooseConnectDev:mongooseConnectPro,
	uploadImgServer: debug ? uploadImgServerDev:uploadImgServerPro,
	register: debug
};
