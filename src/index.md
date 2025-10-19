---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

# Hero section
hero:
  name: Rux
  text: Programming Language
  image:
    src: /images/mascot.webp
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
  - icon: 📐
    title: Strongly Typed
    details: No implicit conversions, no hidden boxing, no “maybe copy”. Rux’s type system ensures correctness without verbosity — similar to Rust’s safety, but with a cleaner syntax and simpler rules.
  - icon: 🛡️
    title: Safety Without Sacrifice
    details: Memory safety is built-in, not bolted on. Rux distinguishes references (&T) and pointers (*T) clearly, allowing both safe high-level code and low-level control. Unlike C++, you don’t need manual discipline.
  - icon: 🧬
    title: Multi-Paradigm by Design
    details: Rux blends procedural, functional, and object-oriented paradigms seamlessly. You can write clean imperative code, use higher-order functions, or design modular, data-driven systems — all with zero runtime overhead.
  - icon: 🛠️
    title: Low-Level Control
    details: When you care about bytes and cycles, Rux gives you direct access. Explicit memory layout, fixed-width data types, and pointer arithmetic when needed. Like Zig or C, but with strong typing and clear mutability rules.
  - icon: 🧩
    title: Simple Syntax
    details: Rux’s syntax is minimal yet expressive — designed to read like pseudocode and compile like assembly. No clutter, no hidden conversions, no unnecessary ceremony. Readable, concise, and fully type-safe.
  - icon: 🚀
    title: Fast Compilation and Tooling
    details: Nobody likes waiting on builds. Rux features an incremental compiler with near-instant rebuilds and dependency-free binaries. You get Go-like build speed with Rust-like optimization quality — the best of both worlds.
  - icon: 🔁
    title: Cross-Platform
    details: Rux isn’t just for systems programming. It’s equally comfortable writing CLI tools, servers, games, or libraries. Compile to Windows, Linux, macOS, and more — all from the same clean source code.

# Meta property
head:
  - - meta
    - itemprop: name
      content: Rux Programming Language
  - - meta
    - itemprop: description
      content: Fast, compiled, strongly typed, multi-paradigm, general-purpose
  - - meta
    - itemprop: image
      content: https://rux-lang.dev/images/rux-social-wide.jpg
  - - meta
    - property: og:url
      content: https://rux-lang.dev
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:title
      content: Rux Programming Language
  - - meta
    - property: og:description
      content: Fast, compiled, strongly typed, multi-paradigm, general-purpose
  - - meta
    - property: og:image
      content: https://rux-lang.dev/images/rux-social-wide.jpg
  - - meta
    - name: twitter:card
      content: summary_large_image
  - - meta
    - name: twitter:title
      content: Rux Programming Language
  - - meta
    - name: twitter:description
      content: Fast, compiled, strongly typed, multi-paradigm, general-purpose
  - - meta
    - name: twitter:image
      content: https://rux-lang.dev/images/rux-social-wide.jpg
  - - link
    - rel: icon
      type: image/svg
      href: logo.svg
---

## Examples

### A wide range of primitive builtin data types

#### Signed integer types

```rux
let value: int8;    // 1 byte
let value: int16;   // 2 bytes
let value: int32;   // 4 bytes
let value: int64;   // 8 bytes
let value: int128;  // 16 bytes
let value: int256;  // 32 bytes
let value: int512;  // 64 bytes
```

#### Unsigned integer types

```rux
let value: uint8;    // 1 byte
let value: uint16;   // 2 bytes
let value: uint32;   // 4 bytes
let value: uint64;   // 8 bytes
let value: uint128;  // 16 bytes
let value: uint256;  // 32 bytes
let value: uint512;  // 64 bytes
```

#### Floating-point types

```rux
let value: float8;    // 1 byte
let value: float16;   // 2 bytes
let value: float32;   // 4 bytes
let value: float64;   // 8 bytes
let value: float80;   // 10 bytes
let value: float128;  // 16 bytes
let value: float256;  // 32 bytes
let value: float512;  // 64 bytes
```

#### Boolean types

```rux
let value: bool8;    // 1 byte
let value: bool16;   // 2 bytes
let value: bool32;   // 4 bytes
let value: bool64;   // 8 bytes
let value: bool128;  // 16 bytes
let value: bool256;  // 32 bytes
let value: bool512;  // 64 bytes
```

#### Character types

```rux
let value: char8;    // 1 byte
let value: char16;   // 2 bytes
let value: char32;   // 4 bytes
let value: char64;   // 8 bytes
let value: char128;  // 16 bytes
let value: char256;  // 32 bytes
let value: char512;  // 64 bytes
```

#### Platform dependent types

Size depends on CPU architecture to provide the best performance

```rux
let value: int;     // 4 or 8 bytes
let value: uint;    // 4 or 8 bytes
let value: float;   // 8 bytes
let value: bool;    // 1 byte
let value: char;    // 1 or 4 bytes
```

### Support Unicode strings

```rux
let message = "Hello World";
let message = "你好，世界";
let message = "नमस्ते दुनिया";
let message = "Hola Mundo";
let message = "Bonjour le monde";
let message = "مرحبا يا عالم";
let message = "হ্যালো বিশ্ব";
let message = "Привет мир";
let message = "Olá Mundo";
let message = "سلام دنیا";
let message = "Привіт світ";
let animals = "🪼🦀🦊🐑🐟"
```

### Control mutability

```rux
var value: int = 10;
let value: int = 20;
const value: int = 30;
```

### Functions

```rux
// Regular function
func Add(x, y: int32): int32
{
    return x + y;
}

// Generic function
func Min<T>(x, y: T): T
{
    return x < y ? x : y;
}
```

### Raw pointers 🤯

```rux
var ptr: **char;
var ptr: *const char
const ptr: *char;
const ptr: *const char;
var data: *int64;
```

### Module system

```rux
// Import from modules
use Math;
use Math:*;
use Math::Sin;
use Math:Sin as Sinf;
```

## Let's create something amazing 🪄

::: tip
🚧 Rux compiler, documentation, and this site are under construction 🏗️.
:::
