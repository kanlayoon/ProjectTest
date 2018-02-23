create procedure [dbo].[sp_del_Product]
@code int
as
begin
	
		Delete  from Product
		where Product_Code = @code ;
		
		
end

select * from Product