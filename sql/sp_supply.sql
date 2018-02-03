create procedure sp_get_supplyProduct
@Manager_Status as tinyint
as
	
	begin
		
		select * from [dbo].[SupplyProduct]
	end

	
	begin
		
		
		select [dbo].[BranchProduct].[Branch_Id],[Product].Product_Id,[dbo].[Product].Product_Name,[dbo].[BranchProduct].BranchProduct_Amount,[dbo].[BranchProduct].BranchProduct_EXP,[dbo].[Product].Product_Des,[dbo].[Product].Product_Instruction
		from [dbo].[BranchProduct],[dbo].[Product]
		where [dbo].BranchProduct.Branch_Id=@Manager_Status and [dbo].[BranchProduct].Product_Id = [dbo].[Product].Product_Id
	end


------ execute -------------
exec sp_get_supplyProduct 1 -- insert self information

