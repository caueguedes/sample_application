export const request_failed = (message = 'An error has occurred', error) => {
  return {
    'success': false,
    'message': message,
    'error': error
  }
};