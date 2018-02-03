use luxury
GO

------------- create procedure here -------------------------
create procedure sp_get_productType
as
begin
	
		select * 
		from [dbo].[ProductType]
		
end


------ execute -------------
exec sp_get_productType-- insert self information