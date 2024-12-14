import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Customer, StorageUnitType } from '../types';
import { Upload } from 'lucide-react';

const storageUnitTypes: StorageUnitType[] = [
  'Small Trailer',
  'Medium Trailer',
  'Large Trailer',
  'Camper',
  'Car',
  'Boat',
  'ATV',
  'Motorhome',
  'Snowmobile Trailer',
  'Other'
];

interface CustomerFormProps {
  customer?: Customer;
  onSubmit: (data: Partial<Customer>) => void;
}

export function CustomerForm({ customer, onSubmit }: CustomerFormProps) {
  const [previewImage, setPreviewImage] = useState<string | null>(customer?.profilePicture || null);
  const { register, handleSubmit, watch } = useForm({
    defaultValues: customer || {
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      email: '',
      phone: '',
      address: {
        street: '',
        city: '',
        state: '',
        zipCode: '',
      },
      storageUnits: [{
        type: 'Small Trailer',
        customDescription: '',
      }],
    },
  });

  const selectedType = watch('storageUnits.0.type');

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFormSubmit = (data: any) => {
    onSubmit({
      ...data,
      profilePicture: previewImage,
    });
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
      <div className="flex justify-center">
        <div className="relative">
          <div className="h-32 w-32 rounded-lg overflow-hidden bg-gray-100">
            {previewImage ? (
              <img
                src={previewImage}
                alt="Profile preview"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="h-full w-full flex items-center justify-center">
                <Upload className="h-12 w-12 text-gray-400" />
              </div>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div className="mt-2 text-sm text-center text-gray-600">
            Click to upload profile picture
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">First Name</label>
          <input
            type="text"
            {...register('firstName')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            {...register('lastName')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
          <input
            type="date"
            {...register('dateOfBirth')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            {...register('email')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            {...register('phone')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">Street Address</label>
          <input
            type="text"
            {...register('address.street')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">City</label>
          <input
            type="text"
            {...register('address.city')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">State</label>
          <input
            type="text"
            {...register('address.state')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">ZIP Code</label>
          <input
            type="text"
            {...register('address.zipCode')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">Storage Unit Type</label>
          <select
            {...register('storageUnits.0.type')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            {storageUnitTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {selectedType === 'Other' && (
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">Custom Description</label>
            <input
              type="text"
              {...register('storageUnits.0.customDescription')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        )}
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Upload Documents</label>
          <div className="mt-1 space-y-2">
            <div>
              <p className="text-sm text-gray-500">Contract (PDF)</p>
              <input
                type="file"
                accept=".pdf"
                className="mt-1 block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100"
              />
            </div>
            <div>
              <p className="text-sm text-gray-500">Additional Documents (PDF, JPEG)</p>
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg"
                multiple
                className="mt-1 block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="sticky bottom-0 bg-white pt-4 border-t">
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            {customer ? 'Update Customer' : 'Add Customer'}
          </button>
        </div>
      </div>
    </form>
  );
}