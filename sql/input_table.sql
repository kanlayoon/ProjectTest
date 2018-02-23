
INSERT INTO [dbo].[Branch]
           ([Branch_Name]
           ,[Branch_Address]
		   ,[Branch_Phone]
		   ,[Manager_Id]
		   )
     VALUES
			('สาขาใหญ่','เซ็นทรัลซิตี้ บางนา ชั้น 16','02-745-6527',1),
           ('เซ็นทรัลซิตี้ บางนา','เซ็นทรัลซิตี้ บางนา ชั้น 16','02-745-6527',2),
		    ('เซ็นทรัลปิ่นเกล้า','เซ็นทรัลปิ่นเกล้า ทาวเวอร์ เอ ชั้น 6','02-884-6799',3),
			('ซีคอนสแควร์ ศรีนครินทร์','ซีคอนสแควร์ ศรีนครินทร์ ชั้น 3','02-720-2051-2',4),
			('เดอะพรอมนาด รามอินทรา','เดอะพรอมนาด รามอินทรา ชั้น 4','02-108-6238',5),
			('เซ็นทรัลพลาซาพระราม 2','เซ็นทรัลพลาซาพระราม 2 ชั้น 3','02-872-4514-15',6)
go
select * from [dbo].[Branch]
select * from [dbo].[Manager]

DELETE FROM [dbo].[Branch]

alter table [dbo].[Branch]
alter column [Branch_Phone] nvarchar(15)

alter table [dbo].[Branch]
alter column [Branch_Name] nvarchar(30)

alter table [dbo].[Branch]
alter column [Branch_Address] nvarchar(50)


INSERT INTO [dbo].[Course]
			([Course_Name],
			[Course_Des]
			)
		values
		('Bird’s nest Fresh Collagen Serum','เซรั่มบำรุงผิวสูตรเข้มข้น อุดมด้วยคุณค่าจาก Collagen Capsule สารสกัดจากรังนกนางแอ่นตามธรรมชาติ ช่วยผลัดเซลล์ผิวอย่างอ่อนโยน เผยผิวใหม่ขาวกระจ่างใส'),
		('LUXURY CARBON PEEL','เป็นเทคโนโลยีล่าสุดในการผลัดเซลล์ผิวชั้นบนด้วยเลเซอร์ พร้อมกับการซ่อมแซมและกระตุ้นการสร้างคลออลาเจนไปพร้อมๆกัน คืนความอ่อนเยาว์ให้กับผิวทำให้ผิวเต่งตึงและอ่อนนุ่ม'),
('LUXURY FAT BURN','เป็นการฉีดสลายไขมันเกิดสะสมตามจุดต่างๆ  การฉีดสลายไขมันถือเป็นหนึ่งนวัตกรรมที่จะช่วยแก้ปัญหาไขมันสะสมเฉพาะส่วนได้อย่างตรงจุด'),		
('RHINOPLASTY ','ศัลยกรรมเสริมจมูก การศัลยกรรมจมูกให้มีรูปร่าง และขนาดที่สอดคล้องกับใบหน้าก็จะช่วยให้เรามีรูปหน้าโดยรวที่สวยและสมส่วน')

go

select * from [dbo].[Course]

alter table [dbo].[Course]
alter column [Course_Name] nvarchar(100)

alter table [dbo].[Course]
alter column [Course_Des] nvarchar(max)

delete from [dbo].[Course]


drop table [dbo].[Manager]

create table [dbo].[Manager] ([Manager_FirstName],
			[Manager_LastName],
			[Manager_Gender],
			[Manager_Status],
			[Manager_Address],
			[Manager_Email],
			[Manager_Username],
			[Manager_Password]
			)

alter table [dbo].[Manager]
alter column [Manager_Address] nvarchar(100)


INSERT INTO [dbo].[Manager]
			([Manager_FirstName],
			[Manager_LastName],
			[Manager_Gender],
			[Manager_Status],
			[Manager_Address],
			[Manager_Email],
			[Manager_Username],
			[Manager_Password]
			)

		values
		('กัลยา','ใจลูน',0,0,'22 หมู่8 ต.แม่ทะ อ.แม่ทะ จ.ลำปาง 52150','kanlaya@gmail.com','kanlayoon','kanlaya123'),
		('ภคพร','ใจเย็น',0,1,'234 หมู่12 ต.ศรีสุนทร อ.ศรีสุนทร จ.ภูเก็ต 83110','pakapon@gmail.com','pakaporn','pakaporn123'),
		('ธนวัตร','อยู่เย็น',1,2,'333/3 ถนนวิภาวดีรังสิต แขวงจอมพล เขตจตุจักร กรุงเทพมหานคร 10900','thanawat@gmail.com','thanawat','thanawat123'),
		('สุจิรา','คงสวัสดิ์',0,3,'1115 ถนนพระราม 3 แขวงช่องนนทรี เขตยานนาวา กรุงเทพ 10120','sujira@gmail.com','sujira','sujira123'),
		('มานะ','อนุรักษ์ไทย',1,4,'	99/2 ถนนศรีจันทร์ ตำบลในเมือง อำเภอเมืองขอนแก่น จังหวัดขอนแก่น 40000','mana@gmail.com','mana','mana123'),
		('มานี','ขัติยะ',0,5,'	เลขที่ 199/9 หมู่ที่ 13 ตำบลรอบเวียง อำเภอเมืองเชียงราย จังหวัดเชียงราย 57000','manee@gmail.com','manee','manee123')
		go

