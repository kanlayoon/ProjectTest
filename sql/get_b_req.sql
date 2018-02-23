create procedure [dbo].[sp_get_Branch_req]
@b_id int
as
begin

		select 
				Product.Product_Name,
				ReqProduct.ReqDate,
				ReqProduct.ReqQuantity,
				ReqProduct.Product_Code
		from [dbo].[ReqProduct],[dbo].[Product]
		where [dbo].ReqProduct.Product_Code =Product.Product_Code 
		and [dbo].[ReqProduct].Branch_Id = @b_id

end
