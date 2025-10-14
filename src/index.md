---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

# Hero section
hero:
  name: Rux
  text: Programming Language
  image:
    src: /logo.svg
    alt: Rux logo
  tagline: Fast, compiled, strongly typed, multi-paradigm, general-purpose
  actions:
    - theme: brand
      text: Get Started
      link: /docs/getting-started
    - theme: alt
      text: GitHub
      link: https://github.com/rux-lang/Rux

# Features section
features:
  - icon: ⚡️
    title: Compiled for Speed
    details: Rux compiles directly to native machine code using optimizations. No virtual machine, no interpreter, no runtime surprises — just raw performance. Rux generates binaries like C, C++, Rust, Zig.
  - icon: 🧠
    title: Strongly Typed
    details: No implicit conversions, no hidden boxing, no “maybe copy”. Rux’s type system ensures correctness without verbosity — similar to Rust’s safety, but with a cleaner syntax and simpler rules.
  - icon: 🔒
    title: Safety Without Sacrifice
    details: Memory safety is built-in, not bolted on. Rux distinguishes references (&T) and pointers (*T) clearly, allowing both safe high-level code and low-level control. Unlike C++, you don’t need manual discipline.
  - icon: 🧩
    title: Multi-Paradigm by Design
    details: Rux blends procedural, functional, and object-oriented paradigms seamlessly. You can write clean imperative code, use higher-order functions, or design modular, data-driven systems — all with zero runtime overhead.
  - icon: 🛠️
    title: Low-Level Control
    details: When you care about bytes and cycles, Rux gives you direct access. Explicit memory layout, fixed-width data types, and pointer arithmetic when needed. Like Zig or C, but with strong typing and clear mutability rules.
  - icon: 🏗️
    title: Simple Syntax
    details: Rux’s syntax is minimal yet expressive — designed to read like pseudocode and compile like assembly. No clutter, no hidden conversions, no unnecessary ceremony. Readable, concise, and fully type-safe.
  - icon: 🚀
    title: Fast Compilation and Tooling
    details: Nobody likes waiting on builds. Rux features an incremental compiler with near-instant rebuilds and dependency-free binaries. You get Go-like build speed with Rust-like optimization quality — the best of both worlds.    
  - icon: 💻
    title: Cross-Platform
    details: Rux isn’t just for systems programming. It’s equally comfortable writing CLI tools, servers, games, or libraries. Compile to Windows, Linux, macOS, and more — all from the same clean source code.

# Meta property
head:
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:title
      content: Rux Programming Language
  - - meta
    - property: og:image
      content: https://rux-lang.dev/images/rux-social-wide.jpg
  - - meta
    - property: og:url
      content: https://rux-lang.dev
  - - meta
    - name: title
      content: Rux Programming Language
  - - meta
    - name: twitter:card
      content: https://rux-lang.dev/images/rux-social-wide.jpg
  - - link
    - rel: icon
      type: image/svg
      href: logo.svg    
---

## Examples <Badge type="warning" text="dev" />

```cpp
// Returns the sum of numbers
const char* LoadData(consyt char *fileName, int style)
{
    int a = 1;
    bool flag = false;
    return "Text from file";
}
```

```rux
// Returns the sum of numbers
func Add(x, y: int32): int32
{
    return x + y;
}

// Returns minimum value
func Min<T>(x, y: T): T
{
    return x < y ? x : y;
}

let a: i32 = 10;
```

```rux
fn main() {
    let a: i8 = 25;
    // This is a comment.
    // The main function is the entry point of the program.
    println!("Hello, World!"); // Prints "Hello, World!" to the console.
}
```

```rust
fn main() {
    // This is a comment.
    let a: i8 = 25;
    println!("Hello, World!"); // Prints "Hello, World!" to the console.
}
```

## Let's create something amazing 
::: tip
🚧 Rux compiler, ducumentation, and this site are under construction.
:::
