import styles from "./Profile.module.css"

export const Profile = (props) => {
    let user = props.function(); 
    console.log(user);

    return (
        <div className="row">
            <div className="col-md-4">
                <img src={user.avatar} alt="" width="100%" />
            </div>
            <div className="col-md-8">
                <h2 className={styles.id}>Id: <span>{user.id}</span> </h2>
                <h3 className={styles.name}>Фамилия и имя: <span>{user.lastname} {user.name}</span> </h3>
                <h3 className={styles.email}>Email: <span>{user.email}</span> </h3>
                <p className={styles.about}>{user.about}
                </p>
                <button style={{backgroundColor: "green", pdding: "5px", borderRadius: "4px"}}>Отправить</button>
            </div>
        </div>
    )
}