export default function Body() {

    return(
        <>
        <div className="introBox">
            <h2 className="welcomeTitle"> The Mission:</h2>

                <p className="welcomeText">Welcome to Tesla - the American electric vehicle company that pays to the future of sustainable driving. Our mission is to accelerate the world's transition to sustainable energy, and we achieve this by producing high-performance electric cars, energy storage systems, and solar products that combine advanced technology with sleek design.</p>
            
        </div>  

        <div className="elonProfile">
            <img className="elonPic" src="images/elonPic.webp"></img>
            <p>"People should pursue what they're passionate about. That will make them happier than pretty much anthing else." - Elon Musk</p>

        </div>

        <h2 className="listTitle">List of Tesla Cars:</h2>  

        <div className="teslaBox">
            <img className="teslaS" src="images/teslaModelS.jpg"></img>
            <p><b>Tesla Model S</b> is a masterpiece of sustainable engineering, paying to the future of driving. With its sleek and aerodynamic design, impressive acceleration, and long-range battery, this luxurious electric car is redefining what's possible on the road.</p>

            <br></br>

            <img className="tesla3" src="images/teslaModel3.webp"></img>
            <p><b>Tesla Model 3 </b>is an exceptional electric car that represents the future of sustainable transportation. Its contemporary and smooth design epitomizes innovation on the road, while the roomy and comfortable interior is filled with state-of-the-art features that make driving a pleasurable experience.</p>

            <br></br>

            <img className="teslaX" src="images/teslaModelX.jpg"></img>
            <p><b>Tesla Model X </b>is an outstanding electric car that embodies the future of sustainable transportation. Its modern and sophisticated design is a reflection of Tesla's dedication to innovation, while the ample and luxurious interior is equipped with advanced features that make driving a comfortable experience.</p>

        </div>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/azUbCdcAeFM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>        
        
        <div className="footer">
            <a href="https://github.com/superxp360">Code in GitHub</a>
        </div>
        </>

        

    )
        
}