import useAuth from "../Hooks/useAuth";
import Slider from "../Components/Slider";

const Home = () => {
    const {user}=useAuth()
    console.log(user);
    return (
        <div>
            <Slider></Slider>
            <div className="container mx-auto p-4">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea eaque debitis dolores, nostrum impedit libero ducimus soluta quod fuga, exercitationem ullam laudantium, ex facere veniam. Exercitationem magni fuga vero dolore sunt veniam nam nulla esse? Eum quos fugiat tempora dolore, temporibus quaerat autem, numquam voluptatibus dolores, doloribus deserunt consectetur distinctio? Culpa commodi a assumenda consectetur fugit sapiente. Ipsam quae totam provident quibusdam voluptatum mollitia dolores, temporibus iusto nesciunt ipsum atque hic necessitatibus excepturi accusantium magni iste culpa fugit laborum veritatis adipisci. Laudantium quam, exercitationem ipsam voluptas ad eligendi aut eveniet, aspernatur adipisci, corrupti dolorem libero officiis? Perferendis quod temporibus ab, atque beatae fugit blanditiis quasi. Unde hic deleniti quas porro iusto nemo nostrum. Voluptatum voluptate odio cumque eligendi labore cum molestiae laudantium ipsa, culpa harum aliquid exercitationem est fuga nesciunt vero quo quod laborum quisquam distinctio veniam quibusdam omnis assumenda! Quasi dolore magni fugit alias, expedita quibusdam impedit, maxime debitis assumenda cupiditate blanditiis harum voluptatem est tempora odit architecto dolores quisquam, temporibus officiis soluta. Ipsam accusantium quam quaerat perferendis aut commodi maxime quae velit harum, neque molestias, sapiente hic eveniet. Nihil quos laborum numquam veritatis rem, neque nesciunt debitis expedita voluptas reprehenderit sint mollitia nobis at, cumque officiis. Ea, cupiditate?</p>

            </div>
            
        </div>
    );
};

export default Home;