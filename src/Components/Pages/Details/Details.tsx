import { Link } from 'react-router-dom'
import './Details.scss'

export const Details = () => {

    return (
        <section className="Details-Page">
            <h1> - Details of each product</h1>

            <div className='details-Container'>
                <div className="details-product">
                    <img src="https://cdn.dummyjson.com/product-images/1/thumbnail.jpg" alt="iPhone 9" />
                    <h3>iPhone 9</h3>
                    <p> Price:£549.00 </p>
                    <p className='p'>Information : <br /> The iPhone 9 comes with a 20megapixel camera. 2. And it comes with a 5.8 inch display screen size. Wow, the iPhone 9 device comes with a large internal memory storage of 128GB and 3GB RAM.  </p>
                    <Link to={"/"}><button>Back to Products</button></Link>
                </div>

                <div className="details-product">
                    <img src="https://cdn.dummyjson.com/product-images/2/thumbnail.jpg" alt="iPhone X" />
                    <h3>iPhone X</h3>
                    <p>Price:£899.00</p>
                    <p className='p'>Information : <br /> The iPhone X contains Apple's A11 Bionic SoC, (system-on-chip) also used in the iPhone 8 and 8 Plus, which is a six-core processor with two cores optimized for performance (25% faster than the A10 Fusion processor), along with four cores optimized for efficiency (70% faster than the previous generation).  </p>
                    <Link to={"/"}><button>Back to Products</button></Link>
                </div>

                <div className="details-product">
                    <img src="https://cdn.dummyjson.com/product-images/3/thumbnail.jpg" alt="Samsung Universe 9" />
                    <h3>Samsung Universe 9</h3>
                    <p>Price:£1,249.00</p>
                    <p className='p'>Information : <br /> Samsung Electronics, a global leader in the visual display industry, today announced the future of gaming monitors with the newest entries in its Odyssey monitor series: the Odyssey Neo G9 57″ (G95NC model) and the Odyssey Ark 55″ (G97NC model). The gaming monitors are on display at Gamescom 2023 — the world’s largest event for computer and video games, held from August 23 to 27 in Cologne, Germany — and the Odyssey Neo G9 57″ can now be pre-ordered globally. </p>
                    <Link to={"/"}><button>Back to Products</button></Link>
                </div>

                <div className="details-product">
                    <img src="https://cdn.dummyjson.com/product-images/4/thumbnail.jpg" alt="OPPOF19" />
                    <h3>OPPO F19</h3>
                    <p>Price: £280.00 </p>
                    <p className='p'>Information : <br /> 6.43" inch (16.3cm) FHD+ Super AMOLED Punch-hole Display with 2400x1080 pixels. Larger Screen to Body ratio of 90.8%, In-display Fingerprint 3.0. Mediatek Dimensity 800U 5G Supports Dual 5G or 4G Sim. Powerful 2.4 ghz Octa-core Processor, Support LPDDR4x memory and latest UFS 2.1 storage. </p>
                    <Link to={"/"}><button>Back to Products</button></Link>
                </div>

                <div className="details-product">
                    <img src="https://cdn.dummyjson.com/product-images/5/thumbnail.jpg" alt="Huawei P30" />
                    <h3>Huawei P30</h3>
                    <p>Price:£499.00</p>
                    <p className='p'>Information : <br /> The Huawei P30 is a high-end Android phone powered by Huawei's Kirin 980 chip, backed by up to 8GB of RAM and 128GB of storage. A key selling point is the triple camera at the back, comprised of a main, 40MP camera promising great low-light shots, a super wide-angle camera, and a telephoto camera with 3x zoom. </p>
                    <Link to={"/"}><button>Back to Products</button></Link>
                </div>

                <div className="details-product">
                    <img src="https://cdn.dummyjson.com/product-images/6/thumbnail.png" alt="MacBook Pro" />
                    <h3>MacBook Pro</h3>
                    <p>Price:£1,749.00</p>
                    <p className='p'>Information : <br /> Apple MacBook Pro is a macOS laptop with a 13.30-inch display that has a resolution of 2560x1600 pixels. It is powered by a Core i5 processor and it comes with 12GB of RAM. The Apple MacBook Pro packs 512GB of SSD storage. </p>
                    <Link to={"/"}><button>Back to Products</button></Link>
                </div>
            </div>
        </section>
    )
}

