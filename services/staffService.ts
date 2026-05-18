import apiClient from "@/api/AxiosClient"
import { StaffFormData } from "@/types/staff"

export const saveStaffMember = (data: StaffFormData) => {
    return apiClient.post("/staff", data)
}

export const getStaffMembers = () => {
    return apiClient.get("/staff")
}

export const getStaffMember = (id: string | undefined) => {
    return apiClient.get("/staff/:id", {params: {id: id}})
}

export const updateStaffMember = (id: string, formData: StaffFormData) => {
    return apiClient.put(`/staff/${id}`, formData)
}