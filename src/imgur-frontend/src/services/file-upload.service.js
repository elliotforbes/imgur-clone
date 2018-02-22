import * as axios from 'axios'
import CognitoAuth from '@/cognito'
import config from '@/config'

function upload(file) {

    CognitoAuth.getIdToken((err, result) => {
        console.log(result);
        if (err) { console.log(err) } 
        else {
            const url = config.s3SignedUrl;
            axios.defaults.headers.common['Authorization'] = result;
            return axios({ method: 'post', url: url, data: { name: file.name, type: file.type }})
                .then(x => {
                    var options = { headers: { 'Content-Type': file.type } }
                    delete axios.defaults.headers.common['Authorization'];
                    return axios.put(x.data.uploadURL, file, options)
                })
        }
    })

}

export { upload }
