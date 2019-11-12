import { expect } from 'chai';
import { describe, it } from 'mocha';
import { find, findAll } from '@ember/test-helpers';
import { setupRenderingWithMirage, setupWindowMock } from '@freshdesk/test-helpers';

describe('Integration | Component', function() {
  let hooks = setupRenderingWithMirage();
  setupWindowMock(hooks);

  it('basic expect statements', async function() {
    // Simple true validation
    expect(true).to.be.true;
    expect(true, 'expect with message').to.be.true;
    expect('Test').to.be.ok;
    expect('Test', 'With message').to.be.ok;

    // Simple false validation
    expect(false).to.be.false;
    expect(false, 'expect with message').to.be.false;

    // Empty checks
    expect('', 'empty string').to.be.empty;
    expect([], 'empty array').to.be.empty;
    expect({}, 'empty object').to.be.empty;
    expect([1, 2], 'non empty array').to.not.be.empty;
    expect({"name": "freshworks"}, 'non empty object').to.not.be.empty;

    // Variations in equal assertion
    expect(true).to.equal(true);
    expect(find('[data-test-id=page-title]').innerText.trim(), '[Message] Expression with message').to.equal('[Expected] Page Title');
    expect(window.location.pathname).to.be.equal('/support/login');

    // Variations in length
    // Find out if its a dom present case or not present case
    expect(findAll('[data-test-id=page-title]'), '[Message] Multiple elements should be present').to.have.length(2);
    expect(findAll('[data-test-id=page-title]')).to.have.length(1);
    expect(findAll('[data-test-id=page-title]'), '[Message] One Element Present').to.have.length(1); // With message and length 1
    expect(findAll('[data-test-id=page-title]'), '[Message] Element not present').to.have.length(0);
    expect(findAll('[data-test-id=page-title]')).to.have.length(0); // Without message
  });

  it('basic negative expect statements', function() {
    expect(false).to.not.be.true;
    expect(false, 'Message').to.not.be.true;
    expect(true).to.not.be.false;
    expect(true, 'Message').to.not.be.false;

    expect('Test', 'Message').to.not.be.ok;
  });

  it('Expect within a nested block', function() {
    // Comment
    [true, true].forEach((key) => {
      // Inner Comment
      expect(item).to.be.true;
    });

    [true, true].forEach(function(item) {
      // Inner Comment
      expect(item).to.be.true;
    });

  });
});
