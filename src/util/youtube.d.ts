interface Window {
    onYouTubeIframeAPIReady: () => void;
  }
  
declare namespace YT {
class Player {
    constructor(elementId: string | HTMLElement, options: PlayerOptions);
    playVideo(): void;
    pauseVideo(): void;
    stopVideo(): void;
    seekTo(seconds: number, allowSeekAhead: boolean): void;
    mute(): void;
    unMute(): void;
    isMuted(): boolean;
    setVolume(volume: number): void;
    getVolume(): number;
    setSize(width: number, height: number): void;
    getPlaybackRate(): number;
    setPlaybackRate(suggestedRate: number): void;
    getAvailablePlaybackRates(): number[];
    getDuration(): number;
    getVideoUrl(): string;
    getVideoEmbedCode(): string;
    getPlayerState(): PlayerState;
    getCurrentTime(): number;
    getPlaybackQuality(): string;
    setPlaybackQuality(suggestedQuality: string): void;
    getAvailableQualityLevels(): string[];
    getVideoLoadedFraction(): number;
    cueVideoById(videoId: string, startSeconds?: number, suggestedQuality?: string): void;
    loadVideoById(videoId: string, startSeconds?: number, suggestedQuality?: string): void;
    cueVideoByUrl(mediaContentUrl: string, startSeconds?: number, suggestedQuality?: string): void;
    loadVideoByUrl(mediaContentUrl: string, startSeconds?: number, suggestedQuality?: string): void;
    cuePlaylist(playlist: string | string[], index?: number, startSeconds?: number, suggestedQuality?: string): void;
    loadPlaylist(playlist: string | string[], index?: number, startSeconds?: number, suggestedQuality?: string): void;
    nextVideo(): void;
    previousVideo(): void;
    playVideoAt(index: number): void;
    setLoop(loopPlaylists: boolean): void;
    setShuffle(shufflePlaylist: boolean): void;
    getPlaylist(): string[];
    getPlaylistIndex(): number;
    addEventListener(event: string, listener: (event: PlayerEvent) => void): void;
    removeEventListener(event: string, listener: (event: PlayerEvent) => void): void;
    destroy(): void;
}

interface PlayerOptions {
    height?: string;
    width?: string;
    videoId?: string;
    playerVars?: PlayerVars;
    events?: Events;
}

interface PlayerVars {
    autoplay?: number;
    controls?: number;
    disablekb?: number;
    enablejsapi?: number;
    fs?: number;
    hl?: string;
    iv_load_policy?: number;
    loop?: number;
    modestbranding?: number;
    origin?: string;
    playlist?: string;
    playsinline?: number;
    rel?: number;
    showinfo?: number;
    start?: number;
    end?: number;
    mute?: number;
    listType?: string;
    list?: string;
    // Add other player variables as needed
}

interface Events {
    onReady?: (event: PlayerEvent) => void;
    onStateChange?: (event: PlayerEvent) => void;
    onPlaybackQualityChange?: (event: PlayerEvent) => void;
    onPlaybackRateChange?: (event: PlayerEvent) => void;
    onError?: (event: PlayerEvent) => void;
    onApiChange?: (event: PlayerEvent) => void;
    // Add other events as needed
}

interface PlayerEvent {
    target: Player;
    data: number;
}

enum PlayerState {
    UNSTARTED = -1,
    ENDED = 0,
    PLAYING = 1,
    PAUSED = 2,
    BUFFERING = 3,
    CUED = 5
}
}