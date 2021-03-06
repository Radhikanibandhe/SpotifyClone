export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "50d16e49c05747eca1b644ef24884443";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playbackk-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash 
    .substring(1)
    .split('&')
    .reduce(initial, item => {
        // #accessToken = mysupersecretkey&name=radhika&a
        let parts = item.split('=');
        initial[part[0]] = decodeURIComponent(parts[1]);

        return initial;
    },{});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;

