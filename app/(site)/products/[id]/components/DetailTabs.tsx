import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MdStarRate } from "react-icons/md"
import { MdOutlineStarOutline } from "react-icons/md";

export default function DetailTabs() {
  return (
    <section className="py-[40px] border-t border-b ">
        <Tabs defaultValue="account">
        <TabsList className="flex justify-center py-10">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="reviews">Customer Reviews</TabsTrigger>
            <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
            <TabsTrigger value="return">Return Policies</TabsTrigger>
        </TabsList>
        <TabsContent value="description">
            <div className="flex flex-col gap-5 text-[#555]">
                <div className="flex flex-col lg:flex-row gap-8 w-full">
                    <div className="flex flex-col gap-4 w-full lg:w-1/2">
                        <h4 className="text-[18px] font-medium">Outstanding Features</h4>
                        <p>The garments labelled as committed are products that have been produced using sustainable fibres or processes, reducing their environmental impact. Umino’s goal is to support the implementation of practices more committed to the environment.</p>
                        <p>
                        – Tonal stitching: 98% cotton, 2% elastane.<br/>
                        – Supple and stretch knit with a rich touch of wool.<br/>
                        – Model: Model is 6′1″, wearing a size M.<br/>
                        – Caring for your clothes is caring for the environment. 
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="text-[18px] font-medium">Washing Instructions</h4>
                        <p>
                        Machine wash max. 30ºC. Short spin.<br/>
                        Iron maximum 110ºC.<br/>
                        Do not bleach/bleach.<br/>
                        Do not dry clean.<br/>
                        Tumble dry, medium hear.<br/>
                        </p>
                    </div>
                </div>
                <p>
                    We work with monitoring programmes to ensure compliance with our social, environmental and health and safety standards for our garments. To assess compliance, we have developed a programme of audits and continuous improvement plans. Made of super-soft cotton, the Organic Cotton Cutaway Tank features a high neck and back, and a slight curve at the shoulders, which makes it extra flattering. If there’s one thing the ’90s got right, it’s the basics.
                </p>
            </div>
        </TabsContent>
        <TabsContent value="reviews">
            <h2 className="text-[20px] font-medium text-center">Customer Reviews</h2>
            <div className="flex flex-col md:flex-row justify-center items-center py-10 border-b m-auto gap-5">
                <div className="md:w-1/3 flex flex-col justify-center items-center">
                <div className='flex items-center'>
                    <MdStarRate />
                    <MdStarRate />
                    <MdStarRate />
                    <MdStarRate />
                    <MdStarRate />
                    <p className="ml-5">5.00 out of 5</p>
                </div>
                <p>Based on 2 reviews</p>
                </div>
                <div className="md:border-r md:border-l flex flex-col justify-center items-center md:w-1/3">
                    <div className="flex items-center gap-3">
                        <div className="flex">
                            <MdStarRate />
                            <MdStarRate />
                            <MdStarRate />
                            <MdStarRate />
                            <MdStarRate />
                        </div>
                        <div className="w-[100px] rounded-full h-1 bg-[#111]"></div>
                        <span>1</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex">
                            <MdStarRate />
                            <MdStarRate />
                            <MdStarRate />
                            <MdStarRate />
                            <MdOutlineStarOutline />
                        </div>
                        <div className="w-[100px] rounded-full h-1 bg-[#e2e2e2]"></div>
                        <span>0</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex">
                            <MdStarRate />
                            <MdStarRate />
                            <MdStarRate />
                            <MdOutlineStarOutline />
                            <MdOutlineStarOutline />
                        </div>
                        <div className="w-[100px] rounded-full h-1 bg-[#e2e2e2]"></div>
                        <span>0</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex">
                            <MdStarRate />
                            <MdStarRate />
                            <MdOutlineStarOutline />
                            <MdOutlineStarOutline />
                            <MdOutlineStarOutline />
                        </div>
                        <div className="w-[100px] rounded-full h-1 bg-[#e2e2e2]"></div>
                        <span>0</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex">
                            <MdStarRate />
                            <MdOutlineStarOutline />
                            <MdOutlineStarOutline />
                            <MdOutlineStarOutline />
                            <MdOutlineStarOutline />
                        </div>
                        <div className="w-[100px] rounded-full h-1 bg-[#e2e2e2]"></div>
                        <span>0</span>
                    </div>
                </div>
                <div className="md:w-1/3 flex flex-col justify-center items-center">
                    <button className="px-10 py-3 border border-[#111] text-[#111] hover:text-white hover:bg-[#111] rounded-full text-[14px] font-medium">WRITE A REVIEW</button>
                </div>
            </div>
            <div className="flex items-center justify-between py-2">
                <div className="flex">
                    <MdStarRate />
                    <MdStarRate />
                    <MdStarRate />
                    <MdStarRate />
                    <MdStarRate />
                </div>
                <p className="text-[#555]">01/23/2024</p>
            </div>
            <div className="flex items-center justify-start pb-5">
                <img src="/user.png" className="w-16" />
                <p>d.d.</p>
            </div>
            <div>
                <h5 className="font-medium mb-3">Gorgeous and stylish.</h5>
                <p>I rarely leave reviews. So many of you do it so much better. But— this sweater right here is my favorite Umino item. My closet is almost exclusively Umino and Eileen but this sweater is so deliciously soft, warm, and the boxiness is perfect. Only thing I don’t like is that it sheds a little bit. Can’t be walking around like that at this adult age 😂 but I keep a roller in my desk.</p>
            </div>
        </TabsContent>
        <TabsContent value="shipping">
            <div className="flex flex-col gap-3 text-[#555]">
                <p>
                For all orders exceeding a value of 100USD shipping is offered for free.
                </p>
                <p>Returns will be accepted for up to 10 days of Customer’s receipt or tracking number on unworn items. You, as a Customer, are obliged to inform us via email before you return the item.</p>
                <p>Otherwise, standard shipping charges apply. Check out our delivery Terms & Conditions for more details.</p>
            </div>
        </TabsContent>
        <TabsContent value="return">
            <div className="flex flex-col gap-3 text-[#555]">
                <p>
                Returns will be accepted for up to 10 days of Customer’s receipt or tracking number on unworn items. You, as a Customer, are obliged to inform us via email before you return the item, only in the case of:
                </p>
                <p>– Received the wrong item.
                – Item arrived not as expected (ie. damaged packaging).
                – Item had defects.
                – Over delivery time.
                – The shipper does not allow the goods to be inspected before payment.</p>
                <p>The returned product(s) must be in the original packaging, safety wrapped, undamaged and unworn. This means that the item(s) must be safely packed in a carton box for protection during transport, possibly the same carton used to ship to you as a customer.</p>
            </div>
        </TabsContent>
        </Tabs>
    </section>
  )
}
