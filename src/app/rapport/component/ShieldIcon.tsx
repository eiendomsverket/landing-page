import * as React from 'react';

const ShieldIcon: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 50, height = 50, className }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 3L4 6V11C4 16.55 7.8 21.74 12 23C16.2 21.74 20 16.55 20 11V6L12 3Z" stroke="#2563eb" strokeWidth="2" fill="#fff"/>
    <path d="M12 12V17" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="9" r="1" fill="#2563eb"/>
  </svg>
);

export default ShieldIcon;

