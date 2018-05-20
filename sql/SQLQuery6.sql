USE [luxury]
GO
/****** Object:  StoredProcedure [dbo].[sp_update_Product]    Script Date: 2/1/2018 3:12:21 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER procedure [dbo].[sp_update_Product]
@id_input int ,@name nvarchar(30),@des nvarchar(200),@ins nvarchar(200),@id int,@type int
as
begin
		update [dbo].[Product]
		set  
		[Product_Name]=@name,
		[Product_Des]=@des,
		[Product_Instruction]= @ins,
		[ProductType_Id]= @type
		where [Product_Id] = @id
		
end
