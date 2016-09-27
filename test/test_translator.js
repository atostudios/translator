var expect = require('chai').expect;
var Translator = require('../index.js');
var Words = {'hello': [{translation: 'alreet'}], 'bye': [{translation: 'tra'}]};
var Phrases = {'hello how are you doing' : [{translation: 'areet wor kid'}]}

describe('Translator', function() {
  it('should return translation', () => {
    var subject = Translator('hello how are you doing? I SAID hello', Words, Phrases);
    expect(subject.translation).to.equal('areet wor kid? i said alreet');
  });

  it('return error if no message', function() {
    var subject = Translator;
    expect(subject()).to.be.an('error');
  });

  it('return error if no words', function() {
    var subject = Translator;
    expect(subject('hello')).to.be.an('error');
  });

  it('return error if no phrases', function() {
    var subject = Translator;
    expect(subject('hello', {})).to.be.an('error');
  });

  it('should return string', function() {
    var message = 'hello, how are you doing? are you doing anything tonight?';
    var subject = Translator(message, Words, Phrases);
    expect(subject.translation).to.be.a('string');
    // console.log(subject);
    // var subject = Translator(subject, Words, Phrases, true);
    // console.log(subject);
    // expect(subject).to.be.a('string');
  });

})
