import apiClient from "@/api/AxiosClient";

export const uploadImage = async (image: File) => {
  const formData = new FormData();

  formData.append("image", image);

  for (const [key, value] of formData.entries()) {
    console.log(key, value);
  }

  const response = await apiClient.post("/upload/image", formData);

  return response.data;
};