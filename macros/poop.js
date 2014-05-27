
macro 💩 {
  rule infix { $left | $right } => {
    $left == $right
  }
}

let == = macro {
  case { _ } => {
    throwSyntaxError("== is not allowed");
  }
}

export 💩
export ==
