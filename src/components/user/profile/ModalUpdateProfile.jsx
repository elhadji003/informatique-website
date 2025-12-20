import React, { useState } from "react";
import { User2, X, Camera } from "lucide-react";
import { useForm } from "react-hook-form";
import { useUpdateUserProfileMutation } from "../../../backend/features/user/userApi";
import { toast } from "react-toastify";
import defaultAvatar from "../../../assets/img/defaultUser.png";

export default function ModalUpdateProfile({ user, isOpen, onClose }) {
  if (!isOpen) return null;

  const [updateProfile, { isLoading }] = useUpdateUserProfileMutation();
  const [preview, setPreview] = useState(user?.avatar || defaultAvatar);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      first_name: user?.first_name || "",
      last_name: user?.last_name || "",
      email: user?.email || "",
      phone_number: user?.phone_number || "",
      adderess: user?.address || "",
      ville: user?.ville || "",
      level: user?.level || "",
    },
  });

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setValue("avatar", file);
    setPreview(URL.createObjectURL(file));
  };

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("first_name", data.first_name);
      formData.append("last_name", data.last_name);
      formData.append("phone_number", data.phone_number);
      formData.append("ville", data.ville);
      formData.append("level", data.level);
      formData.append("address", data.address);

      if (data.avatar) {
        formData.append("avatar", data.avatar);
      }

      await updateProfile(formData).unwrap();

      toast.success("Profil mis à jour avec succès !");
      onClose();
    } catch (error) {
      toast.error("Erreur lors de la mise à jour du profil.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative animate__animated animate__zoomIn">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold flex items-center gap-2">
            Mettre à jour le profil <User2 size={20} />
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500"
          >
            <X />
          </button>
        </div>

        {/* Avatar */}
        <div className="flex justify-center mb-4">
          <div className="relative group">
            <img
              src={preview}
              alt="avatar-preview"
              className="w-24 h-24 rounded-full object-cover border-2 border-blue-500"
            />
            <label className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer transition">
              <Camera className="text-white" />
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleAvatarChange}
              />
            </label>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Nom</label>
            <input
              {...register("last_name", { required: "Nom requis" })}
              className="mt-1 w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
            />
            {errors.last_name && (
              <p className="text-sm text-red-500">{errors.last_name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Prénom</label>
            <input
              {...register("first_name", { required: "Prénom requis" })}
              className="mt-1 w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
            />
            {errors.first_name && (
              <p className="text-sm text-red-500">
                {errors.first_name.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Téléphone</label>
            <input
              {...register("phone_number", { required: "Téléphone requis" })}
              className="mt-1 w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
            />
            {errors.phone_number && (
              <p className="text-sm text-red-500">
                {errors.phone_number.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Ville</label>
            <input
              {...register("ville", { required: "Ville requise" })}
              className="mt-1 w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
            />
            {errors.ville && (
              <p className="text-sm text-red-500">{errors.ville.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Niveau</label>
            <select
              {...register("level", { required: "Niveau requis" })}
              className="mt-1 w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Sélectionnez un niveau</option>
              <option value="beginner">Débutant</option>
              <option value="intermédiaire">Avancé</option>
            </select>
            {errors.level && (
              <p className="text-sm text-red-500">{errors.level.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Adresse</label>
            <input
              {...register("address", { required: "Adresse requise" })}
              className="mt-1 w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
            />
            {errors.address && (
              <p className="text-sm text-red-500">{errors.address.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              disabled
              {...register("email")}
              className="mt-1 w-full border rounded-md p-2 bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-2 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              Annuler
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50"
            >
              {isLoading ? "Enregistrement..." : "Enregistrer"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
