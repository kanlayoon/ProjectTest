create procedure [dbo].[sp_supply]
@code int ,@number int ,@branchid int ,@date date
as
begin
	
		insert into dbo.SupplyProduct
		 (SupplyDate,SupplyQuantity,Branch_Id,Product_Code) 
		 values (@date,@number, @branchid,@code)

		 update BranchProduct
		 set BranchProduct_Amount = BranchProduct_Amount  +  @number
		 where Branch_Id =@branchid  and Product_Code = @code

end

select * from BranchProduct