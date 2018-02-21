import * as axios from 'axios'
import CognitoAuth from '@/cognito'

function upload(file) {

    CognitoAuth.getIdToken((err, result) => {
        console.log(result);
        if (err) { console.log(err) } 
        else {
            const url = `https://rvv1a9to8j.execute-api.eu-west-1.amazonaws.com/dev/upload-node`;
            axios.defaults.headers.common['Authorization'] = result;
            return axios({
                method: 'post',
                url: url, 
                data: { name: file.name, type: file.type }
            })
                .then(x => {
                    console.log(x.data.uploadURL)

                    var options = {
                        headers: {
                            'Content-Type': file.type
                        }
                    }
                    delete axios.defaults.headers.common['Authorization'];
                    // return axios.put(x.data.uploadURL, file, options)
                    // return axios.put(x.data.uploadURL, file, options)

                    var xhr = new XMLHttpRequest();
                    xhr.open('PUT', x.data.uploadURL, true);
                    xhr.setRequestHeader('Content-Type', file.type);
                    xhr.onload = () => {
                    if (xhr.status === 200) {
                        console.log("Hi")
                    }
                    };
                    xhr.onerror = () => {
                    // error...
                    };
                    xhr.send(file); 
                })
        }
    })

}

export { upload }
