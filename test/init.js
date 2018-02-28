"use strict";

const assert = require("assert");
const path = require("path");
const nconf = require("nconf");
const db = require('../../NodeBB/test/mocks/databasemock');
const plugins = require("../../NodeBB/src/plugins");

const pluginId = "nodebb-plugin-search-elasticsearch";

describe("test of test", () => {
  it("should do somethin", () => {
    assert(true == true);
  });
});


describe("test init function", () => {

  it("can load plugin", (done) => {
    plugins.loadPlugin(
      path.join(__dirname, "/../"),
      function(err) {
        assert.ifError(err)
        assert(plugins.libraries[pluginId]);
        assert(plugins.loadedHooks['static:app.load'])
        done();
      }
    );
  });
  it('should register and fire a filter hook', function(done) {
    function
  })
});

