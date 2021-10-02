export class Product1{
    product1id?:number;
    
    product1price: number;
    product1quantity: number;
    product1description: string;
    product1brand: string;
    
    
    
    constructor( 
        
        product1price: number,
        product1quantity: number,
        product1description: string,
        product1brand: string,
        product1id?:number
    )
        
    {
        
       
        this.product1price=product1price,
        this.product1quantity=product1quantity,
        this.product1description=product1description,
        this.product1brand=product1brand,
        this.product1id=product1id
        
    } 
      
    
}