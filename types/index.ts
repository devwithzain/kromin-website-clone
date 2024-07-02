import { z } from "zod";
import { User } from "@prisma/client";
import { IconType } from "react-icons";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export const productSchema = z.object({
   title: z.string().min(3),
   description: z.string().min(10),
   imageUrl: z.string().optional(),
});

export type THeadingProps = {
   title: string;
   subtitle?: string;
   center?: boolean;
};

export type TButtonProps = {
   label: string;
   onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
   disabled?: boolean;
   outline?: boolean;
   small?: boolean;
   icon?: IconType;
};

export type TModalProps = {
   isOpen?: boolean;
   onClose: () => void;
   onSubmit: () => void;
   title?: string;
   body?: React.ReactElement;
   footer?: React.ReactElement;
   actionLabel: string;
   disabled?: boolean;
   secondaryAction?: () => void;
   secondaryActionLabel?: string;
};

export type TInputProps = {
   id: string;
   label: string;
   type?: string;
   disabled?: boolean;
   formatPrice?: boolean;
   required?: boolean;
   register: UseFormRegister<FieldValues>,
   errors: FieldErrors;
};

export type ThooksProps = {
   isOpen: boolean;
   onOpen: () => void;
   onClose: () => void;
};

export type TproductData = z.infer<typeof productSchema>;

export type TlogoMarqueeProps = {
   children: React.ReactNode;
   baseVelocity: number;
};
export type TperspectiveTextProps = {
   children: React.ReactNode;
};

export type TMenuItemProps = {
   onClick: () => void;
   label: string;
   icon?: IconType | any;
};
export type SafeUser = Omit<
   User,
   "createdAt" | "updatedAt" | "emailVerified"
> & {
   createdAt: string;
   updatedAt: string;
   emailVerified: string | null;
};
export type TUserMenuProps = {
   currentUser?: User | null;
};

export type TAvatarProps = {
   src: string | null | undefined;
};

export type TNavbarProps = {
   currentUser?: User | null;
};

export type TImageUploadProps = {
   onChange: (value: string) => void;
   value: string;
};
export type TimageUploadProps = {
   onImageUpload: (url: string) => void;
};