# Primitive Data Types

The Rux compiler recognize such primitive data types.

## Signed integer types

| Type     | Size     | Minimum Value                                    | Maximum Value                                    |
| -------- | -------- | ------------------------------------------------ | ------------------------------------------------ |
| `int8`   | 1 byte   | −2<sup>7</sup> = −128                            | 2<sup>7</sup>−1 = 127                            |
| `int16`  | 2 bytes  | −2<sup>15</sup> = −32,768                        | 2<sup>15</sup>−1 = 32,767                        |
| `int32`  | 4 bytes  | −2<sup>31</sup> = −2,147,483,648                 | 2<sup>31</sup>−1 = 2,147,483,647                 |
| `int64`  | 8 bytes  | −2<sup>63</sup> ≈ −9.223372 × 10<sup>18</sup>    | 2<sup>63</sup>−1 ≈ 9.223372 × 10<sup>18</sup>    |
| `int128` | 16 bytes | −2<sup>127</sup> ≈ −1.7014118 × 10<sup>38</sup>  | 2<sup>127</sup>−1 ≈ 1.7014118 × 10<sup>38</sup>  |
| `int256` | 32 bytes | −2<sup>255</sup> ≈ −5.7896045 × 10<sup>76</sup>  | 2<sup>255</sup>−1 ≈ 5.7896045 × 10<sup>76</sup>  |
| `int512` | 64 bytes | −2<sup>511</sup> ≈ −6.2771017 × 10<sup>153</sup> | 2<sup>511</sup>−1 ≈ 6.2771017 × 10<sup>153</sup> |

## Unsigned integer types

| Type      | Size     | Minimum Value | Maximum Value                                    |
| --------- | -------- | ------------- | ------------------------------------------------ |
| `uint8`   | 1 byte   | 0             | 2<sup>8</sup>−1 = 255                            |
| `uint16`  | 2 bytes  | 0             | 2<sup>16</sup>−1 = 65,535                        |
| `uint32`  | 4 bytes  | 0             | 2<sup>32</sup>−1 = 4,294,967,295                 |
| `uint64`  | 8 bytes  | 0             | 2<sup>64</sup>−1 ≈ 1.8446744 × 10<sup>19</sup>   |
| `uint128` | 16 bytes | 0             | 2<sup>128</sup>−1 ≈ 3.4028237 × 10<sup>38</sup>  |
| `uint256` | 32 bytes | 0             | 2<sup>256</sup>−1 ≈ 1.1579209 × 10<sup>77</sup>  |
| `uint512` | 64 bytes | 0             | 2<sup>512</sup>−1 ≈ 1.3407808 × 10<sup>154</sup> |

## Floating-point types

| Type       | Size     | Approximate Range                                     | Significant Digits |
| ---------- | -------- | ----------------------------------------------------- | ------------------ |
| `float8`   | 1 byte   | ±1.0 × 10<sup>-2</sup> to ±2.5 × 10<sup>1</sup>       | ~1 digit           |
| `float16`  | 2 bytes  | ±6.1 × 10<sup>-5</sup> to ±6.5 × 10<sup>4</sup>       | ~3 digits          |
| `float32`  | 4 bytes  | ±1.2 × 10<sup>-38</sup> to ±3.4 × 10<sup>38</sup>     | ~7 digits          |
| `float64`  | 8 bytes  | ±2.2 × 10<sup>-308</sup> to ±1.8 × 10<sup>308</sup>   | ~15–16 digits      |
| `float128` | 16 bytes | ±3.4 × 10<sup>-617</sup> to ±1.2 × 10<sup>617</sup>   | ~34 digits         |
| `float256` | 32 bytes | ±1.0 × 10<sup>-1985</sup> to ±1.0 × 10<sup>1985</sup> | ~72 digits         |
| `float512` | 64 bytes | ±1.0 × 10<sup>-5950</sup> to ±1.0 × 10<sup>5950</sup> | ~154 digits        |

## Boolean types

| Type      | Size     | Range             |
| --------- | -------- | ----------------- |
| `bool8`   | 1 byte   | `false` or `true` |
| `bool16`  | 2 bytes  | `false` or `true` |
| `bool32`  | 4 bytes  | `false` or `true` |
| `bool64`  | 8 bytes  | `false` or `true` |
| `bool128` | 16 bytes | `false` or `true` |
| `bool256` | 32 bytes | `false` or `true` |
| `bool512` | 64 bytes | `false` or `true` |

`false` is equal to 0, `true` is equal to 1

## Character types

| Type      | Size     | Range                                  |
| --------- | -------- | -------------------------------------- |
| `char8`   | 1 byte   | 0 to 0xFF                              |
| `char16`  | 2 bytes  | 0 to 0xFFFF                            |
| `char32`  | 4 bytes  | 0 to 0xFFFFFFFF                        |
| `char64`  | 8 bytes  | 0 to 0xFFFFFFFFFFFFFFFF                |
| `char128` | 16 bytes | 0 to 0xFFFFFFFFFFFFFFFF... (32 total)  |
| `char256` | 32 bytes | 0 to 0xFFFFFFFFFFFFFFFF... (64 total)  |
| `char512` | 64 bytes | 0 to 0xFFFFFFFFFFFFFFFF... (128 total) |
