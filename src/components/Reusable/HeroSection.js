import React from 'react'
import BackgroundImage from 'gatsby-background-image'

export default function HeroSection({img,title,subtitile,heroclass}) {
    return (
            <BackgroundImage className={heroclass} fluid={img}>
                <h1 className="text-center text-white display-3">{title}</h1>
                <div>
                    <h4 className="text-warning lead">
                        {subtitile}
                    </h4>
                </div>
            </BackgroundImage>
    
    )
}
