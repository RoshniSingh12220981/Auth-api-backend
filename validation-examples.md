# Input Validation Examples

This document demonstrates the comprehensive Joi validation implemented in the Auth API backend.

## 1. Registration Validation

### ✅ Valid Registration Request
```json
POST /api/register
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```

### ❌ Invalid Registration Requests

**Short name:**
```json
{
  "name": "J",
  "email": "john@example.com", 
  "password": "securePassword123"
}
// Error: "Name must be at least 2 characters long"
```

**Invalid email:**
```json
{
  "name": "John Doe",
  "email": "invalid-email",
  "password": "securePassword123"
}
// Error: "Please provide a valid email address"
```

**Short password:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123"
}
// Error: "Password must be at least 6 characters long"
```

## 2. Login Validation

### ✅ Valid Login Request
```json
POST /api/login
{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

### ❌ Invalid Login Requests

**Missing password:**
```json
{
  "email": "john@example.com"
}
// Error: "Password is required"
```

## 3. Profile Update Validation

### ✅ Valid Profile Update Requests
```json
PATCH /api/profile
{
  "name": "Jane Doe"
}
```

```json
PATCH /api/profile
{
  "email": "jane@example.com"
}
```

```json
PATCH /api/profile
{
  "name": "Jane Doe",
  "email": "jane@example.com"
}
```

### ❌ Invalid Profile Update Requests

**Empty request:**
```json
{}
// Error: "At least one field (name or email) must be provided for update"
```

**Invalid email:**
```json
{
  "email": "invalid-email"
}
// Error: "Please provide a valid email address"
```

## 4. Preferences Validation

### ✅ Valid Preferences Requests
```json
POST /api/preferences
{
  "theme": "dark"
}
```

```json
POST /api/preferences
{
  "layout": "grid"
}
```

```json
POST /api/preferences
{
  "theme": "light",
  "layout": "list"
}
```

### ❌ Invalid Preferences Requests

**Invalid theme:**
```json
{
  "theme": "rainbow"
}
// Error: "Theme must be one of: light, dark, auto"
```

**Invalid layout:**
```json
{
  "layout": "custom"
}
// Error: "Layout must be one of: grid, list, compact, detailed"
```

**Empty request:**
```json
{}
// Error: "At least one preference field (theme or layout) must be provided"
```

## Validation Middleware Architecture

The validation is implemented using a centralized middleware approach:

1. **Validation Schemas** (`middleware/validation.js`): Defines all Joi schemas
2. **Validation Middleware**: Generic middleware factory for applying validation
3. **Route Integration**: Validation middleware applied to routes before controllers
4. **Error Handling**: Consistent error response format across all endpoints

## Benefits

- **Security**: Prevents malicious or malformed data from reaching controllers
- **Consistency**: Uniform validation rules and error messages
- **Maintainability**: Centralized validation logic
- **User Experience**: Clear, helpful error messages
- **Data Integrity**: Ensures data meets business requirements before database operations
