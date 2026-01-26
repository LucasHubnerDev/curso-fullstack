import { User } from '../models/User.js'

const home = async (req, res) => {
  // req.session.usuario = { nome: "L", lagado: true }
  // console.log(req.session.usuario)

  // req.flash("info", 'hello friend')
  // req.flash("error", 'hello friend')
  // req.flash("success", 'hello friend')

  // console.log(req.flash("success"), req.flash("error"), req.flash("info"))

  res.render('index')
}

export { home }
