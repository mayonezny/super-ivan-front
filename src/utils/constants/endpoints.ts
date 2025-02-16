export const safeMode: boolean = false; //потом это обработаем в отдельный стор
export const api: string = 'localhost';
export const nextPort: string = '3000';
export const nestPort: string = '80';
export const minioPort: string = '9000';
export const minioAdminPort: string = '9090';
export const innerApi: string = `http${safeMode ? 's' : ''}://${api}:${nextPort}/api`;
export const outerApi: string = `http${safeMode ? 's' : ''}://${api}:${nestPort}/api`;
