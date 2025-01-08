import React from 'react';

export interface SettingsProps {
  children: React.ReactNode;
}

function Settings({}: SettingsProps) {
  return (
    <main>
      <h1 className="text-xl">Settings Page</h1>
    </main>
  );
}

export default Settings;
