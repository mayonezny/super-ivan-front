import React from 'react';
import { useEmailValidator } from './emailValidator';

const EmailForm = () => {
  const { email, isValid, validateEmail } = useEmailValidator();

  return (
    <div className="p-4">
      <input
        type="email"
        value={email}
        onChange={(e) => validateEmail(e.target.value)}
        placeholder="Введите email"
        className="border px-2 py-1 rounded"
      />
      <p className={`text-sm mt-1 ${isValid ? 'text-green-500' : 'text-red-500'}`}>
        {email ? (isValid ? 'Email корректен' : 'Email некорректен') : ''}
      </p>
    </div>
  );
};

export default EmailForm;
