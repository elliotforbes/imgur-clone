import * as axios from 'axios';

const BASE_URL = 'http://localhost:3001';

function upload(formData) {
    const url = `https://rvv1a9to8j.execute-api.eu-west-1.amazonaws.com/dev/upload`;
    return axios.post(url, formData)
        // get data
        .then(x => x.data)
        // add url field
        .then(x => x.map(img => Object.assign({},
            img, { url: `${BASE_URL}/images/${img.id}` })));
}

export { upload }