var express=require("express");
var router=express.Router();
var uController = require('../Controllers/verify');
var userController= require('../Controllers/addUser');
var dController = require('../Controllers/delete');
var sController = require('../Controllers/addSeason');
var seController = require('../Controllers/addSeries');
var eController = require('../Controllers/addEpisode');
var dsController = require('../Controllers/deleteSeries');
var dseController = require('../Controllers/deleteSeason');
var deController = require('../Controllers/deleteEpisode');
var srController = require('../Controllers/searchEpisode');
var psController = require('../Controllers/postComment');


router.route('/u1/addUser')
.post(userController.postuser)
.get(userController.getuser);

router.route('/u1/verify')
.post(uController.searchuser)

router.route('/u1/deleteUser')
.post(dController.deleteuser)

router.route('/u1/addSeries')
.post(seController.postSeries)
.get(seController.getSeries);

router.route('/u1/addSeason')
.post(sController.postSeason)
.get(sController.getSeason);

router.route('/u1/addEpisode')
.post(eController.postEpisode)
.get(eController.getEpisode);

router.route('/u1/deleteSeries')
.post(dsController.deleteSeries)

router.route('/u1/deleteSeason')
.post(dseController.deleteSeason)

router.route('/u1/deleteEpisode')
.post(deController.deleteEpisode)

router.route('/u1/searchEpisode')
.post(srController.searchEpisode)

router.route('/u1/postComment')
.post(psController.postComment)




module.exports = router;