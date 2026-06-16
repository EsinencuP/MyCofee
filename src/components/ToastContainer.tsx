import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, Info, AlertCircle, X } from 'lucide-react';

export type ToastType = 'success' | 'info' | 'error';

export interface ToastMessage {
  id: string;
  message: string;
  type: ToastType;
  duration?: number;
}

export interface ToastEventDetail {
  message: string;
  type: ToastType;
  duration?: number;
}

// Global utility for dispatching toast events from any component
export const showToast = (message: string, type: ToastType = 'success', duration = 4000) => {
  const event = new CustomEvent<ToastEventDetail>('show-toast', {
    detail: { message, type, duration }
  });
  window.dispatchEvent(event);
};

export default function ToastContainer() {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    const handleToastEvent = (e: Event) => {
      const customEvent = e as CustomEvent<ToastEventDetail>;
      if (customEvent.detail) {
        const { message, type, duration } = customEvent.detail;
        const newToast: ToastMessage = {
          id: `${Date.now()}-${Math.random()}`,
          message,
          type,
          duration,
        };
        setToasts((prev) => [...prev, newToast]);
      }
    };

    window.addEventListener('show-toast', handleToastEvent);
    return () => {
      window.removeEventListener('show-toast', handleToastEvent);
    };
  }, []);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div
      id="toast-notifications-container"
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 w-full max-w-[380px] pointer-events-none px-4 sm:px-0"
    >
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} onDismiss={removeToast} />
        ))}
      </AnimatePresence>
    </div>
  );
}

interface ToastItemProps {
  key?: React.Key;
  toast: ToastMessage;
  onDismiss: (id: string) => void;
}

function ToastItem({ toast, onDismiss }: ToastItemProps) {
  const { id, message, type, duration = 4000 } = toast;

  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss(id);
    }, duration);

    return () => clearTimeout(timer);
  }, [id, duration, onDismiss]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-warm-green shrink-0" />;
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />;
      case 'info':
      default:
        return <Info className="w-5 h-5 text-caramel shrink-0" />;
    }
  };

  const getBorderColor = () => {
    switch (type) {
      case 'success':
        return 'border-l-4 border-l-warm-green';
      case 'error':
        return 'border-l-4 border-l-red-500';
      case 'info':
      default:
        return 'border-l-4 border-l-caramel';
    }
  };

  const shadowStyles = {
    boxShadow: '0 8px 30px rgba(27, 27, 24, 0.08), 0 0 1px rgba(27, 27, 24, 0.05)',
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 50, y: 15, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      exit={{ opacity: 0, x: 50, scale: 0.95, transition: { duration: 0.25 } }}
      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
      className={`pointer-events-auto w-full bg-milk border border-coffee/5 text-coffee overflow-hidden relative flex flex-col ${getBorderColor()}`}
      style={shadowStyles}
    >
      <div className="p-4 flex items-start gap-3.5 pr-8">
        {getIcon()}
        
        <div className="flex-1 flex flex-col gap-0.5 select-text">
          <span className="text-[10px] uppercase tracking-widest font-semibold text-coffee/40 font-mono">
            {type === 'success' 
              ? 'Succes • Подтверждено' 
              : type === 'error' 
                ? 'Eroare • Ошибка' 
                : 'Info • Инфо'}
          </span>
          <p className="text-xs sm:text-sm font-sans leading-relaxed tracking-wide font-light text-coffee/90">
            {message}
          </p>
        </div>

        <button
          onClick={() => onDismiss(id)}
          className="absolute top-3 right-3 p-1 rounded-full text-coffee/30 hover:text-coffee/80 hover:bg-coffee/5 transition-colors cursor-pointer"
          aria-label="Close notification"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Decorative progress animation footer bar */}
      <div className="w-full h-[2.5px] bg-coffee/5">
        <motion.div
          initial={{ width: '100%' }}
          animate={{ width: '0%' }}
          transition={{ duration: duration / 1000, ease: 'linear' }}
          className={`h-full ${
            type === 'success' 
              ? 'bg-warm-green/75' 
              : type === 'error' 
                ? 'bg-red-400' 
                : 'bg-caramel/75'
          }`}
        />
      </div>
    </motion.div>
  );
}
