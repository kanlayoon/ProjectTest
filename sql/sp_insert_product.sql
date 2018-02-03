create procedure [dbo].[sp_insert_Product]
@id int ,@name nvarchar(30),@des nvarchar(200),@ins nvarchar(200),@type nvarchar(30),@amount int ,@exp date,@typeid int
as
begin

		insert into [dbo].[ProductType]
		( 
		[ProductType_Name])
		values
		(@type);

		insert into [dbo].[Product]
		( 
		[Product_Id],
		[Product_Name],
		[Product_Des],
		[Product_Instruction],
		[ProductType_Id])
		values 
		(@id,@name,@des,@ins,@typeid);

		insert into [dbo].[BranchProduct](
		[BranchProduct_EXP],
		[BranchProduct_Amount]
		)
		values(
		@exp,@amount);
		
		
		
end

------ execute -------------
exec sp_update_Product @id  ,
@name ,@des ,@ins ,@id ,@type,@amount,@exp