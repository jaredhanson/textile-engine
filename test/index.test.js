var textile = require('../lib/index')
  , should = require('should')

describe('textile', function() {
  
  describe('module', function() {
    it('should export render', function() {
      textile.render.should.be.an.instanceOf(Function);
    })
    it('should export renderFile', function() {
      textile.renderFile.should.be.an.instanceOf(Function);
    })
    it('should alias __express to renderFile', function() {
      textile.__express.should.be.an.instanceOf(Function);
      textile.__express.should.be.equal(textile.renderFile);
    })
  })
  
  describe('renderFile', function() {
    
    it('should render h2', function(done) {
      textile.renderFile(__dirname + '/fixtures/h2.textile', {}, function(err, str) {
        if (err) return done(err);
        str.should.be.equal('<h2>An <span class="caps">HTML</span> second-level heading</h2>');
        done();
      });
    })
    
    it('should error when rendering file that does not exist', function(done) {
      textile.renderFile(__dirname + '/fixtures/not-found.textile', {}, function(err, str) {
        err.should.be.an.instanceOf(Error);
        should.not.exist(str)
        done();
      });
    })
    
  })
  
})
