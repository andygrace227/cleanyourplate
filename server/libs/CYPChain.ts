/*
Chain class for CleanYourPlate.
A class that allows you to specify the stages of a used resource
*/





class CYPStage {
    //The name of the stage
    stageName : string;

    //Valid next stage names contained in the chain.
    validNextStages: Array<string>;

    //Time it takes to appear on user's TODO list
    todoListDisplayTime: number;

    //Notification list associated with this stage
    notifications: Array<CYPNotification>

    isReadyState: boolean;
   
}

class CYPChain{

    chainName: string;

    stages: Array<CYPStage>;

}