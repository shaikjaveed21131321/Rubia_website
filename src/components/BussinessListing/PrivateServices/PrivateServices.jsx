import React, { useState } from "react";
import AdvertiseAgency from "./assets/AdvertiseAgency.png";
import Ambulance from "./assets/Ambulance.png";
import AutoShowrooms from "./assets/AutoShowrooms.png";
import Banks from"./assets/Banks.png";
import BicycleShwrooms from"./assets/BicycleShwrooms.png";
import BrickSand from "./assets/Brick&Sand.png";
import CCCameraDealers from "./assets/CCCameraDealers.png";
import Cafe from "./assets/Cafe.png";
import CarService from "./assets/CarService.png";
import CarShowroom from "./assets/CarShowroom.png";
import Carpenters from "./assets/Carpenters.png";
import Cement from "./assets/Cement.png";
import ChartedAccount from "./assets/ChartedAccount.png";
import ChildCareCentres from "./assets/ChildCareCentres.png";
import CoachingCenter from "./assets/CoachingCenter.png";
import Coldstorages from "./assets/Coldstorages.png";
import CranesShowrooms from "./assets/CranesShowrooms.png";
import CurriesPoint from "./assets/CurriesPoint.png";
import DiagnosticCentres from "./assets/DiagnosticCentres.png";
import DigitalMarket from "./assets/DigitalMarket.png";
import DrivingSchools from "./assets/DrivingSchools.png";
import ElectricShowroom from "./assets/ElectricShowroom.png";
import ElectricalShop from "./assets/ElectricalShop.png";
import ElectronicShowroom from "./assets/ElectronicShowroom.png";
import Ellipse from  "./assets/Ellipse 22.png";
import EventOrganizers from "./assets/EventOrganizers.png";
import FancyShop from "./assets/FancyShop.png";
import FastFoodCentres from "./assets/FastFoodCentres.png";
import Fertilizers from "./assets/Fertilizers.png";
import FitnessEquipment from "./assets/FitnessEquipment.png";
import FlourMills from "./assets/Flour Mills.png";
import FlowerShop from "./assets/FlowerShop.png";
import FootWareShops from "./assets/FootWareShops.png";
import ForeginCurrencyExchange from "./assets/ForeginCurrencyExchange.png";
import ForeginLanguageTrainers from "./assets/ForeginLanguageTrainers.png";
import FruitShops from "./assets/FruitShops.png";
import FunctionHalls from "./assets/FunctionHalls.png";
import Furniture from "./assets/Furniture.png";
import GoldShop from "./assets/GoldShop.png";
import Gym from "./assets/Gym.png";
import Hardware from "./assets/Hardware.png";
import Hospital from "./assets/Hospital.png";
import Hostels from "./assets/Hostels.png";
import HotelsRestaurants from "./assets/Hotels&Restaurants.png";
import InsuranceCompany from "./assets/InsuranceCompany.png";
import Intermediates from "./assets/Intermediates.png";
import JCBShowroom from "./assets/JCBShowroom.png";
import Kitchenware from "./assets/Kitchenware.png";
import LaptopServices from "./assets/Laptop Services.png";
import LaundryDryCleaning from "./assets/Laundry & Dry Cleaning.png";
import LiquorShops from "./assets/LiquorShops.png";
import Loans from "./assets/Loans.png";
import MarriageHalls from "./assets/MarriageHalls.png";
import Matrimony from "./assets/Matrimony.png";
import MedicalShops from "./assets/MedicalShops.png";
import MobileService from "./assets/MobileService.png";
import Nursery from "./assets/Nursery.png";
import Nutritionist from "./assets/Nutritionist.png";
import Oilmils from "./assets/Oil mils.png";
import PaintShops from "./assets/PaintShops.png";
import PestControl from "./assets/PestControl.png";
import PetShop from "./assets/Pet Shop.png";
import Petrol from "./assets/Petrol.png";
import PlaySchools from "./assets/PlaySchools.png";
import PlayWoodShops from "./assets/PlayWoodShops.png";
import Plumper from "./assets/Plumper.png";
import PoojaItems from "./assets/PoojaItems.png";
import PoojaryPandit from "./assets/Poojary(Pandit).png";
import Printer from "./assets/Printer.png";
import Psychologist from "./assets/Psychologist.png";
import RentedHouses from "./assets/RentedHouses.png";
import Sanitray from "./assets/Sanitray.png";
import SepticTankCleaners from "./assets/SepticTankCleaners.png";
import ShoppingMall from "./assets/ShoppingMall.png";
import SilverShops from "./assets/SilverShops.png";
import Spas from "./assets/Spas.png";
import Sportscoach from "./assets/Sportscoach.png";
import StadiumGrounds from "./assets/Stadium&Grounds.png";
import StationaryShop from "./assets/StationaryShop.png";
import SurgicalEquipment from "./assets/SurgicalEquipment.png";
import Sweetsshop from "./assets/Sweetsshop.png";
import Temples from "./assets/Temples.png";
import ThemeParks from "./assets/ThemeParks.png";
import TiffinCentres from "./assets/TiffinCentres.png";
import TilesMarbles from "./assets/Tiles&Marbles.png";
import TimberDepot from "./assets/TimberDepot.png";
import TourismGuides from "./assets/TourismGuides.png";
import TouristPlaces from "./assets/Tourist Places.png";
import TravelBags from "./assets/TravelBags.png";
import University from "./assets/University.png";
import VeternaryClinics from "./assets/Veternary Clinics.png";
import WaterSuppliers from "./assets/Water Suppliers.png";
import Welders from "./assets/Welders.png";
import YogaCanters from "./assets/YogaCanters.png";
import Interior from "./assets/interior.png";
import Ironsteel from "./assets/iron&steel.png";
import JuiceShops from "./assets/juiceShops.png";
import LodgeHotels from "./assets/lodge&Hotels.png";
import Painters from "./assets/painters.png";
import PrivateLibraries from "./assets/privateLibraries.png";
import Pubs from "./assets/pubs.png";
import Schools from "./assets/schools.png";
import TuitionCentres from "./assets/tuitionCentres.png";
import Vegetablemarket from "./assets/vegetablemarket.png";
import "../PrivateServices/PrivateServices.css";


