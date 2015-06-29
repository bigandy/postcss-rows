# postcss-rows
[PostCSS]: https://github.com/postcss/postcss

A [PostCSS] plugin using the rows unit to represent vertical spacing from a design document.

## Examples

Input:
```css
.box {
  margin-bottom: 20rows;
  padding-top: 0.5rows;
}
```

Output:
```css
p {
  margin-bottom: 320px;
  padding-top: 8px;
}
```

## Options
Type: `Object | Null`

Default:
```js
{
  units: 'rows',
  multiplier: '16'
}
```

- `units` (String) the name of the unit you want to use e.g. 20**rows**.
- `multiplier` (Number) number of pixels each unit equates to.

## Usage
Install:
```
npm install postcss-rows --save-dev
```

Then include the plugin:
```js
postcss([ require('postcss-rows')(options) ])
```

See [PostCSS] docs for examples for your environment.

## Licence
Released under the MIT license.