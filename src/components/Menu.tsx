import { useState, useRef, useEffect } from 'react';
import { MoreVertical, Edit, RefreshCw, Trash2 } from 'lucide-react';
import type { Account } from '../types/account';

type Props={
  account: Account
  onEdit: (arg0:Account)=>void
  onUpdate: (arg0:Account)=>void
  onDelete:(arg0: string)=>void
}

export default function AccountMenu({account, onEdit, onUpdate, onDelete }:Props) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event:MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={menuRef}>
      {/* 3-dot button */}
      <button
        type='button'
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        aria-label="Account options"
      >
        <MoreVertical className="w-5 h-5 text-gray-600" />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
          <button
          type='button'
            onClick={() => {
              onEdit(account);
              setIsOpen(false);
            }}
            className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <Edit className="w-4 h-4" />
            Edit Account
          </button>

          <button
            type='button'
            onClick={() => {
              onUpdate(account);
              setIsOpen(false);
            }}
            className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Update Balance
          </button>

          <div className="border-t border-gray-200 my-1"/>

          <button
            type='button'
            onClick={() => {
              onDelete(account.id);
              setIsOpen(false);
            }}
            className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
            Delete Account
          </button>
        </div>
      )}
    </div>
  );
}