'use client';

import { useState } from 'react';

export default function Collapsible({ title, children }: { title: string; children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    console.log('Children of Collapsible', children)

    return (
        <div style={{
            marginTop: '2em'
        }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'left',
                    background: 'none',
                    border: '1px solid #ccc',
                    padding: '10px',
                    cursor: 'pointer',
                }}
            >
                {title} {isOpen ? '▲' : '▼'}
            </button>
            {isOpen && (
                <div style={{ padding: '10px', border: '1px solid #ccc', borderTop: 'none' }}>
                    {children}
                </div>
            )}
        </div>
    );
}
