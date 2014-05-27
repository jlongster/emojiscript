operator + 12 left { $l, $r } => #{ _op($l, $r, '+') }
operator - 12 left { $l, $r } => #{ _op($l, $r, '-') }
operator < 13 left { $l, $r } => #{ _op($l, $r, '<') }
operator > 13 left { $l, $r } => #{ _op($l, $r, '>') }
operator <= 13 left { $l, $r } => #{ _op($l, $r, '<=') }
operator >= 13 left { $l, $r } => #{ _op($l, $r, '>=') }

export +;
export -;
export <;
export >;
export <=;
export >=;

macro 🔥 { rule {} => { 45 } }
macro 💥 { rule {} => { 41 } }
macro 💧 { rule {} => { 1 } }
macro 💏 {
  rule {} => {
    // 👶
    String.fromCodePoint(128118)
  }
}

export 🔥 ;
export 💥 ;
export 💧 ;
export 💏 ;
