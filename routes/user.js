import express from 'express';
import { body } from 'express-validator';
import { getAll, addOnce, getOnce, patchOnce, deleteOnce, putOnce,login, loginwithToken } from '../controllers/user.js';

const router = express.Router();

router
  .route('/')
  .get(getAll)
    .post(addOnce);

router
  .route('/:username')
    
    //.put(putAll)
  .delete(deleteOnce);



  router
  .route('/:_id')
  .put(patchOnce)


  router
  .route('/affichage/:id')
  .get(getOnce);

  router
  .route('/login').
  post(loginwithToken)
/**
 * Maintenant que nous avons créé toutes ces routes,
 * exportons ce module pour l'utiliser dans server.js
 * puisque c'est lui notre entrée principale "main".
 */
export default router;