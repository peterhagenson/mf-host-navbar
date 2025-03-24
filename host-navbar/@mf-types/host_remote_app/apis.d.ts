
    export type RemoteKeys = 'host_remote_app/TestComponent';
    type PackageType<T> = T extends 'host_remote_app/TestComponent' ? typeof import('host_remote_app/TestComponent') :any;