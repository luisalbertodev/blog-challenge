export const getTheMessagefromErrorFirebaseAuth = ({
  code,
}: {
  code: string;
  message: string;
  a: any;
}): string => {
  const ERROR_CODES = {
    'auth/invalid-email': 'Dirección de correo electrónico no es válida.',
    'auth/user-disabled':
      'El usuario correspondiente al correo electrónico dado ha sido deshabilitado.',
    'auth/user-not-found':
      'No hay ningún usuario correspondiente al correo electrónico dado.',
    'auth/wrong-password':
      'La contraseña no es válida para el correo electrónico dado o si la cuenta correspondiente al correo electrónico no tiene una contraseña configurada.',
  };

  return (
    ERROR_CODES[code] ??
    'Ocurrio un error al intentar iniciar sesión, intentanda nuevamente.'
  );
};

export const getTheMessagefromErrorFirebaseCreateAccount = ({
  code,
}: {
  code: string;
  message: string;
  a: any;
}): string => {
  const ERROR_CODES = {
    'auth/email-already-in-use':
      'Ya existe una cuenta con la dirección de correo electrónico proporcionada.',
    'auth/invalid-email': 'Dirección de correo electrónico no es válida.',
    'auth/operation-not-allowed':
      'Habilite las cuentas de correo electrónico / contraseña en Firebase Console, en la pestaña Auth.',
    'auth/weak-password': 'La contraseña no es lo suficientemente segura.',
  };

  return (
    ERROR_CODES[code] ??
    'Ocurrio un error al intentar crear la cuenta, intentanda nuevamente.'
  );
};
