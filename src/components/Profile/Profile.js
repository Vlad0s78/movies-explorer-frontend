import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import Header from "../Header/Header";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../hooks/useForm";

function Profile({ onSignout, isLoggedIn, onUpdateUser, updateProfileMessage }) {
  const currentUser = useContext(CurrentUserContext);
  const { values, errors, handleChange, isValid, resetForm } = useFormWithValidation();
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    resetForm({
      name: currentUser.name || "",
      email: currentUser.email || "",
    });
  }, [currentUser, resetForm]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (e) => {
    e.preventDefault();
    setIsEditing(false);
    handleSubmit(e);
  };

  const handleInputChange = (e) => {
    handleChange(e);
  };

  function handleSubmit() {
    const newUserData = {
      name: values.name,
      email: values.email,
    };
    onUpdateUser(newUserData);
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <section className="profile">
        <h2 className="profile__header">Привет, {currentUser.name}</h2>
        <form className="profile__form" noValidate>
          <div className="profile__field">
            <label className="profile__label">Имя</label>
            <input
              className="profile__input"
              name="name"
              id="nameInput"
              autoComplete="off"
              type="text"
              minLength="2"
              maxLength="30"
              value={values.name}
              onChange={handleInputChange}
              disabled={!isEditing}
              required
            />
          </div>
          <span className="profile__input-error">{errors.name}</span>

          <div className="profile__field">
            <label className="profile__label">E-mail</label>
            <input
              className="profile__input"
              name="email"
              id="emailInput"
              autoComplete="off"
              type="email"
              minLength="2"
              maxLength="30"
              value={values.email}
              onChange={handleInputChange}
              disabled={!isEditing}
              required
            />
          </div>
          <span className="profile__input-error">{errors.email}</span>
        </form>
        {updateProfileMessage && (
          <span className={`profile__update-message ${updateProfileMessage === "success" ? "success" : "error"}`}>
            {updateProfileMessage === "success" ? "Профиль успешно обновлен" : "Ошибка при обновлении профиля"}
          </span>
        )}
        {isEditing ? (
          <button type="button" className={`profile__button-save button ${!isValid ? "profile__button-save_disabled" : ""}`} onClick={handleSaveClick} disabled={!isValid}>
            Сохранить
          </button>
        ) : (
          <button type="button" className="profile__button-edit button" onClick={handleEditClick}>
            Редактировать
          </button>
        )}
        <Link to="/" className="profile__button-exit button" onClick={onSignout}>
          Выйти из аккаунта
        </Link>
      </section>
    </>
  );
}

export default Profile;
