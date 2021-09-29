export class Retailer{
    retaileremail:string; 
    retailername:string; 
    retailermobile:any;
    retailerpassword :string;
    aadhar:string="";
    pan:string="";
    UserTypeID="";
    cmpdets="";
    gst="";
   
    constructor(retaileremail:string="", retailername:string="", retailermobile:any, retailerpassword :string="",retailergst:string="",
    aadhar:string="",pan:string="",cmpdets:string="",UserTypeID:string="",gst:string=""
        )
                {
                   this.retaileremail=retaileremail;
                   this.retailername=retailername;
                   this.retailerpassword=retailerpassword;
                   this.retailermobile=retailermobile;
                   this.aadhar=aadhar;
                   this.gst=gst;
                   this.pan=pan;
                   this.UserTypeID=UserTypeID;
                    this.cmpdets=cmpdets;
                }
}