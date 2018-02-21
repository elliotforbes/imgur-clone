import * as axios from 'axios'
import CognitoAuth from '@/cognito'

const BASE_URL = 'http://localhost:3001';

function upload(formData) {
    CognitoAuth.getIdToken((err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(result)
            const url = `https://rvv1a9to8j.execute-api.eu-west-1.amazonaws.com/dev/upload-node`;
            axios.defaults.headers.common['Authorization'] = result;
            return axios({
                method: 'post',
                url: url, 
                data: formData
            })
            .then(x => x.data)
            .then(x => x.map(img => Object.assign({},
                img, { url: `${BASE_URL}/images/${img.id}` })))
            .catch(err => { console.log(err) });
        }
    })
}

export { upload }