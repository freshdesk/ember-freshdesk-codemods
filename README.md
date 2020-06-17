# @freshworks/ember-codemods

![npm (scoped)](https://img.shields.io/npm/v/@freshworks/ember-codemods)
![](https://github.com/freshdesk/ember-freshdesk-codemods/workflows/Node%20CI/badge.svg)


A collection of codemods by Freshworks.

## Usage

To run a specific codemod from this project, you would run the following:

```
npx @freshworks/ember-codemods <TRANSFORM NAME> path/of/files/ or/some**/*glob.js

# or

yarn global add @freshworks/ember-codemods
ember-codemods <TRANSFORM NAME> path/of/files/ or/some**/*glob.js
```

## Transforms

<!--TRANSFORMS_START-->
* [add-layout](transforms/add-layout/README.md)
* [async-leaks](transforms/async-leaks/README.md)
* [cleanup-imports](transforms/cleanup-imports/README.md)
* [engine-route-transitions](transforms/engine-route-transitions/README.md)
* [insert-hooks](transforms/insert-hooks/README.md)
* [mocha-to-qunit](transforms/mocha-to-qunit/README.md)
* [modify-import](transforms/modify-import/README.md)
* [remove-unused-get-import](transforms/remove-unused-get-import/README.md)
* [setup-helpers-with-await](transforms/setup-helpers-with-await/README.md)
<!--TRANSFORMS_END-->

## Contributing

### Installation

* clone the repo
* change into the repo directory
* `yarn`

### Running tests

* `yarn test`

### Update Documentation

* `yarn update-docs`
