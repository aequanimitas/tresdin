function Tresdin(args, opts) {
  this.registeredApps = [];
}

Tresdin.prototype.register = function(opts) {
  this.registeredApps.push(opts);
  return this;
}

module.exports = Tresdin;
