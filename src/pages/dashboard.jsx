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

export default function Dashboard({loadingLogo}){
  const [isOpen, setIsOpen] = useState(false);
  const [openEditShortcuts, setOpenEditShortcuts] = useState(false)

  return (
    <>
      <Button>Test</Button>
    </>
  )
}