# Cassino Atomic

Landing estática lista para subir a GitHub y publicar desde Vercel. No requiere instalar dependencias ni compilar.

## Abrirla

Descargá el ZIP, descomprimilo y abrí `index.html` en tu navegador. Para ver el código en GitHub, creá un repositorio y subí `index.html` y `README.md` a la raíz.

## Vercel

En Vercel seleccioná **Add New → Project**, importá el repositorio y elegí **Framework Preset: Other**. No agregues comando de build.

## WhatsApp y medición

El formulario abre WhatsApp Business al número `+54 9 351 688-1764` con el texto preparado. El número se encuentra en la constante `WHATSAPP_NUMBER` de `index.html`.

Meta Pixel `744704981318616` se carga únicamente después de aceptar la medición. Registra `PageView` al cargarse, el evento personalizado `FormularioPreparado` cuando se abre el mensaje de consulta y el evento estándar `Contact` cuando se toca **Abrir WhatsApp**. No se envían nombre ni importe como parámetros. El clic a WhatsApp no confirma que se haya enviado el mensaje. El sitio no incluye la API de conversiones; agregarla requiere una implementación del lado del servidor.

## Condiciones

Confirmá los datos operativos y publicá las condiciones de cada bono antes de usar la página comercialmente. El giro funciona en el navegador; para validar un premio o limitar giros por persona hace falta un servicio de verificación.

## Personalizar las opiniones

Las tres tarjetas actuales están marcadas como ejemplos. Sustituilas por reseñas y fotos de clientes reales con su permiso. La ruleta revela un bono del 50% al girar. El formulario añade ese porcentaje al mensaje una vez revelado. Las tres reseñas usan los textos compartidos por la propietaria y muestran nombres abreviados. Las imágenes de ambas plataformas están en `assets/`; conservá esa carpeta junto a `index.html` al subir el proyecto.
