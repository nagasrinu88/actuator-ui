// abstract class for all services in ION
import {Observable} from "rxjs/Observable";
import {Router} from "@angular/router";
import {OnInit} from "@angular/core";

export abstract class IonAbstractService implements OnInit {

  pageUrl: string;

  constructor(public router: Router) {

  }

  ngOnInit() {
    this.pageUrl = this.router.url;
  }

  //TODO- Need to have a local setup
  protected isLocal = false; // Need to be true for dev
  protected usingMock = false;

  protected localUrl = this.usingMock ? "http://localhost:8080/" : "/";

  // TODO find a way to check dev or production env
  protected baseUrl = this.isLocal ? this.localUrl : "/ion-initiatives/";

  protected userId = "12345";

  protected handleError(error: any, redirectToErrorPage: boolean) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';

    if(redirectToErrorPage) {
      let params = {
        //TODO:- This is a fix as route.url is always returning "/" ignoring everything in path. Need investigation
        target: window.location.hash.substr(1)
      };
      this.router.navigate(['/error'], {queryParams: params});
    }

    return Observable.throw(errMsg);
  }

}
