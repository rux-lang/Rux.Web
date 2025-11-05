# `rux build`

Compile the current project.

```bash
rux build [--release] [--target <triple>] [--emit-ir] [--verbose]
```

## Options

| Flag                | Description                        |
| ------------------- | ---------------------------------- |
| `--release`         | Use release optimization settings  |
| `--target <triple>` | Compile for a specific target      |
| `--emit-ir`         | Output intermediate representation |
| `--verbose`         | Display compiler diagnostics       |

Artifacts are stored in `Bin/Debug/` or `Bin/Release/`.
