/// <reference types="svelte" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_CORRECT_USERNAME: string;
    readonly VITE_CORRECT_PASSWORD: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
