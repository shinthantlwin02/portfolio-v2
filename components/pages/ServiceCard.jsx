"use client"

import { HoverEffect } from "../ui/card-hover-effect";
import {Services as ServicesData} from '@/data/data'

const ServiceCard = () => {
    return(
      <div className="max-w-5xl mx-auto md:px-8">
      <HoverEffect items={ServicesData} />
    </div>
    )
}

export default ServiceCard;
