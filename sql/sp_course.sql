use luxury
GO

------------- create procedure here -------------------------
create procedure sp_get_course
as
begin
	
		select * from [dbo].[Course]
end

------ execute -------------
exec sp_get_course -- insert self information