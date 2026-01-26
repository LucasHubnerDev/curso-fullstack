import { User } from '../models/User.js'

const home = async (req, res) => {
  // método create, para criar um registro, salva automaticamente
  // const user = await User.create({
  //   name: 'Lucas',
  //   email: 'lucas@email.com',
  //   password: '123456'
  // })

  // método find, para realizar uma consulta
  // const user = User.find()

  // console.log(user)

  res.render('index')
}

export { home }
