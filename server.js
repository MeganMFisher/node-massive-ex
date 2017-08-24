const express = require('express'),
cors = require('cors'),
bodyParser = require('body-parser'),
massive = require('massive');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Connection string -->>
// postgres://[username]:[password]@[host]:[port]/[database]

massive('postgres://postgres:@localhost/class-demo').then(db => {
app.set('db', db);


// initializing database with seed file

app.get('db').init.seed_file().then(res => console.log(res))
.catch(err => console.log(err))

})

app.get('/api/getAllUsers', (req, res) => {
    // if(req.query.name) {
    //     req.app.get('db').getUserByName(req.query.name).then(data => {
    //         return res.status(200).send(data)
    //         })
    // } else {
    //     req.app.get('db').getAllFromUsers().then(data => {
    //         res.status(200).send(data)
    //     })
    // }

        req.app.get('db').getAllFromUsers().then(users => {
            if(req.query.name) {
                users = users.filter(e => {
                    return e.name === req.query.name
                })
            }
            if(req.query.age) {
                users = users.filter(e => {
                    return e.age === +req.query.age
                })
            }
            res.status(200).send(users)
        })
    
    

})

// app.post('/api/postData', (req, res) => {
// req.app.get('db').postData(req.body.stuff).then(posted => {
// res.status(200).send('It worked!')
// })
// })

app.post('/api/addUser', (req, res) => {
    let { name, age, country } = req.body
    req.app.get('db').addUser([name, age, country]).then(posted => {
        res.status(200).send('It worked!')
    })
})


app.listen(3004, () => console.log('Listening on port 3000 yo'));