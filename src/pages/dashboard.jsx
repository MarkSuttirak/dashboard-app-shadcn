import React, { useState, useEffect, Fragment } from "react";
import { Bars3Icon } from '@heroicons/react/20/solid'
import { Cog6ToothIcon, CreditCardIcon, LinkIcon, ListBulletIcon, PencilIcon, PlusIcon, ShoppingBagIcon, ShoppingCartIcon, TagIcon, TicketIcon, UserPlusIcon, WalletIcon, ArrowLeftOnRectangleIcon, BellIcon } from '@heroicons/react/24/outline'
import startWorking from "../img/start-working.png";
import appsMarketplace from "../img/apps-marketplace.png";
import watchTutorials from "../img/watch-tutorials.png";
import wrapper from "../img/wrapper.svg";
import pfyne from "../img/pfyne.svg";
import person1 from "../img/person1.svg";
import person2 from "../img/person2.svg";
import thrBookFrame from "../img/theBookFrame.svg";
import keyLock from "../img/key-lock.svg";
import finlabLogo from "../img/finlab-logo.svg";
import UOBLogo from "../img/uob.svg";
import google from "../img/google.svg";
import tiktok from "../img/tiktok.svg";
import freeTrial from "../img/free-trial.png";
import freeTrialLogo from "../img/free-trial-logo.png";
import line from "../img/line.svg";
import meta from "../img/meta.svg";
import workSpaceLogo from "../img/workspace-logo.png";
import upgradeicon from "../img/upgrade-icon.png";
import amazon from "../img/amazon.svg";
import startWorkingSvg from "../img/startWorkingSvg.svg";
import appStoreSvg from "../img/appStoreSvg.svg";
import tutorialsSvg from "../img/tutorialsSvg.svg";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import ImageCard from "../components/imagecard";
import VerticalLine from "../components/verticalLine"
import Progress from "../components/progress";
import ProgressInfo from "../components/progressInfo";

