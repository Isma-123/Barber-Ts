/**
 * Códigos de error y mensajes personalizados
 */

export const ApiErrorType = {
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  VALIDATION_ERROR: 422,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  CONFLICT: 409,
  SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
  NETWORK_ERROR: 'NETWORK_ERROR',
  UNKNOWN: 'UNKNOWN'
} as const;

export type ApiErrorType = typeof ApiErrorType[keyof typeof ApiErrorType];

export const ERROR_MESSAGES: Record<ApiErrorType | string, string> = {
  [ApiErrorType.UNAUTHORIZED]: 'Sesión expirada. Por favor, inicia sesión nuevamente.',
  [ApiErrorType.FORBIDDEN]: 'No tienes permisos para acceder a este recurso.',
  [ApiErrorType.VALIDATION_ERROR]: 'Los datos ingresados no son válidos.',
  [ApiErrorType.BAD_REQUEST]: 'Solicitud inválida. Verifica los datos.',
  [ApiErrorType.NOT_FOUND]: 'El recurso solicitado no fue encontrado.',
  [ApiErrorType.CONFLICT]: 'Este recurso ya existe.',
  [ApiErrorType.SERVER_ERROR]: 'Error del servidor. Por favor, intenta más tarde.',
  [ApiErrorType.SERVICE_UNAVAILABLE]: 'El servicio no está disponible. Intenta más tarde.',
  [ApiErrorType.NETWORK_ERROR]: 'Error de conexión. Verifica tu conexión a internet.',
  [ApiErrorType.UNKNOWN]: 'Ocurrió un error desconocido.'
};

export const getErrorMessage = (errorType: ApiErrorType | string): string => {
  return ERROR_MESSAGES[errorType] || ERROR_MESSAGES[ApiErrorType.UNKNOWN];
};