select * from [dbo].Manager

delete from [dbo].Manager

alter table [dbo].[Manager]
alter column [Manager_FirstName] nvarchar(15)

alter table [dbo].[Manager]
alter column [Manager_LastName] nvarchar(15)

alter table [dbo].[Manager]
alter column [Manager_Address] nvarchar(50)

alter table [dbo].[Manager]
alter column [Manager_Username] nvarchar(20)

alter table [dbo].[Manager]
alter column [Manager_Password] nvarchar(20)



delete  from Product
insert into [dbo].[Product]
			(Product_Code,
			[Product_Name],
			[Product_Des],
			[Product_Instruction],
			[ProductType_Id])
			
		values
		
		('1','เซรั่มผิวขาว','เซรั่มผิวขาวซึมเข้าชั้นผิวง่าย ให้ผิวขาวกระจ่างใส','ทาทั่วใบหน้าเช้า-เย็น',1),
		('2','เข็มฉีดยา','เข็มสำหรับฉีดยาเข้าร่างกาย','ฉีดยาเข้าร่างกาย',2) ,
		('3','ครีมกันแดด','ป้องกันแสงแดด spf40 ','ทาบริเวณหน้าและลำคอ',3)
go

insert into [dbo].[Product]
			([Product_Code],
			[Product_Name],
			[Product_Des],
			[Product_Instruction],
			[ProductType_Id])
			
		values
		
		(123432,'เซรั่มผิวขาว','เซรั่มผิวขาวซึมเข้าชั้นผิวง่าย ให้ผิวขาวกระจ่างใส','ทาทั่วใบหน้าเช้า-เย็น',1),
		(223423,'เข็มฉีดยา','เข็มสำหรับฉีดยาเข้าร่างกาย','ฉีดยาเข้าร่างกาย',2) ,
		(389754,'ครีมกันแดด','ป้องกันแสงแดด spf40 ','ทาบริเวณหน้าและลำคอ',2)
go
  
select * from BranchProduct
select * from Product
select * from Branch

UPDATE dbo.Table2   
SET dbo.Table2.ColB = dbo.Table2.ColB + dbo.Table1.ColB  
FROM dbo.Table2   
    INNER JOIN dbo.Table1   
    ON (dbo.Table2.ColA = dbo.Table1.ColA);  


update [dbo].[Product]
	set  [dbo].[Product].Product_EXP='2022/01/28'
	where [dbo].[Product].Product_Id = '2' 
	
	
	
		
('เข็มฉีดยา','เข็มสำหรับฉีดยาเข้าร่างกาย','ฉีดยาเข้าร่างกาย','2022/01/28',350,2) ,
select * from Product

delete from Product

alter table [dbo].[Product]
alter column [Product_Name] nvarchar(15)

alter table [dbo].[Product]
alter column [Product_Des] nvarchar(300)

alter table [dbo].[Product]
alter column [Product_Instruction] nvarchar(300)







select * from [dbo].[Manager]

alter table [dbo].[ProductType]
alter column [ProductType_Name] nvarchar(30)

insert into [dbo].[ProductType]
			([ProductType_Name])
			
		values
		('บำรุงผิวหน้า'),
		('อุปกรณ์ทางการแพทย์')
		
	go 

select * from [dbo].[ProductType]

select *from [dbo].[Product]

select * from Course
select * from Product
select *from BranchProduct 
delete  from BranchProduct
insert into [dbo].[BranchProduct]
			([BranchProduct_EXP],[Branch_Id],[Product_Code],
			[BranchProduct_Amount],[Notifications_Amount1],[Notifications_Amount2],[Notifications_Amount3],[Notifications_Exp1],[Notifications_Exp2],[Notifications_Exp3])
			
		values
		('2018/09/16',1,1,190,90,70,50,30,20,10),
		('2022/01/28',1,2,210,100,80,70,20,15,10),
		('2022/01/28',1,3,170,80,70,50,30,20,10),
		('2018/09/16',2,1,200,90,70,50,30,20,10),
		('2022/01/28',2,2,320,110,90,70,30,20,10),
		('2022/01/28',2,3,190,90,80,70,30,20,10),
		('2018/09/16',3,1,198,90,70,50,30,20,10),
		('2022/01/28',3,2,310,100,90,70,30,20,10),
		('2022/01/28',3,3,178,110,95,70,30,20,10),
		('2018/09/16',4,1,410,110,85,60,30,20,10),
		('2022/01/28',4,2,320,120,90,70,30,20,10),
		('2022/01/28',4,3,332,90,80,70,30,20,10),
		('2018/09/16',5,1,280,80,60,50,30,20,10),
		('2022/01/28',5,2,260,80,70,60,30,20,10),
		('2022/01/28',5,3,189,90,80,70,30,20,10),
		('2018/09/16',6,1,279,110,90,70,30,20,10),
		('2022/01/28',6,2,340,100,90,70,30,20,10),
		('2022/01/28',6,3,195,85,70,60,30,20,10)
	go 