export class getModels{
    
    message:String
    count:Number
    result=[]
    make_id = []
    make_name = []
    

    constructor(response: any){
        this.message = response.Message;
        this.result = response.Results;
        this.count = response.Count;
        this.make_id = response.Results.map((res)=>{
            return res.Make_ID;
        })
        this.make_name= response.Results.map((res)=>{
            return res.Make_Name;
        })
    }
    
}