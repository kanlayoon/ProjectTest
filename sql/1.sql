select [dbo].[BranchProduct].[Branch_Id],[Product].Product_Id,[dbo].[Product].Product_Name,[dbo].[BranchProduct].BranchProduct_Amount,[dbo].[BranchProduct].BranchProduct_EXP,[dbo].[Product].Product_Des,[dbo].[Product].Product_Instruction
		from [dbo].[BranchProduct],[dbo].[Product]
		where [dbo].BranchProduct.Branch_Id=1 and [dbo].[BranchProduct].Product_Id = [dbo].[Product].Product_Id

		select * from BranchProduct