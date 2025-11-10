# `rux install`

Handles dependency resolution and installation for the current project.

```bash
rux install [--lock]
```

Downloads and builds all required dependencies defined in `Rux.toml`. If `Rux.lock` exists, exact versions are used.

## Examples

```bash
rux install
rux install --lock
```
