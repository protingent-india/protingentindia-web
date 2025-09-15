import { useState } from 'react';

interface PopupConfig {
  title: string;
  description: string;
}

export const useConsultationPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [config, setConfig] = useState<PopupConfig>({
    title: "Get Free Consultation",
    description: "Tell us about your requirements and our experts will get in touch with you within 24 hours."
  });

  const openPopup = (customConfig?: Partial<PopupConfig>) => {
    if (customConfig) {
      setConfig(prev => ({ ...prev, ...customConfig }));
    }
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    config,
    openPopup,
    closePopup
  };
};