import { navigation } from "../../data/mock/navigation";
import { secondaryNavigation } from "../../data/mock/secondaryNavigation";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function StaticSidebarDesktop() {
  return (
    <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex flex-col flex-grow bg-cyan-700 pt-5 pb-4 overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-4 ">
          <span className="text-white font-medium"> Let&apos;s Learn</span>
        </div>
        <nav
          className="mt-5 flex-1 flex flex-col divide-y divide-cyan-800 overflow-y-auto"
          aria-label="Sidebar"
        >
          <div className="px-2 space-y-1">
            {navigation.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-cyan-800 text-white"
                    : "text-cyan-100 hover:text-white hover:bg-cyan-600",
                  "group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                <item.icon
                  className="mr-4 flex-shrink-0 h-6 w-6 text-cyan-200"
                  aria-hidden="true"
                />
                {item.name}
              </a>
            ))}
          </div>
          <div className="mt-6 pt-6">
            <div className="px-2 space-y-1">
              {secondaryNavigation.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-cyan-100 hover:text-white hover:bg-cyan-600"
                >
                  <item.icon
                    className="mr-4 h-6 w-6 text-cyan-200"
                    aria-hidden="true"
                  />
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
