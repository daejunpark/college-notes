Connected spaces
: A Metric/Topological space is connected if, for all $U, V \subseteq S$ such that
  * $U, V$ are open
  * $X= U \cup V$
  * $U\cap V \ne \phi$
  implies $U = \phi$ or $V = \phi$

Path Connected
: ... if forall $x, y \ion S, \exists f:[a, b] \to S$ continuous, so that $f(a) = x, f(b) = y$

#### Theorem N24.1: Continuous functions  map connected sets to connected sets.

#### Theorem 22.5: A path connected space is connected

Note: Converse is NOT true
XXX: "Deleted broom" is an example of connected space that is not path connected.


Differentiablilty
: Let $I \subseteq \mathbb R$ be an open interval, $f: I \to \mathbb R, a \in I$  
  Then, $f$ is differentiable at $a$ iff $\lim_{x\to a}\frac {f(x) - f(a)}{x - a}$ exists.

#### Theorem 28.2: $f: I \to \mathbb R$ is differentiable at $a$, then $f$ is continuous at $a$

* Start with $f(x) = f(x) - f(a) + f(a)$ and show that $\lim{x\to z} f(x) = f(x)$

$$\begin{aligned}
f(x) &= f(x) - f(a) + f(a) \\
     &= \frac{f(x) - f(a)}{x - a} (x - a) + f(a) \\
\lim_{x\to a}f(x) &= \lim_{x\to a}(\frac{f(x) - f(a)}{x - a} (x - a) + f(a)) \\
                  &= \lim_{x\to a}(\frac{f(x) - f(a)}{x - a} (x - a)) + f(a) \\
                  &= f'(x)(a - a) + f(a) \\
                  &= f(a)
\end{aligned}$$

#### Theorem 2.8.4: Chain rule
> $f$ differentiable at $a$, $g$ is differentiable at $f(a)$, then $(f\circ g)'(a) = g'(f(a))\times f'(a)$.

XXX 

Local Minimum, mimima
: $f(x)$ has a local minimum at $a$  
  if, $\exists \epsilon > 0$, such that $f(a) \le f(x)$ for all $x \in (a-\epsilon, a+\epsilon)$
  
  i.e, if $f(a) \le f(x)$ for all $x$ "near" $a$

#### Theorem 29.1: Suppose $f$ is differentiable at $X_0$, and $f$ has an extremum at $x_0$, then $f'(x_0) = 0$ 

1. Definition of local maximimum.
2. Chose any sequence in $(a, a + \delta)$ with $x_n \to x_0$,  
   show that $\frac {f(x_n) - f(a)} {x_n - a} \le 0$  
   $f'(a) = lim_{n\to\infty}\frac {f(x_n) - f(a)} {x_n - a} \le 0$
   
   XXX: The definition of derivative uses $f:I \to \mathbb R$ but here a sequence is used: $f:\mathbb N \to \mathbb R$
3. Chose any sequence in $(a - \delta, a)$ with $x_n \to x_0$,  
   similarly show $f'(a) = lim_{n\to\infty}\frac {f(x_n) - f(a)} {x_n - a} \ge 0$
4. By 2 and 3, $f'(0) = 0$

#### Theorem: Rolle's theorem

> If 
>  * $f:[a, b] \to \mathbb R$ is continuous
>  * $f|(a, b)$ is differentiable
>  * f(a) = f(b)
> there exists $c \in (a, b)$ so that $f'(c) = 0$

1. For constant $f$, proof is trivial
2. Otherwise, $f$ achieves max and min on $[a, b]$ since $f$ is continuous.
3. Since $f$ is not constant, max $\ne$ min.
4. Since $f(a) \ne f(b)$, at least one extremal point MUST be in $(a, b)$

#### Theorem 29.3: Mean value theorem
> If 
>  * $f:[a, b] \to \mathbb R$ is continuous
>  * $f|(a, b)$ is differentiable
> there exists $c \in (a, b)$ so that $f'(c) = \frac {f(b) - f(a)} {b - a}$

1. Take $h(x)$ so that $h(a) = f(a), h(b) = f(b)$, constance slope.
2. Consider the function $f(x) - h(x)$, apply Rolle's thoerem.

XXX Rest of lecture 27

---

#### Theorem N28.1: $f:(a, b) \to \mathbb R$ is differentiable, $f'(x) \ge 0$ $\Longleftrightarrow$ $f$ is non-decreasing

$\Rightarrow$: Use mean value theorem on any $x, y \in (a, b)$, definition of $f'(x)$ to get $f(x) \ge f(y)$  
$\Leftarrow$: Definition of non-decreasing ($\frac {f(y) - f(x)}{y - x} \ge 0$), apply limit

#### Theorem 29.9: Inverse funciton theorem
> Suppose:
> * $f:(a, b) \to (c, d)$ is continuous (NOTE domain and codomain MUST be open)
> * $f$ is differentiable at $x_0 \in (a, b)$
> * $f'(x_0 \ne 0)$
> Then,
> * $f^{-1}$ is differentiable at $y_0 = f(x_0)$
> * $(f^{-1}(y_0) = f'(x_0) = 1$\

1. Assume $f^{-1}$ is continuous (we prove this later, using Theorem N28.1)
2. Since $f'(x_0)$ exists, $\ne 0$, use any sequence: $\{y_n\} = \{ f(x_n) \} \to Y, definition of limit, to show $\lim_{n\to\infty} \frac {f^{-1}(y_n) - f^{-1}(Y)} {y_n - Y} = \lim \frac {x_n - x_0} { f(x_n) - X } = \lim \frac {1} { \frac { f(x_n) - X } {x_n - x_0}  } = \frac 1 {f'(X)}$

#### Theorem 18.6: $f:(a, b) \to (c, d)$ is a continuous bijection then $f$ is strictly monotonic
#### Theorem N28.1: $f:(a, b) \to (c, d)$ is a continuous bijection then $f^{-1}$ is continuous

---

## Lecture 29: Integration

Notation:
1. $M(f, S):= \sup \{f(x) | \forall x \in S \}$
1. $m(f, S):= \inf \{f(x) | \forall x \in S \}$

Partition $P$ pf $[a, b]$
: set of points $t_0, t_1, t_2 \ldots t_n \in [a, b]$, s.t. $a = t_0 < t_1 < t_2 \ldots  < t_n = b$

Upper sum w.r.t partition $P$
: $U(f, P) := \sum_{i=1} M(f, [t_{i-1}, t_i])\cdot(t_i - t_{i-1})$

Lower sum w.r.t partition $P$
: $L(f, P) := \sum_{i=1} m(f, [t_{i-1}, t_i])\cdot(t_i - t_{i-1})$