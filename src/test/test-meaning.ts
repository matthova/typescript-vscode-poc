import * as Mocha from 'mocha';
import { assert } from 'chai';

import { meaning } from '../meaning';

describe('The meaning of life', function() {

  it('should have the correct answer', function() {
    const answer = meaning.answer();
    const expectedAnswer = 42;
    assert.equal(answer, expectedAnswer);
  });

  it('should have the correct question', function() {
    const question = meaning.question();
    const expectedQuestion = "Sorry, Earth was destroyed before I was able to calculate the question.";
    assert.equal(question, expectedQuestion);
  });
});
