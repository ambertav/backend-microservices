import { Router } from "express";
import * as friendsCtrl from '../controllers/friends-controller';
import * as giftCtrl from '../controllers/gifts-controller'
import requireLogin from "../middleware/require-login";

const router = Router();

router.post('/create', requireLogin, friendsCtrl.create);
router.get('/', requireLogin, friendsCtrl.getAll);
router.get('/:id', requireLogin, friendsCtrl.getOne);
router.put('/:id/update', requireLogin, friendsCtrl.update);
router.post('/:id/tags',requireLogin, friendsCtrl.addTag);
router.post('/:id/generate-gift', requireLogin, giftCtrl.recommendGift);

export default router;