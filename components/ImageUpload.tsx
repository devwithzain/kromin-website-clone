"use client";
import Image from "next/image";
import { TbPhotoPlus } from "react-icons/tb";
import {
	CldUploadWidget,
	CloudinaryUploadWidgetInfo,
	CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import { useState } from "react";
import { TimageUploadProps } from "@types";

declare global {
	var cloudinary: any;
}

export default function ImageUpload({ onImageUpload }: TimageUploadProps) {
	const [imageUrl, setImageUrl] = useState("");

	const handleImageChange = (result: CloudinaryUploadWidgetResults) => {
		if (typeof result === "object" && "info" in result) {
			const info = result.info as CloudinaryUploadWidgetInfo;
			setImageUrl(info.secure_url);
			onImageUpload(info.secure_url);
		}
	};

	return (
		<>
			<CldUploadWidget
				onSuccess={handleImageChange}
				uploadPreset="jdz0tunu"
				options={{
					maxFiles: 1,
				}}>
				{({ open }) => {
					return (
						<div
							onClick={() => open?.()}
							className="w-full flex gap-2 items-center px-4 py-2 border-2 rounded-md cursor-pointer">
							<TbPhotoPlus size={50} />
							<button className="font-semibold text-lg">Click to upload</button>
						</div>
					);
				}}
			</CldUploadWidget>
			{imageUrl && (
				<div>
					<Image
						src={imageUrl}
						alt="Uploaded"
						width={400}
						height={400}
					/>
				</div>
			)}
		</>
	);
}
