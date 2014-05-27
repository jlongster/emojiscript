
macro 💩 {
  rule infix { $left | $right } => {
    $left == $right
  }
}

let == = macro {
  case { $ctx } => {
    throwSyntaxError("== is not allowed", #{$ctx});
  }
}

export 💩
export ==
