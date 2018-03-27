const axios = require('axios');


class Request {
    /**
     * 
     * 封装axios请求函数
     * @param {string} url 
     * @returns response
     * @memberof httpRequest
     */
    static async getData(url) {
        try {
            let response = await axios(url);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    }

}

module.exports = Request;