import React, { useState } from 'react';
import InputField from './components/inputfield/InputField';
import DataTable from './components/table/DataTable';
import './index.css';

// Sample data and columns for the DataTable
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const userColumns = [
  { key: 'id', title: 'ID', sortable: true },
  { key: 'name', title: 'Name', sortable: true },
  { key: 'email', title: 'Email', sortable: false },
  { key: 'role', title: 'Role', sortable: false },
];

const initialUsers: User[] = [
  { id: 1, name: 'Alice Johnson', email: 'alice.j@example.com', role: 'Admin' },
  { id: 2, name: 'Bob Smith', email: 'bob.s@example.com', role: 'User' },
  { id: 3, name: 'Charlie Brown', email: 'charlie.b@example.com', role: 'User' },
  { id: 4, name: 'Diana Prince', email: 'diana.p@example.com', role: 'Admin' },
];

function App() {
  // State for the InputField
  const [email, setEmail] = useState('');
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);

  // State for the DataTable
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);

  // Simple validation for the email input
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    // Basic email format check
    const isValid = /\S+@\S+\.\S+/.test(value) || value === '';
    setIsEmailInvalid(!isValid);
  };

  const handleRowSelection = (rows: User[]) => {
    console.log('Selected Rows:', rows);
    setSelectedUsers(rows);
  };

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-blue-50 via-gray-100 to-purple-50 font-sans antialiased flex items-center justify-center">
      <div className="w-full max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-2xl border border-gray-100">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-10 text-center tracking-tight drop-shadow-sm">
           Component Demo
        </h1>

        {/* Section for InputField demo */}
        <section className="mb-12 p-6 rounded-xl bg-gradient-to-r from-blue-100/60 to-purple-100/40 shadow-md border border-blue-50">
          <h2 className="text-2xl font-bold text-blue-700 mb-6 flex items-center gap-2">
            <span className="inline-block w-2 h-6 bg-blue-400 rounded-full mr-2"></span>
            InputField Component
          </h2>
          <div className="space-y-8">
            <InputField
              label="Email Address (Outlined)"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              invalid={isEmailInvalid}
              errorMessage={isEmailInvalid ? 'Please enter a valid email address.' : undefined}
            />
            <InputField
              label="Username (Filled)"
              placeholder="Your username"
              variant="filled"
            />
            <InputField
              label="Search (Ghost)"
              placeholder="Search something..."
              variant="ghost"
            />
            <InputField
              label="Disabled Input"
              placeholder="This field is disabled"
              disabled
            />
          </div>
        </section>

        {/* Section for DataTable demo */}
        <section className="p-6 rounded-xl bg-gradient-to-r from-purple-100/60 to-blue-100/40 shadow-md border border-purple-50">
          <h2 className="text-2xl font-bold text-purple-700 mb-6 flex items-center gap-2">
            <span className="inline-block w-2 h-6 bg-purple-400 rounded-full mr-2"></span>
            DataTable Component
          </h2>
          <DataTable
            data={users}
            columns={userColumns}
            selectable
            onRowSelect={handleRowSelection}
          />
          <p className="mt-6 text-base text-gray-700 font-medium">
            <span className="font-semibold text-blue-600">Selected Users:</span> {selectedUsers.length > 0 ? selectedUsers.map(u => u.name).join(', ') : 'None'}
          </p>
        </section>
      </div>
    </div>
  );
}

export default App;
