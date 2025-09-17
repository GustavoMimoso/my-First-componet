import { Skills } from "./Skills"
const Profile: React.FC = () => {
    return(
        <div>
        <img 
            src="https://media.licdn.com/dms/image/v2/D4D03AQF-f8Ur7SzZpA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1731351544754?e=1761177600&v=beta&t=cTt-3OaGuByc8ht-Jnb_VP2pIhQrNsDxvwqdp-qLcDw " 
            alt="Gustavo Mimoso" 
            width="300px"
        />
        <h3>Gustavo Mimoso</h3>
        <p><b>Cargo Atual:</b>Suporte TI</p>
        <Skills/>
    </div>
    )
}
export default Profile;

export function Job () {
    return(
        <p>Empresa Atual: Guariglia Leilões</p>
    )
}