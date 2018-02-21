import axios from 'axios'
import CognitoAuth from '@/cognito'

export default {
    getSignedURL(file) {
        let endpoint = 'https://rvv1a9to8j.execute-api.eu-west-1.amazonaws.com/dev/upload-node'
        let payload = {
            name: file.name,
            type: file.type
        }

        CognitoAuth.getIdToken((err, result) => {
            if (err) { console.log(err) }
            else {
                axios.defaults.headers.common['Authorization'] = result;
                return axios.post(endpoint, payload)
                    .then((res) => {
                        return Promise.resolve(res.data.url || '/')
                    })
                    .catch((err) => {
                        console.error(err)
                        return Promise.reject('/')
                    })
            }
        })
    }
}
