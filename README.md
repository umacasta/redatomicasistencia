# Atomic · Bono 50%

Subí `index.html`, `assets/` y `api/meta-event.js` a la raíz del repositorio de GitHub conectado a Vercel. No hace falta instalar dependencias.

En el proyecto correcto de Vercel, guardá el token de Conversions API como variable Secret `META_ACCESS_TOKEN` para Production. Nunca pongas el token en GitHub. El conjunto de datos es `1763727594255664`.

Con consentimiento, el Pixel registra PageView. El clic a WhatsApp registra Contact por Pixel y CAPI con el mismo `event_id` para deduplicar. Sin consentimiento no se envían eventos. Contact mide el clic, no confirma que se haya enviado un mensaje.

Después de publicar, probá el botón desde iPhone en Meta Events Manager. Revisá las fuentes Browser y Server y los logs de la función si no aparece Server.
