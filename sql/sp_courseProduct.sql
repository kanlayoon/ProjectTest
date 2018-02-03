use luxury
GO

------------- create procedure here -------------------------
create procedure sp_get_courseProduct
as
begin
	
		select * from [dbo].[CourseProduct]
end

------ execute -------------
exec sp_get_courseProduct-- insert self information