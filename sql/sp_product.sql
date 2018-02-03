use luxury
GO



create procedure sp_manage_product
@manage_type as tinyint
as
begin
	if(@manage_type = 1)
	begin
		insert into [dbo].[Product]([ProductType_Id],[Product_Name],[Product_Des],[Product_Instruction],[Product_Id],[Product_EXP],[Product_Amount])
		values('Nui',21) 
	end

	else 
	begin
		delete from [dbo].[Product] where Product_Id is null
	end
	else 
	begin
		select * from [dbo].[Product] 
	end
end

------ execute -------------
exec sp_manage_product 1 -- insert self information
exec sp_manage_product 2 -- delete null car
