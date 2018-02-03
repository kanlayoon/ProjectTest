use luxury
GO

------------- create procedure here -------------------------
create procedure sp_get_branches
as
begin
	
		select * from [dbo].[Branch]
end

------ execute -------------
exec sp_get_branches -- insert self information



