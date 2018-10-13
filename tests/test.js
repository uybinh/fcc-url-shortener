const Rand = require("../src/components/random");
const test = require("tape");

test("random number with n digits", function(t) {
  t.plan(2);
  t.equal(Rand(2) < 100, true);
  t.equal(Rand(3) < 1000, true);
});
