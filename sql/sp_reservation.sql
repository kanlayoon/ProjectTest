create procedure sp_get_reservationCourse
as
	
	begin
		
		select * from [dbo].[ReservationCourse]
	end

	



------ execute -------------
exec sp_get_reservationCourse  -- insert self information