const PrivateServices = ({ handleClick }) => {
  const [title, setTitle] = useState("view more  \u2193");  
  const [activeButton, setActiveButton] = useState(null);
  const [activeSubtitle,setActiveSubtitle]=useState("Services")
  const [noOfElements, setElements] = useState(12);

  const toggle = () => {
    if (noOfElements >= pvtlabels.length) {
      setTitle("view more \u2193");
      setElements(12);
    } else {
      setElements(noOfElements + 12);
      if (noOfElements + 12 >= pvtlabels.length) {
        setTitle("view less \u2191");
      }
    }
  };
  const handleButtonClick = (index, subtitle) => {
    setActiveButton(index);
    setActiveSubtitle(subtitle);
  };
  const pvtlabels = [
    { image: AdvertiseAgency, name: "Advertise Agency", subtitle: "Advertise Agency" },
    { image: Ambulance, name: "Ambulance", subtitle: "Emergency Services" },
    { image: AutoShowrooms, name: "Auto Showrooms", subtitle: "Auto Showrooms" },
    { image: Banks, name: "Banks", subtitle: "Finance" },
    { image: BicycleShwrooms, name: "Bicycle Showrooms", subtitle: "cycles" },
    { image: BrickSand, name: "Brick & Sand", subtitle: "construction" },
    { image: CCCameraDealers, name: "CC Camera Dealers", subtitle: "security" },
    { image: Cafe, name: "Cafe", subtitle: "coffee" },
    { image: CarService, name: "Car Service", subtitle: "maintenance" },
    { image: CarShowroom, name: "Car Showroom", subtitle: "cars" },
    { image: Carpenters, name: "Carpenters", subtitle: "woodwork" },
    { image: Cement, name: "Cement", subtitle: "construction" },
    { image: ChartedAccount, name: "Charted Account", subtitle: "finance" },
    { image: ChildCareCentres, name: "Child Care Centres", subtitle: "kids" },
    { image: CoachingCenter, name: "Coaching Center", subtitle: "education" },
    { image: Coldstorages, name: "Cold Storages", subtitle: "storage" },
    { image: CranesShowrooms, name: "Cranes Showrooms", subtitle: "machinery" },
    { image: CurriesPoint, name: "Curries Point", subtitle: "food" },
    { image: DiagnosticCentres, name: "Diagnostic Centres", subtitle: "health" },
    { image: DigitalMarket, name: "Digital Market", subtitle: "online" },
    { image: DrivingSchools, name: "Driving Schools", subtitle: "education" },
    { image: ElectricShowroom, name: "Electric Showroom", subtitle: "electronics" },
    { image: ElectricalShop, name: "Electrical Shop", subtitle: "supplies" },
    { image: ElectronicShowroom, name: "Electronic Showroom", subtitle: "electronics" },
    { image: Ellipse, name: "Ellipse", subtitle: "shapes" },
    { image: EventOrganizers, name: "Event Organizers", subtitle: "events" },
    { image: FancyShop, name: "Fancy Shop", subtitle: "accessories" },
    { image: FastFoodCentres, name: "Fast Food Centres", subtitle: "food" },
    { image: Fertilizers, name: "Fertilizers", subtitle: "agriculture" },
    { image: FitnessEquipment, name: "Fitness Equipment", subtitle: "health" },
    { image: FlourMills, name: "Flour Mills", subtitle: "food" },
    { image: FlowerShop, name: "Flower Shop", subtitle: "florist" },
    { image: FootWareShops, name: "FootWare Shops", subtitle: "shoes" },
    { image: ForeginCurrencyExchange, name: "Foreign Currency Exchange", subtitle: "finance" },
    { image: ForeginLanguageTrainers, name: "Foreign Language Trainers", subtitle: "education" },
    { image: FruitShops, name: "Fruit Shops", subtitle: "groceries" },
    { image: FunctionHalls, name: "Function Halls", subtitle: "events" },
    { image: Furniture, name: "Furniture", subtitle: "home" },
    { image: GoldShop, name: "Gold Shop", subtitle: "jewelry" },
    { image: Gym, name: "Gym", subtitle: "fitness" },
    { image: Hardware, name: "Hardware", subtitle: "supplies" },
    { image: Hospital, name: "Hospital", subtitle: "health" },
    { image: Hostels, name: "Hostels", subtitle: "accommodation" },
    { image: HotelsRestaurants, name: "Hotels & Restaurants", subtitle: "food" },
    { image: InsuranceCompany, name: "Insurance Company", subtitle: "finance" },
    { image: Intermediates, name: "Intermediates", subtitle: "education" },
    { image: JCBShowroom, name: "JCB Showroom", subtitle: "machinery" },
    { image: Kitchenware, name: "Kitchenware", subtitle: "home" },
    { image: LaptopServices, name: "Laptop Services", subtitle: "technology" },
    { image: LaundryDryCleaning, name: "Laundry & Dry Cleaning", subtitle: "services" },
    { image: LiquorShops, name: "Liquor Shops", subtitle: "beverages" },
    { image: Loans, name: "Loans", subtitle: "finance" },
    { image: MarriageHalls, name: "Marriage Halls", subtitle: "events" },
    { image: Matrimony, name: "Matrimony", subtitle: "relationships" },
    { image: MedicalShops, name: "Medical Shops", subtitle: "health" },
    { image: MobileService, name: "Mobile Service", subtitle: "technology" },
    { image: Nursery, name: "Nursery", subtitle: "plants" },
    { image: Nutritionist, name: "Nutritionist", subtitle: "health" },
    { image: Oilmils, name: "Oil Mills", subtitle: "food" },
    { image: PaintShops, name: "Paint Shops", subtitle: "home" },
    { image: PestControl, name: "Pest Control", subtitle: "services" },
    { image: PetShop, name: "Pet Shop", subtitle: "pets" },
    { image: Petrol, name: "Petrol", subtitle: "fuel" },
    { image: PlaySchools, name: "Play Schools", subtitle: "education" },
    { image: PlayWoodShops, name: "Plywood Shops", subtitle: "home" },
    { image: Plumper, name: "Plumber", subtitle: "services" },
    { image: PoojaItems, name: "Pooja Items", subtitle: "spiritual" },
    { image: PoojaryPandit, name: "Poojary (Pandit)", subtitle: "spiritual" },
    { image: Printer, name: "Printer", subtitle: "technology" },
    { image: Psychologist, name: "Psychologist", subtitle: "health" },
    { image: RentedHouses, name: "Rented Houses", subtitle: "accommodation" },
    { image: Sanitray, name: "Sanitary", subtitle: "supplies" },
    { image: SepticTankCleaners, name: "Septic Tank Cleaners", subtitle: "services" },
    { image: ShoppingMall, name: "Shopping Mall", subtitle: "shopping" },
    { image: SilverShops, name: "Silver Shops", subtitle: "jewelry" },
    { image: Spas, name: "Spas", subtitle: "wellness" },
    { image: Sportscoach, name: "Sports Coach", subtitle: "education" },
    { image: StadiumGrounds, name: "Stadium & Grounds", subtitle: "sports" },
    { image: StationaryShop, name: "Stationery Shop", subtitle: "supplies" },
    { image: SurgicalEquipment, name: "Surgical Equipment", subtitle: "health" },
    { image: Sweetsshop, name: "Sweets Shop", subtitle: "food" },
    { image: Temples, name: "Temples", subtitle: "spiritual" },
    { image: ThemeParks, name: "Theme Parks", subtitle: "entertainment" },
    { image: TiffinCentres, name: "Tiffin Centres", subtitle: "food" },
    { image: TilesMarbles, name: "Tiles & Marbles", subtitle: "home" },
    { image: TimberDepot, name: "Timber Depot", subtitle: "construction" },
    { image: TourismGuides, name: "Tourism Guides", subtitle: "travel" },
    { image: TouristPlaces, name: "Tourist Places", subtitle: "travel" },
    { image: TravelBags, name: "Travel Bags", subtitle: "shopping" },
    { image: University, name: "University", subtitle: "education" },
    { image: VeternaryClinics, name: "Veterinary Clinics", subtitle: "health" },
    { image: WaterSuppliers, name: "Water Suppliers", subtitle: "supplies" },
    { image: Welders, name: "Welders", subtitle: "services" },
    { image: YogaCanters, name: "Yoga Centers", subtitle: "wellness" },
    { image: Interior, name: "Interior", subtitle: "home" },
    { image: Ironsteel, name: "Iron & Steel", subtitle: "construction" },
    { image: JuiceShops, name: "Juice Shops", subtitle: "beverages" },
    { image: LodgeHotels, name: "Lodge & Hotels", subtitle: "accommodation" },
    { image: Painters, name: "Painters", subtitle: "services" },
    { image: PrivateLibraries, name: "Private Libraries", subtitle: "education" },
    { image: Pubs, name: "Pubs", subtitle: "entertainment" },
    { image: Schools, name: "Schools", subtitle: "education" },
    { image: TuitionCentres, name: "Tuition Centres", subtitle: "education" },
    { image: Vegetablemarket, name: "Vegetable Market", subtitle: "groceries" },
  ];
  const slice = pvtlabels.slice(0, noOfElements);
  return (
    <>
    <div>

    
    <div className="header_pvt">
    Private <span style={{color:"#C68643",fontWeight:"700"}}>Organizations :</span>
    </div>
      <div id="pvt_container">
        <div className="pvt_sub_container">
        {slice.map((e, index) => (
            <form action="" key={index}>
              <div
                className="pvt_labels"
                key={index}
                onClick={() => handleButtonClick(index,e.name)}
                style={{
                  backgroundColor:
                    activeButton === index ? "#650000" : "#FAF2EB",
                }}
              >
                <div id="pvt_img">
                  <img className="pvt_img" src={e.image} alt="" />
                </div>
                <div
                  className="pvt_text"
                  key={index}
                  style={{
                    color: activeButton === index ? "white" : "#650000",
                  }}
                >
                  {e.name}
                </div>
              </div>
            </form>
          ))}
        </div>
        <button type="button" className="view" onClick={toggle}>
        {title}
      </button>
      </div>
     
      <br />
      
     
      <div className="header_b1">
            {" "}
            {activeSubtitle}{" "}
            <span style={{ color: "#C68643" }}>in Hyderabad :</span>{" "}
          </div>
     
      </div>
    
    </>
  );
};

export default PrivateServices;
