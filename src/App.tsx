import './App.css';
import Tab from './component/Tab';
import Tabs from './component/Tabs';
import img1 from './img/025.webp';
import img2 from './img/050.webp';
import img3 from './img/150.webp';
import img4 from './img/200.webp';
import img5 from './img/400.webp';

interface Props{}

const tabs = [
  {  title:"25" , content:"Hello tab 1"},
  {  title:"50" , content:"Hello tab 2"},
  {  title:"150" , content:"Hello tab 3"},
  {  title:"200" , content:"Hello tab 4"},
  {  title:"400" , content:"Hello tab 4"},
];
const tabs1 = [
  {  title:"25" ,heading:"Customize your drink " ,content:"Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favorite syrup."},
  {  title:"50" ,heading:"Brewed hot coffee, bakery item or hot tea" ,content:"Pair coffee cake or an almond croissant with your fresh cup of hot brew."},
  {  title:"150" ,heading:"Handcrafted drink, hot breakfast or parfait" ,content:"Have a really good morning with a breakfast sandwich, oatmeal or your favorite drink."},
  {  title:"200" ,heading:"Salad, sandwich or protein box" ,content:"Nourish your day with a hearty Chipotle Chicken Wrap or Eggs & Cheese Protein Box"},
  {  title:"400" ,heading:"Select merchandise or at-home coffee" ,content:"Take home a signature cup, a bag of coffee or your choice of select coffee accessories."},
];


var x= [img1,img2,img3,img4,img5];
function App() {

return(
  <>
<Tabs>
{tabs1.map((tab,index) =>{
  return <Tab title={tab.title} ><div className="flex justify-center">
  <img src={x[index]} className="w-80 h-60"></img><div className="w-60 mt-14 ml-1 lg:ml-3">
    <h1 className="pb-4 font-bold">{tab.heading}</h1>
    <div>{tab.content}</div></div></div></Tab>
})}
    </Tabs>
   <div className="mb-96">

   </div>
    <Tabs>
    <Tab title="25" > Tab1 Content</Tab>
    <Tab title="150" > Tab2 Content</Tab>
    <Tab title="200" > Tab3 Content</Tab>
    </Tabs>
  </>
  );
}

export default App;
