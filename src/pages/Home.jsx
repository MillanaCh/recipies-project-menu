import Form from "../components/Form"
import Recipies from "../components/Recipies"
import DrawerMenu from "../components/Drawer"
function Home(){
    return(
        <>
        <DrawerMenu/>
        <Form/>
        <Recipies/>
        </>
    )
}
export default Home