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
import ImageCard from "../components/imagecard";
import VerticalLine from "../components/verticalLine"
import { Progress } from "radix-ui";

export default function Dashboard({loadingLogo}){
  const [isOpen, setIsOpen] = useState(false);
  const [openEditShortcuts, setOpenEditShortcuts] = useState(false)

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
      <div className="flex justify-between items-center">
        <h1 className="cal-sans main-heading">Welcome, Suttirak 🙏</h1>
        <Button variant='default'>Login as Admin</Button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mt-5">
        {dashboardInfo.map((info) => (
          <ImageCard title={info.title} background={info.background} icon={info.icon} description={info.description}/>
        ))}
      </div>

      <div className="flex items-center border border-[#E3E3E3] rounded-lg py-3 mt-5">
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
      </div>

      <div className="mt-9 flex justify-between items-start">
        <div>
          <h2 className="text-[#344054] subheading cal-sans">Site Setup</h2>
          <div className="flex gap-x-2 items-center">
            <p className="text-desc text-[#475467]">7 steps to go</p>
            <Progress value={20} />
          </div>
        </div>
        <Button variant='ghost'>View All (7)</Button>
      </div>
    </div>
  )
}