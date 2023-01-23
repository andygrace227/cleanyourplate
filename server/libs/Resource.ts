/*
Resource class for CleanYourPlate.
An interface that describes how shared resources in a household behave.
Contains functions for generating notifications to the user
*/

class Resource {

    currentState : CYPStage;

    notificationQueue: CYPNotification;

    constructor(private name: String, private owner: User, private chain : CYPChain, private userLimit : number ) {
        this.name = name;
        this.owner = owner;
        this.chain = chain;
        this.userLimit = userLimit;
    }

    loadStage(){

    }

    getNotifications(){

    }

    markNotificationAsSent(){

    }

    changeStage(){

    }
}