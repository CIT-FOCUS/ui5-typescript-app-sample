import Controller from "sap/ui/core/mvc/Controller";

/**
 * @namespace citsample.controller
 */
export default class View1 extends Controller {

    public onInit(): void {

    }
    public onPoweredByClick():void {
        sap.m.URLHelper.redirect('https://www.cit-focus.com');
    }
}