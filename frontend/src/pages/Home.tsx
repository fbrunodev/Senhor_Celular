import React from "react"
import Header from "../components/Header"
import Carousel from "../components/Carousel";
import Benefits from "../components/Benefits"
import Deals from "../components/Deals"
import Category_Quick_Nav from "../components/Cartegory_Quick _Nav"
import ProductCard from "../components/ProductCard";
import NewsLetter from "../components/NewsLetter"
import Location from "../components/Location"
import Footer from "../components/Footer"


export default function Home() {
  return (
    <div>
      {/* 1️⃣ Hero / Carousel */}
      <Header/>
      <Carousel />
      <Benefits/>
      <Deals/>
      <Category_Quick_Nav/>
      <ProductCard/>
      <NewsLetter/>
      <Location/>
      <Footer/>
    
    </div>
  );
}
