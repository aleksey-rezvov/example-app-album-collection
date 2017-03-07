import {Injectable} from "@angular/core";
import * as deepstream from 'deepstream.io-client-js'

@Injectable()
export class DsService {
  get dsInstance() {
    // return deepstream('wss://154.deepstreamhub.com?apiKey=97a397bd-ccd2-498f-a520-aacc9f67373c').login()
    return deepstream('localhost:6020').login()
  }
  get event () {
    return this.dsInstance.event
  }
}
