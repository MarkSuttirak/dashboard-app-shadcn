import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import { Link, useParams } from "react-router-dom"
import { Separator } from "../../components/ui/separator";
import AccountForm from "./accountForm";
import { useState } from "react";

export default function Settings(){
  const [settingsPage, setSettingsPage] = useState('account')
  const menuStyle = "group flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
  const { id } = useParams(settingsPage)
  return (
    <div className="dashboard-container page-section">
      <h1 className="main-heading">Settings</h1>

      <main className="flex gap-x-10 mt-8">
        <section>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <button onClick={() => setSettingsPage('account')}>
                  <NavigationMenuLink className={menuStyle}>
                    Account
                  </NavigationMenuLink>
                </button>
                <button onClick={() => setSettingsPage('appearance')}>
                  <NavigationMenuLink className={menuStyle}>
                    Appearance
                  </NavigationMenuLink>
                </button>
                <button onClick={() => setSettingsPage('notifications')}>
                  <NavigationMenuLink className={menuStyle}>
                    Notifications
                  </NavigationMenuLink>
                </button>
                <button onClick={() => setSettingsPage('display')}>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Display
                  </NavigationMenuLink>
                </button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </section>

        <section>
          <h2 className="secondary-heading">Account</h2>
          <p className="secondary-desc">Update your account settings. Set your preferred language and timezone.</p>

          <Separator className='my-6'/>

          {id === 'account' && (
            <AccountForm />
          )}
        </section>
      </main>
    </div>
  )
}