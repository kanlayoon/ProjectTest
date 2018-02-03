aUSE [luxury]
GO
/****** Object:  StoredProcedure [dbo].[sp_get_branchProduct]    Script Date: 1/30/2018 2:22:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
alter procedure [dbo].[sp_update_Product]
@id_input int ,@name nvarchar(30),@des nvarchar(200),@ins nvarchar(200),@id int,@type nvarchar(30)
as
begin
		update [dbo].[Product]
		set  
		[Product_Name]=@name,
		[Product_Des]=@des,
		[Product_Instruction]=@ins
		where [Product_Id] =@id
		update [dbo].[ProductType]	
		set [ProductType_Name]= @type
		from Product, ProductType
			where Product.Product_Id=@id and Product.ProductType_Id = ProductType.ProductType_Id
end

------ execute -------------
exec sp_update_Product @id_input  ,
@name ,@des ,@ins ,@id ,@type



  -- insert self information


select *from ProductType
select *from Product

update [dbo].[Product]
		set  
		[Product_Name]='ครีมกันแดด เทส',
		[Product_Des]='ป้องกันแสงแดด spf40 test',
		[Product_Instruction]='ทาบริเวณหน้าและลำคอ test'
		where [Product_Id] =3


		update [dbo].[ProductType]	
		set [ProductType_Name]= 'บำรุงผิวหน้า1'
		from Product, ProductType
		where Product.Product_Id=3 and Product.ProductType_Id = ProductType.ProductType_Id 