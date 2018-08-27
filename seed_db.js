const User = require('./src/models/User')

const db = {
  users: [
    { id: '1', userName: 'userName1', email: 'email1@email.com', firstName: 'first1', lastName:'last1', password: 'secret1', bio: 'bio1', profileImage: 'profileImage.jpg'},
    { id: '2', userName: 'userName2', email: 'email2@email.com', firstName: 'first2', lastName:'last2', password: 'secret2', bio: 'bio2', profileImage: 'profileImage.jpg'},
    { id: '3', userName: 'userName3', email: 'email3@email.com', firstName: 'first3', lastName:'last3', password: 'secret3', bio: 'bio3', profileImage: 'profileImage.jpg'},
    { id: '4', userName: 'userName4', email: 'email4@email.com', firstName: 'first4', lastName:'last4', password: 'secret4', bio: 'bio4', profileImage: 'profileImage.jpg'},
  ]
}

// seed db
User.collection.drop()
User.create(db.users, async () =>{
  console.log('users are seeded.')
  // const user1 = await User.findOne({name: 'name1'})
  // const user2 = await User.findOne({name: 'name2'})
  // Message.collection.drop()
  // for (let i = 0; i < db.messages.length; i++) {
  //   if ( i % 2 === 0 ){
  //     db.messages[i].user = user1._id
  //   } else {
  //     db.messages[i].user = user2._id
  //   }
  // }
  //
  // Message.create(db.messages, () => {
  //   console.log('messages are seeded.')
  // })
})

module.exports = db
