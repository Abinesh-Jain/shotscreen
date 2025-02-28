import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apis } from '../../utils/apis';
import { ApiResponse } from '../../models/api-response.model';
import { Device } from '../../models/device.model';

@Injectable({
  providedIn: 'root'
})
export class AppleService {

  constructor(private http: HttpClient) { }

  getAppleDevices() {
    return this.http.get<ApiResponse<Device>>(Apis.devices);
  }

  getAppleDeiveSpecs(device?: string) {
    return this.http.get<ApiResponse>(Apis.specs(device));
  }
}
