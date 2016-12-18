const express =  require('express')
let router = express.Router();

const controllers = require('.././controllers/main')

let api = 'v1'


router.get('/', controllers.render)
router.get('/paradero/:paradero', controllers.paradero)
router.get('/recorrido/:servicio', controllers.recorrido)
router.get('/saldo/:saldo', controllers.saldoBip)
router.get('/recarga/todos', controllers.puntos)



module.exports = router


