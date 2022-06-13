# Animate.css mixins

SASS, Less and Stylus mixins for [animate.css v4.1.1](https://github.com/animate-css/animate.css/releases/tag/v4.1.1)

### Installation

```
npm install animate-css-mixins --save
```

### Documentation

You can find the Animate.css documentation on the [website](https://animate.style).

### Usage

```
/* styles.scss */
@import 'animate-css-mixins/animate.scss';

.my-element {
  @include animate__bounce; /* referring animation defined in https://animate.style */
  animation-duration: 600ms; /* don't forget to set a duration! */
}
```