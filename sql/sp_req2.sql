create procedure [dbo].[sp_get_Allreq]

as
begin


		select Branch.Branch_Name,
				Product.Product_Name,
				ReqProduct.ReqDate,
				ReqProduct.ReqQuantity,
				ReqProduct.Product_Code
		from [dbo].[ReqProduct],[dbo].[Product],[dbo].[Branch]
		where [dbo].ReqProduct.Product_Code =Product.Product_Code 
		and [dbo].[ReqProduct].Branch_Id = [dbo].[Branch].Branch_Id 

end


