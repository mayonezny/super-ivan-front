export const safeMode: boolean = true; //потом это обработаем в отдельный стор
export const api: string = 'localhost';
export const nextPort: string = '3000';
export const nestPort: string = '8080';
export const minioPort: string = '9000';
export const minioAdminPort: string = '9090';
export const outerApi: string = `http${safeMode ? 's' : ''}://${api}:${nestPort}/api`;