export default function Dashboard({loadingLogo}){
  const [isOpen, setIsOpen] = useState(false);
  const [openEditShortcuts, setOpenEditShortcuts] = useState(false)

  const shortcuts = [
    {
      title: 'Point of Sale',
      icon: <WalletIcon width='20' strokeWidth='2' />,
      added: true
    },
    {
      title: 'Products',
      icon: <TagIcon width='20' strokeWidth='2' />,
      added: true
    },
    {
      title: 'Orders',
      icon: <ShoppingCartIcon width='20' strokeWidth='2' />,
      added: true
    },
    {
      title: 'Coupons',
      icon: <TicketIcon width='20' strokeWidth='2' />,
      added: true
    },
    {
      title: 'Forms',
      icon: <ListBulletIcon width='20' strokeWidth='2' />,
      added: true
    },
    {
      title: 'Payments',
      icon: <CreditCardIcon width='20' strokeWidth='2' />,
      added: false
    },
    {
      title: 'Pay Links',
      icon: <LinkIcon width='20' strokeWidth='2' />,
      added: false
    },
  ]

  const dashboardInfo = [
    {
      title: 'Start Working',
      icon: startWorkingSvg,
      description: 'Go to your business app',
      background: startWorking,
    },
    {
      title: 'Apps Marketplace',
      icon: appStoreSvg,
      description: 'See more at AppStore',
      background: appsMarketplace,
    },
    {
      title: 'Watch Tutorials',
      icon: tutorialsSvg,
      description: 'Learn Zaviago/OS',
      background: watchTutorials,
    },
  ];

  return (
    <div className="page-section dashboard-container">
      <section className="flex justify-between items-center">
        <h1 className="cal-sans main-heading">Welcome, Suttirak 🙏</h1>
        <Button variant='default'>Login as Admin</Button>
      </section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-3 mt-5">
        {dashboardInfo.map((info) => (
          <ImageCard title={info.title} background={info.background} icon={info.icon} description={info.description}/>
        ))}
      </section>

      <section className="flex items-center border border-[#E3E3E3] rounded-lg py-3 mt-5">
        <div className="flex px-5 gap-x-1">
          <p className="text-xs text-[#475467]">Free plan</p>
          <a href="#" className="text-xs text-[#0788F5] font-bold">Compare Plans</a>
        </div>
        <VerticalLine color='#E3E3E3' size={1} height={20}/>
        <div className="flex px-5 gap-x-1">
          <p className="text-xs text-[#475467]">No domain</p>
          <a href="#" className="text-xs text-[#0788F5] font-bold">Connect</a>
        </div>
        <VerticalLine color='#E3E3E3' size={1} height={20}/>
        <div className="flex px-5 gap-x-1">
          <p className="text-xs text-[#475467]">No business email</p>
          <a href="#" className="text-xs text-[#0788F5] font-bold">Connect</a>
        </div>
        <VerticalLine color='#E3E3E3' size={1} height={20}/>
        <a href="#" className="flex px-5 gap-x-1 items-center">
          <Cog6ToothIcon width='20' />
          <p className="text-xs text-[#475467]">Business Info</p>
        </a>
      </section>

      <section className="mt-9 flex justify-between items-start">
        <div>
          <h2 className="text-[#344054] subheading cal-sans">Site Setup</h2>
          <div className="flex gap-x-2 items-center">
            <p className="text-desc text-[#475467]">7 steps to go</p>
            <Progress value={30} width={100}/>
          </div>
        </div>
        <Button variant='ghost' className='p-0'>View All (7)</Button>
      </section>

      <section className="bg-[#0788F5] text-white p-5 rounded-lg mt-4">
        <h2 className="text-white cal-sans">Connect a custom domain</h2>
        <p className="text-white text-xs">Get a unique address for your site</p>

        <div className="flex justify-end">
          <Button variant='white'>Connect domain</Button>
        </div>
      </section>

      <section className="mt-[50px]">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={workSpaceLogo} className="h-[22px] w-[22px]" alt={workSpaceLogo} />
            <p className="font-calSans text-[15px] font-semibold ml-2">Your Workspace</p>
            <div className="ml-4 flex-shrink-0">
              <span className={`bg-emerald-50 online inline-flex items-center rounded-full px-3 py-0.5`}> {/* ${sites?.site_list[0].status === "Active" ? "bg-emerald-50 online" : "bg-red-50"} */}
                <svg className="-ml-1 mr-1.5 h-2 w-2" fill="#52C41A" viewBox="0 0 8 8"> {/* {sites?.site_list[0].status === "Active" ? "#52C41A" : "#F5222D"} */}
                  <circle cx={4} cy={4} r={3} />
                </svg>
                Active
                {/* {sites?.site_list[0].status} */}
              </span>
            </div>
          </div>
          <p className="cal-sans font-semibold text-xs">Powered by</p>
        </div>
      </section>

      <section className="mt-5 flex flex-wrap items-center justify-between">
        <div>
          <div className="flex gap-x-2 text-2xl">
            <h1 className="cal-sans font-semibold text-[22px] text-[#333333]">example.aca.fc.zaviago.com</h1> {/* {sites?.site_list[0].name} */}
          </div>
          <Link to="/change-domain" className="link-anchor inline-block mt-2 text-xs">
            Change Domain
          </Link>
        </div>
        <div className="flex">
          <img src={finlabLogo} alt={finlabLogo} />
          <img src={UOBLogo} className="ml-4" alt={UOBLogo} />
        </div>
      </section>

      <section className="mt-10 flex items-center justify-between">
        <Button className='text-xs'>View Website</Button>
        <div className="isolate flex -space-x-1 overflow-hidden">
          <Avatar className='relative z-30 inline-block h-5 w-5 rounded-md ring-2 ring-white'>
            <AvatarImage src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className='relative z-30 inline-block h-5 w-5 rounded-md ring-2 ring-white'>
            <AvatarImage src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className='relative z-30 inline-block h-5 w-5 rounded-md ring-2 ring-white'>
            <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className='relative z-30 inline-block h-5 w-5 rounded-md ring-2 ring-white'>
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </section>

      <section className="flex flex-col gap-y-4 mt-10">
        <ProgressInfo title='Customer' value={2.1} desc='50 / 100 Customer'/>
        <ProgressInfo title='Database' value={10.2} desc='51 MB / 500 MB'/>
        <ProgressInfo title='Storage' value={0.2} desc='2 MB / 1 GB'/>
        <ProgressInfo title='Orders' value={90.1} desc='30 / 100 Orders'/>

        <Link to="/change-domain" className="link-anchor inline-block mt-2 text-xs text-right">
          View More
        </Link>
      </section>
    </div>
  )
}