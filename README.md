# Como Instalar LA SETTING-SHOP

## PASOS: Configuración

1. Clonar el repositorio o descargarlo en zip.
2. Crear un copia de ```.env.template``` y renonbrarlo a  ```.env``` y cambiar las variables de entorno
3. Instalar dependencias ```npm install o npm i```

## ASEGURARSE DE TENER DOCKER INSTALADO Y CORRIENDO  

4. Levantar la base de datos ```docker compose up -d```
5. Correr las migraciones de prisma ```npx prisma migrate dev```
6. Ejecutar seed ```npm run seed```
7. Correr el proyecto ```npm run dev```


## Y LISTO ESO ES TODO.