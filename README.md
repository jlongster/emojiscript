
# EmojiScript

EmojiScript features emotion as a value. Use emotion literals with the
most expressive language ever. It is implemented with
[sweet.js](http://sweetjs.org/) macros (using a fork of it since it
doesn't natively support emoji...).

cat runtime/runtime.js > out.js && \
  ./sweet.js/bin/sjs \
      -m ./macros/poop.js \
      -m ./macros/async.js \
      -m ./macros/algebra.js \
      -m ./macros/error.js \
      -m ./macros/terminating-cat.js example.js >> out.js

Since it compiles to JavaScript, you get all the features to
JavaScript in addition to:

## Emotional Algebra

😄  + 🔥  == 😱;;
😄  + 💥  == 😭 ;
😄  + 💧  == 😅 ;

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

## Native Async

var x = 🔜 foo();

## Discourage Bad Operators

// Instead of
if(obj1 == obj2) { ... }

// Use this
if(obj1 💩  obj2) { ... }

## Errors

// Instead of
throw new Error("something is wrong")

// Use this
😡"something is wrong"

## Automatic Cat Insertion

// Instead of
var foo = 1 + 2;
var bar = baz();
var user = 😄 + 💥;

// Use this
var foo = 1 + 2😸
var bar = baz()😸
var user = 😄 + 💥😸

## Better Expressiveness

if(user < 😄 ) {
  😡 "be happy"😸
}

🔜 💏  === 👶 😸