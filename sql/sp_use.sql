create procedure sp_get_useProduct
as
	
	begin
		
		select * from [dbo].[UseProduct]
	end

	begin
		
		insert into [dbo].[UseProduct]([Product_Id],[UseQuantity],[Course_Id],[CourseQuantity],[Branch_Id],[UseDate],[TypeUse])
		
		
	end


------ execute -------------
exec sp_get_useProduct  -- insert self information

select * from [dbo].[UseProduct]