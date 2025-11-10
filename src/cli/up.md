# `rux up`

Handles Rux toolchain updates — compiler, standard library, and package registry.

```bash
rux up [--channel <stable|nightly>] [--self]
```

Checks for updates to the Rux compiler, package registry, and tools. By default, updates all installed toolchain components..

## Examples

```bash
rux up              # Update toolchain and standard library
rux up --self       # Update only the rux tool
rux up --channel nightly
```

```bash
Checking for updates...
Rux 0.1.2 available (current: 0.1.0)
Run `rux up --self` to upgrade.
```
