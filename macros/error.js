
macro 😡 {
  rule { $msg } => {
    throw new Error($msg)
  }
}
