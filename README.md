
# benderjs-yui-beautified

Adds assertions beautified assertions to the Bender.js. This plugin utilizes [js-beautify](https://www.npmjs.com/package/js-beautify) to format data.

## Requirements

This plugin requires [`benderjs-yui`](https://www.npmjs.com/package/benderjs-yui) plugin to work correctly.

## API

Adds `bender.assert.beautified` namespace containing following members:

### `html`

Parameters:

* expected - Expected value.
* actual - Actual value.
* msg - optional - Message passed to the `bender.assert.areEqual` assertion.

#### Examples

```
bender.assert.beautified.html( '<p>aaa aaaa</p>', '<p>aaa    aaaa</p>' ); // Pass
bender.assert.beautified.html( '<p>aaa aaaa</p>', '<p>aaaaaaa</p>' ); // Fails
```

### `js`

Parameters:

* expected - Expected value.
* actual - Actual value.
* msg - optional - Message passed to the `bender.assert.areEqual` assertion.

#### Examples

```
bender.assert.beautified.js( 'var aaa = 3;', 'var aaa =    3;' ); // Pass
bender.assert.beautified.js( 'var aaa = 3;', 'var aaa =    33;' ); // Fails
```