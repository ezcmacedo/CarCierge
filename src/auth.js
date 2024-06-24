export const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    if (!token) {
        return false;
    }

    // Decodificar o token e verificar as informações necessárias
    try {
        const decodedToken = parseToken(token);
        if (decodedToken && decodedToken.firstName === 'admin' && decodedToken.lastName === 'carcierge') {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
};

const parseToken = (token) => {
    // Implementar a lógica para decodificar o token (por exemplo, usando JWT decode)
    // Exemplo simples:
    const tokenPayload = JSON.parse(atob(token.split('.')[1]));
    return tokenPayload;
};