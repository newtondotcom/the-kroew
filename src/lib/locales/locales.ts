const translations = {
    "en": {
        "player_number": 'Players number',
        },

    "fr": {
        "description1": 'est une application simple créée pour vous aider à vous rappeler où vous avez garé votre voiture. Elle est entièrement open source et gratuite à utiliser. Aucune de vos données n\'est jamais stockée ou utilisée en dehors de votre appareil. Nous respectons votre vie privée et n\'utilisons aucun cookie pour vous suivre.',
    },
    };

let locale = 'en';

function translate(key: string) {
        if (navigator.language === undefined) {locale = 'en';}
        else navigator.language.split('-')[0];
        return translations[locale][key] || key;
}
    
export default translate;