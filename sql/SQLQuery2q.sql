USE [luxury]
GO
/****** Object:  StoredProcedure [dbo].[sp_insert_Product]    Script Date: 2/3/2018 10:26:41 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER procedure [dbo].[sp_insert_Product]
@code int ,@name nvarchar(30),@des nvarchar(200),@ins nvarchar(200),@amount int ,@exp date,@typeid int , @idb int 
as
begin


		insert into [dbo].[Product]
		( 
		[Product_Code],
		[Product_Name],
		[Product_Des],
		[Product_Instruction],
		[ProductType_Id])
		values 
		(@code,@name,@des,@ins,@typeid);
		

		insert into [dbo].[BranchProduct](
		[BranchProduct_EXP],
		[BranchProduct_Amount],
		[Product_code],
		[Branch_Id]
		
		)
		values(
		@exp,@amount,@code,@idb);
		
		
		
end