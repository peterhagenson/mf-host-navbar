
    export type RemoteKeys = 'provider/App.tsx';
    type PackageType<T> = T extends 'provider/App.tsx' ? typeof import('provider/App.tsx') :any;