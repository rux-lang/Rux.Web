# Primitive Data Types

The Rux compiler recognize such primitive data types.

## Signed integer types

| Type     | Size     | Minimum Value              | Maximum Value              |
| -------- | -------- | -------------------------- | -------------------------- |
| `int8`   | 1 byte   | −2⁷ = −128                 | 2⁷−1 = 127                 |
| `int16`  | 2 bytes  | −2¹⁵ = −32,768             | 2¹⁵−1 = 32,767             |
| `int32`  | 4 bytes  | −2³¹ = −2,147,483,648      | 2³¹−1 = 2,147,483,647      |
| `int64`  | 8 bytes  | −2⁶³ ≈ −9.223372 × 10¹⁸    | 2⁶³−1 ≈ 9.223372 × 10¹⁸    |
| `int128` | 16 bytes | −2¹²⁷ ≈ −1.7014118 × 10³⁸  | 2¹²⁷−1 ≈ 1.7014118 × 10³⁸  |
| `int256` | 32 bytes | −2²⁵⁵ ≈ −5.7896045 × 10⁷⁶  | 2²⁵⁵−1 ≈ 5.7896045 × 10⁷⁶  |
| `int512` | 64 bytes | −2⁵¹¹ ≈ −6.2771017 × 10¹⁵³ | 2⁵¹¹−1 ≈ 6.2771017 × 10¹⁵³ |

## Unsigned integer types

| Type      | Size     | Minimum Value | Maximum Value                      |
| --------- | -------- | ------------- | ---------------------------------- |
| `uint8`   | 1 byte   | 0             | 2⁸−1 = 255                         |
| `uint16`  | 2 bytes  | 0             | 2¹⁶−1 = 65,535                     |
| `uint32`  | 4 bytes  | 0             | 2³²−1 = 4,294,967,295              |
| `uint64`  | 8 bytes  | 0             | 2⁶⁴−1 = 18,446,744,073,709,551,615 |
| `uint128` | 16 bytes | 0             | 2¹²⁸−1 ≈ 3.4028237 × 10³⁸          |
| `uint256` | 32 bytes | 0             | 2²⁵⁶−1 ≈ 1.1579209 × 10⁷⁷          |
| `uint512` | 64 bytes | 0             | 2⁵¹²−1 ≈ 1.3407808 × 10¹⁵⁴         |

## Floating-point types

| Type       | Size     | Approximate Range               | Significant Digits |
| ---------- | -------- | ------------------------------- | ------------------ |
| `float8`   | 1 byte   | ±1.0 × 10⁻² to ±2.5 × 10¹       | ~1 digit           |
| `float16`  | 2 bytes  | ±6.1 × 10⁻⁵ to ±6.5 × 10⁴       | ~3 digits          |
| `float32`  | 4 bytes  | ±1.2 × 10⁻³⁸ to ±3.4 × 10³⁸     | ~7 digits          |
| `float64`  | 8 bytes  | ±2.2 × 10⁻³⁰⁸ to ±1.8 × 10³⁰⁸   | ~15–16 digits      |
| `float128` | 16 bytes | ±3.4 × 10⁻⁶¹⁷ to ±1.2 × 10⁶¹⁷   | ~34 digits         |
| `float256` | 32 bytes | ±1.0 × 10⁻¹⁹⁸⁵ to ±1.0 × 10¹⁹⁸⁵ | ~72 digits         |
| `float512` | 64 bytes | ±1.0 × 10⁻⁵⁹⁵⁰ to ±1.0 × 10⁵⁹⁵⁰ | ~154 digits        |
