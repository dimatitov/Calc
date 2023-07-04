type ServiceType<T> = new () => T;

export const initalizer = <T>(Service: ServiceType<T>) => new Service();
