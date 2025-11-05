# CLI Reference

The reference describes the command line interface (CLI) of `rux` that is the **primary tool** for interacting with Rux projects. It integrates all necessary components:

- Compiler
- Package manager
- Code formatter
- Dependency resolver
- Build system

All developer workflows — from project creation to publishing — are handled via `rux`.

## Command Syntax

```bash
rux [command] [options]
```

Common pattern:

```bash
rux <verb> [target] [flags]
```

Example:

```bash
rux build --release
rux run
rux fmt
```

## Command Summary

| Command                                    | Description                                       |
| ------------------------------------------ | ------------------------------------------------- |
| [`rux add`](/cli/rux-add)                  | Add a dependency to the manifest                  |
| [`rux build`](/cli/rux-build)              | Compile the current project                       |
| [`rux clean`](/cli/rux-clean)              | Remove build artifacts                            |
| [`rux doc`](/cli/rux-doc)                  | Generate project documentation                    |
| [`rux fmt`](/cli/rux-fmt)                  | Format source files and manifests                 |
| [`rux help`](/cli/rux-help)                | Display help information                          |
| [`rux init`](/cli/rux-init)                | Initialize a Rux project in the current directory |
| [`rux install`](/cli/rux-install)          | Download and build dependencies                   |
| [`rux new`](/cli/rux-new)                  | Create a new Rux project                          |
| [`rux remove`](/cli/rux-remove)            | Remove a dependency from the manifest             |
| [`rux run`](/cli/rux-run)                  | Build and run the main executable                 |
| [`rux test`](/cli/rux-test)                | Run all test targets                              |
| [`rux up`](/cli/rux-up)                    | Update Rux toolchain                              |
| [`rux version`](/cli/rux-version)          | Show the Rux version                              |
| [`rux -v` / `--version`](/cli/rux-version) | Alias for `rux version`                           |

## Global Options

| Option                        | Description                         |
| ----------------------------- | ----------------------------------- |
| `-v`, `--version`             | Show version information            |
| `-h`, `--help`                | Show general help                   |
| `--color <auto \| on \| off>` | Control colored output              |
| `--offline`                   | Run commands without network access |
| `--verbose`                   | Enable detailed logging             |

## Example Workflow

```bash
rux new App
cd App
rux build
rux run
rux add Json@0.1.4
rux up
rux fmt
rux test
rux clean
```

## Planned Extensions

| Command       | Purpose                             |
| ------------- | ----------------------------------- |
| `rux publish` | Publish package to the Rux registry |
| `rux login`   | Authenticate with registry          |
| `rux lint`    | Run static analysis                 |
| `rux repl`    | Interactive Rux shell               |
| `rux deps`    | Inspect dependency graph            |
| `rux bench`   | Run benchmarks                      |
