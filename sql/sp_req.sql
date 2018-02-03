use luxury
GO

create procedure sp_get_reqProduct
as
	
	begin
		
		select * from [dbo].[ReqProduct]
	end

	begin
		
		insert into [dbo].[ReqProduct]([Branch_Id],[Product_Id],[ReqDate],[ReqQuantity])
	end



------ execute -------------
exec sp_get_reqProduct  -- insert self information

