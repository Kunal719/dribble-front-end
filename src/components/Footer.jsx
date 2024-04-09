const Footer = () => {
    return (
        <footer className="bg-gray-100 text-black py-8 px-3">
            <div className="container mx-auto">
                <div className="flex justify-between items-start max-md:flex max-md:flex-col">
                    <div className="flex flex-col lg:w-1/5 md:w-1/3 max-lg:p-5 max-md: justify-center ">
                        <img src="/images/dribble.png" alt="Dribbble" className="mb-4" width={80} height={30} />
                        <p className="text-sm">
                            Dribbble is the {"world's"} leading community for creatives to share, grow, and get hired.
                        </p>
                        <div className='mt-6 flex gap-4'>
                            <img src="/images/dribble-circle.png" alt="dribble" width={20} height={20} />
                            <img src="/images/twitter.png" alt="dribble" width={20} height={20} />
                            <img src="/images/facebook.png" alt="dribble" width={20} height={20} />
                            <img src="/images/instagram.png" alt="dribble" width={20} height={20} />
                            <img src="/images/pinterest-logo.png" alt="dribble" width={20} height={20} />
                        </div>
                    </div>
                    <div className="p-5 grid lg:grid-cols-5 md:grid-cols-3 max-md:grid-cols-3 max-sm:grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-bold mb-2">For designers</h4>
                            <ul className="space-y-3 text-sm">
                                <li><a href="#" className="hover:text-grey-200">Go Pro!</a></li>
                                <li><a href="#" className="hover:text-grey-200">Explore design work</a></li>
                                <li><a href="#" className="hover:text-grey-200">Design blog</a></li>
                                <li><a href="#" className="hover:text-grey-200">Overtime podcast</a></li>
                                <li><a href="#" className="hover:text-grey-200">Playoffs</a></li>
                                <li><a href="#" className="hover:text-grey-200">Weekly Warm-Up</a></li>
                                <li><a href="#" className="hover:text-grey-200">Refer a Friend</a></li>
                                <li><a href="#" className="hover:text-grey-200">Code of conduct</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-2">Hire designers</h4>
                            <ul className="space-y-3 text-sm">
                                <li><a href="#" className="hover:text-grey-200">Post a job opening</a></li>
                                <li><a href="#" className="hover:text-grey-200">Post a freelance project</a></li>
                                <li><a href="#" className="hover:text-grey-200 mb-2">Search for designers</a></li>
                                <li><a href="#" className="font-bold mb-2">Brands</a></li>
                                <li><a href="#" className="hover:text-grey-200">Advertise with us</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-2">Company</h4>
                            <ul className="space-y-3 text-sm">
                                <li><a href="#" className="hover:text-grey-200">About</a></li>
                                <li><a href="#" className="hover:text-grey-200">Careers</a></li>
                                <li><a href="#" className="hover:text-grey-200">Support</a></li>
                                <li><a href="#" className="hover:text-grey-200">Media kit</a></li>
                                <li><a href="#" className="hover:text-grey-200">Testimonials</a></li>
                                <li><a href="#" className="hover:text-grey-200">API</a></li>
                                <li><a href="#" className="hover:text-grey-200">Terms of service</a></li>
                                <li><a href="#" className="hover:text-grey-200">Privacy policy</a></li>
                                <li><a href="#" className="hover:text-grey-200">Cookie policy</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-2">Directories</h4>
                            <ul className="space-y-3 text-sm">
                                <li><a href="#" className="hover:text-grey-200">Design jobs</a></li>
                                <li><a href="#" className="hover:text-grey-200">Designers for hire</a></li>
                                <li><a href="#" className="hover:text-grey-200">Freelance designers for hire</a></li>
                                <li><a href="#" className="hover:text-grey-200">Tags</a></li>
                                <li><a href="#" className="hover:text-grey-200 mb-2">Places</a></li>
                                <li><a href="#" className="font-bold mb-2">Design Assets</a></li>
                                <li><a href="#" className="hover:text-grey-200">Dribble Marketplace</a></li>
                                <li><a href="#" className="hover:text-grey-200">Creative Market</a></li>
                                <li><a href="#" className="hover:text-grey-200">Fontspring</a></li>
                                <li><a href="#" className="hover:text-grey-200">Font Squirrel</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-2">Design Resources</h4>
                            <ul className="space-y-3 text-sm">
                                <li><a href="#" className="hover:text-grey-200">Freelancing</a></li>
                                <li><a href="#" className="hover:text-grey-200">Design Hiring</a></li>
                                <li><a href="#" className="hover:text-grey-200">Design Portfolio</a></li>
                                <li><a href="#" className="hover:text-grey-200">Design Education</a></li>
                                <li><a href="#" className="hover:text-grey-200">Creative Process</a></li>
                                <li><a href="#" className="hover:text-grey-200">Design Industry Trends</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <div className='border-[0.5px] h-0 border-gray-200'>

            </div>
            <div className="container flex justify-between mx-auto max-lg:justify-center max-lg:items-center max-lg:flex-col gap-4 mt-12 text-sm">
                <p>&copy; {new Date().getFullYear()} Dribbble. All rights reserved.</p>
                <div className="flex gap-2">
                    <p><span className='font-bold'>20,501,853</span> shots dribbled</p>
                    <img src="/images/social.png" alt="dribble" height={20} width={20} />
                </div>

            </div>
        </footer>
    );
};

export default Footer;