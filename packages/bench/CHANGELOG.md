# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.0.0](https://github.com/thi-ng/umbrella/compare/@thi.ng/bench@1.0.11...@thi.ng/bench@2.0.0) (2020-01-24)


### Bug Fixes

* **bench:** update now() to only OPTIONALLY use bigint timestamps ([7ac391b](https://github.com/thi-ng/umbrella/commit/7ac391b58b7e8b3b6fdc458d1edda6ca441d379b))


### Features

* **bench:** add types, benchmark(), bigint timestamps, restructure ([e0af94c](https://github.com/thi-ng/umbrella/commit/e0af94cfbedea46a4131ec8243f2553e49a5e644))


### BREAKING CHANGES

* **bench:** Though no public API change, this library internally
uses ES BigInt timestamps now (in Node via `process.hrtime.bigint()`).





## [1.0.11](https://github.com/thi-ng/umbrella/compare/@thi.ng/bench@1.0.10...@thi.ng/bench@1.0.11) (2019-11-30)

**Note:** Version bump only for package @thi.ng/bench





## [1.0.10](https://github.com/thi-ng/umbrella/compare/@thi.ng/bench@1.0.9...@thi.ng/bench@1.0.10) (2019-11-09)

**Note:** Version bump only for package @thi.ng/bench





## [1.0.9](https://github.com/thi-ng/umbrella/compare/@thi.ng/bench@1.0.8...@thi.ng/bench@1.0.9) (2019-07-31)

**Note:** Version bump only for package @thi.ng/bench





## [1.0.8](https://github.com/thi-ng/umbrella/compare/@thi.ng/bench@1.0.7...@thi.ng/bench@1.0.8) (2019-07-12)

**Note:** Version bump only for package @thi.ng/bench





## [1.0.7](https://github.com/thi-ng/umbrella/compare/@thi.ng/bench@1.0.6...@thi.ng/bench@1.0.7) (2019-07-07)

**Note:** Version bump only for package @thi.ng/bench





## [1.0.6](https://github.com/thi-ng/umbrella/compare/@thi.ng/bench@1.0.5...@thi.ng/bench@1.0.6) (2019-04-24)

**Note:** Version bump only for package @thi.ng/bench





## [1.0.5](https://github.com/thi-ng/umbrella/compare/@thi.ng/bench@1.0.4...@thi.ng/bench@1.0.5) (2019-04-02)

**Note:** Version bump only for package @thi.ng/bench





## [1.0.4](https://github.com/thi-ng/umbrella/compare/@thi.ng/bench@1.0.3...@thi.ng/bench@1.0.4) (2019-03-28)

**Note:** Version bump only for package @thi.ng/bench







# [1.0.0](https://github.com/thi-ng/umbrella/compare/@thi.ng/bench@0.3.1...@thi.ng/bench@1.0.0) (2019-01-21)


### Build System

* update package build scripts & outputs, imports in ~50 packages ([b54b703](https://github.com/thi-ng/umbrella/commit/b54b703))


### BREAKING CHANGES

* enabled multi-outputs (ES6 modules, CJS, UMD)

- build scripts now first build ES6 modules in package root, then call
  `scripts/bundle-module` to build minified CJS & UMD bundles in `/lib`
- all imports MUST be updated to only refer to package level
  (not individual files anymore). tree shaking in user land will get rid of
  all unused imported symbols.


# [0.3.0](https://github.com/thi-ng/umbrella/compare/@thi.ng/bench@0.2.4...@thi.ng/bench@0.3.0) (2018-10-21)


### Features

* **bench:** add timedResult() / benchResult() ([0cf708f](https://github.com/thi-ng/umbrella/commit/0cf708f))


<a name="0.2.0"></a>
# [0.2.0](https://github.com/thi-ng/umbrella/compare/@thi.ng/bench@0.1.5...@thi.ng/bench@0.2.0) (2018-08-28)


### Features

* **bench:** add opt prefix arg, update docs ([4a37367](https://github.com/thi-ng/umbrella/commit/4a37367))


<a name="0.1.0"></a>
# 0.1.0 (2018-05-10)


### Features

* **bench:** add new package [@thi](https://github.com/thi).ng/bench ([9466d4b](https://github.com/thi-ng/umbrella/commit/9466d4b))
