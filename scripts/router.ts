"use strict";

namespace core  {

    export class Router {

        private _activeLink:string;
        private _routingTable:string[];

        private _linkData:string
        constructor() {
            this._activeLink = "";
            this._routingTable = [];
            this._linkData = "";
        }

        public get ActiveLink():string {
            return this._activeLink;
        }

        public set ActiveLink(link:string){
            this._activeLink = link;
        }

        public get linkData():string {
            return this._linkData;
        }

        public set linkData(link:string){
            this._linkData = link;
        }

        /**
         * This method adds a new route to the routing table
         * @param router
         * @returns {void}
         */
        public Add(router:string) {
            this._routingTable.push(route);
        }

        /**
         * This method replaces the reference for the routing table with a new one
         * @param routingTable
         * @returns {void}
         */
        public AddTable(routingTable:string[]){
            this._routingTable = routingTable;
        }

        /**
         * This method finds and returns the index of the route in the routing table, otherwise it returns -1
         * @param route
         * @return {*}
         * @returns {*}
         */
        public Find(route:string):number{
            return this._routingTable.indexOf(route);
        }

        /**
         * This method removes a route form the routing table. it returns true if the route was successfully removed
         * @param route
         * @return {boolean}
         */
        public Remove(route:string){
            if(this.Find(route) > -1){
                this._routingTable.splice(this.Find(route), 1)
                return true;
            }
            return false;
        }

        /**
         * This method returns the routing table in a comma separate string (array toString default
         * @return {string}
         */
        public toString():string {
            return this._routingTable.toString();
        }


    }

}

//Instantiate Router
let router:core.Router = new core.Router();
router.AddTable( [
    "/",
    "/home",
    "/about",
    "/services",
    "/contact",
    "/contact-list",
    "/products",
    "/register",
    "/login",
    "/edit"
]);

let route = location.pathname;

router.ActiveLink = (router.Find(route) > -1) ? ((route === "/") ? "home" : route.substring(1)) : ("404");