export const saveData = (req, res, next) => {
    console.log("passando pelo middleware global")

    if (req.body?.cliente) {
        console.log(`dados: ${req.body.cliente}`)
    }

    next()
}
