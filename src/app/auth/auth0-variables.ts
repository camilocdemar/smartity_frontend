interface AuthConfig {
    CLIENT_ID: string;
    CLIENT_DOMAIN: string;
    AUDIENCE: string;
    REDIRECT: string;
    SCOPE: string;
}

export const AUTH_CONFIG: AuthConfig = {
    CLIENT_ID: 'k4UVF4j6BXR36UwG4qYehqVr5yZs6Ofc',
    CLIENT_DOMAIN: 'ccamargo.auth0.com',
    AUDIENCE: 'daily-deals-api',
    REDIRECT: 'http://localhost:4200/callback',
    SCOPE: 'openid'
}