import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { Button } from '../../components/ui/Button';

interface ContactFormLabels {
  nameLabel: string;
  emailFieldLabel: string;
  messageLabel: string;
  placeholderName: string;
  placeholderEmail: string;
  placeholderMessage: string;
  sendMessage: string;
  messageSent: string;
}

interface ContactFormProps {
  labels: ContactFormLabels;
}

export const ContactForm: React.FC<ContactFormProps> = ({ labels }) => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="card-surface space-y-5 p-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm text-muted">
            {labels.nameLabel}
          </label>
          <input
            type="text"
            id="name"
            required
            value={formState.name}
            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
            placeholder={labels.placeholderName}
            className="input-field"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm text-muted">
            {labels.emailFieldLabel}
          </label>
          <input
            type="email"
            id="email"
            required
            value={formState.email}
            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            placeholder={labels.placeholderEmail}
            className="input-field"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm text-muted">
          {labels.messageLabel}
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formState.message}
          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
          placeholder={labels.placeholderMessage}
          className="input-field resize-none"
        />
      </div>

      <Button type="submit" disabled={status !== 'idle'} className="w-full">
        {status === 'loading' ? (
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-[var(--accent-fg)]/30 border-t-[var(--accent-fg)]" />
        ) : status === 'success' ? (
          <>
            <CheckCircle2 className="h-4 w-4" />
            <span>{labels.messageSent}</span>
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            <span>{labels.sendMessage}</span>
          </>
        )}
      </Button>
    </form>
  );
};
