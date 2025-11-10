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
rux <command> [options] [args]
```

Example:

```bash
rux
rux version
rux help
rux help new
rux new App --bin
rux build --release
rux run
rux run arg1 arg2 ...
rux fmt
```

## Command Summary

| Command                         | Description                                       |
| ------------------------------- | ------------------------------------------------- |
| [`rux add`](/cli/add)           | Add a dependency to the manifest                  |
| [`rux build`](/cli/build)       | Compile the current project                       |
| [`rux clean`](/cli/clean)       | Remove build artifacts                            |
| [`rux doc`](/cli/doc)           | Generate project documentation                    |
| [`rux fmt`](/cli/fmt)           | Format source files and manifests                 |
| [`rux help`](/cli/help)         | Show help information                             |
| [`rux init`](/cli/init)         | Initialize a Rux project in the current directory |
| [`rux install`](/cli/install)   | Download and build dependencies                   |
| [`rux new`](/cli/new)           | Create a new Rux project                          |
| [`rux remove`](/cli/remove)     | Remove a dependency from the manifest             |
| [`rux run`](/cli/run)           | Build and run the main executable                 |
| [`rux test`](/cli/test)         | Run all test targets                              |
| [`rux up`](/cli/up)             | Update Rux toolchain                              |
| [`rux version`](/cli/version)   | Show detailed version information                 |
| [`rux -h`](/cli/help)           | Show help information                             |
| [`rux -v`](/cli/version)        | Show brief version information                    |
| [`rux --help`](/cli/help)       | Alias for `rux -h`                                |
| [`rux --version`](/cli/version) | Alias for `rux -v`                                |

## Example Workflow

```bash
rux new App --bin
cd App
rux add Json@0.1.3
rux install
rux build
rux run
rux fmt
rux test
rux clean
```

## Planned Extensions

| Command       | Purpose                             |
| ------------- | ----------------------------------- |
| `rux bench`   | Run benchmarks                      |
| `rux deps`    | Inspect dependency graph            |
| `rux login`   | Authenticate with registry          |
| `rux lint`    | Run static analysis                 |
| `rux publish` | Publish package to the Rux registry |
| `rux repl`    | Interactive Rux shell               |
