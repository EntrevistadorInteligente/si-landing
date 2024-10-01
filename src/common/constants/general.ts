// Assets paths
export const ASSETS_PATH = '/home/assets/';
export const IMAGES_PATH = `${ASSETS_PATH}images/`;
export const VIDEOS_PATH = `https://res.cloudinary.com/dtsiwfy5p/video/upload`;

// Function to get paths based on language
export const getPaths = (lang) => {
  return {
    //App path
    HOME_PATH: `/home/${lang}`,
    SERVICES_PATH: '#services',
    SAMPLE_PATH: '#sample',
    WHO_WE_ARE_PATH: '#who-we-are',
    COMMUNITY_PATH: '#community',
    TERMS_AND_CONDITIONS_PATH: `/home/${lang}/terms-and-conditions`,
    PRIVACY_POLICY_PATH: `/home/${lang}/privacy-policy`,
    // API paths
    ANGULAR_APP_URL: import.meta.env.ANGULAR_APP_URL || 'http://localhost:4200/entrevistas',
    // TODO: Update Social URL
    // Social paths
    GITHUB_URL: 'https://github.com/EntrevistadorInteligente',
    GITHUB_TOKEN: import.meta.env.GITHUB_TOKEN,
    TWITCH_URL: 'https://www.twitch.tv/jamiltonqo',
    LINKEDIN_URL: 'https://www.linkedin.com/in/jamilton-quintero-osorio/',
    DISCORD_URL: 'https://discord.gg/2DUazgGCKr'
  };
};