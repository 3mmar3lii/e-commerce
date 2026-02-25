"use client";
import { useState } from "react";
import {
  User,
  Settings,
  Package,
  Star,
  Heart,
  MapPin,
  CreditCard,
  LogOut,
  Camera,
  AlertTriangle,
} from "lucide-react";
import { useAuthStore } from "@/stores/useAuthUser";
import { StatusBadge } from "@/shared/StatusBadge";
import { GradientButton } from "@/shared/GradientButton";
import NavigationLink from "@/shared/NavigationLink";

const navItems = [
  { id: "profile", label: "Profile Settings", icon: Settings },
  { id: "orders", label: "My Orders", icon: Package },
  { id: "reviews", label: "My Reviews", icon: Star },
  { id: "wishlist", label: "Wishlist", icon: Heart },
  { id: "addresses", label: "Addresses", icon: MapPin },
  { id: "payment", label: "Payment Methods", icon: CreditCard },
];

export default function ProfilePage() {
  const user = {
    name: "ammar",
    email: "ammar@gmail.com",
    role: "admin",
    createdAt:`Date.now()`,
  };
  const { setUser } = useAuthStore();
  const [activeSection, setActiveSection] = useState("profile");
  const [name, setName] = useState(user?.name || "");
  const [email] = useState(user?.email || "");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showDeactivate, setShowDeactivate] = useState(false);



  if (!user) {
    //navigate("/login");
    return null;
  }

  return (
    <div className="min-h-screen bg-[#0A0A0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-[#F5F5F5] text-2xl mb-8 lg:hidden">My Account</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-72 shrink-0">
            <div className="bg-[#141416] border border-white/6 rounded-2xl p-5">
              {/* User info */}
              <div className="text-center mb-5 pb-5 border-b border-white/6">
                <div className="relative w-20 h-20 mx-auto mb-3">
                  <div className="w-20 h-20 rounded-full bg-linear-to-br from-[#7C3AED] to-[#06B6D4] flex items-center justify-center text-white text-2xl">
                    {user.name.charAt(0)}
                  </div>
                  <button className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-[#7C3AED] flex items-center justify-center text-white cursor-pointer">
                    <Camera size={12} strokeWidth={1.5} />
                  </button>
                </div>
                <p className="text-[#F5F5F5]">{user.name}</p>
                <p className="text-[#71717A] text-sm">{user.email}</p>
                <div className="mt-2">
                  <StatusBadge status={user.role} variant="role" />
                </div>
              </div>

              {/* Nav */}
              <div className="hidden lg:block space-y-1">
                {navItems.map((item) => (
                  <NavigationLink
                    key={item.id}
                    route="/orders"
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all cursor-pointer ${
                      activeSection === item.id
                        ? "bg-[#7C3AED]/10 text-[#A78BFA] border-l-2 border-[#7C3AED]"
                        : "text-[#A1A1AA] hover:text-[#F5F5F5] hover:bg-white/5"
                    }`}
                  >
                    <button
                      onClick={() => {
                        setActiveSection(item.id);
                      }}
                    >
                      <item.icon size={16} strokeWidth={1.5} />
                      {item.label}
                    </button>
                  </NavigationLink>
                ))}
                <NavigationLink
                  route="/login"
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-[#EF4444] hover:bg-[#EF4444]/10 transition-colors cursor-pointer mt-2"
                >
                  <button
                    onClick={() => {
                      setUser(null);
                    }}
                  >
                    <LogOut size={16} strokeWidth={1.5} />
                    Log Out
                  </button>
                </NavigationLink>
              </div>

              {/* Mobile nav */}
              <div className="lg:hidden flex gap-2 overflow-x-auto pb-2">
                {navItems.map((item) => (
                  <NavigationLink
                    key={item.id}
                    route="/orders"
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all cursor-pointer ${
                      activeSection === item.id
                        ? "bg-[#7C3AED]/10 text-[#A78BFA] border-l-2 border-[#7C3AED]"
                        : "text-[#A1A1AA] hover:text-[#F5F5F5] hover:bg-white/5"
                    }`}
                  >
                    <button
                      key={item.id}
                      onClick={() => {
                      setActiveSection(item.id);
                      }}
                      className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm whitespace-nowrap transition-all cursor-pointer ${
                        activeSection === item.id
                          ? "bg-[#7C3AED] text-white"
                          : "bg-[#1C1C1F] text-[#A1A1AA]"
                      }`}
                    >
                      <item.icon size={14} strokeWidth={1.5} />
                      {item.label}
                    </button>
                  </NavigationLink>
                ))}
              </div>
            </div>
          </aside>

          {/* Content */}
          <div className="flex-1 space-y-6">
            {activeSection === "profile" && (
              <>
                {/* Personal info */}
                <div className="bg-[#141416] border border-white/6 rounded-2xl p-6">
                  <h3 className="text-[#F5F5F5] text-lg mb-5">
                    Personal Information
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-[#A1A1AA] text-sm mb-1.5 block">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-[#1C1C1F] rounded-xl border border-white/6 text-[#F5F5F5] text-sm px-4 py-3 outline-none focus:border-[#7C3AED]/50 transition-colors"
                        maxLength={100}
                      />
                    </div>
                    <div>
                      <label className="text-[#A1A1AA] text-sm mb-1.5 block">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={email}
                        readOnly
                        className="w-full bg-[#1C1C1F] rounded-xl border border-white/6 text-[#71717A] text-sm px-4 py-3 outline-none cursor-not-allowed"
                      />
                    </div>
                    {/*<GradientButton onClick={() => setUser({ ...user, name })}>*/}
                    <GradientButton onClick={() => {}}>
                      Save Changes
                    </GradientButton>
                  </div>
                </div>

                {/* Security */}
                <div className="bg-[#141416] border border-white/6 rounded-2xl p-6">
                  <h3 className="text-[#F5F5F5] text-lg mb-5">Security</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-[#A1A1AA] text-sm mb-1.5 block">
                        Current Password
                      </label>
                      <input
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className="w-full bg-[#1C1C1F] rounded-xl border border-white/6 text-[#F5F5F5] text-sm px-4 py-3 outline-none focus:border-[#7C3AED]/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[#A1A1AA] text-sm mb-1.5 block">
                        New Password
                      </label>
                      <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Min. 8 characters"
                        className="w-full bg-[#1C1C1F] rounded-xl border border-white/6 text-[#F5F5F5] text-sm px-4 py-3 outline-none focus:border-[#7C3AED]/50 transition-colors placeholder:text-[#71717A]"
                        minLength={8}
                      />
                    </div>
                    <div>
                      <label className="text-[#A1A1AA] text-sm mb-1.5 block">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full bg-[#1C1C1F] rounded-xl border border-white/6 text-[#F5F5F5] text-sm px-4 py-3 outline-none focus:border-[#7C3AED]/50 transition-colors"
                      />
                    </div>
                    <GradientButton variant="outlined">
                      Update Password
                    </GradientButton>
                  </div>
                </div>

                {/* Account */}
                <div className="bg-[#141416] border border-white/6 rounded-2xl p-6">
                  <h3 className="text-[#F5F5F5] text-lg mb-5">Account</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                      <span className="text-[#A1A1AA] text-sm">
                        Account Active
                      </span>
                    </div>
                    <p className="text-[#71717A] text-sm">
                      Member since{" "}
                      {new Date(user.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <GradientButton
                      variant="danger"
                      onClick={() => setShowDeactivate(true)}
                    >
                      Deactivate Account
                    </GradientButton>
                  </div>
                </div>
              </>
            )}

            {activeSection !== "profile" && activeSection !== "orders" && (
              <div className="bg-[#141416] border border-white/6 rounded-2xl p-12 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#1C1C1F] flex items-center justify-center">
                  <User
                    size={28}
                    strokeWidth={1.5}
                    className="text-[#71717A]"
                  />
                </div>
                <h3 className="text-[#F5F5F5] text-lg mb-2">Coming Soon</h3>
                <p className="text-[#71717A] text-sm">
                  This section is under development.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Deactivate Modal */}
      {showDeactivate && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#141416] border border-white/6 rounded-2xl w-full max-w-md p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#EF4444]/15 flex items-center justify-center">
                <AlertTriangle size={20} className="text-[#EF4444]" />
              </div>
              <h3 className="text-[#F5F5F5] text-lg">Deactivate Account?</h3>
            </div>
            <p className="text-[#A1A1AA] text-sm mb-6">
              This action will deactivate your account. You will lose access to
              your orders, reviews, and saved items. This cannot be undone.
            </p>
            <div className="flex gap-3">
              <GradientButton
                variant="ghost"
                onClick={() => setShowDeactivate(false)}
                className="flex-1"
              >
                Keep Account
              </GradientButton>
              <GradientButton
                variant="danger"
                onClick={() => setShowDeactivate(false)}
                className="flex-1"
              >
                Deactivate
              </GradientButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
