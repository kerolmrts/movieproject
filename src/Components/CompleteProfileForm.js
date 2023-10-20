import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import AvatarEditor from "react-avatar-editor";
import { Button } from "./Button";
import { Input } from "./Input";
import { InputButton } from "./InputButton";

const ZoomSlider = ({ zoom, onZoomChange }) => {
  return (
    <input
      type="range"
      min="1"
      max="10"
      step="0.1"
      value={zoom}
      onChange={(e) => onZoomChange(parseFloat(e.target.value))}
    />
  );
};

const CompleteProfileForm = ({ user }) => {
  const { register, setValue, handleSubmit, reset } = useForm();
  const [editedImage, setEditedImage] = useState(null);
  const [zoom, setZoom] = useState(2);
  const editorRef = useRef(null);
  const [isCadastroRealizado, setIsCadastroRealizado] = useState(false);
  const [telefone, setTelefone] = useState("");

  useEffect(() => {
    setValue("name", user.name);
    setValue("email", user.email);
  }, [user, setValue]);

  const handleZoomChange = (newZoom) => {
    setZoom(newZoom);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setEditedImage(file);
  };

  const handleImageCrop = () => {
    if (editorRef.current) {
      const canvas = editorRef.current.getImageScaledToCanvas();
      canvas.toBlob((blob) => {
        setEditedImage(blob);
      });
    }
  };

  const handleSave = () => {
    handleImageCrop();
    setEditedImage(null);
  };

  const handleCancel = () => {
    // Revert the form values to their original state
    reset({ name: user.name, email: user.email, phone: "" });
    setEditedImage(null);
    setZoom(2);
    setIsCadastroRealizado(false);
  };

  const onSubmit = () => {
    if (telefone) {
      setIsCadastroRealizado(true);
    }
  };

  return (
    <form className="max-w-wd mx-auto text-black font-medium rounded-lg shadow-x1">
      <div className="mb-4">
        <label htmlFor="name" className="block">
          Nome:
        </label>
        <input
          {...register("name")}
          id="name"
          className="border rounded w-full py-2 px-3"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block">
          E-mail:
        </label>
        <input
          {...register("email")}
          id="email"
          className="border rounded w-full py-2 px-3"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block">
          Telefone:
        </label>
        <input
          {...register("phone")}
          id="phone"
          className="border rounded w-full py-2 px-3"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="image" className="block">
          Imagem:
        </label>

        <input
          type="file"
          onChange={handleImageChange}
          accept="image/*"
          id="image"
          className="py-2 px-3"
        />
      </div>

      {editedImage && (
        <>
          <AvatarEditor
            ref={editorRef}
            image={editedImage}
            width={200}
            height={200}
            border={10}
            color={[255, 255, 255, 0.6]}
            rotate={0}
            scale={zoom}
          />
          <ZoomSlider zoom={zoom} onZoomChange={handleZoomChange} />
        </>
      )}

      <div className="flex gap-2 mb-4">
        <Button type="button" onClick={handleCancel}>
          Cancelar
        </Button>
        {isCadastroRealizado ? (
          <div className="text-green-600 font-semibold">
            Cadastro realizado com sucesso!
          </div>
        ) : (
          <Button type="submit" onClick={handleSubmit(onSubmit)}>
            Salvar
          </Button>
        )}
      </div>
    </form>
  );
};

export default CompleteProfileForm;
