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
  const handleButtonClick = (index) => {
    setActiveButton(index);
  };
  const pvtlabels = [
    { image: AdvertiseAgency, name: "Advertise Agency" },
    { image: Ambulance, name: "Ambulance" },
    { image: AutoShowrooms, name: "Auto Showrooms" },
    { image: Banks, name: "Banks" },
    { image: BicycleShwrooms, name: "Bicycle Shwrooms" },
    { image: BrickSand, name: "BrickSand" },
    { image: CCCameraDealers, name: "CC Camera Dealers" },
    { image: Cafe, name: "Cafe" },
    { image: CarService, name: "CarService" },
    { image: CarShowroom, name: "Car Showroom" },
    { image: Carpenters, name: "Carpenters" },
    { image: Cement, name: "Cement" },
    { image: ChartedAccount, name: "Charted Account" },
    { image: ChildCareCentres, name: "Child Care Centres" },
    { image: CoachingCenter, name: "Coaching Center" },
    { image: Coldstorages, name: "Coldstorages" },
    { image: CranesShowrooms, name: "Cranes Showrooms" },
    { image: CurriesPoint, name: "Curries Point" },
    { image: DiagnosticCentres, name: "Diagnostic Centres" },
    { image: DigitalMarket, name: "Digital Market" },
    { image: DrivingSchools, name: "Driving Schools" },
    { image: ElectricShowroom, name: "Electric Showroom" },
    { image: ElectricalShop, name: "Electrical Shop" },
    { image: ElectronicShowroom, name: "Electronic Showroom" },
    { image: Ellipse, name: "Ellipse" },
    { image: EventOrganizers, name: "Event Organizers" },
    { image: FancyShop, name: "Fancy Shop" },
    { image: FastFoodCentres, name: "Fast Food Centres" },
    { image: Fertilizers, name: "Fertilizers" },
    { image: FitnessEquipment, name: "Fitness Equipment" },
    { image: FlourMills, name: "Flour Mills" },
    { image: FlowerShop, name: "Flower Shop" },
    { image: FootWareShops, name: "FootWare Shops" },
    { image: ForeginCurrencyExchange, name: "Foregin Currency Exchange" },
    { image: ForeginLanguageTrainers, name: "Foregin Language Trainers" },
    { image: FruitShops, name: "Fruit Shops" },
    { image: FunctionHalls, name: "Function Halls" },
    { image: Furniture, name: "Furniture" },
    { image: GoldShop, name: "Gold Shop" },
    { image: Gym, name: "Gym" },
    { image: Hardware, name: "Hardware" },
    { image: Hospital, name: "Hospital" },
    { image: Hostels, name: "Hostels" },
    { image: HotelsRestaurants, name: "Hotels & Restaurants" },
    { image: InsuranceCompany, name: "Insurance Company" },
    { image: Intermediates, name: "Intermediates" },
    { image: JCBShowroom, name: "JCB Showroom" },
    { image: Kitchenware, name: "Kitchenware" },
    { image: LaptopServices, name: "Laptop Services" },
    { image: LaundryDryCleaning, name: "Laundry & Dry Cleaning" },
    { image: LiquorShops, name: "Liquor Shops" },
    { image: Loans, name: "Loans" },
    { image: MarriageHalls, name: "Marriage Halls" },
    { image: Matrimony, name: "Matrimony" },
    { image: MedicalShops, name: "Medical Shops" },
    { image: MobileService, name: "Mobile Service" },
    { image: Nursery, name: "Nursery" },
    { image: Nutritionist, name: "Nutritionist" },
    { image: Oilmils, name: "Oil mils" },
    { image: PaintShops, name: "Paint Shops" },
    { image: PestControl, name: "Pest Control" },
    { image: PetShop, name: "Pet Shop" },
    { image: Petrol, name: "Petrol" },
    { image: PlaySchools, name: "Play Schools" },
    { image: PlayWoodShops, name: "PlayWood Shops" },
    { image: Plumper, name: "Plumper" },
    { image: PoojaItems, name: "Pooja Items" },
    { image: PoojaryPandit, name: "Poojary(Pandit)" },
    { image: Printer, name: "Printer" },
    { image: Psychologist, name: "Psychologist" },
    { image: RentedHouses, name: "Rented Houses" },
    { image: Sanitray, name: "Sanitray" },
    { image: SepticTankCleaners, name: "Septic Tank Cleaners" },
    { image: ShoppingMall, name: "Shopping Mall" },
    { image: SilverShops, name: "Silver Shops" },
    { image: Spas, name: "Spas" },
    { image: Sportscoach, name: "Sportscoach" },
    { image: StadiumGrounds, name: "Stadium & Grounds" },
    { image: StationaryShop, name: "Stationary Shop" },
    { image: SurgicalEquipment, name: "Surgical Equipment" },
    { image: Sweetsshop, name: "Sweetsshop" },
    { image: Temples, name: "Temples" },
    { image: ThemeParks, name: "Theme Parks" },
    { image: TiffinCentres, name: "Tiffin Centres" },
    { image: TilesMarbles, name: "Tiles & Marbles" },
    { image: TimberDepot, name: "Timber Depot" },
    { image: TourismGuides, name: "Tourism Guides" },
    { image: TouristPlaces, name: "Tourist Places" },
    { image: TravelBags, name: "Travel Bags" },
    { image: University, name: "University" },
    { image: VeternaryClinics, name: "Veternary Clinics" },
    { image: WaterSuppliers, name: "Water Suppliers" },
    { image: Welders, name: "Welders" },
    { image: YogaCanters, name: "Yoga Canters" },
    { image: Interior, name: "interior" },
    { image: Ironsteel, name: "iron & steel" },
    { image: JuiceShops, name: "juice Shops" },
    { image: LodgeHotels, name: "lodge & Hotels" },
    { image: Painters, name: "painters" },
    { image: PrivateLibraries, name: "private Libraries" },
    { image: Pubs, name: "pubs" },
    { image: Schools, name: "schools" },
    { image: TuitionCentres, name: "tuition Centres" },
    { image: Vegetablemarket, name: "vegetable market" },
  ];
  const slice = pvtlabels.slice(0, noOfElements);
  return (
    <>
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
            Best Gynaecologist Doctors{" "}
            <span style={{ color: "#C68643" }}>in Hyderabad :</span>{" "}
          </div>
      
    </>
  );
};

export default PrivateServices;
