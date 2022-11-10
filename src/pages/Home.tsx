import Card from "../components/Card";
import Title from "../components/Title";

function Home() {
    return (
        <>
            <Title />

            <Card
                name="Greek Salad"
                price={30.5}
                description="Great salad..."
                image="https://cdn.pixabay.com/photo/2016/08/09/10/30/tomatoes-1580273__340.jpg"
                category="Vegeterian"
                rating={4}
            />

            <Card
                name="Pad Thai"
                price={42}
                description="Yumi yumi"
                image="https://cdn.pixabay.com/photo/2017/02/25/15/23/pad-thai-2098017__340.jpg"
                category="Asian"
                rating={5}
            />

            <Card
                name="Fried Chicken"
                price={98.60}
                description="I like it"
                image="https://cdn.pixabay.com/photo/2014/01/16/01/48/chicken-nuggets-246180__340.jpg"
                category="Chicken"
                rating={3}
            />
        </>
    );
}

export default Home;