select [UseProduct].TypeUse,UseProduct.UseDate,UseProduct.UseQuantity,Branch.Branch_Name,Product.Product_Name,Product.Product_Code,Course_Name
		from UseProduct,Branch,Product,Course
		where UseProduct.Branch_Id = Branch.Branch_Id or UseProduct.Course_Id = Course_Id