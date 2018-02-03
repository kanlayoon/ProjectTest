create procedure [dbo].[sp_insert_ProductType]
@type nvarchar(30)
as
begin

		insert into [dbo].[ProductType]
		( 
		[ProductType_Name])
		values
		(@type)
end
	