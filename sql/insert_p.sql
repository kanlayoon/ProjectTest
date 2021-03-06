USE [luxury]
GO
/****** Object:  StoredProcedure [dbo].[sp_insert_Product]    Script Date: 2/3/2018 10:42:26 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER procedure [dbo].[sp_insert_Product]
@id int ,@name nvarchar(30),@des nvarchar(200),@ins nvarchar(200),@amount int ,@exp date,@typeid int , @idb int 
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
		(@id,@name,@des,@ins,@typeid);
		

		insert into [dbo].[BranchProduct](
		[BranchProduct_EXP],
		[BranchProduct_Amount],
		[Product_Code],
		[Branch_Id]
		
		)
		values(
		@exp,@amount,@id,@idb);
		
		
		
end