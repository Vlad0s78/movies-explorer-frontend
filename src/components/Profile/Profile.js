import { Link } from "react-router-dom";
import { useState } from "react";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <>
      <section className="profile">
        <h2 className="profile__header">Привет, Виталий!</h2>
        <form className="profile__form" noValidate>
          <div className="profile__field">
            <label className="profile__label">Имя</label>
            <input className="profile__input" id="name" autoComplete="off" type="text" minLength="2" maxLength="30" defaultValue={"Виталий" || ""} required readOnly={!isEditing} />
          </div>
          <span className="profile__input-error">Произошла ошибка...</span>

          <div className="profile__field">
            <label className="profile__label">E-mail</label>
            <input className="profile__input" id="email" autoComplete="off" type="email" minLength="2" maxLength="30" defaultValue={"pochta@yandex.ru" || ""} required readOnly={!isEditing} />
          </div>
          <span className="profile__input-error">Произошла ошибка...</span>
        </form>

        {isEditing ? (
          <button type="button" className="profile__button-save button" onClick={handleSaveClick}>
            Сохранить
          </button>
        ) : (
          <button type="button" className="profile__button-edit button" onClick={handleEditClick}>
            Редактировать
          </button>
        )}
        <Link to="/sign-in" className="profile__button-exit button">
          Выйти из аккаунта
        </Link>
      </section>
    </>
  );
}

export default Profile;
