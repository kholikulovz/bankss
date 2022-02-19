const express = require('express');
const app = express();
const cors = require('cors');
const  PORT = process.env.PORT || 8000;
const { Pool } = require('pg')

app.use(cors())
   .use(express.json())

const pool = new Pool({
      connectionString: 'postgres://jdzqylfq:RfQbm2Q0Af4n41uEcke4Oq-siKs-J5oA@castor.db.elephantsql.com/jdzqylfq'
})

app.get('/', async(req, res) => {
   const {name}= req.query
   // console.log(name);
   const client = await pool.connect()
    
   const { rows } = await client.query(`SELECT * FROM workers WHERE worker_name ILIKE $1`, [name+'%'])

   if(!rows.length) {
       return res.send('No workers')
   }
   return res.send(rows)

await client.release()
})


app.listen(PORT, () => {
 console.log(PORT)
});