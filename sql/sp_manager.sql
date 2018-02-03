use luxury
GO

------------- create procedure here -------------------------
create procedure sp_get_manager
as
begin
	
		select * from [dbo].[Manager]
end

------ execute -------------
exec sp_get_manager-- insert self information