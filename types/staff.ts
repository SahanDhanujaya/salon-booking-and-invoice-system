interface Status {
  Active: 'active';
  Inactive: 'inactive';
  Onleave: 'onleave';
  
}
export type StaffFormData = {
  _id?: string;
  fullName: string;
  role: string;
  email: string;
  phone: string;
  shift: string;
  salary: string;
  address: string;
  joinDate: string;
  status: Status[keyof Status];
  specialization: string;
  imageUrl: File | string;
  publicId: string;
  notes: string;
  rating?: number;
};


