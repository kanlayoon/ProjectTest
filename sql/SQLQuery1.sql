use luxury

IF ( SELECT object_id('dbo.Course') ) > 0
   DROP TABLE dbo.Course
CREATE TABLE dbo.Course
    (
    Course_Id   int           IDENTITY(1,1) PRIMARY KEY,
	Course_Name nvarchar(100) NULL,
    Course_Des  nvarchar(max)           NULL,
	
    );

	IF ( SELECT object_id('dbo.CourseProduct') ) > 0
   DROP TABLE dbo.CourseProduct
CREATE TABLE dbo.CourseProduct
    (
    CourseProduct_Id   int           IDENTITY(1,1) PRIMARY KEY,
	Product_Code int NULL,
    Course_Id  int           NULL,
    );



	IF ( SELECT object_id('dbo.ReservationCourse') ) > 0
   DROP TABLE dbo.ReservationCourse
CREATE TABLE dbo.ReservationCourse
    (
    ReservationCourse_Id       int      IDENTITY(1,1) PRIMARY KEY ,
	ReservationCourse_Date		date NULL,
    ReservationCourse_Status	 bit         NULL,
	Course_Id					int           NULL,
	Branch_Id					int           NULL,
    );


		IF ( SELECT object_id('dbo.BranchProduct') ) > 0
   DROP TABLE dbo.BranchProduct
CREATE TABLE dbo.BranchProduct
    (
    BranchProduct_Id       int      IDENTITY(1,1) PRIMARY KEY,
	BranchProduct_Amount int NULL,
	BranchProduct_EXP date NULL,
	Product_Code  int           NULL,
	Branch_Id  int           NULL,
	Notifications_Exp1  int           NULL,
	Notifications_Exp2  int           NULL,
	Notifications_Exp3  int           NULL,
	Notifications_Amount1  int           NULL,
	Notifications_Amount2  int           NULL,
	Notifications_Amount3  int           NULL,
	
    );


	IF ( SELECT object_id('dbo.UseProduct') ) > 0
   DROP TABLE dbo.UseProduct
CREATE TABLE dbo.UseProduct
    (
    UseProduct_Id       int      IDENTITY(1,1) PRIMARY KEY,
	TypeUse				bit		NULL,
	UseDate				 date	NULL,
	UseQuantity		  int           NULL,
	Branch_Id		 int           NULL,
	Product_Id		 int           NULL,
	Course_Id		 int           NULL,
	
	
	
    );


	IF ( SELECT object_id('dbo.ReqProduct') ) > 0
   DROP TABLE dbo.ReqProduct
CREATE TABLE dbo.ReqProduct
    (
    ReqProduct_Id       int      IDENTITY(1,1) PRIMARY KEY,
	ReqDate			date NULL,
	ReqQuantity		 int           NULL,
	Branch_Id		 int           NULL,
	Product_Code		 int           NULL,

    );

	IF ( SELECT object_id('dbo.SupplyProduct') ) > 0
   DROP TABLE dbo.SupplyProduct
CREATE TABLE dbo.SupplyProduct
    (
    SupplyProduct_Id		 int      IDENTITY(1,1) PRIMARY KEY,
	SupplyDate				date	 NULL,
	SupplyQuantity			 int           NULL,
	Branch_Id				 int           NULL,
	Product_Id				 int           NULL,

    );

	CREATE TABLE dbo.Manager
    (
	Manager_Id int           IDENTITY(1,1) PRIMARY KEY,
	Manager_FirstName nvarchar(30) NULL,
			Manager_LastName nvarchar(30) NULL,
			Manager_Gender bit NULL,
			Manager_Status int NULL,
			Manager_Address nvarchar(200) NULL,
			Manager_Email nvarchar(30) NULL,
			Manager_Username nvarchar(30) NULL,
			Manager_Password nvarchar(30) NULL
    
    );
	DROP TABLE dbo.Branch
	CREATE TABLE dbo.Branch
           (Branch_Id int           IDENTITY(1,1) PRIMARY KEY,
		   Branch_Name nvarchar(30) NULL,
           Branch_Address nvarchar(50) NULL,
		   Branch_Phone nvarchar(15) NULL,
		   Manager_Id int NULL)

DROP TABLE dbo.ProductType
CREATE TABLE dbo.ProductType
           (ProductType_Id int           IDENTITY(1,1) PRIMARY KEY,
		   ProductType_Name nvarchar(30) NULL,
           )
select * from ProductType


select * from product

drop table dbo.Product
create table[dbo].[Product]
			
			(Product_Id  int           IDENTITY(1,1) PRIMARY KEY,
			Product_Code int ,
			Product_Name nvarchar(15) ,
			Product_Des nvarchar(300) NULL,
			Product_Instruction nvarchar(300) NULL,
			ProductType_Id int NULL)


			select *from BranchProduct