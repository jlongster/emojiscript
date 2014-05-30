
# EmojiScript

EmojiScript is an extension of JavaScript that features emotion as a value. Use emotion literals with the
most expressive language ever. It is implemented with
[sweet.js](http://sweetjs.org/) macros (using a fork of it since it
doesn't natively support emoji...).

```
$ npm install emojiscript
$ emo file.js
```

The file `example.js` has example code.

EmojiScript is just a set of [sweet.js](http://sweetjs.org/) macros,
so you can use them individually if you want:

```
cat runtime/runtime.js && \
  ./sweet.js/bin/sjs \
      -m ./macros/poop.js \
      -m ./macros/algebra.js \
      -m ./macros/error.js \
      -m ./macros/terminating-cat.js \
      example.js
```

Since it compiles to JavaScript, you get all the features to
JavaScript in addition to:

## Emotional Algebra

```
😄  + 🔥  == 😱;
😄  + 💥  == 😭;
😄  + 💧  == 😅;

for(var i=0; i<10; i++) {
  console.log(😄  + i);
}

😄
😅
😆
😇
😈
😉
😊
😋
😌
😍

😍  > 😞  == true;
```

## Discourage Bad Operators

```
// Instead of
if(obj1 == obj2) { ... }

// Use this
if(obj1 💩  obj2) { ... }
```

## Errors

```
// Instead of
throw new Error("something is wrong")

// Use this
😡"something is wrong"
```

## Automatic Cat Insertion

```
// Instead of
var foo = 1 + 2;
var bar = baz();
var user = 😄 + 💥;

// Use this
var foo = 1 + 2😸
var bar = baz()😸
var user = 😄 + 💥😸
```

## Better Expressiveness

```
if(user < 😄 ) {
  😡 "be happy"😸
}
```
