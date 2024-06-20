"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { TproductData, productSchema } from "@types";
import axios from "axios";
import { useForm } from "react-hook-form";
export default function AddProduct() {
	const {
		register,
		reset,
		handleSubmit,
		formState: { isSubmitting, errors },
	} = useForm<TproductData>({
		resolver: zodResolver(productSchema),
	});

	const onSubmits = async (data: TproductData) => {
		try {
			const response = await axios.post("/api/post", data);
			console.log("Data", response.data);
		} catch (error) {
			console.log("Error", error);
		}
		reset();
	};
	return (
		<div className="w-full h-screen bg-white p-10 flex flex-col gap-6">
			<div className="w-full">
				<h1 className="text-[40px] text-black font-serif font-medium">
					Product Details
				</h1>
				<form
					onSubmit={handleSubmit(onSubmits)}
					className="w-full flex items-center justify-between gap-4">
					<div className="relative w-full flex flex-col gap-3">
						<div>
							<input
								{...register("title")}
								placeholder=" "
								type="text"
								className="peer p-4 pt-6 w-full font-light bg-white  border-2 rounded-md outline-none transition disabled:opacity-70"
							/>
							<label className="absolute text-md duration-150 transform -translate-y-3 top-5 z-10 left-0 pl-4 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
								Title
							</label>
							{errors.title && (
								<span className="text-red-500">{errors.title.message}</span>
							)}
						</div>
					</div>
					<div className="relative w-full">
						<input
							{...register("description")}
							placeholder=" "
							type="text"
							className="peer p-4 pt-6 w-full font-light bg-white  border-2 rounded-md outline-none transition disabled:opacity-70"
						/>
						<label className="absolute text-md duration-150 transform -translate-y-3 top-5 z-10 left-0 pl-4 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
							Description
						</label>
						{errors.description && (
							<span className="text-red-500">{errors.description.message}</span>
						)}
					</div>
					<input
						type="submit"
						className="text-[20px] cursor-pointer text-black font-serif font-medium bg-slate-200 px-6 py-3 rounded-lg"
						disabled={isSubmitting}
					/>
				</form>
			</div>
		</div>
	);
}
