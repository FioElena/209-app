import image from ".././assets/img/8125378224jpg.jpg"
export const Main = () => {
    return (
        <>
        <h1 className="text-center">Добро пожаловать!</h1>
        <div className="row mt-5">
            <div className="col-md-6"><img src={image} alt="" width="100%" /></div>
            <div className="col-md-6">Личный кабинет пользователя</div>
        </div>
        </>
    );
}