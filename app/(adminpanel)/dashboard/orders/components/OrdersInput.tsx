import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


export default function OrdersInput() {
  return (
    <section className="px-2 py-5 light dark:dark rounded-xl">
        <div className="mb-4 flex flex-col md:flex-row gap-3 justify-between">
        <Input type="text" placeholder="Search by Customer Name"  />
        <Select>
            <SelectTrigger >
                <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                <SelectItem value="Delivered">Delivered</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="Processing">Processing</SelectItem>
                <SelectItem value="Cancel">Cancel</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
        <Select>
            <SelectTrigger>
            <SelectValue placeholder="Order Limits" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                <SelectItem value="Last 5 days orders">Last 5 days orders</SelectItem>
                <SelectItem value="Last 7 days orders">Last  7 days orders</SelectItem>
                <SelectItem value="Last 15 days orders">Last 15 days orders</SelectItem>
                <SelectItem value="Last 30 days orders">Last 30 days orders</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
        </div>
        <div className="w-full flex flex-col gap-3 md:flex-row md:items-end">
            <div className="flex flex-col w-1/4">
            <label htmlFor="">Start Date</label>
            <input type="date" name="" id="" className="border rounded-lg py-[5px] shadow-sm light dark:dark dark:border-white w-full" />
            </div>  
            <div className="flex flex-col w-1/4">
            <label htmlFor="">Start Date</label>
            <input type="date" name="" id="" className="border rounded-lg py-[5px] shadow-sm light dark:dark" />
            </div> 
            <button className="w-1/4 py-[7px] green-light dark:green-dark rounded-lg">Filter</button>
            <button className="w-1/4 light-gray dark:gray rounded-lg py-[7px]">Reset</button>
        </div>
    </section>
  )
}
