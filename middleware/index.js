var Campground = require("../models/campground");
var Comment = require("../models/comment");

// all the middleare goes here
var middlewareObj = {};

middlewareObj.checkCampgroundOwnership = function(req, res, next) {
 if(req.isAuthenticated()){
        Campground.findById(req.params.id, function(err, foundCampground){
           if(err){
               req.flash("error", "Campground not found");
               res.redirect("back");
           }  else {
               // does user own the campground?
            if(foundCampground.author.id.equals(req.user._id)|| req.user.isAdmin) {
                next();
            } else {
                req.flash("error", "You don't have permission to do that");
                res.redirect("back");
            }
           }
        });
    } else {
        req.flash("error", "You need to be logged in to do that");
        res.redirect("back");
    }
}

middlewareObj.checkCommentOwnership = function(req, res, next) {
 if(req.isAuthenticated()){
        Comment.findById(req.params.comment_id, function(err, foundComment){
           if(err){
               res.redirect("back");
           }  else {
               // does user own the comment?
            if(foundComment.author.id.equals(req.user._id) || req.user.isAdmin) {
                next();
            } else {
                req.flash("error", "You don't have permission to do that");
                res.redirect("back");
            }
           }
        });
    } else {
        req.flash("error", "You need to be logged in to do that");
        res.redirect("back");
    }
}

middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "You need to be logged in to do that");
    res.redirect("/login");
}

module.exports = middlewareObj;

/*
var Campground = require("../models/campground");
var Comment = require("../models/comment");
module.exports = {
  isLoggedIn: function(req, res, next){
    if(req.isAuthenticated()){
      return next();
    }
    req.flash("error","You must be signed in to do that!");
    res.redirect("/login");
  },
  checkUserCampground: function(req, res, next){
    if(req.isAuthenticated()){
      Campground.findById(req.params.id, function(err, campground){
        if(campground.author.id.equals(req.user._id) || req.user.isAdmin){
          next();
        } else{
          req.flash("error", "You don't have permission to do that!");
          console.log("BADD!!!");
          res.redirect("/campgrounds/" + req.params.id);
        }
      });
    } else{
      req.flash("error", "You need to be signed in to do that!");
      res.redirect("/login");
    }
  },
  checkUserComment: function(req,res, next){
        console.log("YOU MADE IT!");
        if(req.isAuthenticated()){
          Comment.findById(req.params.commentId, function(err, comment){
            if(comment.author.id.equals(req.user._id)){
              next();
            } else{
              req.flash("error","You don't have permission to do that!");
              res.redirect("/campgrounds/" + req.params.id);
            }
          });
        } else {
          req.flash("error", "You need to be signed in to do that!");
          res.redirect("login");
        }
    }
}
*/