import CONSTANTES from './constantes';

const getData = (data) => {
    return new Promise((resolve, reject) => {
        fetch(CONSTANTES.URL, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
            .catch(error => reject(error))
            .then(response => {
                if (response.ok) resolve(response.data);
                else reject(response);
            });
    });
};


export default {
    getData
};