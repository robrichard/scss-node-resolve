"use strict";
var scssNodeResolve = require('../index');
var assert = require('assert');
var resolve = require('resolve');
var path = require('path');
describe("scss-node-resolve", function () {
    it("should no worry about paths that don't begin with a tilde", function () {
        assert.deepEqual(scssNodeResolve('foo/bar/foo'), {
            file: 'foo/bar/foo'
        });
    });
    it('should resolve like node resolve when path begins with a tilde and is relative', function () {
        assert.equal(
            scssNodeResolve(
                '~./scss/ends-in-scss.scss',
                __dirname + '/.'
            ).file,
            path.join(
                __dirname,
                'scss/ends-in-scss.scss'
            )
        );
    });
    it('should resolve like node resolve when path begins with a tilde and is not relative', function () {
        assert.equal(
            scssNodeResolve(
                '~empty-module',
                __dirname + '/.'
            ).file,
            path.join(
                __dirname,
                '../node_modules/empty-module/index.js'
            )
        );
    });
});
