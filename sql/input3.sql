select * from ReqProduct

select * from Branch

insert into [dbo].[ReqProduct]
			([ReqDate],[Branch_Id],[Product_Id],[ReqQuantity])
			
		values
		('2018-01-12',6,1,200),
		('2018-01-12',6,2,250),
		('2018-01-12',6,3,100),
		('2017-12-31',2,1,250),
		('2017-12-31',2,2,250),
		('2017-12-31',2,3,250),
		('2018-01-20',3,1,100),
		('2018-01-20',3,2,100),
		('2018-01-20',3,3,100),
		('2018-01-15',4,1,230),
		('2018-01-15',4,2,240),
		('2018-01-15',4,3,250),
		('2018-01-08',5,1,190),
		('2018-01-08',5,2,190),
		('2018-01-08',5,3,200)
		
	go

select * from ReservationCourse

insert into [dbo].[ReservationCourse]
			(
			[Branch_Id],
			[Course_Id],
			[ReservationCourse_Date],
			[ReservationCourse_Status])
			values 
			(6,1,'2018-01-20',1),
			(6,2,'2018-01-20',1),
			(5,2,'2018-01-22',2),
			(5,4,'2018-01-22',1),
			(2,2,'2018-01-18',1),
			(2,3,'2018-01-18',2),
			(3,1,'2018-01-18',1),
			(3,4,'2018-01-18',1),
			(4,3,'2018-01-17',2),
			(4,2,'2018-01-17',1)



select * from Course
select * from UseProduct

select * from CourseProduct

insert into dbo.CourseProduct
([Course_Id],[Product_Id])
values (1,1),(1,2),
(4,2),(4,1),(3,2),(2,1),(2,2)


insert into dbo.UseProduct
([Branch_Id],[Course_Id],[Product_Id],[TypeUse],[UseDate],[UseQuantity])
values (2,1,)

select * from dbo.SupplyProduct

insert into dbo.SupplyProduct
([Branch_Id],[Product_Id],[SupplyDate],[SupplyQuantity])
values (2,1,'2018-01-03',230),
(2,2,'2018-01-03',180),
(3,1,'2018-01-03',230),
(3,3,'2018-01-03',200),
(4,2,'2018-01-03',310),
(4,1,'2018-01-03',290),
(5,2,'2018-01-03',250),
(5,3,'2018-01-03',280),
(6,3,'2018-01-03',190),
(6,1,'2018-01-03',240)