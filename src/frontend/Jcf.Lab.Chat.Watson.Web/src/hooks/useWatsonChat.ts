// src/hooks/useWatsonChat.ts
import { useEffect } from 'react';
import axios from 'axios';

export function useWatsonChat() {
  useEffect(() => {
    const load = async () => {
      // Busca as configs no backend — credenciais nunca ficam no frontend
      const { data } = await axios.get('/api/config/watson');

      (window as any).watsonAssistantChatOptions = {
        integrationID:     data.integrationID,
        region:            data.region,
        serviceInstanceID: data.serviceInstanceID,
        onLoad: async (instance: any) => { await instance.render(); },
      };

      const script = document.createElement('script');
      script.src =
        'https://web-chat.global.assistant.watson.appdomain.cloud/versions/latest/WatsonAssistantChatEntry.js';
      document.head.appendChild(script);
    };

    load();
  }, []);
}