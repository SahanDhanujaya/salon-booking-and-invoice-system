import apiClient from "@/api/AxiosClient";
import { UserType } from "@/types/user";

export const getProfile = () => {
    return apiClient.get("/user/me")
}

export const updateProfilePicture = (formData: { imageUrl: string; publicId: string }) => {
    return apiClient.patch("/user/update-profile-picture", formData)
}

export const updateUserProfile = (formData: UserType) => {
    return apiClient.put("/user/update-profile", formData)
}