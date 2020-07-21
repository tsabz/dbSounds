
const getdbSoundsData = (req, res, db) => {
    db.select('*').from('testdb')
      .then(items => {
        if(items.length){
          res.json(items)
        } else {
          res.json({dataExists: 'false'})
        }
      })
      .catch(err => res.status(400).json({dbError: err}))
  }
  


  const postdbSoundsData = (req, res, db) => {
    const { producer_name, producer_genre, producer_notes, producer_location, } = req.body
    const added = new Date()
    db('testdb').insert({ producer_name, producer_genre, producer_notes, producer_location, added})
      .returning('*')
      .then(item => {
        res.json(item)
      })
      .catch(err => res.status(400).json({dbError: err}))
  }
  
  const putdbSoundsData = (req, res, db) => {
    console.log(`req.body : ${req.body}`);
    const { id, producer_name, producer_genre, producer_notes, producer_location, } = req.body
    console.log(`id : ${id}`);
    console.log(`producer name: ${ producer_name}`);
    
    db('testdb').where({id}).update({producer_name, producer_genre, producer_notes, producer_location})
      .returning('*')
      .then(item => {
        res.json(item)
      })
      .catch(err => res.status(400).json({dbError: err}))
  }
  
  const deletedbSoundsData = (req, res, db) => {
    const { id } = req.params
    console.log(`id ${id}`);
    db('testdb').where({id}).del()
      .then(() => {
        res.json({delete: 'true'})
      })
      .catch(err => res.status(400).json({dbError: err}))
  }
  
  module.exports = {
    getdbSoundsData,
    postdbSoundsData,
    putdbSoundsData,
    deletedbSoundsData
  }




