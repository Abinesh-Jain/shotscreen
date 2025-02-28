import { environment } from "../../environments/environment";

export const Apis = {
    devices: `${environment.baseUrl}apple/`,
    specs: (device?: string) => `${environment.baseUrl}apple/${device}`,
}