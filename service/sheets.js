const { GoogleSpreadsheet } = require('google-spreadsheet');
// const creds = require('../client_secret.json');

const doc = new GoogleSpreadsheet('1pp6jc96anEZFueTsWtfF1uUMzBifzyettp1pduFVNSE');

const client_email = 'sheets@conquer-layoff.iam.gserviceaccount.com'
const private_key = process.env.key

let sheets = function () {
    function constructJson(data) {
        let fullList = []
        data.forEach(value => {
            
            const singleData = {'name': value.name,
            'location':value.location,
            'status': value.status,
            'person': value.person,
            'email': value.email};
        
            fullList.push(singleData);        
            
        });
        return fullList;
    }

    async function getAllData() {
        await doc.useServiceAccountAuth({
        client_email: client_email,
        private_key: private_key,
        });
    
        await doc.loadInfo(); 
    
        const sheet = doc.sheetsByIndex[0] ; 

        return sheet.getRows().then((data) => {
            return data;
        })
    }

    async function addData(newData) {

        await doc.useServiceAccountAuth({
            client_email: creds.client_email,
            private_key: creds.private_key,
            });
        
        await doc.loadInfo(); 

        const sheet = doc.sheetsByIndex[0] ; 

        const rows = await sheet.getRows();

        let id = rows.length + 1;

        const newEntry = {
            id: id,
            name: newData.name,
            location: newData.location,
            status: newData.status,
            person: newData.person,
            email: newData.email
        }

        await sheet.addRow(newEntry);
    }

    this.getAllData = getAllData;
    this.constructJson = constructJson;
    this.addData = addData;
};

module.exports = new sheets();