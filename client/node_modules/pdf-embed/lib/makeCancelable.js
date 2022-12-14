"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var makeCancelable = function makeCancelable(promise) {
  var hasCanceled = false;

  var wrappedPromise = new Promise(function (resolve, reject) {
    promise.then(function (val) {
      return hasCanceled ? reject({ pdf: val, isCanceled: true }) : resolve(val);
    });
    promise.catch(function (error) {
      return hasCanceled ? reject({ isCanceled: true }) : reject(error);
    });
  });

  return {
    promise: wrappedPromise,
    cancel: function cancel() {
      hasCanceled = true;
    }
  };
};

exports.default = makeCancelable;