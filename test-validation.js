// Simple test script to verify validation is working
const { validate, schemas } = require('./middleware/validation');

console.log('Testing validation middleware...');

// Test register validation
console.log('\n1. Testing register validation:');

// Valid data
const validRegisterData = {
  name: 'John Doe',
  email: 'john@example.com',
  password: 'password123'
};

const { error: registerError1, value: registerValue1 } = schemas.register.validate(validRegisterData);
console.log('Valid register data:', registerError1 ? 'FAILED' : 'PASSED');

// Invalid data
const invalidRegisterData = {
  name: 'J',  // Too short
  email: 'invalid-email',  // Invalid email
  password: '123'  // Too short
};

const { error: registerError2 } = schemas.register.validate(invalidRegisterData);
console.log('Invalid register data:', registerError2 ? 'PASSED (correctly rejected)' : 'FAILED');
if (registerError2) {
  console.log('Validation errors:', registerError2.details.map(d => d.message));
}

// Test login validation
console.log('\n2. Testing login validation:');

const validLoginData = {
  email: 'john@example.com',
  password: 'password123'
};

const { error: loginError1 } = schemas.login.validate(validLoginData);
console.log('Valid login data:', loginError1 ? 'FAILED' : 'PASSED');

// Test preferences validation
console.log('\n3. Testing preferences validation:');

const validPreferencesData = {
  theme: 'dark',
  layout: 'grid'
};

const { error: prefError1 } = schemas.preferences.validate(validPreferencesData);
console.log('Valid preferences data:', prefError1 ? 'FAILED' : 'PASSED');

const invalidPreferencesData = {
  theme: 'invalid-theme',
  layout: 'invalid-layout'
};

const { error: prefError2 } = schemas.preferences.validate(invalidPreferencesData);
console.log('Invalid preferences data:', prefError2 ? 'PASSED (correctly rejected)' : 'FAILED');
if (prefError2) {
  console.log('Validation errors:', prefError2.details.map(d => d.message));
}

// Test profile update validation
console.log('\n4. Testing profile update validation:');

const validProfileData = {
  name: 'Jane Doe',
  email: 'jane@example.com'
};

const { error: profileError1 } = schemas.updateProfile.validate(validProfileData);
console.log('Valid profile update data:', profileError1 ? 'FAILED' : 'PASSED');

console.log('\nValidation tests completed!');
