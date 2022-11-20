# @neogeek/create-app-utils

[![Tests](https://github.com/neogeek/create-app-utils/actions/workflows/test.workflow.yml/badge.svg)](https://github.com/neogeek/create-app-utils/actions/workflows/test.workflow.yml)
[![NPM version](https://img.shields.io/npm/v/@neogeek/create-app-utils?style=flat-square)](https://www.npmjs.org/package/@neogeek/create-app-utils)

## Install

```bash
$ npm install @neogeek/create-app-utils
```

## Usage

### URL

#### `getQueryParamsFromUrl(url)`

```typescript
import { getQueryParamsFromUrl } from '@neogeek/create-app-utils';

const { key } = getQueryParamsFromUrl('https://domain.com/?key=value');
```

### Cookies

#### `serializeCookie(key, value, maxAge, secure)`

```typescript
import { serializeCookie } from '@neogeek/create-app-utils';

const cookie = serializeCookie('key', 'value', 0, true);
```

### Dates

#### `generateExpireAtDate(daysFromNow)`

```typescript
import { generateExpireAtDate } from '@neogeek/create-app-utils';

const date = generateExpireAtDate(5);
```

### JWT

#### `extractDataFromToken(token)`

```typescript
import { extractDataFromToken } from '@neogeek/create-app-utils';

const { key } = extractDataFromToken(token);
```

#### `generateAccessToken(privateKey, data, expiresIn)`

```typescript
import { generateAccessToken } from '@neogeek/create-app-utils';

const accessToken = generateAccessToken(privateKey, { key: 'value' }, date);
```

#### `generateRefreshToken(privateKey, data, expiresIn)`

```typescript
import { generateRefreshToken } from '@neogeek/create-app-utils';

const refreshToken = generateRefreshToken(privateKey, { key: 'value' }, date);
```

#### `verifyAccessToken(publicKey, token)`

```typescript
import { verifyAccessToken } from '@neogeek/create-app-utils';

const isValid = verifyAccessToken(publicKey, token);
```

#### `verifyRefreshToken(publicKey, token)`

```typescript
import { verifyRefreshToken } from '@neogeek/create-app-utils';

const isValid = verifyRefreshToken(publicKey, token);
```
